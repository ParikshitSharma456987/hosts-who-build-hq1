import { Button } from "@/components/ui/button";
import { MessageCircle, Users } from "lucide-react";

const WHATSAPP_COMMUNITY_LINK = "https://chat.whatsapp.com/HiQh3q5HY2F4r4nPuzIiFP";
const WHATSAPP_CONTACT_LINK = "https://wa.me/message";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      {/* Decorative Houses */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 left-0 right-0 w-full h-32 md:h-48 text-navy-800" viewBox="0 0 1440 200" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,200 L0,120 L60,120 L60,80 L80,60 L100,80 L100,120 L160,120 L160,200 Z M200,200 L200,100 L240,100 L240,70 L260,50 L280,70 L280,100 L320,100 L320,200 Z M400,200 L400,130 L450,130 L450,90 L475,65 L500,90 L500,130 L550,130 L550,200 Z M600,200 L600,110 L660,110 L660,75 L690,50 L720,75 L720,110 L780,110 L780,200 Z M850,200 L850,120 L900,120 L900,85 L925,60 L950,85 L950,120 L1000,120 L1000,200 Z M1050,200 L1050,100 L1110,100 L1110,65 L1140,40 L1170,65 L1170,100 L1230,100 L1230,200 Z M1280,200 L1280,130 L1330,130 L1330,95 L1360,70 L1390,95 L1390,130 L1440,130 L1440,200 Z" opacity="0.3"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cream-50/10 backdrop-blur-sm border border-cream-50/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Users className="w-4 h-4 text-gold-400" />
            <span className="text-cream-50 text-sm font-medium">Community of 500+ Hosts</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream-50 mb-6 animate-slide-up">
            Hosts Who{" "}
            <span className="text-gradient-gold">Build</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-cream-100/80 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            The Airbnb & Holiday Homes Community for Hosts Who Want to Build{" "}
            <span className="text-gold-400 font-semibold">Profitable, Well-Run Stays</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href={WHATSAPP_COMMUNITY_LINK} target="_blank" rel="noopener noreferrer" className="gap-3">
                <MessageCircle className="w-5 h-5" />
                Join WhatsApp Community
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href={WHATSAPP_CONTACT_LINK} target="_blank" rel="noopener noreferrer">
                Contact via WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "500+", label: "Active Hosts" },
              { value: "24/7", label: "Community Support" },
              { value: "100%", label: "Privacy First" },
              { value: "Free", label: "To Join" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold-400">{stat.value}</div>
                <div className="text-sm text-cream-100/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-50/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-cream-50/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};
