import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const PaymentCard = ({ payment, onPay, onViewDetails }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "paid":
        return "bg-success/10 text-success border-success/20";
      case "pending":
        return "bg-warning/10 text-warning border-warning/20";
      case "overdue":
        return "bg-error/10 text-error border-error/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "paid":
        return "CheckCircle";
      case "pending":
        return "Clock";
      case "overdue":
        return "AlertCircle";
      default:
        return "Circle";
    }
  };

  return (
    <div className="civic-card p-6 hover:shadow-civic-md transition-all duration-civic-fast">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon name={payment?.icon} size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{payment?.title}</h3>
            <p className="text-sm text-muted-foreground">
              {payment?.description}
            </p>
          </div>
        </div>
        <div
          className={`px-3 py-1 rounded-lg border flex items-center space-x-2 ${getStatusColor(
            payment?.status
          )}`}
        >
          <Icon name={getStatusIcon(payment?.status)} size={16} />
          <span className="text-xs font-medium capitalize">
            {payment?.status}
          </span>
        </div>
      </div>
      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Amount Due</span>
          <span className="text-xl font-bold text-foreground">
            $
            {payment?.amount?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Due Date</span>
          <span className="text-sm font-medium text-foreground">
            {payment?.dueDate}
          </span>
        </div>
        {payment?.accountNumber && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Account #</span>
            <span className="text-sm font-mono text-foreground">
              {payment?.accountNumber}
            </span>
          </div>
        )}
      </div>
      <div className="flex space-x-3">
        {payment?.status !== "paid" && (
          <Button
            variant="default"
            fullWidth
            onClick={() => onPay(payment)}
            iconName="CreditCard"
            iconPosition="left"
          >
            Pay Now
          </Button>
        )}
        <Button
          variant="outline"
          fullWidth={payment?.status === "paid"}
          onClick={() => onViewDetails(payment)}
          iconName="FileText"
          iconPosition="left"
        >
          Details
        </Button>
      </div>
    </div>
  );
};

export default PaymentCard;
