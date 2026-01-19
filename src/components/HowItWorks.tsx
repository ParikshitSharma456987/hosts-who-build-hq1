import { ArrowRight, CheckCircle2, Lightbulb, Rocket, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Join the Community",
    description: "Click the WhatsApp link and become part of our growing network of hosts",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Learn from Real Hosts",
    description: "Access shared experiences, best practices, and proven frameworks",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Apply the Frameworks",
    description: "Implement what you learn to optimize your listings and operations",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Scale to Superhost",
    description: "Grow your portfolio and achieve Superhost status consistently",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-primary scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Your Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            How It Works
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Your path from new host to industry leader, simplified
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-navy-700/50 rounded-2xl p-6 border border-navy-600 hover:border-gold-500/30 transition-all duration-300 h-full">
                <div className="text-gold-400 font-bold text-5xl opacity-20 mb-4">
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-navy-900" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">{step.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow connector (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-gold-400/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
