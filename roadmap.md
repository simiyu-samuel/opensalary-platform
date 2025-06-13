
# 🛣️ OpenSalary Hackathon Roadmap

## 🚀 Goal
> Build a transparent, AI-powered global salary insight platform with real data and beautiful UX.

---

## 🔍 PHASE 1: Ideation & Architecture
### 📅 Day 1 (Today)

| Task | Details |
| :--- | :--- |
| ✅ **Finalize Idea** | OpenSalary – global wage transparency tool |
| ✅ **Choose Tech Stack** | `Bolt`, `Supabase`, `OpenAI`, `RevenueCat`, `Chart.js` |
| 🔤 **Lock Features** | Salary lookup, submission, AI analysis, badges |
| 📐 **Plan MVP Scope** | 7-day deliverables (must-haves vs nice-to-haves) |
| 🧠 **Setup Repo & Docs** | GitHub repo, Notion/Markdown roadmap, README |
| 🖍️ **UI Sketches** | Basic wireframes: homepage, dashboard, submit form, chatbot |

---

## 🧱 PHASE 2: Backend & Data Setup
### 📅 Day 2–3

| Task | Tools | Notes |
| :--- | :--- | :--- |
| 🔐 **Set Up Supabase** | Supabase DB, Auth, RLS Policies | Anon auth for submissions |
| 🗂️ **Define DB Schema** | Jobs, Salaries, Users, Companies | Normalized schema |
| 📥 **Submission API** | `POST`: Submit salary anonymously | Auto-log timestamp, IP region |
| 🗃️ **Sample Data Seeding** | Add real-world sample salaries | Populate for demo purpose |
| 📤 **Data Fetch API** | `GET`: Pull salaries by filters | Paginated, indexed |
| 🔧 **CORS, Env Configs** | API keys, Supabase env vars | Secure and tested |

---

## 🎨 PHASE 3: Frontend in Bolt
### 📅 Day 3–5

| Page | Features |
| :--- | :--- |
| 🏠 **Homepage** | Catchy headline, call to action, intro explainer |
| 🔍 **Salary Lookup** | Filters (job, country, gender, years), result table/chart |
| 📊 **Salary Comparison Page** | Job-based comparisons, region heatmaps, gender wage gap |
| ✍️ **Submission Form** | Clean UX, anonymous submit (form + validations) |
| 🧠 **AI Pay Analyzer** | “Is your salary fair?” → Input + OpenAI insight |
| 🏅 **Transparency Badges** | Show scores for jobs/companies (fairness % + badge) |
| 💬 **Chat Assistant** | Ask salary fairness questions (uses OpenAI) |
| 📱 **Mobile Responsive** | Looks good on all screen sizes |

---

## 🤖 PHASE 4: AI Integration + Insights
### 📅 Day 5–6

| Feature | Details |
| :--- | :--- |
| ⚖️ **AI Fairness Engine** | Prompt OpenAI with user input + global data |
| 💬 **Smart Assistant Bot** | Chat about salary gaps, negotiation tips, and stats |
| 📊 **Insight Generator** | Generate personalized “Salary Insight Reports” |
| 🧾 **Result Formatter** | Return friendly, sharable results (maybe PDF?) |

---

## 💸 PHASE 5: Revenue Model + Extras
### 📅 Day 6

| Feature | Use |
| :--- | :--- |
| 🚀 **RevenueCat Setup** | Freemium model for advanced reports |
| 🔐 **Auth Wall for Pro** | Lock PDF/export/advanced filters behind paywall |
| 📤 **Export to Resume** | Option to embed AI-backed “Fair Salary Report” |
| 🌐 **Share Links** | Social sharing of badge/insights (LinkedIn, etc.) |

---

## 🎤 PHASE 6: Polish, Pitch & Submission
### 📅 Day 7

| Task | Tools |
| :--- | :--- |
| ✨ **UI Polish** | Color scheme, icons, animations |
| 🧪 **Testing** | Submit flows, error handling, mobile views |
| 🪞 **Demo Walkthrough** | Practice pitch, record walkthrough (screen + voice) |
| 📽️ **Record Demo Video** | Use `Loom` / `OBS` – highlight problem, demo, AI feature |
| 📝 **Devpost Writeup** | Clear story, screenshots, demo link, code repo |
| 📦 **Submit Project** | On time with all links + video embedded |

---

## 🎁 Bonus Stretch Goals (Optional)

| Feature | Reason |
| :--- | :--- |
| 📍 **Geo Salary Heatmap** | Visual of average wage by country/region |
| 🏢 **Company Salary Profiles** | Show pay stats by company (if time allows) |
| 📊 **Browser Extension** | “Know your worth” on job listings |
| 🧠 **Tavus Integration** | Auto video explaining pay fairness for user |

---

## 🔧 Tech Stack Recap

| Layer | Tools |
| :--- | :--- |
| **Frontend** | `Bolt`, `TailwindCSS`, `Chart.js` |
| **Backend** | `Supabase` (DB + API), `OpenAI` |
| **AI/LLM** | `GPT-4` for fairness analysis |
| **Auth** | `Supabase` (email/anon) |
| **Monetization**| `RevenueCat` |
| **Deployment** | Bolt cloud-hosted frontend + Supabase backend |

---

## ✅ Project Success Checklist
- [x] Fast, beautiful UX
- [x] Real user data (pre-filled + user-submitted)
- [x] AI insight that feels magical
- [x] Global impact story + empathy angle
- [x] Smooth demo & wow moment (chatbot or badge or analysis)
- [x] Clean GitHub repo & documented pitch

# 🛣️ OpenSalary Hackathon Roadmap – Progress Tracker

## ✅ Day 1 – Ideation & Architecture
- [x] Finalize Idea
- [x] Choose Tech Stack
- [x] Lock Features
- [x] Plan MVP Scope
- [x] Create GitHub repo ✅ done: https://github.com/simiyu-samuel/opensalary-platform
- [x] Add README.md
- [x] Add roadmap.md
- [ ] UI Wireframes
- [ ] Bolt project setup
