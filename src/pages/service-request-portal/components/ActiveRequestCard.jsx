import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ActiveRequestCard = ({ request, onViewDetails }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "text-warning bg-warning/10 border-warning/20";
      case "in-progress":
        return "text-primary bg-primary/10 border-primary/20";
      case "resolved":
        return "text-success bg-success/10 border-success/20";
      case "rejected":
        return "text-error bg-error/10 border-error/20";
      default:
        return "text-muted-foreground bg-muted border-border";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return "Clock";
      case "in-progress":
        return "Loader";
      case "resolved":
        return "CheckCircle";
      case "rejected":
        return "XCircle";
      default:
        return "AlertCircle";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="civic-card p-5 hover:shadow-civic-md transition-all duration-civic-fast">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xs font-medium text-muted-foreground">
              #{request?.id}
            </span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                request?.status
              )}`}
            >
              <Icon
                name={getStatusIcon(request?.status)}
                size={12}
                className="inline mr-1"
              />
              {request?.status?.replace("-", " ")?.toUpperCase()}
            </span>
          </div>
          <h3 className="text-base font-semibold text-foreground mb-1">
            {request?.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {request?.description}
          </p>
        </div>
      </div>
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Category:</span>
          <span className="font-medium text-foreground">
            {request?.category}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Location:</span>
          <span className="font-medium text-foreground">
            {request?.location}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Submitted:</span>
          <span className="font-medium text-foreground">
            {formatDate(request?.submittedDate)}
          </span>
        </div>
        {request?.estimatedResolution && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Est. Resolution:</span>
            <span className="font-medium text-foreground">
              {formatDate(request?.estimatedResolution)}
            </span>
          </div>
        )}
      </div>
      {request?.progress && (
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>Progress</span>
            <span>{request?.progress}%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${request?.progress}%` }}
            />
          </div>
        </div>
      )}
      <div className="flex items-center space-x-2 pt-4 border-t border-border">
        <Button
          variant="outline"
          size="sm"
          fullWidth
          onClick={() => onViewDetails(request)}
        >
          View Details
        </Button>
        <Button variant="ghost" size="icon">
          <Icon name="MessageSquare" size={18} />
        </Button>
        <Button variant="ghost" size="icon">
          <Icon name="Share2" size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ActiveRequestCard;
