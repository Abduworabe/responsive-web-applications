import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";

const ServiceShortcuts = ({ services }) => {
  return (
    <div className="civic-card p-6">
      <h2 className="text-xl font-semibold text-foreground mb-6">
        Quick Services
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {services?.map((service) => (
          <Link
            key={service?.id}
            to={service?.path}
            className="flex flex-col items-center p-4 rounded-lg hover:bg-muted transition-colors civic-interactive group"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Icon name={service?.icon} size={24} className="text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground text-center group-hover:text-primary transition-colors">
              {service?.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceShortcuts;
