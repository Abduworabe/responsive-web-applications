import React from "react";
import Icon from "../../../components/AppIcon";

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { id: "all", label: "All Topics", icon: "Grid3x3", count: 248 },
    {
      id: "infrastructure",
      label: "Infrastructure",
      icon: "Construction",
      count: 67,
    },
    { id: "safety", label: "Public Safety", icon: "Shield", count: 45 },
    { id: "environment", label: "Environment", icon: "Leaf", count: 38 },
    { id: "education", label: "Education", icon: "GraduationCap", count: 29 },
    { id: "health", label: "Health Services", icon: "Heart", count: 24 },
    { id: "transportation", label: "Transportation", icon: "Bus", count: 31 },
    { id: "parks", label: "Parks & Recreation", icon: "Trees", count: 14 },
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-4 shadow-civic-sm">
      <h3 className="font-semibold text-foreground mb-4 flex items-center">
        <Icon name="Filter" size={18} className="mr-2" />
        Categories
      </h3>
      <div className="space-y-1">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-civic-fast ${
              selectedCategory === category?.id
                ? "bg-primary text-primary-foreground shadow-civic-sm"
                : "text-foreground hover:bg-muted"
            }`}
          >
            <div className="flex items-center space-x-3">
              <Icon name={category?.icon} size={18} />
              <span className="font-medium text-sm">{category?.label}</span>
            </div>
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full ${
                selectedCategory === category?.id
                  ? "bg-primary-foreground/20"
                  : "bg-muted"
              }`}
            >
              {category?.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
