import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Upload, Settings, Download, FileText } from "lucide-react";

interface HowItWorksProps {
  targetUrl: string;
}

const HowItWorks = ({ targetUrl }: HowItWorksProps) => {
  const handleCTA = () => {
    window.open(targetUrl, '_blank');
  };

  const steps = [
    {
      step: "01",
      icon: Upload,
      title: "Input Your Information",
      description: "Enter your personal details, job title, company name, and key skills. Paste the job description for best results.",
      time: "30 seconds"
    },
    {
      step: "02",
      icon: Settings,
      title: "AI Processes & Personalizes",
      description: "Our AI analyzes the job requirements and crafts a personalized cover letter that highlights your relevant experience.",
      time: "15 seconds"
    },
    {
      step: "03",
      icon: FileText,
      title: "Review & Customize",
      description: "Review the generated cover letter, make any desired adjustments, and ensure it perfectly matches your voice.",
      time: "2 minutes"
    },
    {
      step: "04",
      icon: Download,
      title: "Download & Apply",
      description: "Download your professional cover letter in your preferred format and submit it with confidence.",
      time: "Instant"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How It Works - <span className="text-primary">Simple as 1-2-3-4</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your professional cover letter in under 3 minutes with our streamlined process
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  {/* Step Number */}
                  <div className="text-4xl font-bold text-primary/20 mb-4">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <CardTitle className="text-lg mb-2">{step.title}</CardTitle>
                  <div className="text-sm text-accent font-medium">
                    ⏱️ {step.time}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary/60" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process CTA */}
        <div className="text-center bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Create Your Perfect Cover Letter?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Join thousands of job seekers who have successfully landed interviews using our AI cover letter generator.
          </p>
          <Button 
            variant="cta" 
            size="lg"
            onClick={handleCTA}
            className="text-lg px-8 py-4"
          >
            Try AI Cover Letter Now - Free
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No registration required • Instant results • Professional quality
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;