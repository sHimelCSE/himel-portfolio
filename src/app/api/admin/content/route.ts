import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getContent, updateContentSection } from "@/lib/content-store";
import type { ContentSection } from "@/lib/types";

const REVALIDATE_MAP: Partial<Record<ContentSection, string[]>> = {
  site: ["/", "/contact"],
  services: ["/", "/services"],
  projects: ["/", "/projects"],
  blogPosts: ["/blog"],
  blogCategories: ["/blog"],
  about: ["/about"],
  navLinks: ["/"],
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const section = searchParams.get("section") as ContentSection | null;

  const content = await getContent();

  if (section) {
    const allowedSections: ContentSection[] = [
      "site",
      "navLinks",
      "services",
      "projects",
      "blogPosts",
      "blogCategories",
      "about",
    ];

    if (!allowedSections.includes(section as ContentSection)) {
      return NextResponse.json({ error: "Invalid section" }, { status: 400 });
    }

    return NextResponse.json({ data: content[section] });
  }

  return NextResponse.json({ data: content });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { section, data } = body as { section: ContentSection; data: unknown };

  if (!section || data === undefined) {
    return NextResponse.json(
      { error: "section and data are required" },
      { status: 400 }
    );
  }

  try {
    await updateContentSection(section, data as never);
    const paths = REVALIDATE_MAP[section] ?? [];
    paths.forEach((p) => revalidatePath(p));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
