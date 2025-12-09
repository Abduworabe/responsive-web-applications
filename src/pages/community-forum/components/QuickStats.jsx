import React from "react";
import Icon from "../../../components/AppIcon";

const QuickStats = () => {
  const stats = [
    {
      label: "Active Discussions",
      value: "248",
      icon: "MessageSquare",
      change: "+12%",
      changeType: "increase",
    },
    {
      label: "Community Members",
      value: "3,847",
      icon: "Users",
      change: "+8%",
      changeType: "increase",
    },
    {
      label: "Issues Resolved",
      value: "1,234",
      icon: "CheckCircle",
      change: "+15%",
      changeType: "increase",
    },
    {
      label: "Upcoming Events",
      value: "12",
      icon: "Calendar",
      change: "3 this week",
      changeType: "neutral",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats?.map((stat, index) => (
        <div key={index} className="civic-card p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name={stat?.icon} size={20} className="text-primary" />
            </div>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                stat?.changeType === "increase"
                  ? "bg-success/10 text-success"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {stat?.change}
            </span>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">
            {stat?.value}
          </p>
          <p className="text-sm text-muted-foreground">{stat?.label}</p>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
