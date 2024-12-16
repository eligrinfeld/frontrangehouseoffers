import { Button } from "@/components/ui/button";

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
            Sell Your Colorado Home with Confidence
          </h1>
          <p className="text-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Get a guaranteed fair cash offer within 24 hours. Skip the repairs, avoid realtor fees, and choose your closing date. We make selling your home simple and stress-free.
          </p>
          <div className="space-x-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Cash Offer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;