import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DollarSign, Clock, Target, Shield, Lightbulb } from "lucide-react";

interface BenefitsProps {
  targetUrl: string;
}

const Benefits = ({ targetUrl }: BenefitsProps) => {
  const handleCTA = () => {
    window.open(targetUrl, '_blank');
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Completely Free",
      description: "No hidden costs, no premium features locked away. Everything you need is absolutely free forever.",
      comparison: "vs. $50+ for professional writing services"
    },
    {
      icon: Clock,
      title: "Save 90% of Your Time",
      description: "What takes hours of writing and editing can be done in under 3 minutes with our AI technology.",
      comparison: "vs. 2-4 hours of manual writing"
    },
    {
      icon: Target,
      title: "Higher Interview Success Rate",
      description: "Users report 3x more interview callbacks when using our AI-generated, ATS-optimized cover letters.",
      comparison: "vs. generic template letters"
    }
  ];

  const features = [
    "Tailored to specific job descriptions",
    "ATS-friendly formatting",
    "Professional language and tone",
    "Industry-specific templates",
    "Multiple export formats",
    "Instant generation",
    "No registration required",
    "Unlimited usage"
  ];

  return (
    <section className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Our <span className="text-primary">AI Cover Letter Generator</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The smart choice for students, researchers, and professionals who want results
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-sm text-accent font-medium bg-accent/10 rounded-lg p-3">
                  💡 {benefit.comparison}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features List */}
        <div className="bg-background rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Everything You Need in One Place
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Perfect For Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Perfect for Students & Researchers
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Academic position applications</li>
              <li>• Research internship applications</li>
              <li>• Graduate program admissions</li>
              <li>• Fellowship applications</li>
              <li>• Entry-level job searches</li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-primary" />
              Why It Works Better
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• AI understands job requirements</li>
              <li>• Matches your skills to needs</li>
              <li>• Uses proper formatting standards</li>
              <li>• Includes relevant keywords</li>
              <li>• Maintains professional tone</li>
            </ul>
          </Card>
        </div>

        {/* Benefits CTA */}
        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg"
            onClick={handleCTA}
            className="text-lg px-8 py-4"
          >
            Start Using AI Cover Letter Today
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Join 10,000+ users who trust our AI technology
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;