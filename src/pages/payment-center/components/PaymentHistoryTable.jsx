import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const PaymentHistoryTable = ({ transactions, onDownloadReceipt }) => {
  const getPaymentMethodIcon = (method) => {
    switch (method) {
      case "Credit Card":
        return "CreditCard";
      case "Bank Transfer":
        return "Building2";
      case "Digital Wallet":
        return "Wallet";
      case "Check":
        return "FileText";
      default:
        return "DollarSign";
    }
  };

  return (
    <div className="civic-card overflow-hidden">
      <div className="overflow-x-auto scrollbar-civic">
        <table className="w-full">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                Method
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {transactions?.map((transaction) => (
              <tr
                key={transaction?.id}
                className="hover:bg-muted/30 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                  {transaction?.date}
                </td>
                <td className="px-6 py-4 text-sm text-foreground">
                  <div>
                    <div className="font-medium">
                      {transaction?.description}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {transaction?.reference}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon
                      name={getPaymentMethodIcon(transaction?.method)}
                      size={16}
                      className="text-muted-foreground"
                    />
                    <span className="text-foreground">
                      {transaction?.method}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-foreground">
                  $
                  {transaction?.amount?.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-success/10 text-success border border-success/20">
                    {transaction?.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDownloadReceipt(transaction)}
                    iconName="Download"
                    iconPosition="left"
                  >
                    Receipt
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistoryTable;
