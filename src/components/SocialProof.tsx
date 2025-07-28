import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote, Award, TrendingUp } from "lucide-react";

interface SocialProofProps {
  targetUrl: string;
}

const SocialProof = ({ targetUrl }: SocialProofProps) => {
  const handleCTA = () => {
    window.open(targetUrl, '_blank');
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Graduate Student, Computer Science",
      content: "This AI cover letter generator helped me land interviews at 3 major tech companies. The personalization is incredible!",
      rating: 5
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Research Fellow, Biology",
      content: "As a researcher applying for academic positions, I needed something that understood the nuances. This tool delivered perfectly.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Recent Graduate, Marketing",
      content: "I was struggling with cover letters for months. This tool generated better letters in minutes than I could write in hours.",
      rating: 5
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      number: "50,000+",
      label: "Cover Letters Generated",
      description: "Trusted by job seekers worldwide"
    },
    {
      icon: Award,
      number: "3x",
      label: "Higher Interview Rate",
      description: "Compared to generic templates"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "User Satisfaction",
      description: "Based on user feedback"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Trusted by <span className="text-primary">10,000+</span> Job Seekers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what students, researchers, and professionals are saying about our AI cover letter generator
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold">{stat.label}</div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">What Our Users Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-muted/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Join the Success Stories
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Thousands of students and researchers have already boosted their job application success. 
            Start creating professional cover letters that get results.
          </p>
          <Button 
            variant="cta" 
            size="lg"
            onClick={handleCTA}
            className="text-lg px-8 py-4 mb-4"
          >
            Try AI Cover Letter Now - Free
          </Button>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>100% Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;