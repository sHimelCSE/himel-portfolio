import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MD. SHAHIDUZZAMAN for Shopify development, theme customization, and web projects.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: siteConfig.address,
  },
  {
    icon: Clock,
    label: "Availability",
    value: siteConfig.availability,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="text-4xl font-bold text-slate-900 dark:text-white"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Get In Touch
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Have a project in mind? I&apos;d love to hear about it.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Direct Contact
          </h2>
          <div className="mt-6 space-y-5">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-emerald-500/50 dark:border-slate-800 dark:bg-slate-900/50">
                  <div className="rounded-lg bg-emerald-50 p-2.5 dark:bg-emerald-950/50">
                    <Icon
                      size={20}
                      className="text-emerald-600 dark:text-emerald-400"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-slate-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Send a Message
          </h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
