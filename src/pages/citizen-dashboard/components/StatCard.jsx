import React from "react";
import Icon from "../../../components/AppIcon";

const StatCard = ({
  icon,
  label,
  value,
  trend,
  trendValue,
  color = "primary",
}) => {
  const colorClasses = {
    primary: "text-primary bg-primary/10",
    success: "text-success bg-success/10",
    warning: "text-warning bg-warning/10",
    error: "text-error bg-error/10",
  };

  const trendColors = {
    up: "text-success",
    down: "text-error",
    neutral: "text-muted-foreground",
  };

  return (
    <div className="civic-card p-6">
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-lg ${colorClasses?.[color]} flex items-center justify-center`}
        >
          <Icon name={icon} size={24} />
        </div>
        {trend && (
          <div
            className={`flex items-center space-x-1 ${trendColors?.[trend]}`}
          >
            <Icon
              name={
                trend === "up"
                  ? "TrendingUp"
                  : trend === "down"
                  ? "TrendingDown"
                  : "Minus"
              }
              size={16}
            />
            <span className="text-xs font-medium">{trendValue}</span>
          </div>
        )}
      </div>
      <div>
        <p className="text-2xl font-bold text-foreground mb-1">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;
