import type { LocalizedText } from "./profile";

export type ProjectCategory = "web" | "cms" | "spa" | "product";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: LocalizedText;
  highlights: LocalizedText[];
  techs: string[];
  href?: string;
  repo?: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "point-pro",
    title: "point-pro",
    category: "product",
    description: {
      zh: "餐廳 POS 系統，含點餐管理與數據分析。",
      en: "Restaurant POS system with order management and analytics.",
    },
    highlights: [
      { zh: "擔任前端主導，整合點餐流程與後台分析。", en: "Frontend lead — built the ordering flow and analytics dashboard." },
    ],
    techs: ["React", "TypeScript", "Express", "MySQL"],
    repo: "https://github.com/samlin1122/point-pro",
    image: "/images/work/point-pro.png",
  },
  {
    slug: "clubsim",
    title: "ClubSim",
    category: "web",
    description: {
      zh: "電信會員官網，重視 SEO 與效能。",
      en: "Telecom membership site with a focus on SEO and performance.",
    },
    highlights: [
      { zh: "以 Vue-CLI 從零開發，加入 SSR 提升 SEO。", en: "Built from scratch with Vue-CLI; added SSR to improve SEO." },
      { zh: "導入 Google Analytics 分析使用者數據。", en: "Integrated Google Analytics for user insights." },
    ],
    techs: ["Vue-CLI", "SSR", "GA", "SEO", "Axios"],
    href: "https://www.clubsim.com.hk/zh/",
    image: "/images/work/clubsim.png",
  },
  {
    slug: "legalclarus",
    title: "LegalClarus",
    category: "web",
    description: {
      zh: "法律服務平台官網。",
      en: "Legal services platform website.",
    },
    highlights: [
      { zh: "以 Vue-CLI 從零開發，加入 SSR 提升 SEO。", en: "Built from scratch with Vue-CLI; added SSR to improve SEO." },
      { zh: "導入 Google Analytics 分析使用者數據。", en: "Integrated Google Analytics for user insights." },
    ],
    techs: ["Vue-CLI", "SSR", "GA", "Axios"],
    href: "https://legalclarus.com/zh_hant",
    image: "/images/work/legal.png",
  },
  {
    slug: "hktdc",
    title: "HKTDC",
    category: "cms",
    description: {
      zh: "香港貿發局採購支援平台介面開發。",
      en: "HKTDC sourcing support platform UI development.",
    },
    highlights: [
      { zh: "以 React / Next 開發多種使用者介面。", en: "Developed varied UIs with React and Next." },
      { zh: "以 Lighthouse 稽核，提升 SEO 與體驗。", en: "Used Lighthouse audits to improve SEO and UX." },
    ],
    techs: ["React", "Next", "Axios"],
    href: "https://sourcingsupport.hktdc.com/hc/en-us",
    image: "/images/work/hktdc.png",
  },
  {
    slug: "5g-lab",
    title: "SmarTone 5G Lab",
    category: "spa",
    description: {
      zh: "5G 體驗活動單頁式網站。",
      en: "Single-page site for a 5G experience showcase.",
    },
    highlights: [
      { zh: "運用 Gatsby 進行快速開發。", en: "Rapid development with Gatsby." },
    ],
    techs: ["Gatsby", "SPA"],
    href: "https://5g.smartone.com/5GLab/tc/",
    image: "/images/work/5g_lab.png",
  },
  {
    slug: "mindbeauty",
    title: "Mind Beauty",
    category: "web",
    description: {
      zh: "美容預約平台官網。",
      en: "Beauty booking platform website.",
    },
    highlights: [
      { zh: "以 Vue-CLI 從零開發。", en: "Built from scratch with Vue-CLI." },
      { zh: "運用 Google Map API 進行商家定位。", en: "Used Google Map API for business location." },
    ],
    techs: ["Vue-CLI", "GoogleMap", "Axios"],
    href: "https://booking.mindbeautyhk.com/en",
    image: "/images/work/mindbeauty.png",
  },
  {
    slug: "bondlvl",
    title: "債券通 BondLvl",
    category: "web",
    description: {
      zh: "由 App 移植到 Web 的證券搜尋工具。",
      en: "Stock/bond search tool ported from app to web.",
    },
    highlights: [
      { zh: "從 App 移植到 Web 的證券搜尋工具。", en: "Ported the search tool from app to web." },
      { zh: "搭配 Google Ads 增加營收。", en: "Worked with Google Ads to grow revenue." },
    ],
    techs: ["Vue-CLI", "Axios"],
    href: "https://www.bondlvl.com/",
    image: "/images/work/bond.png",
  },
  {
    slug: "ehs",
    title: "一線通 管家易",
    category: "cms",
    description: {
      zh: "後台管理系統（開發中）。",
      en: "Management back-office system (in development).",
    },
    highlights: [
      { zh: "以 Next 從零開發。", en: "Built from scratch with Next." },
      { zh: "以 Material UI 提升開發效率。", en: "Used Material UI to improve development efficiency." },
    ],
    techs: ["Next", "Redux", "Redux Toolkit", "Material UI"],
    image: "/images/work/ehs.png",
  },
];
