import React from "react";
import Icon from "../../../components/AppIcon";

const QuickActionsGrid = ({ onActionClick }) => {
  const quickActions = [
    {
      id: "new-business",
      icon: "Building2",
      title: "Register New Business",
      description:
        "Start your business registration process with our step-by-step wizard",
      color: "from-blue-500 to-blue-600",
      action: "register",
    },
    {
      id: "permits",
      icon: "FileText",
      title: "Apply for Permits",
      description: "Browse and apply for business permits and licenses",
      color: "from-emerald-500 to-emerald-600",
      action: "permits",
    },
    {
      id: "zoning",
      icon: "Map",
      title: "Check Zoning",
      description: "Verify zoning requirements for your business location",
      color: "from-amber-500 to-amber-600",
      action: "zoning",
    },
    {
      id: "compliance",
      icon: "Shield",
      title: "Compliance Center",
      description: "Track renewals and regulatory requirements",
      color: "from-purple-500 to-purple-600",
      action: "compliance",
    },
    {
      id: "incentives",
      icon: "DollarSign",
      title: "Business Incentives",
      description: "Explore available grants and tax incentive programs",
      color: "from-rose-500 to-rose-600",
      action: "incentives",
    },
    {
      id: "resources",
      icon: "BookOpen",
      title: "Resources & Guides",
      description:
        "Access business guides, templates, and educational materials",
      color: "from-cyan-500 to-cyan-600",
      action: "resources",
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Quick Actions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose what you need to accomplish today. We'll guide you through
            every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {quickActions?.map((action) => (
            <div
              key={action?.id}
              className="civic-card p-6 hover:shadow-civic-lg transition-all duration-300 cursor-pointer group"
              onClick={() => onActionClick(action?.action)}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${action?.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon name={action?.icon} size={28} color="white" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {action?.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {action?.description}
              </p>

              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                <span className="mr-2">Get Started</span>
                <Icon name="ArrowRight" size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActionsGrid;
