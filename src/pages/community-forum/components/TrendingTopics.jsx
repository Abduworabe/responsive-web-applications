import React from "react";
import Icon from "../../../components/AppIcon";

const TrendingTopics = () => {
  const trendingTopics = [
    { id: 1, title: "New Park Development Plan", posts: 156, trend: "up" },
    {
      id: 2,
      title: "Traffic Light Installation Request",
      posts: 89,
      trend: "up",
    },
    { id: 3, title: "Community Garden Initiative", posts: 67, trend: "up" },
    {
      id: 4,
      title: "Street Lighting Improvements",
      posts: 54,
      trend: "neutral",
    },
    { id: 5, title: "Recycling Program Expansion", posts: 43, trend: "down" },
  ];

  const getTrendIcon = (trend) => {
    if (trend === "up") return { name: "TrendingUp", color: "text-success" };
    if (trend === "down") return { name: "TrendingDown", color: "text-error" };
    return { name: "Minus", color: "text-muted-foreground" };
  };

  return (
    <div className="bg-card rounded-xl border border-border p-4 shadow-civic-sm">
      <h3 className="font-semibold text-foreground mb-4 flex items-center">
        <Icon name="TrendingUp" size={18} className="mr-2 text-primary" />
        Trending Topics
      </h3>
      <div className="space-y-3">
        {trendingTopics?.map((topic, index) => {
          const trendIcon = getTrendIcon(topic?.trend);
          return (
            <button
              key={topic?.id}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-all duration-civic-fast text-left"
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <span className="text-lg font-bold text-muted-foreground">
                  #{index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm truncate">
                    {topic?.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {topic?.posts} posts
                  </p>
                </div>
              </div>
              <Icon
                name={trendIcon?.name}
                size={18}
                className={trendIcon?.color}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingTopics;
