import type { Metadata } from "next";
import BlogGrid from "@/components/BlogGrid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on Shopify Liquid development, Figma to Shopify conversion, speed optimization, and Theme 2.0.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="text-4xl font-bold text-slate-900 dark:text-white"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Blog & Insights
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Tips, tutorials, and insights on Shopify development and e-commerce.
        </p>
      </div>

      <div className="mt-12">
        <BlogGrid />
      </div>
    </div>
  );
}
