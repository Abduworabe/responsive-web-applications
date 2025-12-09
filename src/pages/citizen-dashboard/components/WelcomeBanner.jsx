import React from "react";
import Icon from "../../../components/AppIcon";

const WelcomeBanner = ({ userName, lastLogin }) => {
  const getGreeting = () => {
    const hour = new Date()?.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="civic-card p-6 bg-gradient-to-br from-primary to-secondary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              {getGreeting()}, {userName}!
            </h1>
            <p className="text-primary-foreground/80 text-sm">
              Welcome to your MuniConnect dashboard. Your city, simplified.
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <Icon name="User" size={24} color="white" />
          </div>
        </div>

        <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} color="white" />
            <span>Last login: {lastLogin}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={16} color="white" />
            <span>Downtown District</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
