import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { addMessage } from "@/lib/content-store";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, subject, budget, message } = body;

    if (!name || !email || !service || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await addMessage({ name, email, service, subject, budget, message });
    revalidatePath("/admin/messages");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
