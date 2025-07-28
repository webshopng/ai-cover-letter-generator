import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

const Index = () => {
  const TOOL_CONFIG = {
    toolName: "AI Cover Letter Generator",
    targetUrl: "https://aifreeforever.com/tools/cover-letter",
    toolType: "Generator",
    primaryKeyword: "APA Reference Generator",
    targetAudience: "Students and Researchers"
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero 
        toolName={TOOL_CONFIG.toolName}
        targetUrl={TOOL_CONFIG.targetUrl}
      />
      <Features targetUrl={TOOL_CONFIG.targetUrl} />
      <HowItWorks targetUrl={TOOL_CONFIG.targetUrl} />
      <Benefits targetUrl={TOOL_CONFIG.targetUrl} />
      <SocialProof targetUrl={TOOL_CONFIG.targetUrl} />
      <Footer targetUrl={TOOL_CONFIG.targetUrl} />
    </div>
  );
};

export default Index;
