export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "liquid-sections",
    title: "How to Customize Shopify Liquid Sections for Higher Conversions",
    excerpt:
      "Learn how to build flexible, conversion-focused Liquid sections that drive sales and improve user experience.",
    category: "Shopify Dev",
    readTime: "5 min",
    date: "Jan 15, 2026",
  },
  {
    id: "figma-shopify",
    title: "Step-by-Step Guide: Converting Figma Designs into Responsive Shopify Themes",
    excerpt:
      "A practical workflow for translating Figma designs into pixel-perfect, mobile-first Shopify themes.",
    category: "Frontend",
    readTime: "7 min",
    date: "Jan 8, 2026",
  },
  {
    id: "speed-optimization",
    title: "Essential Shopify Speed Optimization Techniques for 2026",
    excerpt:
      "Boost your store's performance with proven Liquid cleanup, asset optimization, and Core Web Vitals strategies.",
    category: "E-Commerce",
    readTime: "4 min",
    date: "Dec 28, 2025",
  },
  {
    id: "theme-2-0",
    title: "Why Shopify Liquid Theme 2.0 is a Game Changer for Online Stores",
    excerpt:
      "Discover how Theme 2.0 sections, blocks, and app blocks revolutionize store customization and merchant flexibility.",
    category: "Tutorials",
    readTime: "6 min",
    date: "Dec 12, 2025",
  },
];

export const blogCategories = [
  "All",
  "Shopify Dev",
  "Frontend",
  "E-Commerce",
  "Tutorials",
];
