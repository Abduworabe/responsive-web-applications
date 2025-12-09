import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const PaymentMethodCard = ({ method, isSelected, onSelect, onRemove }) => {
  const getMethodIcon = (type) => {
    switch (type) {
      case "card":
        return "CreditCard";
      case "bank":
        return "Building2";
      case "wallet":
        return "Wallet";
      default:
        return "DollarSign";
    }
  };

  return (
    <div
      className={`civic-card p-4 cursor-pointer transition-all duration-civic-fast ${
        isSelected
          ? "ring-2 ring-primary shadow-civic-md"
          : "hover:shadow-civic-sm"
      }`}
      onClick={() => onSelect(method)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              isSelected
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            <Icon name={getMethodIcon(method?.type)} size={20} />
          </div>
          <div>
            <div className="font-medium text-foreground">{method?.name}</div>
            <div className="text-sm text-muted-foreground">
              {method?.details}
            </div>
          </div>
        </div>
        {isSelected && (
          <Icon name="CheckCircle" size={20} className="text-primary" />
        )}
      </div>
      {method?.isDefault && (
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Star" size={14} className="text-warning" />
          <span className="text-xs font-medium text-warning">
            Default Payment Method
          </span>
        </div>
      )}
      <div className="flex space-x-2">
        {!method?.isDefault && (
          <Button
            variant="ghost"
            size="sm"
            fullWidth
            onClick={(e) => {
              e?.stopPropagation();
              onRemove(method);
            }}
            iconName="Trash2"
            iconPosition="left"
          >
            Remove
          </Button>
        )}
      </div>
    </div>
  );
};

export default PaymentMethodCard;
