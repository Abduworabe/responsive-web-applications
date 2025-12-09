import React from "react";
import Icon from "../../../components/AppIcon";

const UpcomingDeadlines = ({ deadlines }) => {
  const getPriorityColor = (priority) => {
    const colors = {
      high: "error",
      medium: "warning",
      low: "success",
    };
    return colors?.[priority] || "primary";
  };

  const getDaysUntil = (date) => {
    const today = new Date();
    const deadline = new Date(date);
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "Overdue";
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    return `${diffDays} days`;
  };

  return (
    <div className="civic-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Upcoming Deadlines
        </h2>
        <Icon name="Bell" size={20} className="text-muted-foreground" />
      </div>
      <div className="space-y-3">
        {deadlines?.map((deadline) => {
          const priorityColor = getPriorityColor(deadline?.priority);
          const daysUntil = getDaysUntil(deadline?.dueDate);

          return (
            <div
              key={deadline?.id}
              className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div
                className={`w-2 h-12 rounded-full bg-${priorityColor} flex-shrink-0`}
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground text-sm truncate">
                  {deadline?.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {deadline?.category}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className={`text-sm font-semibold text-${priorityColor}`}>
                  {daysUntil}
                </p>
                <p className="text-xs text-muted-foreground">
                  {deadline?.dueDate}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingDeadlines;
