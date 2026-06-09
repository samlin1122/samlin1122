export type Locale = "zh" | "en";
export type LocalizedText = Record<Locale, string>;

// 開發生涯起始年份，年資由此動態計算，無需每年手動維護
const CAREER_START_YEAR = 2019;
export const yearsOfExperience: number =
  new Date().getFullYear() - CAREER_START_YEAR;

export const profile = {
  name: "Sam Lin",
  tagline: {
    zh: `資深前端工程師 · 全端與 AI 實作 · ${yearsOfExperience}+ 年經驗`,
    en: `Senior Frontend Developer · full-stack & AI · ${yearsOfExperience}+ years`,
  } satisfies LocalizedText,
  intro: {
    zh: `我打造正式上線的網頁產品已超過 ${yearsOfExperience} 年，熟悉跨全端開發，並對新技術抱持好奇，近年實際投入 AI 相關功能與整合。`,
    en: `I've shipped production web apps for ${yearsOfExperience}+ years — comfortable across the full stack, driven by curiosity for new tech, and hands-on with AI-powered features and integrations.`,
  } satisfies LocalizedText,
  email: "zhlin1122@gmail.com",
  resumeUrl: "https://docs.google.com/document/d/1TXq6JqcOfig6stJ06x5agzAwsPENW9Nqhw7YPgm0ZDA/edit?tab=t.0",
  socials: {
    github: "https://github.com/samlin1122",
    linkedin: "https://www.linkedin.com/in/zhlin1122/",
  },
} as const;
