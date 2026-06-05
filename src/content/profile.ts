export type Locale = "zh" | "en";
export type LocalizedText = Record<Locale, string>;

export const profile = {
  name: "Sam Lin",
  tagline: {
    zh: "資深前端工程師 · 全端與 AI 實作 · 7+ 年經驗",
    en: "Senior Frontend Developer · full-stack & AI · 7+ years",
  } satisfies LocalizedText,
  intro: {
    zh: "我打造正式上線的網頁產品已超過 7 年，熟悉跨全端開發，並對新技術抱持好奇，近年實際投入 AI 相關功能與整合。",
    en: "I've shipped production web apps for 7+ years — comfortable across the full stack, driven by curiosity for new tech, and hands-on with AI-powered features and integrations.",
  } satisfies LocalizedText,
  email: "samlin1122@gmail.com",
  resumeUrl: "/resume/sam-lin-cv.pdf",
  socials: {
    github: "https://github.com/samlin1122",
    linkedin: "https://www.linkedin.com/in/zhlin1122/",
  },
} as const;
