import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Clock, Target, Users, FileText, Sparkles } from "lucide-react";

interface FeaturesProps {
  targetUrl: string;
}

const Features = ({ targetUrl }: FeaturesProps) => {
  const handleFeatureCTA = () => {
    window.open(targetUrl, '_blank');
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "Our advanced AI analyzes job descriptions and creates tailored cover letters that match specific role requirements.",
      highlight: "Smart matching technology"
    },
    {
      icon: Clock,
      title: "Generate in Under 30 Seconds",
      description: "Save hours of writing time. Input your details and get a professional cover letter instantly.",
      highlight: "Lightning-fast results"
    },
    {
      icon: Target,
      title: "ATS-Optimized Format",
      description: "Ensure your cover letter passes Applicant Tracking Systems with our optimized formatting and keyword integration.",
      highlight: "Beat the robots"
    },
    {
      icon: Users,
      title: "Industry-Specific Templates",
      description: "Choose from templates designed for different industries and career levels, from entry-level to executive positions.",
      highlight: "Perfect for any field"
    },
    {
      icon: FileText,
      title: "Multiple Export Formats",
      description: "Download your cover letter in PDF, Word, or plain text format. Compatible with all job application systems.",
      highlight: "Universal compatibility"
    },
    {
      icon: Sparkles,
      title: "Professional Language",
      description: "Our AI uses professional, engaging language that showcases your skills and enthusiasm effectively.",
      highlight: "Stand out from the crowd"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features That Make You{" "}
            <span className="text-primary">Stand Out</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create compelling cover letters that get you interviews
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <div className="text-sm text-accent font-medium mb-3">
                  {feature.highlight}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature CTA */}
        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg"
            onClick={handleFeatureCTA}
            className="text-lg px-8 py-4"
          >
            Start Using AI Cover Letter Today
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Join thousands of successful job seekers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;