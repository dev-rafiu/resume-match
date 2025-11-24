import { Header } from "./components/sections/header";
import { HeroSection } from "./components/sections/hero-section";
import { FeaturesSection } from "./components/sections/features-section";
import { WorkflowSection } from "./components/sections/workflow-section";
import { Footer } from "./components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 sm:px-8 lg:px-12">
        <Header />

        <main className="flex-1 space-y-24 py-16 sm:space-y-32 sm:py-20">
          <HeroSection />
          <FeaturesSection />
          <WorkflowSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
