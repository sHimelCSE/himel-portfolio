import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import CTABanner from "@/components/CTABanner";
import { getContent } from "@/lib/content-store";

export default async function HomePage() {
  const { services, projects, site } = await getContent();
  const featuredServices = services.slice(0, 3);
  const featuredProjects = projects.filter((p) => p.category === "advanced").slice(0, 4);

  return (
    <>
      <Hero site={site} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2
              className="text-3xl font-bold text-slate-900 dark:text-white"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Featured Services
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Top solutions I offer to grow your e-commerce business.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 sm:inline-flex"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} featured />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2
                className="text-3xl font-bold text-slate-900 dark:text-white"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Featured Projects
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                A selection of Shopify stores I&apos;ve built and customized.
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 sm:inline-flex"
            >
              View All
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <CTABanner />
      </section>
    </>
  );
}
