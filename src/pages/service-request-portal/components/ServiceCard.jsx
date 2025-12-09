import React from "react";

import Icon from "../../../components/AppIcon";

const ServiceCard = ({ service, onSelect }) => {
  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "high":
        return "text-error bg-error/10 border-error/20";
      case "medium":
        return "text-warning bg-warning/10 border-warning/20";
      case "low":
        return "text-success bg-success/10 border-success/20";
      default:
        return "text-muted-foreground bg-muted border-border";
    }
  };

  return (
    <div
      onClick={() => onSelect(service)}
      className="civic-card p-6 cursor-pointer hover:shadow-civic-md transition-all duration-civic-fast group"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-lg ${service?.color} flex items-center justify-center shadow-civic-sm group-hover:scale-110 transition-transform duration-civic-fast`}
        >
          <Icon name={service?.icon} size={24} color="white" />
        </div>
        {service?.urgency && (
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(
              service?.urgency
            )}`}
          >
            {service?.urgency?.charAt(0)?.toUpperCase() +
              service?.urgency?.slice(1)}{" "}
            Priority
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {service?.name}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {service?.description}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={14} />
            <span>{service?.avgResolutionTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={14} />
            <span>{service?.requestsThisMonth} requests</span>
          </div>
        </div>
        <Icon
          name="ArrowRight"
          size={18}
          className="text-primary group-hover:translate-x-1 transition-transform"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
