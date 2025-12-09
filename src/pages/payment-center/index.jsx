import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import PaymentCard from "./components/PaymentCard";
import PaymentHistoryTable from "./components/PaymentHistoryTable";
import PaymentMethodCard from "./components/PaymentMethodCard";
import BudgetOverview from "./components/BudgetOverview";
import UpcomingPayments from "./components/UpcomingPayments";
import PaymentModal from "./components/PaymentModal";

const PaymentCenter = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("pm1");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const pendingPayments = [
    {
      id: "p1",
      title: "Property Tax",
      description: "Annual property tax payment",
      amount: 2450.0,
      dueDate: "12/31/2025",
      status: "pending",
      icon: "Home",
      accountNumber: "PT-2025-001234",
    },
    {
      id: "p2",
      title: "Water & Sewer",
      description: "Quarterly utility bill",
      amount: 185.5,
      dueDate: "12/15/2025",
      status: "pending",
      icon: "Droplet",
      accountNumber: "WS-2025-567890",
    },
    {
      id: "p3",
      title: "Business License",
      description: "Annual business license renewal",
      amount: 350.0,
      dueDate: "01/15/2026",
      status: "pending",
      icon: "Briefcase",
      accountNumber: "BL-2026-112233",
    },
    {
      id: "p4",
      title: "Parking Permit",
      description: "Monthly parking permit",
      amount: 75.0,
      dueDate: "12/01/2025",
      status: "overdue",
      icon: "Car",
      accountNumber: "PP-2025-445566",
    },
  ];

  const paymentHistory = [
    {
      id: "h1",
      date: "11/15/2025",
      description: "Property Tax - Q3 2025",
      reference: "TXN-2025-001234",
      method: "Credit Card",
      amount: 2450.0,
      status: "Completed",
    },
    {
      id: "h2",
      date: "11/01/2025",
      description: "Water & Sewer - October 2025",
      reference: "TXN-2025-001189",
      method: "Bank Transfer",
      amount: 185.5,
      status: "Completed",
    },
    {
      id: "h3",
      date: "10/20/2025",
      description: "Building Permit Fee",
      reference: "TXN-2025-001156",
      method: "Digital Wallet",
      amount: 450.0,
      status: "Completed",
    },
    {
      id: "h4",
      date: "10/05/2025",
      description: "Parking Permit - October 2025",
      reference: "TXN-2025-001123",
      method: "Credit Card",
      amount: 75.0,
      status: "Completed",
    },
    {
      id: "h5",
      date: "09/15/2025",
      description: "Property Tax - Q2 2025",
      reference: "TXN-2025-001089",
      method: "Bank Transfer",
      amount: 2450.0,
      status: "Completed",
    },
  ];

  const paymentMethods = [
    {
      id: "pm1",
      type: "card",
      name: "Visa ending in 4242",
      details: "Expires 12/2026",
      isDefault: true,
    },
    {
      id: "pm2",
      type: "bank",
      name: "Chase Checking",
      details: "Account ****6789",
      isDefault: false,
    },
    {
      id: "pm3",
      type: "wallet",
      name: "PayPal",
      details: "john.doe@email.com",
      isDefault: false,
    },
  ];

  const budgetData = {
    period: "December 2025",
    totalBudget: 5000.0,
    totalSpent: 3560.5,
    categories: [
      {
        id: "c1",
        name: "Property Tax",
        icon: "Home",
        budget: 2500.0,
        spent: 2450.0,
      },
      {
        id: "c2",
        name: "Utilities",
        icon: "Droplet",
        budget: 800.0,
        spent: 556.0,
      },
      {
        id: "c3",
        name: "Permits & Licenses",
        icon: "FileText",
        budget: 1000.0,
        spent: 450.0,
      },
      {
        id: "c4",
        name: "Parking & Transportation",
        icon: "Car",
        budget: 700.0,
        spent: 104.5,
      },
    ],
  };

  const upcomingPayments = [
    {
      id: "up1",
      title: "Water & Sewer",
      description: "Monthly utility bill",
      amount: 185.5,
      dueDate: "12/15/2025",
      icon: "Droplet",
      autoPayEnabled: true,
    },
    {
      id: "up2",
      title: "Property Tax",
      description: "Quarterly payment",
      amount: 2450.0,
      dueDate: "12/31/2025",
      icon: "Home",
      autoPayEnabled: false,
    },
    {
      id: "up3",
      title: "Business License",
      description: "Annual renewal",
      amount: 350.0,
      dueDate: "01/15/2026",
      icon: "Briefcase",
      autoPayEnabled: false,
    },
  ];

  const handlePayNow = (payment) => {
    setSelectedPayment(payment);
    setShowPaymentModal(true);
  };

  const handleViewDetails = (payment) => {
    alert(
      `Viewing details for: ${
        payment?.title
      }\nAmount: $${payment?.amount?.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}\nDue: ${payment?.dueDate}`
    );
  };

  const handleDownloadReceipt = (transaction) => {
    alert(`Downloading receipt for transaction: ${transaction?.reference}`);
  };

  const handleRemovePaymentMethod = (method) => {
    if (confirm(`Are you sure you want to remove ${method?.name}?`)) {
      alert(`Payment method ${method?.name} removed successfully`);
    }
  };

  const handleSetupAutoPay = (payment) => {
    alert(`Setting up auto-pay for: ${payment?.title}`);
  };

  const handleConfirmPayment = (paymentData) => {
    alert(
      `Payment confirmed!\nAmount: $${paymentData?.payment?.amount?.toLocaleString(
        "en-US",
        { minimumFractionDigits: 2, maximumFractionDigits: 2 }
      )}\nMethod: ${
        paymentMethods?.find((m) => m?.id === paymentData?.methodId)?.name
      }`
    );
    setShowPaymentModal(false);
    setSelectedPayment(null);
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "LayoutDashboard" },
    { id: "pending", label: "Pending Payments", icon: "Clock" },
    { id: "history", label: "Payment History", icon: "History" },
    { id: "methods", label: "Payment Methods", icon: "CreditCard" },
    { id: "budget", label: "Budget Planning", icon: "PieChart" },
  ];

  const statusOptions = [
    { value: "all", label: "All Payments" },
    { value: "pending", label: "Pending" },
    { value: "paid", label: "Paid" },
    { value: "overdue", label: "Overdue" },
  ];

  const filteredPayments = pendingPayments?.filter((payment) => {
    const matchesSearch =
      payment?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      payment?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || payment?.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <Helmet>
        <title>Payment Center - MuniConnect</title>
        <meta
          name="description"
          content="Unified financial hub for all municipal transactions with payment history, budget planning, and secure payment processing."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 pt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h1 className="civic-heading-lg text-foreground mb-2">
                Payment Center
              </h1>
              <p className="text-muted-foreground">
                Manage all your municipal payments, track spending, and maintain
                payment methods securely
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
              <div className="civic-card p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Total Due
                  </span>
                  <Icon name="DollarSign" size={20} className="text-error" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  $
                  {pendingPayments
                    ?.reduce((sum, p) => sum + p?.amount, 0)
                    ?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </div>
                <div className="text-xs text-muted-foreground">
                  {pendingPayments?.length} pending payments
                </div>
              </div>

              <div className="civic-card p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Paid This Month
                  </span>
                  <Icon name="CheckCircle" size={20} className="text-success" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  $
                  {paymentHistory
                    ?.slice(0, 3)
                    ?.reduce((sum, p) => sum + p?.amount, 0)
                    ?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </div>
                <div className="text-xs text-muted-foreground">
                  {paymentHistory?.slice(0, 3)?.length} transactions completed
                </div>
              </div>

              <div className="civic-card p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Auto-Pay Active
                  </span>
                  <Icon name="Repeat" size={20} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {upcomingPayments?.filter((p) => p?.autoPayEnabled)?.length}
                </div>
                <div className="text-xs text-muted-foreground">
                  Automated payment schedules
                </div>
              </div>

              <div className="civic-card p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Payment Methods
                  </span>
                  <Icon name="CreditCard" size={20} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {paymentMethods?.length}
                </div>
                <div className="text-xs text-muted-foreground">
                  Saved payment options
                </div>
              </div>
            </div>

            <div className="civic-card mb-6">
              <div className="border-b border-border overflow-x-auto scrollbar-civic">
                <nav className="flex space-x-1 px-4">
                  {tabs?.map((tab) => (
                    <button
                      key={tab?.id}
                      onClick={() => setActiveTab(tab?.id)}
                      className={`flex items-center space-x-2 px-4 py-4 border-b-2 transition-all duration-civic-fast whitespace-nowrap ${
                        activeTab === tab?.id
                          ? "border-primary text-primary font-medium"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon name={tab?.icon} size={18} />
                      <span>{tab?.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-foreground">
                              Pending Payments
                            </h2>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setActiveTab("pending")}
                              iconName="ArrowRight"
                              iconPosition="right"
                            >
                              View All
                            </Button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {pendingPayments?.slice(0, 4)?.map((payment) => (
                              <PaymentCard
                                key={payment?.id}
                                payment={payment}
                                onPay={handlePayNow}
                                onViewDetails={handleViewDetails}
                              />
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-foreground">
                              Recent Transactions
                            </h2>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setActiveTab("history")}
                              iconName="ArrowRight"
                              iconPosition="right"
                            >
                              View All
                            </Button>
                          </div>
                          <PaymentHistoryTable
                            transactions={paymentHistory?.slice(0, 3)}
                            onDownloadReceipt={handleDownloadReceipt}
                          />
                        </div>
                      </div>

                      <div className="space-y-6">
                        <UpcomingPayments
                          payments={upcomingPayments}
                          onSetupAutoPay={handleSetupAutoPay}
                        />

                        <div className="civic-card p-6">
                          <h3 className="text-lg font-semibold text-foreground mb-4">
                            Quick Actions
                          </h3>
                          <div className="space-y-3">
                            <Button
                              variant="outline"
                              fullWidth
                              iconName="Plus"
                              iconPosition="left"
                            >
                              Add Payment Method
                            </Button>
                            <Button
                              variant="outline"
                              fullWidth
                              iconName="Download"
                              iconPosition="left"
                            >
                              Download Tax Summary
                            </Button>
                            <Button
                              variant="outline"
                              fullWidth
                              iconName="Settings"
                              iconPosition="left"
                            >
                              Payment Preferences
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "pending" && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <Input
                          type="search"
                          placeholder="Search payments..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e?.target?.value)}
                        />
                      </div>
                      <div className="sm:w-64">
                        <Select
                          options={statusOptions}
                          value={filterStatus}
                          onChange={setFilterStatus}
                          placeholder="Filter by status"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredPayments?.map((payment) => (
                        <PaymentCard
                          key={payment?.id}
                          payment={payment}
                          onPay={handlePayNow}
                          onViewDetails={handleViewDetails}
                        />
                      ))}
                    </div>

                    {filteredPayments?.length === 0 && (
                      <div className="text-center py-12">
                        <Icon
                          name="Search"
                          size={48}
                          className="text-muted-foreground mx-auto mb-4"
                        />
                        <p className="text-muted-foreground">
                          No payments found matching your criteria
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "history" && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h2 className="text-lg font-semibold text-foreground">
                          Payment History
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Complete record of all transactions
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        iconName="Download"
                        iconPosition="left"
                      >
                        Export History
                      </Button>
                    </div>

                    <PaymentHistoryTable
                      transactions={paymentHistory}
                      onDownloadReceipt={handleDownloadReceipt}
                    />
                  </div>
                )}

                {activeTab === "methods" && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-lg font-semibold text-foreground">
                          Payment Methods
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Manage your saved payment options
                        </p>
                      </div>
                      <Button
                        variant="default"
                        iconName="Plus"
                        iconPosition="left"
                      >
                        Add New Method
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {paymentMethods?.map((method) => (
                        <PaymentMethodCard
                          key={method?.id}
                          method={method}
                          isSelected={selectedPaymentMethod === method?.id}
                          onSelect={(m) => setSelectedPaymentMethod(m?.id)}
                          onRemove={handleRemovePaymentMethod}
                        />
                      ))}
                    </div>

                    <div className="civic-card p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon
                            name="Shield"
                            size={24}
                            className="text-primary"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            Secure Payment Processing
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            All payment methods are encrypted and stored
                            securely using industry-standard PCI-DSS compliance
                            protocols. Your financial information is protected
                            with bank-level security.
                          </p>
                          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <Icon
                                name="Lock"
                                size={14}
                                className="text-success"
                              />
                              <span>256-bit SSL Encryption</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon
                                name="Shield"
                                size={14}
                                className="text-success"
                              />
                              <span>PCI-DSS Compliant</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon
                                name="CheckCircle"
                                size={14}
                                className="text-success"
                              />
                              <span>Government Certified</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "budget" && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <BudgetOverview budgetData={budgetData} />
                    </div>
                    <div className="space-y-6">
                      <UpcomingPayments
                        payments={upcomingPayments}
                        onSetupAutoPay={handleSetupAutoPay}
                      />
                      <div className="civic-card p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4">
                          Budget Tips
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <Icon
                              name="Lightbulb"
                              size={20}
                              className="text-warning flex-shrink-0 mt-0.5"
                            />
                            <div>
                              <div className="font-medium text-foreground text-sm">
                                Enable Auto-Pay
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Never miss a payment deadline
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Icon
                              name="TrendingDown"
                              size={20}
                              className="text-success flex-shrink-0 mt-0.5"
                            />
                            <div>
                              <div className="font-medium text-foreground text-sm">
                                Track Spending
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Monitor your municipal expenses
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Icon
                              name="Bell"
                              size={20}
                              className="text-primary flex-shrink-0 mt-0.5"
                            />
                            <div>
                              <div className="font-medium text-foreground text-sm">
                                Set Reminders
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Get notified before due dates
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />

        {showPaymentModal && selectedPayment && (
          <PaymentModal
            payment={selectedPayment}
            paymentMethods={paymentMethods}
            onClose={() => {
              setShowPaymentModal(false);
              setSelectedPayment(null);
            }}
            onConfirm={handleConfirmPayment}
          />
        )}
      </div>
    </>
  );
};

export default PaymentCenter;
