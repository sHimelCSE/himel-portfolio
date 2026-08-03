import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getContent } from "@/lib/content-store";

export async function GET() {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ authenticated: false });
  }

  const content = await getContent();
  return NextResponse.json({
    authenticated: true,
    stats: {
      services: content.services.length,
      projects: content.projects.length,
      blogPosts: content.blogPosts.length,
      unreadMessages: content.messages.filter((m) => !m.read).length,
    },
  });
}
