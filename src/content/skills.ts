import type { LocalizedText } from "./profile";

export type SkillGroup = {
  label: LocalizedText;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: { zh: "語言", en: "Languages" },
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    label: { zh: "前端", en: "Frontend" },
    items: ["React", "Next.js", "Vue.js", "Nuxt", "Vite"],
  },
  {
    label: { zh: "樣式", en: "Styling" },
    items: ["Tailwind", "MUI", "Sass"],
  },
  {
    label: { zh: "狀態與資料", en: "State & Data" },
    items: ["Redux", "Zustand", "TanStack Query", "Storybook"],
  },
  {
    label: { zh: "後端", en: "Backend" },
    items: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    label: { zh: "AI / LLM", en: "AI / LLM" },
    items: ["OpenAI", "Claude", "LangChain", "RAG", "Embeddings"],
  },
  {
    label: { zh: "DevOps", en: "DevOps" },
    items: ["Docker", "AWS", "GCP", "Vercel", "GitHub Actions"],
  },
  {
    label: { zh: "協作", en: "Collaboration" },
    items: ["Git", "GitHub", "Bitbucket", "Jira", "Trello"],
  },
];
