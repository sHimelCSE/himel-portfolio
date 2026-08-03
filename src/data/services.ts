export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}

export const services: Service[] = [
  {
    id: "shopify-theme",
    icon: "🛒",
    title: "Custom Shopify Theme Development & Customization",
    description:
      "Tailored Shopify stores built on modern 2.0 themes with custom Liquid sections.",
    bullets: [
      "Custom section & block creation using Shopify Liquid.",
      "Tailored store setups on Dawn and modern 2.0 themes.",
      "Variant option customization and product page enhancements.",
    ],
  },
  {
    id: "figma-conversion",
    icon: "🎨",
    title: "Figma to Shopify / WordPress Conversion",
    description:
      "Pixel-perfect design implementation from Figma or Adobe XD to live stores.",
    bullets: [
      "Pixel-perfect conversion of Figma/Adobe XD designs into fully responsive Shopify or WordPress sites.",
      "Mobile-first responsive optimization using CSS3 and JS.",
    ],
  },
  {
    id: "performance",
    icon: "⚡",
    title: "Store Speed & Performance Optimization",
    description:
      "Faster stores that convert better with optimized Liquid and assets.",
    bullets: [
      "Theme liquid code cleanup and asset optimization.",
      "Improving core web vitals and mobile conversion rates.",
    ],
  },
  {
    id: "wordpress",
    icon: "🌐",
    title: "WordPress & Web Development",
    description:
      "Full-stack web development with WordPress, PHP, Laravel, and MySQL.",
    bullets: [
      "Full website creation, plugin setup, maintenance, and bug fixing.",
      "Custom PHP, Laravel, and MySQL database integration.",
    ],
  },
  {
    id: "maintenance",
    icon: "🔧",
    title: "Website Maintenance, SEO & Support",
    description:
      "Ongoing support, content updates, and SEO optimization for your store.",
    bullets: [
      "Regular content updates, product uploads, bug troubleshooting, and SEO meta setups.",
      "Ongoing client support and communication.",
    ],
  },
];
