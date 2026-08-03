export type ProjectCategory = "advanced" | "other";

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  category: ProjectCategory;
  imageUrl?: string;
  password?: string;
  passwordNote?: string;
}

export const projects: Project[] = [
  {
    id: "gforce",
    name: "G-Force Grip Technology",
    description: "11-page custom design based on reference.",
    url: "https://gforcegrips.com/",
    category: "advanced",
  },
  {
    id: "oneehide",
    name: "ONEEHIDE",
    description: "Custom design & functional implementation.",
    url: "https://oneehide.com/",
    category: "advanced",
  },
  {
    id: "rima",
    name: "Rima Atalier",
    description: "Designed on DAWN theme.",
    url: "https://rimaatalier.com/",
    category: "advanced",
    password: "admin",
  },
  {
    id: "tennis",
    name: "Tennis Cube",
    description: "Custom design & implementation.",
    url: "https://tenniscube.shop/",
    category: "advanced",
    password: "ilovetennis",
  },
  {
    id: "tunz",
    name: "Tunz: Travel eSIM",
    description: "Figma to Shopify design.",
    url: "https://shop.tunz.io/",
    category: "advanced",
  },
  {
    id: "goodfriends",
    name: "Good Friends",
    description: "Printify print-on-demand store.",
    url: "https://everybodyneedsgoodfriends.com/",
    category: "advanced",
  },
  {
    id: "roohoo",
    name: "Roohoo Nutrition",
    description: "Custom design & functionality.",
    url: "https://www.roohoonutrition.co.uk/",
    category: "advanced",
  },
  {
    id: "cyodor",
    name: "Cyodor",
    description: "Built from Figma design.",
    url: "https://cyodor.com/",
    category: "advanced",
  },
  {
    id: "prest",
    name: "Prest",
    description: "Built from Figma design.",
    url: "https://mcubb0-j1.myshopify.com/",
    category: "advanced",
  },
  {
    id: "counting",
    name: "Counting Macros",
    description: "Custom setup.",
    url: "https://counting-macros.myshopify.com/",
    category: "advanced",
    password: "admin",
    passwordNote: "Area code: 10001",
  },
  {
    id: "newhomes",
    name: "New Homes Flooring",
    description: "E-commerce store build.",
    url: "https://newhomesflooring.co.uk/",
    category: "advanced",
  },
  {
    id: "paradise",
    name: "Paradise Gold",
    description: "E-commerce store build.",
    url: "https://paradisegold.com/",
    category: "advanced",
  },
  {
    id: "santa",
    name: "Santa Maura Spice",
    description: "Full store design, product uploads & page maintenance.",
    url: "https://www.santamauraspice.com/",
    category: "advanced",
  },
  {
    id: "abaya",
    name: "Abaya.Birdy",
    description: "Custom product variant options & design.",
    url: "https://abaya-birdy.myshopify.com/",
    category: "advanced",
    password: "admin",
  },
  {
    id: "meterra",
    name: "Meterra Atelier",
    description: "Shopify e-commerce store.",
    url: "https://u-create.shop/",
    category: "other",
  },
  {
    id: "offscreen",
    name: "Off The Screens",
    description: "Shopify e-commerce store.",
    url: "https://offthescreens.ca/",
    category: "other",
  },
  {
    id: "ladorez",
    name: "L'adorez",
    description: "Shopify e-commerce store.",
    url: "https://ladorez.com/",
    category: "other",
  },
  {
    id: "solution",
    name: "The Solution",
    description: "Shopify e-commerce store.",
    url: "https://thesolutionsupplements.com/",
    category: "other",
  },
  {
    id: "purerest",
    name: "Purerest Organic",
    description: "Shopify e-commerce store.",
    url: "https://jfqyye-se.myshopify.com/",
    category: "other",
  },
  {
    id: "glowth",
    name: "GLOWTH",
    description: "Shopify wellness store.",
    url: "https://www.glowthwellness.com",
    category: "other",
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "advanced", label: "Advanced Shopify Stores" },
  { id: "other", label: "Other Shopify Stores" },
] as const;

export type FilterId = (typeof projectFilters)[number]["id"];
