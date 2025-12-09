import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const TownHallCard = ({ townHall }) => {
  const getStatusColor = (status) => {
    const colors = {
      live: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
      upcoming:
        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
      completed:
        "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300",
    };
    return colors?.[status] || "bg-muted text-muted-foreground";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="civic-card p-6">
      <div className="flex items-start justify-between mb-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getStatusColor(
            townHall?.status
          )}`}
        >
          {townHall?.status === "live" && (
            <span className="inline-flex items-center">
              <span className="w-2 h-2 bg-current rounded-full mr-2 animate-pulse" />
              Live Now
            </span>
          )}
          {townHall?.status === "upcoming" && "Upcoming"}
          {townHall?.status === "completed" && "Completed"}
        </span>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Icon name="Bookmark" size={20} />
        </button>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {townHall?.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        {townHall?.description}
      </p>
      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-3 text-sm">
          <Icon name="Calendar" size={18} className="text-muted-foreground" />
          <span className="text-foreground">{formatDate(townHall?.date)}</span>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <Icon name="MapPin" size={18} className="text-muted-foreground" />
          <span className="text-foreground">{townHall?.location}</span>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <Icon name="Users" size={18} className="text-muted-foreground" />
          <span className="text-foreground">
            {townHall?.attendees} registered
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={townHall?.host?.avatar}
            alt={townHall?.host?.avatarAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">
            {townHall?.host?.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {townHall?.host?.title}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {townHall?.status === "live" && (
          <Button
            variant="default"
            fullWidth
            iconName="Video"
            iconPosition="left"
          >
            Join Live Stream
          </Button>
        )}
        {townHall?.status === "upcoming" && (
          <>
            <Button
              variant="default"
              fullWidth
              iconName="Bell"
              iconPosition="left"
            >
              Register
            </Button>
            <Button variant="outline" size="icon">
              <Icon name="Share2" size={18} />
            </Button>
          </>
        )}
        {townHall?.status === "completed" && (
          <Button
            variant="outline"
            fullWidth
            iconName="Play"
            iconPosition="left"
          >
            Watch Recording
          </Button>
        )}
      </div>
    </div>
  );
};

export default TownHallCard;
