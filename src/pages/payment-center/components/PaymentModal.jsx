import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

import Select from "../../../components/ui/Select";
import { Checkbox } from "../../../components/ui/Checkbox";

const PaymentModal = ({ payment, paymentMethods, onClose, onConfirm }) => {
  const [selectedMethod, setSelectedMethod] = useState(
    paymentMethods?.find((m) => m?.isDefault)?.id || ""
  );
  const [saveMethod, setSaveMethod] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    onConfirm({ payment, methodId: selectedMethod, saveMethod });
  };

  const methodOptions = paymentMethods?.map((method) => ({
    value: method?.id,
    label: `${method?.name} - ${method?.details}`,
    description: method?.isDefault ? "Default payment method" : null,
  }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-card rounded-xl shadow-civic-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-civic">
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">
            Complete Payment
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="p-4 rounded-lg bg-muted/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Payment For</span>
              <span className="font-medium text-foreground">
                {payment?.title}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Amount Due</span>
              <span className="text-2xl font-bold text-foreground">
                $
                {payment?.amount?.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Due Date</span>
              <span className="font-medium text-foreground">
                {payment?.dueDate}
              </span>
            </div>
            {payment?.accountNumber && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Account Number
                </span>
                <span className="font-mono text-sm text-foreground">
                  {payment?.accountNumber}
                </span>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <Select
              label="Payment Method"
              description="Choose how you want to pay"
              options={methodOptions}
              value={selectedMethod}
              onChange={setSelectedMethod}
              required
            />

            <div className="p-4 rounded-lg border border-border space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="font-medium text-foreground">
                  Secure Payment Processing
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Your payment information is encrypted and processed securely
                through our PCI-compliant payment gateway. We never store your
                complete card details.
              </p>
            </div>

            <Checkbox
              label="Save this payment method for future use"
              description="Securely store this method for faster checkout"
              checked={saveMethod}
              onChange={(e) => setSaveMethod(e?.target?.checked)}
            />

            <Checkbox
              label="I agree to the terms and conditions"
              description="By proceeding, you authorize this payment and agree to our payment terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e?.target?.checked)}
              required
            />
          </div>

          <div className="flex items-center space-x-3 pt-4 border-t border-border">
            <Button type="button" variant="outline" fullWidth onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              fullWidth
              iconName="Lock"
              iconPosition="left"
              disabled={!agreeTerms}
            >
              Pay $
              {payment?.amount?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
