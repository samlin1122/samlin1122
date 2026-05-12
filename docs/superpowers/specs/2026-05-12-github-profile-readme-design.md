# GitHub Profile README Redesign — Design Spec

**Date:** 2026-05-12
**Repo:** `samlin1122/samlin1122` (GitHub Profile README)
**Style direction:** Resume-First · Professional · Dark theme (vue-dark)
**Language:** English only

---

## 1. Goals & Audience

- **Primary audience:** Recruiters, hiring managers, freelance clients.
- **Primary goal:** Communicate seniority, breadth (frontend + backend + AI), and showcase representative work.
- **Tone:** Clean, professional, organized — not flashy.

---

## 2. Information Architecture

Six sections, top-to-bottom:

1. **Hero** — name, role tagline, contact badges
2. **About** — 7+ years experience, full-stack with AI hands-on
3. **Featured Projects** — 5-column table; `point-pro` + 2 placeholder rows
4. **Tech Stack** — 8 categories, shields.io badges
5. **GitHub Stats** — stats card + top-langs card, `vue-dark` theme
6. **Footer** — one-line CTA + email

---

## 3. Section Specifications

### 3.1 Hero

```markdown
<h1 align="left">Hi, I'm Sam Lin 👋</h1>

<p align="left">
  <a href="https://github.com/samlin1122"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" /></a>
  <a href="mailto:samlin1122@gmail.com"><img src="https://img.shields.io/badge/Gmail-EA4335?style=flat-square&logo=gmail&logoColor=white" /></a>
  <a href="https://www.linkedin.com/in/zhlin1122/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" /></a>
  <a href="YOUR_PORTFOLIO_URL"><img src="https://img.shields.io/badge/Portfolio-2C2C2C?style=flat-square&logo=vercel&logoColor=white" /></a>
</p>
```

**Placeholder:** `YOUR_PORTFOLIO_URL` — user to fill before publishing.

### 3.2 About

```markdown
### Senior Frontend Developer · Backend & AI Hands-on

Building production web apps for **7+ years**.
Driven by curiosity for new technology — comfortable across the full stack,
with hands-on experience in AI-powered features and integrations.
```

### 3.3 Featured Projects

```markdown
---

## 🚀 Featured Projects

| Project | Description | Tech | Role | Links |
|---|---|---|---|---|
| **point-pro** | Restaurant POS system with order management and analytics | React · TypeScript · Express · MySQL | Frontend Lead | [Repo](https://github.com/samlin1122/point-pro) |
| **<project-2>** | <one-line description> | <stack> | <your role> | [Repo](#) · [Demo](#) |
| **<project-3>** | <one-line description> | <stack> | <your role> | [Repo](#) · [Demo](#) |
```

**Placeholders:** rows 2 and 3 — user to fill with real projects post-deployment.

### 3.4 Tech Stack

Eight categories, all using shields.io `flat-square` badges with brand colors. Markdown soft-line-break (two trailing spaces) between category title and badge list.

```markdown
---

## 🛠️ Tech Stack

**Languages**
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)

**Frontend**
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)
![Nuxt](https://img.shields.io/badge/Nuxt-00DC82?style=flat-square&logo=nuxt&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

**Styling**
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)

**State & Data**
![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-2D3748?style=flat-square)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white)

**Backend**
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)

**AI / LLM**
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)
![Claude](https://img.shields.io/badge/Claude-D97757?style=flat-square&logo=anthropic&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![RAG](https://img.shields.io/badge/RAG-FF6B6B?style=flat-square)
![Embeddings](https://img.shields.io/badge/Embeddings-4ECDC4?style=flat-square)

**DevOps**
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white)
![GCP](https://img.shields.io/badge/GCP-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

**Collaboration**
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![Bitbucket](https://img.shields.io/badge/Bitbucket-0052CC?style=flat-square&logo=bitbucket&logoColor=white)
![Jira](https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=jira&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-0079BF?style=flat-square&logo=trello&logoColor=white)
```

**Note:** In the actual README, each category title line must end with **two trailing spaces** (Markdown soft line break) so badges wrap on the next line, but stay grouped under the category. The spec above shows them as separate lines for readability.

**Removed from original toolbox:** Gatsby, Bulma, Socket.io.
**Replaced delivery mechanism:** all icons now come from shields.io (no more third-party CDN URLs that may rot).

### 3.5 GitHub Stats

```markdown
---

## 📊 GitHub

<p align="left">
  <img src="https://github-readme-stats.vercel.app/api?username=samlin1122&show_icons=true&count_private=true&hide_border=true&theme=vue-dark&include_all_commits=true" height="165" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=samlin1122&layout=compact&hide_border=true&theme=vue-dark&langs_count=8" height="165" />
</p>
```

- Theme: `vue-dark` (matches original).
- Both cards `height=165` for visual alignment.
- `hide_border=true` for cleaner look.
- Stats card: `count_private=true` + `include_all_commits=true` so private work counts.
- Top-langs card: `layout=compact` + `langs_count=8`.

### 3.6 Footer

```markdown
---

<p align="left">
  <em>Open to remote opportunities and freelance collaborations.</em><br/>
  📬 <a href="mailto:samlin1122@gmail.com">samlin1122@gmail.com</a>
</p>
```

---

## 4. Things Explicitly Removed (vs. original)

- The `api.swo.moe` GitHub stats badge (third-party API, replaced by github-readme-stats).
- The top-langs widget floating left of the intro text (replaced by structured GitHub Stats section).
- The current `Side Project` section with two GitHub Pin cards (replaced by `Featured Projects` table).
- Toolbox icons sourced from `iconfinder`, `svgrepo`, `wikipedia`, `uxwing`, etc. (replaced by shields.io badges).
- Toolbox items: Gatsby, Bulma, Socket.io.

## 5. Things Added (vs. original)

- Hero contact badge for Portfolio (placeholder URL).
- Featured Projects table (replaces pinned repos).
- Tech categories: State & Data, AI / LLM, DevOps.
- Tech items: Zustand, Redux, TanStack Query, Storybook, PostgreSQL, MongoDB, Prisma, Redis, OpenAI, Claude, LangChain, RAG, Embeddings, Docker, AWS, GCP, Vercel, GitHub Actions, Git.
- Footer CTA line.

## 6. Placeholders to Fill Before Publishing

| Placeholder | Where | What to fill |
|---|---|---|
| `YOUR_PORTFOLIO_URL` | Hero badges | Personal portfolio site URL (or remove badge if none) |
| `<project-2>` row | Featured Projects | Real project: name, description, tech, role, links |
| `<project-3>` row | Featured Projects | Same |
| `point-pro` description | Featured Projects | Verify the description still accurately reflects scope |

## 7. Out of Scope

- No animations, typing effects, wave headers, or GIF banners.
- No profile-view counters, trophies, or streak widgets.
- No localized (Chinese) version.
- No automation (e.g., GitHub Actions to auto-update content).

---

## 8. Implementation Notes

- Single file to modify: `/Users/sam/Documents/samlin1122/README.md` (full replacement).
- All external dependencies are stable services: `shields.io`, `github-readme-stats.vercel.app`.
- Render verification: after pushing, view at `https://github.com/samlin1122` to confirm all badges and stats cards render. Particularly verify:
  - Anthropic/Claude badge (logo coverage on shields.io can vary).
  - `RAG` and `Embeddings` custom badges (no logo, just color).
  - Stats cards load without rate-limit issues.
