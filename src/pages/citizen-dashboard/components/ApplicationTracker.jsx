import React from "react";
import Icon from "../../../components/AppIcon";

const ApplicationTracker = ({ applications }) => {
  const statusConfig = {
    pending: { color: "warning", icon: "Clock", label: "Pending Review" },
    processing: { color: "primary", icon: "RefreshCw", label: "Processing" },
    approved: { color: "success", icon: "CheckCircle", label: "Approved" },
    rejected: { color: "error", icon: "XCircle", label: "Rejected" },
  };

  return (
    <div className="civic-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Application Tracking
        </h2>
        <button className="text-sm text-primary hover:underline font-medium">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {applications?.map((app) => {
          const config = statusConfig?.[app?.status];
          return (
            <div
              key={app?.id}
              className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-lg bg-${config?.color}/10 flex items-center justify-center flex-shrink-0`}
              >
                <Icon
                  name={config?.icon}
                  size={20}
                  className={`text-${config?.color}`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-medium text-foreground truncate">
                    {app?.title}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full bg-${config?.color}/10 text-${config?.color} whitespace-nowrap ml-2`}
                  >
                    {config?.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {app?.description}
                </p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>Submitted: {app?.submittedDate}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Hash" size={14} />
                    <span>{app?.applicationId}</span>
                  </span>
                </div>
                {app?.progress && (
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-foreground">
                        {app?.progress}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${config?.color} transition-all duration-500`}
                        style={{ width: `${app?.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApplicationTracker;
