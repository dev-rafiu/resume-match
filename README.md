# ResumeMatch

AI-powered platform that helps job seekers tailor their resumes to match specific job descriptions using advanced AI analysis.

## 🚀 Features

- 📄 **Resume Upload** - Upload PDF or DOCX resumes
- 🤖 **AI Analysis** - Intelligent matching between resume and job descriptions
- ✨ **Tailored Recommendations** - Get specific suggestions to improve your resume
- 📊 **Dashboard** - Track all your tailored resumes in one place
- ⚡ **Streaming Responses** - Real-time AI processing for better UX

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Prisma** (PostgreSQL)
- **Vercel AI SDK** / **OpenAI SDK**

## 📦 Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file with:

   ```env
   DATABASE_URL="your-database-url"
   OPENAI_API_KEY="your-api-key"
   ```

3. **Set up database:**

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

4. **Run development server:**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## 📝 License

This project is part of a learning roadmap for transitioning from Frontend to Full-Stack development.

---

**Built with Next.js 15** | **TypeScript** | **Tailwind CSS**
