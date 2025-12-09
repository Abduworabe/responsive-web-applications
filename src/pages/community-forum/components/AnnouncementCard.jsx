import React from "react";
import Icon from "../../../components/AppIcon";

const AnnouncementCard = ({ announcement }) => {
  const getPriorityColor = (priority) => {
    const colors = {
      urgent: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
      high: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
      normal:
        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    };
    return colors?.[priority] || "bg-muted text-muted-foreground";
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
    <div className="civic-card p-6 border-l-4 border-l-primary">
      <div className="flex items-start justify-between mb-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getPriorityColor(
            announcement?.priority
          )}`}
        >
          {announcement?.priority}
        </span>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Icon name="MoreVertical" size={20} />
        </button>
      </div>
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon name={announcement?.icon} size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {announcement?.title}
          </h3>
          <p className="text-xs text-muted-foreground">
            {announcement?.department}
          </p>
        </div>
      </div>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {announcement?.content}
      </p>
      {announcement?.actionRequired && (
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-4">
          <div className="flex items-start space-x-3">
            <Icon
              name="AlertCircle"
              size={20}
              className="text-accent flex-shrink-0 mt-0.5"
            />
            <div>
              <p className="font-medium text-foreground text-sm mb-1">
                Action Required
              </p>
              <p className="text-xs text-muted-foreground">
                {announcement?.actionDetails}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
          <span className="flex items-center space-x-1">
            <Icon name="Calendar" size={14} />
            <span>{formatDate(announcement?.publishedAt)}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="Eye" size={14} />
            <span>{announcement?.views} views</span>
          </span>
        </div>
        {announcement?.link && (
          <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1 transition-colors">
            <span>Learn More</span>
            <Icon name="ExternalLink" size={14} />
          </button>
        )}
      </div>
    </div>
  );
};

export default AnnouncementCard;
