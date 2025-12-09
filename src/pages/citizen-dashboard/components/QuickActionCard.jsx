import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";

const QuickActionCard = ({
  icon,
  title,
  description,
  path,
  color = "primary",
}) => {
  const colorClasses = {
    primary: "from-primary to-secondary",
    accent: "from-accent to-warning",
    success: "from-success to-emerald-600",
    warning: "from-warning to-amber-600",
  };

  return (
    <Link
      to={path}
      className="civic-card p-6 hover:shadow-civic-md transition-all duration-civic-fast civic-interactive group"
    >
      <div className="flex items-start space-x-4">
        <div
          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClasses?.[color]} flex items-center justify-center shadow-civic-sm group-hover:scale-110 transition-transform duration-civic-fast`}
        >
          <Icon name={icon} size={24} color="white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        <Icon
          name="ChevronRight"
          size={20}
          className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
        />
      </div>
    </Link>
  );
};

export default QuickActionCard;
