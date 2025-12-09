import React from "react";

import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const DiscussionCard = ({ discussion }) => {
  const getCategoryColor = (category) => {
    const colors = {
      infrastructure:
        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
      safety: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
      environment:
        "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
      education:
        "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
      health:
        "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
      transportation:
        "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
      parks: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
    };
    return colors?.[category] || "bg-muted text-muted-foreground";
  };

  const getTimeAgo = (date) => {
    const now = new Date("2025-12-09T16:33:06");
    const diff = now - new Date(date);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return `${minutes}m ago`;
  };

  return (
    <div className="civic-card p-6 hover:shadow-civic-md transition-all duration-civic-fast">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3 flex-1">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={discussion?.author?.avatar}
              alt={discussion?.author?.avatarAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-semibold text-foreground">
                {discussion?.author?.name}
              </span>
              {discussion?.author?.verified && (
                <Icon
                  name="BadgeCheck"
                  size={16}
                  className="text-primary flex-shrink-0"
                />
              )}
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span>{discussion?.author?.role}</span>
              <span>•</span>
              <span>{getTimeAgo(discussion?.createdAt)}</span>
            </div>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
            discussion?.category
          )}`}
        >
          {discussion?.categoryLabel}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
        {discussion?.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {discussion?.excerpt}
      </p>
      {discussion?.tags && discussion?.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {discussion?.tags?.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
            <Icon name="ThumbsUp" size={18} />
            <span className="text-sm font-medium">{discussion?.likes}</span>
          </button>
          <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
            <Icon name="MessageSquare" size={18} />
            <span className="text-sm font-medium">{discussion?.replies}</span>
          </button>
          <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
            <Icon name="Eye" size={18} />
            <span className="text-sm font-medium">{discussion?.views}</span>
          </button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName="ArrowRight"
          iconPosition="right"
        >
          View Discussion
        </Button>
      </div>
    </div>
  );
};

export default DiscussionCard;
