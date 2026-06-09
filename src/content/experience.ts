import type { LocalizedText } from "./profile";

export type Experience = {
  company: LocalizedText;
  role: LocalizedText;
  period: string;
  highlights: LocalizedText[];
};

export const experiences: Experience[] = [
  {
    company: {
      zh: "紅鬍子數位有限公司",
      en: "Red Soldier Limited",
    },
    role: {
      zh: "前端工程師",
      en: "Front-End Developer",
    },
    period: "2019.09 – Present",
    highlights: [
      {
        zh: "為多元客戶與內部專案撰寫現代、高效能、可維護的程式碼。",
        en: "Write modern, performant, maintainable code for a diverse array of client and internal projects.",
      },
      {
        zh: "運用多種平台與框架建置網站與後台管理系統。",
        en: "Build websites and content management systems across a variety of platforms and frameworks.",
      },
    ],
  },
];
