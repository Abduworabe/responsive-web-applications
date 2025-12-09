import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const RequestDetailsModal = ({ request, onClose }) => {
  const [activeTab, setActiveTab] = useState("details");

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const timeline = [
    {
      id: 1,
      status: "submitted",
      title: "Request Submitted",
      description:
        "Your service request has been received and logged in our system.",
      date: request?.submittedDate,
      icon: "FileText",
      completed: true,
    },
    {
      id: 2,
      status: "reviewed",
      title: "Under Review",
      description:
        "Our team is reviewing your request and assigning it to the appropriate department.",
      date: new Date(
        new Date(request.submittedDate).getTime() + 86400000
      )?.toISOString(),
      icon: "Eye",
      completed: request?.status !== "pending",
    },
    {
      id: 3,
      status: "in-progress",
      title: "Work in Progress",
      description:
        "The assigned team is actively working on resolving your request.",
      date:
        request?.status === "in-progress" ? new Date()?.toISOString() : null,
      icon: "Wrench",
      completed:
        request?.status === "in-progress" || request?.status === "resolved",
    },
    {
      id: 4,
      status: "resolved",
      title: "Resolved",
      description: "Your request has been successfully completed.",
      date:
        request?.status === "resolved" ? request?.estimatedResolution : null,
      icon: "CheckCircle",
      completed: request?.status === "resolved",
    },
  ];

  const updates = [
    {
      id: 1,
      date: new Date(Date.now() - 172800000)?.toISOString(),
      author: "John Martinez",
      authorRole: "Public Works Supervisor",
      message:
        "We have received your request and assigned it to our street maintenance team. They will assess the situation within 24-48 hours.",
    },
    {
      id: 2,
      date: new Date(Date.now() - 86400000)?.toISOString(),
      author: "Sarah Johnson",
      authorRole: "Field Technician",
      message:
        "Our team has inspected the location. We have scheduled repairs for next Tuesday morning. The work should take approximately 2-3 hours to complete.",
    },
  ];

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={onClose}
      />
      <div className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[90vh] bg-card rounded-xl shadow-civic-lg z-50 overflow-hidden animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="FileText" size={20} color="white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Request #{request?.id}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {request?.category}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex items-center space-x-1 px-6 pt-4 border-b border-border">
            {["details", "timeline", "updates"]?.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {tab?.charAt(0)?.toUpperCase() + tab?.slice(1)}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto scrollbar-civic p-6">
            {activeTab === "details" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(
                      request?.status
                    )}`}
                  >
                    {request?.status?.replace("-", " ")?.toUpperCase()}
                  </span>
                  {request?.progress && (
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-muted-foreground">
                        Progress:
                      </span>
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${request?.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {request?.progress}%
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {request?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {request?.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-xs text-muted-foreground mb-1">
                      Location
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {request?.location}
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-xs text-muted-foreground mb-1">
                      Submitted
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {formatDate(request?.submittedDate)}
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-xs text-muted-foreground mb-1">
                      Category
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {request?.category}
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-xs text-muted-foreground mb-1">
                      Est. Resolution
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {request?.estimatedResolution
                        ? formatDate(request?.estimatedResolution)
                        : "TBD"}
                    </p>
                  </div>
                </div>

                {request?.attachments && request?.attachments?.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Attachments
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {request?.attachments?.map((attachment, index) => (
                        <div
                          key={index}
                          className="relative aspect-video rounded-lg overflow-hidden bg-muted group cursor-pointer"
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Icon
                              name="Image"
                              size={32}
                              className="text-muted-foreground"
                            />
                          </div>
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Icon name="ZoomIn" size={24} color="white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "timeline" && (
              <div className="space-y-6">
                {timeline?.map((item, index) => (
                  <div key={item?.id} className="flex items-start space-x-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        item?.completed
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon name={item?.icon} size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-foreground">
                          {item?.title}
                        </h4>
                        {item?.date && (
                          <span className="text-xs text-muted-foreground">
                            {formatDate(item?.date)}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item?.description}
                      </p>
                    </div>
                    {index < timeline?.length - 1 && (
                      <div
                        className={`absolute left-5 w-0.5 h-12 mt-12 ${
                          item?.completed ? "bg-primary" : "bg-border"
                        }`}
                        style={{ marginLeft: "-0.5rem" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === "updates" && (
              <div className="space-y-4">
                {updates?.map((update) => (
                  <div key={update?.id} className="bg-muted rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-foreground">
                          {update?.author}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {update?.authorRole}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(update?.date)}
                      </span>
                    </div>
                    <p className="text-sm text-foreground">{update?.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-border">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" iconName="MessageSquare">
                Add Comment
              </Button>
              <Button variant="default" iconName="Download">
                Download Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestDetailsModal;
