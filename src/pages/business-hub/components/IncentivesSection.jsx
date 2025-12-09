import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const IncentivesSection = ({ onApplyIncentive }) => {
  const incentivePrograms = [
    {
      id: 1,
      title: "Small Business Grant Program",
      amount: "Up to $50,000",
      type: "Grant",
      description:
        "Non-repayable funding for eligible small businesses to support growth, equipment purchases, and operational expansion.",
      eligibility: [
        "Less than 50 employees",
        "Annual revenue under $5M",
        "Operating for 2+ years",
      ],
      deadline: "2026-03-31",
      icon: "DollarSign",
      color: "from-emerald-500 to-emerald-600",
      status: "Open",
    },
    {
      id: 2,
      title: "Technology Innovation Tax Credit",
      amount: "25% Tax Credit",
      type: "Tax Incentive",
      description:
        "Tax credit for businesses investing in technology infrastructure, software development, and digital transformation initiatives.",
      eligibility: [
        "Technology sector",
        "Minimum $100K investment",
        "Job creation commitment",
      ],
      deadline: "2025-12-31",
      icon: "Laptop",
      color: "from-blue-500 to-blue-600",
      status: "Open",
    },
    {
      id: 3,
      title: "Green Business Initiative",
      amount: "Up to $25,000",
      type: "Rebate",
      description:
        "Rebates for businesses implementing sustainable practices, renewable energy systems, and eco-friendly operations.",
      eligibility: [
        "Environmental certification",
        "Sustainability plan",
        "Energy audit completed",
      ],
      deadline: "2026-06-30",
      icon: "Leaf",
      color: "from-green-500 to-green-600",
      status: "Open",
    },
    {
      id: 4,
      title: "Downtown Revitalization Fund",
      amount: "Up to $100,000",
      type: "Loan",
      description:
        "Low-interest loans for businesses opening or expanding in designated downtown revitalization zones.",
      eligibility: [
        "Downtown location",
        "Facade improvement plan",
        "Job creation goals",
      ],
      deadline: "2026-02-28",
      icon: "Building2",
      color: "from-purple-500 to-purple-600",
      status: "Open",
    },
    {
      id: 5,
      title: "Workforce Training Subsidy",
      amount: "$5,000 per employee",
      type: "Subsidy",
      description:
        "Subsidies for businesses providing professional development and skills training to employees.",
      eligibility: [
        "Training program approval",
        "Minimum 5 employees",
        "Skills gap documentation",
      ],
      deadline: "2025-12-15",
      icon: "GraduationCap",
      color: "from-amber-500 to-amber-600",
      status: "Closing Soon",
    },
    {
      id: 6,
      title: "Export Development Program",
      amount: "Up to $30,000",
      type: "Grant",
      description:
        "Support for businesses expanding into international markets, including market research and trade mission participation.",
      eligibility: [
        "Export readiness",
        "International business plan",
        "Product/service validation",
      ],
      deadline: "2026-04-30",
      icon: "Globe",
      color: "from-cyan-500 to-cyan-600",
      status: "Open",
    },
  ];

  const getStatusBadge = (status) => {
    if (status === "Closing Soon") {
      return "bg-error/10 text-error border-error/30";
    }
    return "bg-success/10 text-success border-success/30";
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Business Incentives & Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore available grants, tax incentives, and funding programs
            designed to help your business grow and succeed.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "DollarSign",
                label: "Total Funding",
                value: "$2.5M+",
                color: "text-emerald-600",
              },
              {
                icon: "TrendingUp",
                label: "Businesses Funded",
                value: "450+",
                color: "text-blue-600",
              },
              {
                icon: "Award",
                label: "Active Programs",
                value: "12",
                color: "text-purple-600",
              },
              {
                icon: "Users",
                label: "Jobs Created",
                value: "1,200+",
                color: "text-amber-600",
              },
            ]?.map((stat, index) => (
              <div key={index} className="civic-card p-6 text-center">
                <Icon
                  name={stat?.icon}
                  size={32}
                  className={`mx-auto mb-3 ${stat?.color}`}
                />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat?.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {incentivePrograms?.map((program) => (
            <div
              key={program?.id}
              className="civic-card p-6 hover:shadow-civic-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program?.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon name={program?.icon} size={28} color="white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {program?.title}
                    </h3>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-primary">
                        {program?.amount}
                      </span>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(
                          program?.status
                        )}`}
                      >
                        {program?.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-sm font-medium text-foreground">
                  <Icon name="Tag" size={14} className="mr-1" />
                  {program?.type}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {program?.description}
              </p>

              <div className="mb-4">
                <div className="text-sm font-semibold text-foreground mb-2">
                  Eligibility Requirements:
                </div>
                <div className="space-y-2">
                  {program?.eligibility?.map((req, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon
                        name="CheckCircle2"
                        size={16}
                        className="text-success mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-muted-foreground">
                        {req}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>
                    Deadline:{" "}
                    {new Date(program.deadline)?.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <Button
                  variant="default"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={() => onApplyIncentive(program?.id)}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="civic-card p-8 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon name="HelpCircle" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Need Help Finding the Right Program?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our economic development team can help you identify the best
              incentive programs for your business and guide you through the
              application process.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Phone"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Download Program Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncentivesSection;
