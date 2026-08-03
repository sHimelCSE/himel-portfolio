import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { resetContent } from "@/lib/content-store";

export async function POST() {
  const content = await resetContent();
  ["/", "/about", "/services", "/projects", "/blog", "/contact"].forEach(
    (p) => revalidatePath(p)
  );
  return NextResponse.json({ success: true, data: content });
}
