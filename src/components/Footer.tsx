"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { navLinks as defaultNavLinks, siteConfig as defaultSiteConfig } from "@/data/site";
import type { NavLink, SiteConfig } from "@/lib/types";

export default function Footer() {
  const [site, setSite] = useState<SiteConfig>(defaultSiteConfig);
  const [navLinks, setNavLinks] = useState<NavLink[]>(defaultNavLinks);

  useEffect(() => {
    async function loadContent() {
      try {
        const res = await fetch("/api/admin/content");
        const data = await res.json();
        if (data?.data) {
          setSite(data.data.site ?? defaultSiteConfig);
          setNavLinks(
            Array.isArray(data.data.navLinks) && data.data.navLinks.length > 0
              ? data.data.navLinks
              : defaultNavLinks
          );
        }
      } catch {
        // fall back to defaults
      }
    }

    void loadContent();
  }, []);

  const siteName = site.name || "MD. SHAHIDUZZAMAN";
  const siteTitle = site.title || "Full Stack Shopify Developer";
  const contactEmail = site.email || "shahiduzzaman.mail@gmail.com";
  const contactPhone = site.phone || "+880 1767-097447";
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {siteName}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {siteTitle}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                <Mail size={16} />
                {contactEmail}
              </a>
              <a
                href={`tel:${contactPhone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                <Phone size={16} />
                {contactPhone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-8 text-center dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2026 {siteName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
