import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { getContent } from "@/lib/content-store";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Shopify theme development, Figma to Shopify conversion, performance optimization, WordPress development, and ongoing maintenance services.",
};

export default async function ServicesPage() {
  const { services } = await getContent();
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="text-4xl font-bold text-slate-900 dark:text-white"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Services I Offer
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Comprehensive Shopify and web development solutions tailored to your
          business needs.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-16">
        <CTABanner
          title="Ready to start your next project? Let's discuss your requirements."
          buttonText="Get a Quote"
        />
      </div>
    </div>
  );
}
