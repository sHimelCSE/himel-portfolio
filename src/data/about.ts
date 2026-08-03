export const professionalSummary = `Full Stack Shopify Developer with 1+ years of experience in developing, customizing, and optimizing Shopify eCommerce stores. Skilled in Shopify Liquid, HTML, CSS, JavaScript, PHP, Laravel, AJAX, MySQL, and React with expertise in theme customization, custom section development, app integration, and performance optimization.

Experienced in converting Figma designs into responsive, user-friendly, and conversion-focused Shopify stores using CSS3. Strong problem-solving abilities with hands-on experience in bug fixing, troubleshooting, and delivering scalable eCommerce solutions tailored to business requirements.`;

export interface TimelineItem {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities?: string[];
}

export const careerHistory: TimelineItem[] = [
  {
    title: "Web Developer",
    company: "FB International BD",
    period: "Apr 2025 – Present",
    location: "Banasree, Dhaka",
    responsibilities: [
      "Developing and managing WordPress websites.",
      "Building Shopify-based e-commerce sites.",
      "Handling client communications and support via messages.",
    ],
  },
  {
    title: "Web Developer",
    company: "Softech (BMC Group)",
    period: "Aug 2023 – Mar 2025",
    location: "Vatara, Dhaka",
  },
  {
    title: "Sub-Editor",
    company: "Daily Ajkaler Khobor",
    period: "June 2021 – July 2023",
    location: "Banani, Dhaka",
  },
];

export interface EducationItem {
  degree: string;
  year: string;
  institution: string;
  location: string;
  gpa: string;
}

export const education: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    year: "2020",
    institution: "Daffodil International University",
    location: "Dhaka",
    gpa: "CGPA: 2.92 / 4.00",
  },
  {
    degree: "H.S.C in Science",
    year: "2014",
    institution: "Rajshahi Model School and College",
    location: "Rajshahi",
    gpa: "GPA: 4.10 / 5.00",
  },
  {
    degree: "S.S.C in Science",
    year: "2012",
    institution: "Arani Monomohini High School",
    location: "Rajshahi",
    gpa: "GPA: 4.88 / 5.00",
  },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend & CMS",
    skills: [
      "Shopify Liquid",
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "React",
      "WordPress Development",
    ],
  },
  {
    category: "Backend & DB",
    skills: ["PHP", "Laravel", "OOP", "AJAX", "MySQL"],
  },
  {
    category: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Photoshop",
      "Illustrator",
      "Basic UX/UI",
      "MS Office",
    ],
  },
  {
    category: "Other",
    skills: [
      "SEO",
      "Website Maintenance",
      "Content Upload",
      "Client Communication & IT Support",
    ],
  },
  {
    category: "Languages",
    skills: [
      "Bangla (Native)",
      "English (Good command in writing and speaking)",
    ],
  },
];
