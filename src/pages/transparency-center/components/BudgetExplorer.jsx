import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const BudgetExplorer = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const budgetData = [
    {
      id: 1,
      department: "Public Safety",
      budget: 45000000,
      spent: 38250000,
      percentage: 35,
      color: "#2563EB",
      icon: "Shield",
      subcategories: [
        { name: "Police Department", amount: 28000000, spent: 23800000 },
        { name: "Fire Department", amount: 15000000, spent: 12750000 },
        { name: "Emergency Services", amount: 2000000, spent: 1700000 },
      ],
    },
    {
      id: 2,
      department: "Infrastructure",
      budget: 32000000,
      spent: 27200000,
      percentage: 25,
      color: "#F59E0B",
      icon: "Construction",
      subcategories: [
        { name: "Road Maintenance", amount: 18000000, spent: 15300000 },
        { name: "Public Buildings", amount: 10000000, spent: 8500000 },
        { name: "Utilities", amount: 4000000, spent: 3400000 },
      ],
    },
    {
      id: 3,
      department: "Education",
      budget: 28000000,
      spent: 23800000,
      percentage: 22,
      color: "#10B981",
      icon: "GraduationCap",
      subcategories: [
        { name: "Schools", amount: 20000000, spent: 17000000 },
        { name: "Libraries", amount: 5000000, spent: 4250000 },
        { name: "Adult Education", amount: 3000000, spent: 2550000 },
      ],
    },
    {
      id: 4,
      department: "Parks & Recreation",
      budget: 12000000,
      spent: 10200000,
      percentage: 9,
      color: "#8B5CF6",
      icon: "Trees",
      subcategories: [
        { name: "Park Maintenance", amount: 7000000, spent: 5950000 },
        { name: "Recreation Programs", amount: 3500000, spent: 2975000 },
        { name: "Community Centers", amount: 1500000, spent: 1275000 },
      ],
    },
    {
      id: 5,
      department: "Administration",
      budget: 11000000,
      spent: 9350000,
      percentage: 9,
      color: "#EC4899",
      icon: "Building2",
      subcategories: [
        { name: "City Management", amount: 6000000, spent: 5100000 },
        { name: "Human Resources", amount: 3000000, spent: 2550000 },
        { name: "IT Services", amount: 2000000, spent: 1700000 },
      ],
    },
  ];

  const totalBudget = budgetData?.reduce((sum, dept) => sum + dept?.budget, 0);
  const totalSpent = budgetData?.reduce((sum, dept) => sum + dept?.spent, 0);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })?.format(amount);
  };

  const chartData = budgetData?.map((dept) => ({
    name: dept?.department,
    value: dept?.budget,
    color: dept?.color,
  }));

  return (
    <div className="bg-card rounded-xl shadow-civic-md p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Budget Explorer
          </h2>
          <p className="text-muted-foreground">Fiscal Year 2024-2025</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Total Budget</p>
          <p className="text-3xl font-bold text-primary">
            {formatCurrency(totalBudget)}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-muted/50 rounded-lg p-4">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry?.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg border border-success/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                <Icon name="TrendingUp" size={20} className="text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-xl font-bold text-foreground">
                  {formatCurrency(totalSpent)}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-success">
                {((totalSpent / totalBudget) * 100)?.toFixed(1)}%
              </p>
              <p className="text-xs text-muted-foreground">of budget</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Icon name="Wallet" size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Remaining</p>
                <p className="text-xl font-bold text-foreground">
                  {formatCurrency(totalBudget - totalSpent)}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">
                {(((totalBudget - totalSpent) / totalBudget) * 100)?.toFixed(1)}
                %
              </p>
              <p className="text-xs text-muted-foreground">available</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {budgetData?.map((dept) => (
          <div
            key={dept?.id}
            className="border border-border rounded-lg overflow-hidden"
          >
            <button
              onClick={() =>
                setSelectedDepartment(
                  selectedDepartment === dept?.id ? null : dept?.id
                )
              }
              className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center space-x-4 flex-1">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${dept?.color}20` }}
                >
                  <Icon
                    name={dept?.icon}
                    size={24}
                    style={{ color: dept?.color }}
                  />
                </div>
                <div className="text-left flex-1">
                  <h3 className="font-semibold text-foreground">
                    {dept?.department}
                  </h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-muted-foreground">
                      Budget: {formatCurrency(dept?.budget)}
                    </span>
                    <span className="text-sm text-success">
                      Spent: {formatCurrency(dept?.spent)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p
                    className="text-2xl font-bold"
                    style={{ color: dept?.color }}
                  >
                    {dept?.percentage}%
                  </p>
                  <p className="text-xs text-muted-foreground">of total</p>
                </div>
                <Icon
                  name={
                    selectedDepartment === dept?.id
                      ? "ChevronUp"
                      : "ChevronDown"
                  }
                  size={20}
                  className="text-muted-foreground"
                />
              </div>
            </button>

            {selectedDepartment === dept?.id && (
              <div className="border-t border-border bg-muted/30 p-4">
                <h4 className="font-semibold text-foreground mb-3">
                  Budget Breakdown
                </h4>
                <div className="space-y-2">
                  {dept?.subcategories?.map((sub, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-card rounded-lg"
                    >
                      <span className="text-sm text-foreground">
                        {sub?.name}
                      </span>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-muted-foreground">
                          {formatCurrency(sub?.amount)}
                        </span>
                        <span className="text-sm font-medium text-success">
                          {formatCurrency(sub?.spent)} spent
                        </span>
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-success rounded-full"
                            style={{
                              width: `${(sub?.spent / sub?.amount) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetExplorer;
