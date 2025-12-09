import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const CommunityUpdates = ({ updates }) => {
  const getCategoryIcon = (category) => {
    const icons = {
      announcement: "Megaphone",
      event: "Calendar",
      alert: "AlertCircle",
      news: "Newspaper",
    };
    return icons?.[category] || "Info";
  };

  const getCategoryColor = (category) => {
    const colors = {
      announcement: "primary",
      event: "success",
      alert: "warning",
      news: "accent",
    };
    return colors?.[category] || "primary";
  };

  return (
    <div className="civic-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Community Updates
        </h2>
        <button className="text-sm text-primary hover:underline font-medium">
          See All
        </button>
      </div>
      <div className="space-y-4">
        {updates?.map((update) => {
          const categoryColor = getCategoryColor(update?.category);
          const categoryIcon = getCategoryIcon(update?.category);

          return (
            <div
              key={update?.id}
              className="flex space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              {update?.image && (
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={update?.image}
                    alt={update?.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <div
                    className={`w-6 h-6 rounded-full bg-${categoryColor}/10 flex items-center justify-center`}
                  >
                    <Icon
                      name={categoryIcon}
                      size={14}
                      className={`text-${categoryColor}`}
                    />
                  </div>
                  <span
                    className={`text-xs font-medium text-${categoryColor} uppercase`}
                  >
                    {update?.category}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">
                    {update?.timestamp}
                  </span>
                </div>
                <h3 className="font-medium text-foreground mb-1 line-clamp-1">
                  {update?.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {update?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommunityUpdates;
