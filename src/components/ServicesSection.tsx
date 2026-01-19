import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Headphones, PiggyBank } from "lucide-react";

const WHATSAPP_CONTACT_LINK = "https://wa.me/message";

const services = [
  {
    icon: Building,
    title: "Property Management",
    description: "Full-service property management to maximize your rental income while you focus on what matters",
    features: ["Listing optimization", "Guest communication", "Cleaning coordination", "Revenue management"],
  },
  {
    icon: Headphones,
    title: "Co-hosting Virtual Assistant",
    description: "Professional VA support for your hosting operations without the overhead of full-time staff",
    features: ["24/7 guest messaging", "Booking management", "Review responses", "Calendar sync"],
  },
  {
    icon: PiggyBank,
    title: "Investment Partnerships",
    description: "Explore investment opportunities in short-term rental properties with experienced operators",
    features: ["Deal sourcing", "Due diligence", "Partnership structures", "Exit strategies"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-wider mb-4">
            Professional Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Take Your Hosting to the Next Level
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium services for hosts ready to scale or optimize their operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl border border-border p-8 hover:border-gold-500/30 transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-gold transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground group-hover:text-navy-900" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" asChild className="w-full group-hover:border-gold-500 group-hover:text-gold-500">
                <a href={WHATSAPP_CONTACT_LINK} target="_blank" rel="noopener noreferrer" className="gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
