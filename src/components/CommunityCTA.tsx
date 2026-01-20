import { Button } from "@/components/ui/button";
import { Lock, MessageCircle, Shield } from "lucide-react";

const WHATSAPP_COMMUNITY_LINK = "https://chat.whatsapp.com/HiQh3q5HY2F4r4nPuzIiFP";

export const CommunityCTA = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-gold opacity-10 rounded-full -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-gold opacity-10 rounded-full translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold">
                <MessageCircle className="w-10 h-10 text-navy-900" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Build Your Hosting Empire?
              </h2>
              
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Join our WhatsApp community of ambitious hosts and start learning from real operators today. It's free, private, and packed with value.
              </p>

              <Button variant="whatsapp" size="xl" asChild className="mb-8">
                <a href={WHATSAPP_COMMUNITY_LINK} target="_blank" rel="noopener noreferrer" className="gap-3">
                  <MessageCircle className="w-5 h-5" />
                  Join WhatsApp Community
                </a>
              </Button>

              {/* Privacy Note */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-gold-500" />
                  <span>Phone numbers hidden</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gold-500" />
                  <span>Privacy first community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
