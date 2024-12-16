import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://frontrangehouseoffers.com/wp-content/uploads/2023/10/Front-Range-House-Offers-Logo-1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            We Buy Houses in Colorado
          </h1>
          <p className="text-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Get a fair cash offer for your home in as little as 24 hours. No repairs, no fees, no hassle.
          </p>
          <div className="space-x-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Get Your Cash Offer</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
              <Link to="/how-it-works">How It Works</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;