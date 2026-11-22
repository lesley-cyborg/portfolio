# 🚀 Project Documentation Portfolio

A high-performance, documentation-style portfolio website designed to showcase DevSecOps engineering projects, system architecture, and technical case studies. Built with a focus on readability, performance, and modern UI/UX principles.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-0055FF?style=for-the-badge&logo=framer)

## ✨ Features

- **Documentation-Style Layout:** Inspired by Stripe and Vercel, providing a highly readable, technical case study format for each project.
- **Dynamic Project Filtering:** Filter projects by Category (Web App, API, Security) and Status (Completed, In Progress).
- **Dark/Light Mode:** Seamless theme toggling with persistent state using `next-themes`.
- **Smooth Animations:** Subtle, scroll-triggered micro-interactions powered by Framer Motion.
- **Contact Form Integration:** Secure contact form powered by Resend API and Next.js Route Handlers.
- **Fully Responsive:** Mobile-first design ensuring a perfect experience on all devices.
- **Strict TypeScript:** Fully typed data structures and components for maintainability and scalability.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first configuration)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email Service:** Resend
- **Deployment:** To be decided soon

## 📁 Project Structure

```text
src/
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable UI components
│   ├── layout/           # Navbar, Footer, ThemeProvider
│   └── sections/         # Hero, About, Projects, Contact, ProjectDetail
├── data/                 # Static data (projects, skills)
├── lib/                  # Utility functions
└── types/                # TypeScript interfaces
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js v20+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
```bash
   git clone https://github.com/lesley-cyborg/project-docs.git
   cd project-docs
```

2. **Install dependencies:**
```bash
   npm install
```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your Resend API key (if using the contact form):
```env
   RESEND_API_KEY=your_resend_api_key_here
   MY_EMAIL=your_email@example.com
```

4. **Run the development server:**
```bash
   npm run dev
```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js). 

1. Push your code to GitHub.
2. Import your repository into Vercel.
3. Add your `RESEND_API_KEY` and `MY_EMAIL` to the Vercel Environment Variables settings.
4. Deploy!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Kagiso Lesley Setilo**
- GitHub: [@lesley-cyborg](https://github.com/lesley-cyborg)
- LinkedIn: [Kagiso Setilo](https://linkedin.com/in/kagiso-setilo-b6b340255)
