import { BookOpen, DollarSign, Lock, MessageSquare, TrendingUp, Users } from "lucide-react";

const benefits = [
  {
    icon: MessageSquare,
    title: "Real Experiences Shared",
    description: "Learn from hosts who've been through it all—the wins, the challenges, and the lessons",
  },
  {
    icon: BookOpen,
    title: "Best Practices & Frameworks",
    description: "Proven systems for pricing, guest communication, and operations excellence",
  },
  {
    icon: Users,
    title: "Community of Builders",
    description: "Connect with ambitious hosts who think like operators, not hobbyists",
  },
  {
    icon: TrendingUp,
    title: "Learning Content for Scaling",
    description: "Step-by-step guides to grow from one listing to a portfolio",
  },
  {
    icon: DollarSign,
    title: "Investment Opportunities",
    description: "Invest in or raise capital for Airbnb businesses within the community",
  },
  {
    icon: Lock,
    title: "Privacy-First Community",
    description: "Your phone number stays hidden unless you choose to join discussion groups",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-wider mb-4">
            Member Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From day-one guidance to advanced scaling strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-card rounded-2xl p-6 border border-border overflow-hidden hover:border-gold-500/30 transition-all duration-300 hover:shadow-xl"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-all duration-300">
                  <benefit.icon className="w-6 h-6 text-foreground group-hover:text-navy-900" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
