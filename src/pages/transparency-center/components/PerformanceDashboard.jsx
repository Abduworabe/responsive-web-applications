import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PerformanceDashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState("service-response");

  const serviceResponseData = [
    { month: "Jan", city: 2.3, regional: 3.1, national: 3.8 },
    { month: "Feb", city: 2.1, regional: 3.0, national: 3.7 },
    { month: "Mar", city: 2.4, regional: 3.2, national: 3.9 },
    { month: "Apr", city: 2.0, regional: 2.9, national: 3.6 },
    { month: "May", city: 1.9, regional: 2.8, national: 3.5 },
    { month: "Jun", city: 1.8, regional: 2.7, national: 3.4 },
  ];

  const citizenSatisfactionData = [
    { month: "Jan", city: 87, regional: 82, national: 78 },
    { month: "Feb", city: 88, regional: 83, national: 79 },
    { month: "Mar", city: 89, regional: 84, national: 80 },
    { month: "Apr", city: 90, regional: 85, national: 81 },
    { month: "May", city: 91, regional: 86, national: 82 },
    { month: "Jun", city: 92, regional: 87, national: 83 },
  ];

  const budgetEfficiencyData = [
    { month: "Jan", city: 94, regional: 89, national: 85 },
    { month: "Feb", city: 95, regional: 90, national: 86 },
    { month: "Mar", city: 96, regional: 91, national: 87 },
    { month: "Apr", city: 95, regional: 90, national: 86 },
    { month: "May", city: 97, regional: 92, national: 88 },
    { month: "Jun", city: 98, regional: 93, national: 89 },
  ];

  const metrics = [
    {
      id: "service-response",
      name: "Service Response Time",
      description: "Average days to resolve citizen service requests",
      icon: "Clock",
      data: serviceResponseData,
      unit: "days",
      trend: "down",
      trendValue: "22%",
      currentValue: "1.8",
      comparison: "vs 2.3 last quarter",
    },
    {
      id: "citizen-satisfaction",
      name: "Citizen Satisfaction",
      description: "Overall satisfaction rating from citizen surveys",
      icon: "ThumbsUp",
      data: citizenSatisfactionData,
      unit: "%",
      trend: "up",
      trendValue: "5.7%",
      currentValue: "92",
      comparison: "vs 87% last quarter",
    },
    {
      id: "budget-efficiency",
      name: "Budget Efficiency",
      description: "Percentage of budget utilized effectively",
      icon: "TrendingUp",
      data: budgetEfficiencyData,
      unit: "%",
      trend: "up",
      trendValue: "4.3%",
      currentValue: "98",
      comparison: "vs 94% last quarter",
    },
  ];

  const keyIndicators = [
    {
      label: "Service Requests Resolved",
      value: "3,847",
      change: "+12.3%",
      trend: "up",
      icon: "CheckCircle",
      color: "text-success",
    },
    {
      label: "Average Resolution Time",
      value: "1.8 days",
      change: "-22%",
      trend: "down",
      icon: "Clock",
      color: "text-primary",
    },
    {
      label: "Citizen Engagement",
      value: "15,234",
      change: "+18.5%",
      trend: "up",
      icon: "Users",
      color: "text-accent",
    },
    {
      label: "Budget Utilization",
      value: "98%",
      change: "+4.3%",
      trend: "up",
      icon: "DollarSign",
      color: "text-success",
    },
  ];

  const departmentPerformance = [
    { name: "Public Safety", score: 94, rank: 1, change: "+3" },
    { name: "Infrastructure", score: 91, rank: 2, change: "+5" },
    { name: "Parks & Recreation", score: 89, rank: 3, change: "+2" },
    { name: "Public Works", score: 87, rank: 4, change: "+1" },
    { name: "Administration", score: 85, rank: 5, change: "-1" },
  ];

  const selectedMetricData = metrics?.find((m) => m?.id === selectedMetric);

  return (
    <div className="bg-card rounded-xl shadow-civic-md p-6 border border-border">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Performance Dashboard
        </h2>
        <p className="text-muted-foreground">
          Compare city metrics against regional and national benchmarks
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {keyIndicators?.map((indicator, idx) => (
          <div
            key={idx}
            className="bg-muted/50 rounded-lg p-4 border border-border"
          >
            <div className="flex items-center justify-between mb-2">
              <div
                className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center`}
              >
                <Icon
                  name={indicator?.icon}
                  size={20}
                  className={indicator?.color}
                />
              </div>
              <div
                className={`flex items-center space-x-1 text-xs font-semibold ${
                  indicator?.trend === "up" ? "text-success" : "text-primary"
                }`}
              >
                <Icon
                  name={
                    indicator?.trend === "up" ? "TrendingUp" : "TrendingDown"
                  }
                  size={14}
                />
                <span>{indicator?.change}</span>
              </div>
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">
              {indicator?.value}
            </p>
            <p className="text-xs text-muted-foreground">{indicator?.label}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {metrics?.map((metric) => (
          <button
            key={metric?.id}
            onClick={() => setSelectedMetric(metric?.id)}
            className={`p-4 rounded-lg border text-left transition-all duration-civic-fast ${
              selectedMetric === metric?.id
                ? "bg-primary text-primary-foreground border-primary shadow-civic-sm"
                : "bg-card text-foreground border-border hover:bg-muted"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  selectedMetric === metric?.id
                    ? "bg-primary-foreground/20"
                    : "bg-primary/10"
                }`}
              >
                <Icon
                  name={metric?.icon}
                  size={24}
                  className={
                    selectedMetric === metric?.id
                      ? "text-primary-foreground"
                      : "text-primary"
                  }
                />
              </div>
              <div
                className={`flex items-center space-x-1 text-xs font-semibold ${
                  selectedMetric === metric?.id
                    ? "text-primary-foreground"
                    : metric?.trend === "up"
                    ? "text-success"
                    : "text-primary"
                }`}
              >
                <Icon
                  name={metric?.trend === "up" ? "TrendingUp" : "TrendingDown"}
                  size={14}
                />
                <span>{metric?.trendValue}</span>
              </div>
            </div>
            <h3 className="font-semibold mb-1">{metric?.name}</h3>
            <p
              className={`text-xs mb-2 ${
                selectedMetric === metric?.id
                  ? "text-primary-foreground/80"
                  : "text-muted-foreground"
              }`}
            >
              {metric?.description}
            </p>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold">{metric?.currentValue}</span>
              <span className="text-xs">{metric?.unit}</span>
            </div>
            <p
              className={`text-xs mt-1 ${
                selectedMetric === metric?.id
                  ? "text-primary-foreground/70"
                  : "text-muted-foreground"
              }`}
            >
              {metric?.comparison}
            </p>
          </button>
        ))}
      </div>
      {selectedMetricData && (
        <div className="bg-muted/50 rounded-lg p-6 mb-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {selectedMetricData?.name} Comparison
            </h3>
            <p className="text-sm text-muted-foreground">
              Last 6 months performance vs regional and national averages
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            {selectedMetric === "service-response" ? (
              <BarChart data={selectedMetricData?.data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--color-border)"
                />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "0.5rem",
                  }}
                />
                <Legend />
                <Bar dataKey="city" fill="#2563EB" name="Our City" />
                <Bar
                  dataKey="regional"
                  fill="#F59E0B"
                  name="Regional Average"
                />
                <Bar
                  dataKey="national"
                  fill="#64748B"
                  name="National Average"
                />
              </BarChart>
            ) : (
              <LineChart data={selectedMetricData?.data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--color-border)"
                />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "0.5rem",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="city"
                  stroke="#2563EB"
                  strokeWidth={3}
                  name="Our City"
                />
                <Line
                  type="monotone"
                  dataKey="regional"
                  stroke="#F59E0B"
                  strokeWidth={2}
                  name="Regional Average"
                />
                <Line
                  type="monotone"
                  dataKey="national"
                  stroke="#64748B"
                  strokeWidth={2}
                  name="National Average"
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      )}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Department Performance Rankings
        </h3>
        <div className="space-y-3">
          {departmentPerformance?.map((dept, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
            >
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary">
                  #{dept?.rank}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">
                    {dept?.name}
                  </h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-xs">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        style={{ width: `${dept?.score}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {dept?.score}%
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${
                  dept?.change?.startsWith("+")
                    ? "bg-success/10 text-success"
                    : "bg-error/10 text-error"
                }`}
              >
                <Icon
                  name={dept?.change?.startsWith("+") ? "ArrowUp" : "ArrowDown"}
                  size={14}
                />
                <span>{dept?.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
