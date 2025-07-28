import { Button } from "@/components/ui/button";
import { FileText, Zap, Users } from "lucide-react";

interface HeroProps {
  toolName: string;
  targetUrl: string;
}

const Hero = ({ toolName, targetUrl }: HeroProps) => {
  const handleCTAClick = () => {
    window.open(targetUrl, '_blank');
  };

  return (
    <section className="py-20 px-6 text-center bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Zap className="w-4 h-4" />
          AI-Powered • Free Forever
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Create Professional{" "}
          <span className="text-primary">Cover Letters</span>{" "}
          in Seconds
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Generate compelling, personalized cover letters that stand out to employers. 
          Perfect for students, researchers, and job seekers at any level.
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 mb-10 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>50,000+ Letters Generated</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Trusted by 10,000+ Users</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>Instant Results</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={handleCTAClick}
            className="text-lg px-8 py-4"
          >
            Try AI Cover Letter Now - Free
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleCTAClick}
            className="text-lg px-8 py-4"
          >
            See How It Works
          </Button>
        </div>

        {/* Trust Indicators */}
        <p className="text-sm text-muted-foreground mt-6">
          ✓ No Registration Required • ✓ Instant Download • ✓ ATS-Friendly Format
        </p>
      </div>
    </section>
  );
};

export default Hero;