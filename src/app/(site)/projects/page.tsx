import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio of 50+ Shopify stores including G-Force Grip, ONEEHIDE, Rima Atalier, Tennis Cube, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="text-4xl font-bold text-slate-900 dark:text-white"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Projects & Portfolio
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Explore my collection of Shopify stores built for clients worldwide.
        </p>
      </div>

      <div className="mt-12">
        <ProjectGallery />
      </div>

      <div className="mt-16">
        <CTABanner />
      </div>
    </div>
  );
}
