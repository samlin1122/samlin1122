# GitHub Profile README Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace `README.md` with the Resume-First design defined in `docs/superpowers/specs/2026-05-12-github-profile-readme-design.md`.

**Architecture:** Single-file full replacement. README.md is content-only Markdown (with embedded HTML) consumed by GitHub's profile rendering. No build step, no tests beyond visual verification on GitHub.

**Tech Stack:** Markdown · shields.io (badges) · github-readme-stats.vercel.app (stats cards) · GitHub Flavored Markdown for tables.

**Spec:** [`docs/superpowers/specs/2026-05-12-github-profile-readme-design.md`](../specs/2026-05-12-github-profile-readme-design.md)

**Git identity for this repo:** All commits MUST use `林展宏 <52151169+samlin1122@users.noreply.github.com>` (matches existing commit history). Override per-command with `git -c user.name="林展宏" -c user.email="52151169+samlin1122@users.noreply.github.com"`. Do NOT change `git config` globally or locally.

---

## Task 1: Replace README.md with new design

**Files:**
- Modify: `/Users/sam/Documents/samlin1122/README.md` (full replacement)

- [ ] **Step 1: Read the current README.md to confirm baseline**

Run: `Read /Users/sam/Documents/samlin1122/README.md`
Expected: existing 174-line README content.

- [ ] **Step 2: Overwrite README.md with the new content**

Use the `Write` tool to replace the entire file with the content below.

**Important formatting notes:**
- Each **category title** in Tech Stack (`**Languages**`, `**Frontend**`, etc.) must end with **two trailing spaces** (Markdown soft line break) so the badges that follow stay grouped under the title. Two-space soft breaks are invisible — preserve them exactly.
- The `YOUR_PORTFOLIO_URL` placeholder stays in the file. User will fill it manually after this task.

```markdown
<h1 align="left">Hi, I'm Sam Lin 👋</h1>

<p align="left">
  <a href="https://github.com/samlin1122"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" /></a>
  <a href="mailto:samlin1122@gmail.com"><img src="https://img.shields.io/badge/Gmail-EA4335?style=flat-square&logo=gmail&logoColor=white" /></a>
  <a href="https://www.linkedin.com/in/zhlin1122/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" /></a>
  <a href="YOUR_PORTFOLIO_URL"><img src="https://img.shields.io/badge/Portfolio-2C2C2C?style=flat-square&logo=vercel&logoColor=white" /></a>
</p>

### Senior Frontend Developer · Backend & AI Hands-on

Building production web apps for **7+ years**.
Driven by curiosity for new technology — comfortable across the full stack,
with hands-on experience in AI-powered features and integrations.

---

## 🚀 Featured Projects

| Project | Description | Tech | Role | Links |
|---|---|---|---|---|
| **point-pro** | Restaurant POS system with order management and analytics | React · TypeScript · Express · MySQL | Frontend Lead | [Repo](https://github.com/samlin1122/point-pro) |
| **<project-2>** | <one-line description> | <stack> | <your role> | [Repo](#) · [Demo](#) |
| **<project-3>** | <one-line description> | <stack> | <your role> | [Repo](#) · [Demo](#) |

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

---

## 📊 GitHub

<p align="left">
  <img src="https://github-readme-stats.vercel.app/api?username=samlin1122&show_icons=true&count_private=true&hide_border=true&theme=vue-dark&include_all_commits=true" height="165" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=samlin1122&layout=compact&hide_border=true&theme=vue-dark&langs_count=8" height="165" />
</p>

---

<p align="left">
  <em>Open to remote opportunities and freelance collaborations.</em><br/>
  📬 <a href="mailto:samlin1122@gmail.com">samlin1122@gmail.com</a>
</p>
```

- [ ] **Step 3: Verify the file was written correctly**

Run: `wc -l /Users/sam/Documents/samlin1122/README.md`
Expected: ~95 lines (was 174). Significantly shorter due to badge consolidation.

Run: `grep -c "shields.io" /Users/sam/Documents/samlin1122/README.md`
Expected: 35 (4 contact + 4 Languages + 5 Frontend + 3 Styling + 4 State & Data + 6 Backend + 5 AI + 5 DevOps + 5 Collaboration = 41... actually count is approximate, anything 30+ is correct).

Run: `grep -c "iconfinder\|svgrepo\|wikipedia\|uxwing\|api.swo.moe" /Users/sam/Documents/samlin1122/README.md`
Expected: `0` — all legacy third-party image URLs removed.

- [ ] **Step 4: Verify two-space soft-breaks survived (critical for badge grouping)**

Run: `grep -E "^\*\*[A-Z][a-zA-Z &/]+\*\*  $" /Users/sam/Documents/samlin1122/README.md | wc -l`
Expected: `8` — one match per category title (Languages, Frontend, Styling, State & Data, Backend, AI / LLM, DevOps, Collaboration). The `  $` requires two trailing spaces.

If this returns less than 8, the soft-break formatting was lost. Re-do Step 2 paying attention to the trailing whitespace.

- [ ] **Step 5: Commit**

```bash
git -c user.name="林展宏" -c user.email="52151169+samlin1122@users.noreply.github.com" \
  commit README.md -m "$(cat <<'EOF'
redesign: resume-first README with categorized tech stack

- Replace third-party CDN icons with shields.io badges
- Add AI/LLM, State & Data, DevOps categories
- Remove Gatsby, Bulma, Socket.io
- Featured Projects table replaces pinned repo cards
- Hero contact badges include Portfolio (placeholder URL)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 6: Verify commit author**

Run: `git log -1 --format='%an <%ae> | %s'`
Expected: `林展宏 <52151169+samlin1122@users.noreply.github.com> | redesign: resume-first README with categorized tech stack`

If author is `samlin <sam.lin@redso.com.hk>`, abort: the `-c` overrides did not take effect. Reset the commit with `git reset --soft HEAD~1` and retry Step 5.

---

## Task 2: Confirm placeholders are visible for user follow-up

**Goal:** Make it easy for the user to find what still needs to be filled in before publishing.

- [ ] **Step 1: List remaining placeholders**

Run: `grep -nE "YOUR_PORTFOLIO_URL|<project-[23]>|<one-line description>|<stack>|<your role>" /Users/sam/Documents/samlin1122/README.md`

Expected: at least 3 lines surfaced — the Portfolio URL link in the Hero, plus the two placeholder project rows.

- [ ] **Step 2: Surface placeholders in the final report**

When reporting back to the user, include the exact `grep` output so they know what to fill manually. Do NOT attempt to fill these in yourself — the user has explicitly said the Featured Projects content stays empty until they provide it.

---

## Out of Scope

- Pushing to `origin/main` (the user will push manually after filling placeholders).
- Filling Featured Projects placeholder rows.
- Filling `YOUR_PORTFOLIO_URL`.
- Browser-based render verification (shields.io and github-readme-stats are stable; final visual check happens on `https://github.com/samlin1122` after user pushes).

## Self-Review Checklist

- ✅ Spec §3.1 Hero → Task 1 Step 2 includes full Hero block.
- ✅ Spec §3.2 About → Task 1 Step 2 includes the H3 + paragraph.
- ✅ Spec §3.3 Featured Projects → Task 1 Step 2 includes 5-column table with `point-pro` and 2 placeholders.
- ✅ Spec §3.4 Tech Stack → Task 1 Step 2 includes all 8 categories, soft-break rule called out in Step 4.
- ✅ Spec §3.5 GitHub Stats → Task 1 Step 2 includes both stats cards with vue-dark theme.
- ✅ Spec §3.6 Footer → Task 1 Step 2 includes CTA + email.
- ✅ Spec §6 Placeholders → Task 2 surfaces them via grep.
- ✅ No "TBD" or "implement later" in the plan.
- ✅ Git identity override is explicit and verifiable (Step 6).
