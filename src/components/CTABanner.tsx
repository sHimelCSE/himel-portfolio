import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title?: string;
  href?: string;
  buttonText?: string;
}

export default function CTABanner({
  title = "Need a custom Shopify theme or bug fixes? Let's talk about your project.",
  href = "/contact",
  buttonText = "Get a Quote",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 px-6 py-12 text-center sm:px-12 sm:py-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold text-white sm:text-3xl">
          {title}
        </h2>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition-all hover:bg-emerald-50 hover:shadow-xl"
        >
          {buttonText}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
