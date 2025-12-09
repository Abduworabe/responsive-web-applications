import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const PermitTypesSection = ({ onApplyPermit }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Permits", icon: "Grid3x3" },
    { id: "construction", label: "Construction", icon: "HardHat" },
    { id: "food", label: "Food Service", icon: "UtensilsCrossed" },
    { id: "retail", label: "Retail", icon: "ShoppingBag" },
    { id: "professional", label: "Professional", icon: "Briefcase" },
  ];

  const permits = [
    {
      id: 1,
      name: "Business License",
      category: "all",
      description:
        "General business operation license required for all businesses",
      processingTime: "5-7 business days",
      fee: "$150",
      requirements: ["Business plan", "Tax ID", "Proof of address"],
      icon: "FileCheck",
      color: "text-blue-600",
    },
    {
      id: 2,
      name: "Building Permit",
      category: "construction",
      description:
        "Required for construction, renovation, or structural modifications",
      processingTime: "10-14 business days",
      fee: "$500",
      requirements: [
        "Architectural plans",
        "Engineering report",
        "Site survey",
      ],
      icon: "Building",
      color: "text-emerald-600",
    },
    {
      id: 3,
      name: "Food Service License",
      category: "food",
      description:
        "Mandatory for restaurants, cafes, and food service establishments",
      processingTime: "7-10 business days",
      fee: "$300",
      requirements: ["Health inspection", "Food handler certification", "Menu"],
      icon: "UtensilsCrossed",
      color: "text-amber-600",
    },
    {
      id: 4,
      name: "Retail Sales Permit",
      category: "retail",
      description:
        "Required for businesses selling goods directly to consumers",
      processingTime: "3-5 business days",
      fee: "$200",
      requirements: [
        "Business license",
        "Sales tax registration",
        "Lease agreement",
      ],
      icon: "ShoppingCart",
      color: "text-purple-600",
    },
    {
      id: 5,
      name: "Sign Permit",
      category: "construction",
      description: "Required for installing or modifying business signage",
      processingTime: "5-7 business days",
      fee: "$100",
      requirements: ["Sign design", "Location map", "Property owner consent"],
      icon: "MessageSquare",
      color: "text-rose-600",
    },
    {
      id: 6,
      name: "Professional License",
      category: "professional",
      description:
        "Required for professional services like consulting, legal, medical",
      processingTime: "7-10 business days",
      fee: "$250",
      requirements: [
        "Professional credentials",
        "Insurance proof",
        "Background check",
      ],
      icon: "Award",
      color: "text-cyan-600",
    },
  ];

  const filteredPermits =
    selectedCategory === "all"
      ? permits
      : permits?.filter((p) => p?.category === selectedCategory);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Permits & Licenses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our comprehensive catalog of business permits and licenses
            with clear requirements and processing times.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category?.id
                  ? "bg-primary text-primary-foreground shadow-civic-md"
                  : "bg-card text-foreground hover:bg-muted"
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span>{category?.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {filteredPermits?.map((permit) => (
            <div key={permit?.id} className="civic-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${permit?.color}`}
                  >
                    <Icon name={permit?.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {permit?.name}
                    </h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {permit?.processingTime}
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        {permit?.fee}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {permit?.description}
              </p>

              <div className="mb-4">
                <div className="text-sm font-semibold text-foreground mb-2">
                  Required Documents:
                </div>
                <div className="flex flex-wrap gap-2">
                  {permit?.requirements?.map((req, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-sm text-foreground"
                    >
                      <Icon
                        name="CheckCircle2"
                        size={14}
                        className="mr-1 text-success"
                      />
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                variant="default"
                fullWidth
                iconName="FileText"
                iconPosition="left"
                onClick={() => onApplyPermit(permit?.id)}
              >
                Apply for {permit?.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PermitTypesSection;
