import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ComplianceCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date()?.getMonth());
  const [selectedYear] = useState(new Date()?.getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      title: "Business License Renewal",
      date: "2025-12-15",
      daysUntil: 6,
      type: "renewal",
      priority: "high",
      description: "Annual business license renewal required",
      fee: "$150",
      icon: "FileCheck",
    },
    {
      id: 2,
      title: "Health Inspection",
      date: "2025-12-20",
      daysUntil: 11,
      type: "inspection",
      priority: "medium",
      description: "Scheduled health and safety inspection",
      fee: "No fee",
      icon: "Shield",
    },
    {
      id: 3,
      title: "Sales Tax Filing",
      date: "2025-12-31",
      daysUntil: 22,
      type: "filing",
      priority: "high",
      description: "Quarterly sales tax return due",
      fee: "Variable",
      icon: "DollarSign",
    },
    {
      id: 4,
      title: "Fire Safety Certificate",
      date: "2026-01-10",
      daysUntil: 32,
      type: "renewal",
      priority: "medium",
      description: "Fire safety certificate renewal",
      fee: "$75",
      icon: "Flame",
    },
    {
      id: 5,
      title: "Signage Permit Renewal",
      date: "2026-01-25",
      daysUntil: 47,
      type: "renewal",
      priority: "low",
      description: "Business signage permit renewal",
      fee: "$50",
      icon: "MessageSquare",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-error/10 border-error/30 text-error";
      case "medium":
        return "bg-warning/10 border-warning/30 text-warning";
      case "low":
        return "bg-success/10 border-success/30 text-success";
      default:
        return "bg-muted border-border text-foreground";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "renewal":
        return "RefreshCw";
      case "inspection":
        return "Search";
      case "filing":
        return "FileText";
      default:
        return "Calendar";
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Compliance Calendar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay on top of renewals, inspections, and regulatory requirements.
            Never miss an important deadline.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="civic-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="AlertCircle" size={24} className="text-error" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">3</div>
              <div className="text-sm text-muted-foreground">
                Urgent Deadlines
              </div>
            </div>

            <div className="civic-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="Clock" size={24} className="text-warning" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">5</div>
              <div className="text-sm text-muted-foreground">
                Upcoming This Month
              </div>
            </div>

            <div className="civic-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="CheckCircle" size={24} className="text-success" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">12</div>
              <div className="text-sm text-muted-foreground">
                Completed This Year
              </div>
            </div>
          </div>

          <div className="civic-card p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">
                {months?.[selectedMonth]} {selectedYear}
              </h3>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ChevronLeft"
                  onClick={() =>
                    setSelectedMonth((prev) => (prev === 0 ? 11 : prev - 1))
                  }
                />
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ChevronRight"
                  onClick={() =>
                    setSelectedMonth((prev) => (prev === 11 ? 0 : prev + 1))
                  }
                />
              </div>
            </div>

            <div className="space-y-4">
              {upcomingDeadlines?.map((deadline) => (
                <div
                  key={deadline?.id}
                  className={`border rounded-lg p-4 transition-all hover:shadow-civic-sm ${getPriorityColor(
                    deadline?.priority
                  )}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center flex-shrink-0">
                        <Icon
                          name={deadline?.icon}
                          size={24}
                          className="text-primary"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-foreground">
                            {deadline?.title}
                          </h4>
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              deadline?.priority === "high"
                                ? "bg-error/20 text-error"
                                : deadline?.priority === "medium"
                                ? "bg-warning/20 text-warning"
                                : "bg-success/20 text-success"
                            }`}
                          >
                            <Icon
                              name={getTypeIcon(deadline?.type)}
                              size={12}
                              className="mr-1"
                            />
                            {deadline?.type?.charAt(0)?.toUpperCase() +
                              deadline?.type?.slice(1)}
                          </span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3">
                          {deadline?.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Icon
                              name="Calendar"
                              size={16}
                              className="text-muted-foreground"
                            />
                            <span className="text-foreground font-medium">
                              {new Date(deadline.date)?.toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Icon
                              name="Clock"
                              size={16}
                              className="text-muted-foreground"
                            />
                            <span className="text-foreground">
                              {deadline?.daysUntil} days remaining
                            </span>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Icon
                              name="DollarSign"
                              size={16}
                              className="text-muted-foreground"
                            />
                            <span className="text-foreground">
                              {deadline?.fee}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2 ml-4">
                      <Button
                        variant="default"
                        size="sm"
                        iconName="ExternalLink"
                        iconPosition="right"
                      >
                        View Details
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="Bell"
                        iconPosition="left"
                      >
                        Set Reminder
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="civic-card p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Bell" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Enable Smart Reminders
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Get email and SMS notifications before important deadlines
                  </p>
                </div>
              </div>
              <Button variant="default" iconName="Settings" iconPosition="left">
                Configure Alerts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCalendar;
