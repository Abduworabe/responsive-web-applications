import React, { useState } from "react";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import Icon from "../../components/AppIcon";
import BudgetExplorer from "./components/BudgetExplorer";
import ProjectTimeline from "./components/ProjectTimeline";
import PublicRecordsSearch from "./components/PublicRecordsSearch";
import PerformanceDashboard from "./components/PerformanceDashboard";

const TransparencyCenter = () => {
  const [activeTab, setActiveTab] = useState("budget");

  const tabs = [
    { id: "budget", label: "Budget Explorer", icon: "DollarSign" },
    { id: "projects", label: "Project Timeline", icon: "Construction" },
    { id: "records", label: "Public Records", icon: "FileText" },
    { id: "performance", label: "Performance Metrics", icon: "BarChart3" },
  ];

  const stats = [
    {
      label: "Total Budget",
      value: "$128M",
      change: "+8.2%",
      trend: "up",
      icon: "Wallet",
      description: "FY 2024-2025",
    },
    {
      label: "Active Projects",
      value: "47",
      change: "+12",
      trend: "up",
      icon: "Construction",
      description: "In progress",
    },
    {
      label: "Public Documents",
      value: "2,847",
      change: "+234",
      trend: "up",
      icon: "FileText",
      description: "Available online",
    },
    {
      label: "Citizen Satisfaction",
      value: "92%",
      change: "+5.7%",
      trend: "up",
      icon: "ThumbsUp",
      description: "Latest survey",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="bg-gradient-to-br from-primary via-secondary to-primary/80 text-primary-foreground py-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                  <Icon
                    name="Eye"
                    size={28}
                    className="text-primary-foreground"
                  />
                </div>
                <h1 className="text-4xl font-bold">Transparency Center</h1>
              </div>
              <p className="text-xl text-primary-foreground/90 mb-6">
                Open government data, budget visualization, and project tracking
                with complete transparency
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 px-4 py-2 bg-primary-foreground/20 rounded-lg">
                  <Icon name="Shield" size={18} />
                  <span className="text-sm font-medium">Verified Data</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-primary-foreground/20 rounded-lg">
                  <Icon name="Clock" size={18} />
                  <span className="text-sm font-medium">Real-time Updates</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-primary-foreground/20 rounded-lg">
                  <Icon name="Download" size={18} />
                  <span className="text-sm font-medium">
                    Downloadable Reports
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats?.map((stat, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl shadow-civic-sm p-6 border border-border civic-interactive"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon
                      name={stat?.icon}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div
                    className={`flex items-center space-x-1 text-xs font-semibold ${
                      stat?.trend === "up" ? "text-success" : "text-error"
                    }`}
                  >
                    <Icon
                      name={
                        stat?.trend === "up" ? "TrendingUp" : "TrendingDown"
                      }
                      size={14}
                    />
                    <span>{stat?.change}</span>
                  </div>
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">
                  {stat?.value}
                </p>
                <p className="text-sm text-muted-foreground mb-1">
                  {stat?.label}
                </p>
                <p className="text-xs text-muted-foreground">
                  {stat?.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-xl shadow-civic-md border border-border mb-8 overflow-hidden">
            <div className="border-b border-border overflow-x-auto">
              <div className="flex space-x-1 p-2 min-w-max">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-civic-fast whitespace-nowrap ${
                      activeTab === tab?.id
                        ? "bg-primary text-primary-foreground shadow-civic-sm"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon name={tab?.icon} size={20} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              {activeTab === "budget" && <BudgetExplorer />}
              {activeTab === "projects" && <ProjectTimeline />}
              {activeTab === "records" && <PublicRecordsSearch />}
              {activeTab === "performance" && <PerformanceDashboard />}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-xl shadow-civic-md p-6 border border-border">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Government Transparency Award
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    National Recognition 2024
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Recognized for excellence in open government practices and
                citizen engagement through transparent data sharing and
                accessible public records.
              </p>
              <div className="flex items-center space-x-2 text-sm text-success">
                <Icon name="CheckCircle" size={16} />
                <span className="font-medium">
                  Certified by Government Association
                </span>
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-civic-md p-6 border border-border">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Community Impact
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Citizen Engagement Metrics
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Over 15,000 citizens actively engaged with transparency data
                this quarter, resulting in improved community participation and
                informed civic discussions.
              </p>
              <div className="flex items-center space-x-2 text-sm text-primary">
                <Icon name="TrendingUp" size={16} />
                <span className="font-medium">
                  +18.5% increase in engagement
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Bell" size={32} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Stay Informed
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to receive updates on budget changes, new projects,
                and important municipal announcements
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TransparencyCenter;
