import { Building2, Home, Palmtree, Sparkles } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "Airbnb Hosts",
    description: "Whether you have one unit or ten, learn to maximize every booking",
  },
  {
    icon: Building2,
    title: "Holiday Home Hosts",
    description: "Turn your vacation property into a consistent income stream",
  },
  {
    icon: Palmtree,
    title: "Resort Operators",
    description: "Scale operations while maintaining exceptional guest experiences",
  },
  {
    icon: Sparkles,
    title: "Aspiring Hosts",
    description: "Get started right with proven frameworks from day one",
  },
];

export const AudienceSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-wider mb-4">
            Who This Is For
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Your Tribe of Builders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're just starting or scaling to new heights, this community is for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group flex items-start gap-5 bg-card rounded-2xl p-6 border border-border hover:border-gold-500/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-gold transition-all duration-300">
                <audience.icon className="w-6 h-6 text-primary-foreground group-hover:text-navy-900" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{audience.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
