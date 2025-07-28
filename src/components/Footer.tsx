import { Button } from "@/components/ui/button";
import { FileText, Zap, Users, ExternalLink } from "lucide-react";

interface FooterProps {
  targetUrl: string;
}

const Footer = ({ targetUrl }: FooterProps) => {
  const handleCTA = () => {
    window.open(targetUrl, '_blank');
  };

  return (
    <footer className="bg-card border-t">
      {/* Final CTA Section */}
      <div className="py-16 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Ready to Get Started?
          </div>
          
          <h2 className="text-4xl font-bold mb-4">
            Create Your Perfect Cover Letter Today
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful job seekers who have transformed their applications with our AI cover letter generator.
          </p>
          
          <Button 
            variant="cta" 
            size="lg"
            onClick={handleCTA}
            className="text-lg px-8 py-4 mb-6"
          >
            Try AI Cover Letter Now - Free
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
          
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Professional Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>10,000+ Happy Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="font-semibold mb-4">AI Cover Letter Generator</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The most advanced AI-powered tool for creating professional cover letters. 
                Trusted by students, researchers, and professionals worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={handleCTA} className="hover:text-foreground transition-colors">
                    Generate Cover Letter
                  </button>
                </li>
                <li>
                  <button onClick={handleCTA} className="hover:text-foreground transition-colors">
                    How It Works
                  </button>
                </li>
                <li>
                  <button onClick={handleCTA} className="hover:text-foreground transition-colors">
                    Templates
                  </button>
                </li>
              </ul>
            </div>

            {/* For Users */}
            <div>
              <h4 className="font-semibold mb-4">Perfect For</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Students & Graduates</li>
                <li>Researchers & Academics</li>
                <li>Job Seekers</li>
                <li>Career Changers</li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold mb-4">Key Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ AI-Powered Generation</li>
                <li>✓ ATS-Optimized Format</li>
                <li>✓ Multiple Export Options</li>
                <li>✓ Industry Templates</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div>
              © 2024 AI Cover Letter Generator. All rights reserved.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <button onClick={handleCTA} className="hover:text-foreground transition-colors">
                Create Cover Letter
              </button>
              <span>•</span>
              <button onClick={handleCTA} className="hover:text-foreground transition-colors">
                Privacy Policy
              </button>
              <span>•</span>
              <button onClick={handleCTA} className="hover:text-foreground transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;