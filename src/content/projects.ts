import type { LocalizedText } from "./profile";

export type ProjectCategory = "web" | "cms" | "backend" | "spa" | "side product";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory[];
  description: LocalizedText;
  highlights: LocalizedText[];
  techs: string[];
  href?: string;
  repo?: string;
  image: string;
};

// Ordered newest → oldest by each project's first git commit (project creation).
export const projects: Project[] = [
  {
    slug: "point-pro",
    title: "Point Pro",
    category: ["web", "backend", "side product"],
    description: {
      zh: "全端餐廳 POS 系統，含網頁與手機點餐、線上訂位、即時同步與多元金流支付。",
      en: "Full-stack restaurant POS — web and mobile ordering, online reservations, real-time sync, and multiple payment methods.",
    },
    highlights: [
      { zh: "擔任前端主導，以 React + Redux Toolkit 整合點餐、訂位流程與後台管理。", en: "Frontend lead — built the ordering, reservation flows and admin back-office with React + Redux Toolkit." },
      { zh: "後端以 Express + Prisma (PostgreSQL) 打造，Socket.io 多命名空間即時同步菜單、訂單與訂位。", en: "Express + Prisma (PostgreSQL) backend with Socket.io multi-namespace real-time sync for menus, orders, and reservations." },
      { zh: "整合 LINE Pay、ECPay 與現金多元金流，支援座位時段預約與餐點客製化。", en: "Integrated LINE Pay, ECPay, and cash payments, with time-slot seat reservations and meal customization." },
      { zh: "與業界其他夥伴共同開發，進行前後端技術交流與上架商品。", en: "Collaborated with industry partners for full-stack development and product launch." },
    ],
    techs: ["React", "TypeScript", "Redux Toolkit", "Express", "Prisma", "PostgreSQL", "Socket.io"],
    href: "https://point-pro.vercel.app/",
    repo: "https://github.com/samlin1122/point-pro",
    image: "/images/work/point-pro.png",
  },
  {
    slug: "trailwatch",
    title: "TrailWatch",
    category: ["web", "cms", "backend"],
    description: {
      zh: "香港行山路線資訊與 GPS 軌跡記錄社群平台，含前台 Web、內容後台 CMS 與 NestJS 後端。",
      en: "Hong Kong hiking-trail and GPS-track community platform — a public web app, a content CMS, and a NestJS backend.",
    },
    highlights: [
      { zh: "前台以 Remix (SSR) 打造，整合 Mapbox GL 路線規劃、Turf 地理計算與即時 GPS 軌跡、高程圖。", en: "Remix (SSR) front-end with Mapbox GL route planning, Turf geospatial calc, real-time GPS tracks, and elevation charts." },
      { zh: "NestJS + PostgreSQL/PostGIS 後端，地理空間查詢、Bull/Redis 背景佇列、Stripe 訂閱與捐款。", en: "NestJS + PostgreSQL/PostGIS backend with geospatial queries, Bull/Redis job queues, and Stripe subscriptions/donations." },
      { zh: "Apple／Google／Facebook 登入，GCS／BigQuery 整合，部署於 GKE。", en: "Apple/Google/Facebook login, GCS/BigQuery integration, deployed on GKE." },
      { zh: "後台 CMS 以 Vite + React + Tailwind 打造，含 CKEditor 與資料表格。", en: "Vite + React + Tailwind CMS with CKEditor and data grids." },
    ],
    techs: ["Remix", "NestJS", "PostgreSQL", "Mapbox GL", "Redux Toolkit", "i18next"],
    image: "/images/work/trailwatch.png",
  },
  {
    slug: "ura-campaign",
    title: "URA Campaign",
    category: ["web", "cms"],
    description: {
      zh: "市區重建局樓宇復修推廣活動平台，含多輪互動問答遊戲、獎品兌換、後台管理與後端 API。",
      en: "URA building-rehabilitation campaign platform — a multi-round quiz game, prize redemption, an admin back-office, and a backend API.",
    },
    highlights: [
      { zh: "限時問答遊戲，整合影片題目、配額控管、多輪次部署與 GA4 事件追蹤。", en: "Timed quiz game with video questions, quota control, multi-round deployments, and GA4 event tracking." },
      { zh: "多角色兌換流程：客服掃碼核銷與租戶自助兌換 (MPA)。", en: "Multi-role redemption: staff QR check-off and tenant self-redemption (multi-page apps)." },
      { zh: "React + Vite + Tailwind + Zustand，i18next 遠端翻譯，Firebase Hosting／Auth。", en: "React + Vite + Tailwind + Zustand, i18next remote translations, Firebase Hosting/Auth." },
    ],
    techs: ["React", "Vite", "Tailwind", "Express", "PostgreSQL", "i18next", "Firebase"],
    image: "/images/work/ura-campaign.png",
  },
  {
    slug: "hkfyg-timeslot",
    title: "HKFYG Timeslot",
    category: ["web", "cms"],
    description: {
      zh: "香港青年協會暑期活動的線上時段抽籤與預約系統，含前台限時選位與後台時段管理。",
      en: "Online timeslot draw and booking for HKFYG summer activities — timed public selection with a slot-management back-office.",
    },
    highlights: [
      { zh: "前台 5 分鐘限時選位，輪詢後端抽籤結果，搭配 RoomQ 排隊與 reCAPTCHA 控流。", en: "Timed 5-minute slot selection polling the draw result, with RoomQ queueing and reCAPTCHA." },
      { zh: "後台 CMS 管理時段、額度與成員分配。", en: "Back-office CMS for timeslots, quotas, and member assignment." },
      { zh: "React + Vite + MUI，前台以 Zustand、後台以 SWR 管理狀態。", en: "React + Vite + MUI; Zustand on the front-end, SWR in the CMS." },
    ],
    techs: ["React", "Vite", "Material UI", "Zustand", "SWR"],
    image: "/images/work/hkfyg-timeslot.png",
  },
  {
    slug: "luncheon-star",
    title: "Luncheon Star",
    category: ["cms"],
    description: {
      zh: "學校午餐供應 App「Luncheon Star」的內容管理後台，管理橫幅、推播、營養資訊與版本。",
      en: "Content back-office for the Luncheon Star school-lunch app — banners, push notifications, nutrition tips, and app versions.",
    },
    highlights: [
      { zh: "12+ 內容模組以 React + Vite + MUI Data Grid 打造，支援多語資料模型。", en: "12+ content modules built with React + Vite + MUI Data Grid over a multilingual data model." },
      { zh: "CKEditor 富文本編輯與圖片上傳（presigned URL）。", en: "CKEditor rich-text editing with presigned-URL image uploads." },
      { zh: "Axios 攔截器實作 401 靜默 token 刷新。", en: "Axios interceptors with silent token refresh on 401." },
    ],
    techs: ["React", "Vite", "Material UI", "SWR", "CKEditor"],
    image: "/images/work/luncheon-star.png",
  },
  {
    slug: "hkfyg-strive-and-rise",
    title: "HKFYG Strive and Rise",
    category: ["web", "cms"],
    description: {
      zh: "香港青年協會師友計劃管理平台，含多語前台與權限分明的後台。",
      en: "Mentorship platform for HKFYG's Strive and Rise programme — a trilingual public site and a role-based admin back-office.",
    },
    highlights: [
      { zh: "後台以 Chakra UI + Zustand 打造，含細粒度 RBAC、CKEditor 與 ApexCharts 儀表板。", en: "Chakra UI + Zustand back-office with fine-grained RBAC, CKEditor, and ApexCharts dashboards." },
      { zh: "前台以 MUI + i18next 支援繁／簡／英三語與語言降級路由。", en: "MUI + i18next public site in Traditional/Simplified Chinese and English, with locale-fallback routing." },
      { zh: "React + Vite 前後分離，部署於 gov.hk 正式環境。", en: "React + Vite, decoupled front/back, deployed to a gov.hk production environment." },
    ],
    techs: ["React", "Vite", "Chakra UI", "Material UI", "Zustand", "i18next"],
    image: "/images/work/hkfyg-strive-and-rise.png",
  },
  {
    slug: "livvy",
    title: "Livvy 智慧旅宿",
    category: ["web", "cms"],
    description: {
      zh: "Livvy 智慧旅宿平台，含活動、訂位、電商與會員制後台、會員自助註冊前台與 Node 後端微服務。",
      en: "Livvy smart-hotel platform — a back-office for events, bookings, e-commerce, and membership; a member self-registration front-end; and Node backend services.",
    },
    highlights: [
      { zh: "後台以 Next.js + MUI 打造，含權限分層、Draft.js 富文本、Recharts 報表與阿里雲 OSS 上傳。", en: "Next.js + MUI back-office with layered permissions, Draft.js rich text, Recharts reports, and Aliyun OSS uploads." },
      { zh: "前台以 Vite + React + i18next 提供註冊→驗證→問卷→支付的三語流程。", en: "Vite + React + i18next front-end: a trilingual register → verify → survey → pay flow." },
    ],
    techs: ["Next", "React", "Material UI", "Express", "Sequelize", "Elasticsearch", "i18next"],
    image: "/images/work/livvy.png",
  },
  {
    slug: "chinachem-eaa",
    title: "Chinachem Event Attendance",
    category: ["web", "cms"],
    description: {
      zh: "華懋集團的活動簽到管理系統，支援活動建立、參加者管理與現場掃碼簽到。",
      en: "Event attendance system for Chinachem & Nina Hotel Group — event setup, participant management, and on-site QR check-in.",
    },
    highlights: [
      { zh: "以 Next.js 打造管理後台 + 掃碼簽到雙端，支援多品牌雙網域。", en: "Next.js admin portal plus a QR check-in client, serving multiple brands across separate domains." },
    ],
    techs: ["Next", "TypeScript", "Material UI"],
    image: "/images/work/chinachem-eaa.png",
  },
  {
    slug: "trailwatch-event",
    title: "Coastal Trail Challenge",
    category: ["web", "cms", "backend"],
    description: {
      zh: "「香港島沿岸遠足挑戰賽」線上報名、捐款、成績與證書平台，含後台與 API。",
      en: "Online registration, donation, results, and certificates for the Hong Kong Island Coastal Trail Challenge — with a back-office and API.",
    },
    highlights: [
      { zh: "Next.js SSG 三語報名前台，整合 Stripe 線上支付。", en: "Next.js SSG trilingual registration front-end with Stripe payments." },
      { zh: "Express + Sequelize 後端，Puppeteer 產生 PDF 證書、SendGrid 排隊寄送，部署於 GCP Cloud Run。", en: "Express + Sequelize backend generating PDF certificates via Puppeteer, queued emails via SendGrid, on GCP Cloud Run." },
      { zh: "後台以 Mapbox 編輯路線與檢查點，記錄參賽者成績。", en: "Back-office edits routes and checkpoints on Mapbox and tracks participant results." },
    ],
    techs: ["Next", "Express", "Sequelize", "Stripe", "Mapbox GL", "Puppeteer"],
    href: "https://event.coastaltrailchallenge.hk",
    image: "/images/work/trailwatch-event.png",
  },
  {
    slug: "ehs",
    title: "一線通 管家易",
    category: ["cms"],
    description: {
      zh: "長者社區照顧服務平台的企業級後台管理系統，涵蓋訂單、客戶、服務人員與電商管理。",
      en: "Enterprise back-office for an elderly community-care service platform — orders, customers, field staff, and e-commerce.",
    },
    highlights: [
      { zh: "以 Next.js 從零打造，整合 JWT 認證與角色權限控管 (RBAC)。", en: "Built from scratch with Next.js, featuring JWT auth and role-based access control." },
      { zh: "以 Redux Toolkit 管理 50+ 模組化狀態，串接 40+ API 服務層。", en: "Managed 50+ modular state slices with Redux Toolkit across 40+ API services." },
      { zh: "Material UI 統一設計系統，支援多語系 (i18next) 與資料匯入匯出。", en: "Unified Material UI design system with i18n and CSV/Excel import-export." },
    ],
    techs: ["Next", "React", "Redux Toolkit", "Material UI", "i18next", "Axios"],
    image: "/images/work/ehs.png",
  },
  {
    slug: "chinachem-estaffcard",
    title: "Chinachem e-Staffcard",
    category: ["web", "backend"],
    description: {
      zh: "中化集團員工電子卡系統，提供動態 QR 員工證與值班餐配額查詢，支援多品牌租戶。",
      en: "Chinachem staff e-card system — dynamic QR staff cards and duty-meal quota lookup, with multi-tenant brand support.",
    },
    highlights: [
      { zh: "Express + Pug 全端，Sequelize／MySQL 員工名冊，SAML 單一登入。", en: "Full-stack Express + Pug with a Sequelize/MySQL staff registry and SAML SSO." },
      { zh: "以阿里雲 KMS 非對稱加密產生 24 小時有效的動態 QR 員工證。", en: "Dynamic 24-hour QR staff cards encrypted via Aliyun KMS." },
      { zh: "多品牌租戶（中化／麗思／松齡）單一程式碼庫，串接值班餐配額 API。", en: "Multi-tenant (Chinachem/Nina/Pine Care) from one codebase, integrating a duty-meal quota API." },
    ],
    techs: ["Express", "Pug", "Sequelize", "MySQL", "SAML", "Tailwind"],
    image: "/images/work/chinachem-estaffcard.png",
  },
  {
    slug: "mindbeauty",
    title: "Mind Beauty",
    category: ["web"],
    description: {
      zh: "香港美容預約平台官網，整合地圖定位、多語預約與線上支付。",
      en: "Hong Kong beauty booking platform with map-based discovery, multilingual booking, and online payment.",
    },
    highlights: [
      { zh: "以 Vue 2 (Vue CLI) 打造 SPA，整合 Google Maps Places 進行商家定位與搜尋。", en: "Vue 2 (Vue CLI) SPA; Google Maps Places for business discovery and search." },
      { zh: "完整預約流程串接 Stripe／Pace 雙金流與優惠券驗證。", en: "Full booking flow with Stripe/Pace dual payment gateways and voucher validation." },
      { zh: "vue-i18n 四語（英／繁／簡／日），Mixpanel 行為分析。", en: "Four languages (EN/TC/SC/JA) via vue-i18n, with Mixpanel analytics." },
    ],
    techs: ["Vue", "Google Maps", "vue-i18n", "Stripe", "Mixpanel", "Axios"],
    href: "https://booking.mindbeautyhk.com/en",
    image: "/images/work/mindbeauty.png",
  },
  {
    slug: "bondlvl",
    title: "債券通 BondLvl",
    category: ["web"],
    description: {
      zh: "香港債券搜尋與查詢平台，由原生 App 移植到 Web。",
      en: "Hong Kong bond search and discovery platform, ported from a native app to the web.",
    },
    highlights: [
      { zh: "將原生 App 的債券搜尋工具移植為響應式 Web，支援行業分類、篩選與排序。", en: "Ported the native-app bond search tool to a responsive web app with industry browsing, filtering, and sorting." },
      { zh: "整合 Google Publisher Tag 多尺寸響應式廣告，作為變現機制。", en: "Integrated Google Publisher Tag for responsive multi-size ad units as the monetization layer." },
      { zh: "以 Vuex 模組化管理資料，支援繁／簡／英三語 (vue-i18n)。", en: "Modular Vuex data flow with trilingual support (Traditional/Simplified Chinese, English) via vue-i18n." },
    ],
    techs: ["Vue-CLI", "Vuex", "Bulma", "vue-i18n", "Google Ads", "Axios"],
    // href: "https://www.bondlvl.com/",
    image: "/images/work/bond.png",
  },
  {
    slug: "5g-lab",
    title: "SmarTone 5G Lab",
    category: ["spa"],
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
    slug: "hktdc",
    title: "HKTDC",
    category: ["cms"],
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
    slug: "legalclarus",
    title: "LegalClarus",
    category: ["web"],
    description: {
      zh: "法律服務媒合平台官網，採 Vue SSR 提升 SEO。",
      en: "Legal services marketplace website, using Vue SSR for SEO.",
    },
    highlights: [
      { zh: "以 Vue 2 + vue-server-renderer 自建 SSR，支援多語路由前綴。", en: "Custom Vue 2 SSR with vue-server-renderer and locale-prefixed routing." },
      { zh: "vue-meta 動態 SEO 標籤，vue-analytics 導入 GA。", en: "Dynamic SEO meta via vue-meta; GA through vue-analytics." },
      { zh: "Vuex 模組化管理律師搜尋、訂閱等狀態。", en: "Modular Vuex for lawyer search, subscriptions, and more." },
    ],
    techs: ["Vue", "SSR", "Vuex", "vue-i18n", "GA", "Axios"],
    // href: "https://legalclarus.com/zh_hant",
    image: "/images/work/legal.png",
  },
  {
    slug: "clubsim",
    title: "ClubSim",
    category: ["web"],
    description: {
      zh: "ClubSim 電信會員官網，採 Vue SSR 提升 SEO 與首屏效能。",
      en: "ClubSim telecom membership site, using Vue SSR for SEO and first-paint performance.",
    },
    highlights: [
      { zh: "以 Vue 2 + vue-server-renderer 自建 SSR，搭配 LRU 頁面快取。", en: "Custom Vue 2 SSR with vue-server-renderer and LRU page caching." },
      { zh: "vue-i18n 三語（英／繁／簡），Vuex 模組化狀態管理。", en: "Trilingual (EN/TC/SC) via vue-i18n with modular Vuex state." },
      { zh: "Helmet 安全標頭、動態 nonce 與 SRI，vue-gtag 導入分析。", en: "Helmet security headers, dynamic nonce and SRI, analytics via vue-gtag." },
    ],
    techs: ["Vue", "SSR", "Vuex", "vue-i18n", "GA", "Axios"],
    href: "https://www.clubsim.com.hk/zh/",
    image: "/images/work/clubsim.png",
  },
];
