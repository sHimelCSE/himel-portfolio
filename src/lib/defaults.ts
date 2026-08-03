import { siteConfig, navLinks } from "@/data/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { blogPosts, blogCategories } from "@/data/blog";
import {
  professionalSummary,
  careerHistory,
  education,
  skillGroups,
} from "@/data/about";
import type { ContentStore } from "./types";

export function getDefaultContent(): ContentStore {
  return {
    site: { ...siteConfig },
    navLinks: [...navLinks],
    services: JSON.parse(JSON.stringify(services)),
    projects: JSON.parse(JSON.stringify(projects)),
    blogPosts: JSON.parse(JSON.stringify(blogPosts)),
    blogCategories: [...blogCategories],
    about: {
      professionalSummary,
      careerHistory: JSON.parse(JSON.stringify(careerHistory)),
      education: JSON.parse(JSON.stringify(education)),
      skillGroups: JSON.parse(JSON.stringify(skillGroups)),
    },
    messages: [],
  };
}
