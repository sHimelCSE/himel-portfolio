import { NextResponse } from "next/server";
import {
  deleteMessage,
  markMessageRead,
  getContent,
} from "@/lib/content-store";

export async function GET() {
  const content = await getContent();
  return NextResponse.json({ data: content.messages });
}

export async function PATCH(request: Request) {
  const { id, action } = await request.json();

  if (action === "read") {
    const ok = await markMessageRead(id);
    return ok
      ? NextResponse.json({ success: true })
      : NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "id required" }, { status: 400 });
  }

  const ok = await deleteMessage(id);
  return ok
    ? NextResponse.json({ success: true })
    : NextResponse.json({ error: "Not found" }, { status: 404 });
}
