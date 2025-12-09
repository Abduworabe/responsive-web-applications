import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const UpcomingPayments = ({ payments, onSetupAutoPay }) => {
  const getDaysUntilDue = (dueDate) => {
    const today = new Date("2025-12-09");
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getUrgencyColor = (days) => {
    if (days < 0) return "text-error";
    if (days <= 7) return "text-warning";
    return "text-muted-foreground";
  };

  return (
    <div className="civic-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">
          Upcoming Payments
        </h3>
        <Button
          variant="ghost"
          size="sm"
          iconName="Settings"
          iconPosition="left"
        >
          Manage
        </Button>
      </div>
      <div className="space-y-4">
        {payments?.map((payment) => {
          const daysUntil = getDaysUntilDue(payment?.dueDate);
          return (
            <div
              key={payment?.id}
              className="p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon
                      name={payment?.icon}
                      size={20}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      {payment?.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {payment?.description}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-foreground">
                    $
                    {payment?.amount?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                  <div
                    className={`text-xs font-medium ${getUrgencyColor(
                      daysUntil
                    )}`}
                  >
                    {daysUntil < 0
                      ? "Overdue"
                      : daysUntil === 0
                      ? "Due Today"
                      : `${daysUntil} days`}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="text-sm text-muted-foreground">
                  Due: {payment?.dueDate}
                </div>
                {!payment?.autoPayEnabled && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onSetupAutoPay(payment)}
                    iconName="Repeat"
                    iconPosition="left"
                  >
                    Auto-Pay
                  </Button>
                )}
                {payment?.autoPayEnabled && (
                  <div className="flex items-center space-x-2 text-success">
                    <Icon name="CheckCircle" size={16} />
                    <span className="text-xs font-medium">Auto-Pay Active</span>
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

export default UpcomingPayments;
