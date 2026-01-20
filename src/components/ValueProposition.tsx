import { Shield, TrendingUp, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Built by Hosts",
    description: "Real operators sharing real experiences, not theory",
  },
  {
    icon: TrendingUp,
    title: "Proven Frameworks",
    description: "Battle-tested strategies for pricing and operations",
  },
  {
    icon: Zap,
    title: "Actionable Insights",
    description: "From first listing to Superhost in record time",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Phone numbers hidden unless you join discussions",
  },
];

export const ValueProposition = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-wider mb-4">
            Why Join Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built by Hosts, for Hosts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform your short-term rental into a thriving business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-gold-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-navy-900" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
