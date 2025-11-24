# ResumeMatch - AI Resume Tailoring Platform

An AI-powered platform where job seekers can upload their resume/CV with a job description, and AI will scan, tailor, and optimize the resume to match the job requirements.

## 🎯 Project Overview

ResumeMatch is a full-stack Next.js application designed to help job seekers create tailored resumes that match specific job descriptions. The platform uses AI to analyze resumes and job descriptions, providing personalized recommendations and optimized resume versions.

## 🚀 Tech Stack

- **Next.js 15.5.6** (App Router) - React framework with server-side rendering
- **TypeScript** - Type-safe development
- **React 19.1.0** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Prisma** - Next-generation ORM for database operations
- **Vercel AI SDK** or **OpenAI SDK** - Streaming AI responses
- **React Hook Form** + **Zod** - Form validation
- **TanStack Query** - Client-side data fetching and caching
- **Zustand** - Global state management
- **PostgreSQL** - Database (recommended)

## 📋 Project Requirements

### Core Features

1. **User Authentication**

   - User registration and login
   - Session management
   - Protected routes

2. **Resume Upload & Processing**

   - Upload resume/CV files (PDF, DOCX)
   - Parse and extract text from uploaded files
   - Store original resumes securely

3. **Job Description Input**

   - Text input for job descriptions
   - Save and manage multiple job descriptions
   - Job description analysis

4. **AI-Powered Tailoring**

   - AI analysis of resume vs job description
   - Generate tailored resume recommendations
   - Provide specific improvement suggestions
   - Stream AI responses for better UX

5. **Dashboard**

   - View all processed resumes
   - Track tailoring history
   - Download optimized resumes
   - Manage account settings

6. **Performance & SEO**
   - Optimized file uploads
   - Lazy loading for AI results
   - SEO-friendly landing pages
   - Dynamic metadata

## 🏗️ Project Architecture

### Directory Structure

```
resume-match/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx          # Login page (Client Component)
│   │   └── signup/
│   │       └── page.tsx          # Signup page (Client Component)
│   ├── dashboard/
│   │   ├── page.tsx              # Dashboard (Server Component - fetch user data)
│   │   ├── new/
│   │   │   └── page.tsx          # New resume upload (Client Component)
│   │   └── [id]/
│   │       └── page.tsx          # View/edit specific resume (Server + Client)
│   ├── api/
│   │   ├── upload/
│   │   │   └── route.ts          # File upload handler
│   │   ├── process/
│   │   │   └── route.ts          # AI processing endpoint
│   │   └── resumes/
│   │       └── route.ts          # CRUD operations for resumes
│   ├── actions/
│   │   └── resume-actions.ts     # Server Actions for AI processing (streaming)
│   ├── components/
│   │   ├── ui/                   # Reusable UI components
│   │   ├── forms/                # Form components
│   │   └── resume/                # Resume-specific components
│   ├── lib/
│   │   ├── db.ts                 # Prisma client
│   │   ├── ai.ts                 # AI SDK configuration
│   │   └── utils.ts              # Utility functions
│   ├── middleware.ts             # Auth & rate limiting
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
├── prisma/
│   ├── schema.prisma             # Database schema
│   └── migrations/               # Database migrations
├── public/                       # Static assets
├── types/                        # TypeScript type definitions
└── package.json
```

### Key Architecture Decisions

#### 1. App Router Architecture

- **Server Components** (`app/dashboard/page.tsx`) - Fetch user data server-side for better performance
- **Client Components** (`app/dashboard/new/page.tsx`) - Interactive forms and UI
- **Route Groups** `(auth)` - Organize authentication routes

#### 2. Server Actions (Streaming)

```typescript
// app/actions/resume-actions.ts
"use server";
export async function processResume(formData: FormData) {
  // Stream AI response as it generates
  // Use useActionState for progressive UI updates
}
```

#### 3. API Routes

- `/api/upload` - Handle file uploads (PDF/DOCX parsing)
- `/api/process` - Alternative to server actions for complex workflows
- Use `NextRequest` and `NextResponse`

#### 4. Middleware

- Authentication checks
- Rate limiting (prevent AI API abuse)
- Request logging

## 🎓 Next.js Features to Master

1. **App Router Architecture**

   - Server vs Client component decision-making
   - Route groups and organization
   - Server-side data fetching

2. **Server Actions**

   - Streaming responses for long-running AI operations
   - Progressive UI updates
   - Form handling

3. **API Routes**

   - File upload handling
   - Request/Response patterns
   - Error handling

4. **Middleware**

   - Authentication patterns
   - Rate limiting strategies
   - Request interception

5. **Performance Optimization**

   - Image optimization
   - Lazy loading
   - Code splitting
   - ISR (Incremental Static Regeneration)

6. **SEO**
   - Dynamic metadata
   - Open Graph tags
   - Structured data

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- PostgreSQL database (or use Supabase/Neon for hosted DB)

### Getting Started

1. **Clone and install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/resumematch"

   # AI Provider (choose one)
   OPENAI_API_KEY="your-openai-api-key"
   # or
   ANTHROPIC_API_KEY="your-anthropic-api-key"

   # Authentication
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"

   # File Upload (if using cloud storage)
   UPLOAD_MAX_SIZE="10485760" # 10MB
   ```

3. **Set up database:**

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

4. **Run development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 🗄️ Database Schema (Prisma)

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  resumes   Resume[]
}

model Resume {
  id              String   @id @default(cuid())
  userId          String
  user            User     @relation(fields: [userId], references: [id])
  originalFile    String   // File path or URL
  jobDescription  String
  tailoredContent String?  // AI-generated tailored resume
  recommendations String?  // AI recommendations
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}
```

## 🚧 Development Roadmap

### Phase 1: Foundation (Week 1-2)

- [ ] Set up Next.js project with TypeScript
- [ ] Configure Prisma and database
- [ ] Implement authentication (Clerk or NextAuth)
- [ ] Create basic UI layout and routing

### Phase 2: Core Features (Week 3-4)

- [ ] File upload functionality
- [ ] Resume parsing (PDF/DOCX)
- [ ] Job description input form
- [ ] Basic dashboard UI

### Phase 3: AI Integration (Week 5-6)

- [ ] Integrate AI SDK (OpenAI/Anthropic)
- [ ] Implement streaming AI responses
- [ ] Resume tailoring logic
- [ ] Recommendations generation

### Phase 4: Polish & Deploy (Week 7-8)

- [ ] Error handling and validation
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Testing
- [ ] Deploy to Vercel

## 📚 Key Learning Outcomes

By building this project, you'll master:

- ✅ Server vs Client component decision-making
- ✅ Streaming responses for long-running AI operations
- ✅ File upload handling in Next.js
- ✅ Authentication patterns
- ✅ Database operations with Prisma
- ✅ Error handling and loading states
- ✅ Type-safe API calls
- ✅ Performance optimization techniques
- ✅ SEO best practices

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [React Hook Form](https://react-hook-form.com/)
- [TanStack Query](https://tanstack.com/query)
- [Zustand](https://zustand.docs.pmnd.rs/)

## 📝 License

This project is part of a learning roadmap for transitioning from Frontend to Full-Stack development.

---

**Built with Next.js 15** | **TypeScript** | **Tailwind CSS**
