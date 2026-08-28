import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/content-store";

export const dynamic = "force-dynamic";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = await getContent();

  return (
    <div className="flex min-h-full flex-col">
      <Header site={content.site} navLinks={content.navLinks} />
      <main className="flex-1">{children}</main>
      <Footer site={content.site} navLinks={content.navLinks} />
    </div>
  );
}
