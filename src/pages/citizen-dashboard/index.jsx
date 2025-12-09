import React from "react";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import WelcomeBanner from "./components/WelcomeBanner";
import SearchBar from "./components/SearchBar";
import QuickActionCard from "./components/QuickActionCard";
import StatCard from "./components/StatCard";
import ApplicationTracker from "./components/ApplicationTracker";
import UpcomingDeadlines from "./components/UpcomingDeadlines";
import CommunityUpdates from "./components/CommunityUpdates";
import ServiceShortcuts from "./components/ServiceShortcuts";

const CitizenDashboard = () => {
  const quickActions = [
    {
      id: 1,
      icon: "FileText",
      title: "Submit Service Request",
      description: "Report issues or request municipal services",
      path: "/service-request-portal",
      color: "primary",
    },
    {
      id: 2,
      icon: "CreditCard",
      title: "Pay Bills & Taxes",
      description: "Manage all your municipal payments",
      path: "/payment-center",
      color: "success",
    },
    {
      id: 3,
      icon: "Users",
      title: "Join Community Forum",
      description: "Engage with neighbors and local discussions",
      path: "/community-forum",
      color: "accent",
    },
    {
      id: 4,
      icon: "Eye",
      title: "View Transparency Reports",
      description: "Access budget data and project updates",
      path: "/transparency-center",
      color: "warning",
    },
  ];

  const stats = [
    {
      id: 1,
      icon: "CheckCircle",
      label: "Active Services",
      value: "3",
      trend: "up",
      trendValue: "+2 this month",
      color: "success",
    },
    {
      id: 2,
      icon: "Clock",
      label: "Pending Requests",
      value: "2",
      trend: "neutral",
      trendValue: "No change",
      color: "warning",
    },
    {
      id: 3,
      icon: "DollarSign",
      label: "Outstanding Balance",
      value: "$245.00",
      trend: "down",
      trendValue: "-$50 paid",
      color: "primary",
    },
    {
      id: 4,
      icon: "MessageSquare",
      label: "Forum Posts",
      value: "12",
      trend: "up",
      trendValue: "+5 this week",
      color: "accent",
    },
  ];

  const applications = [
    {
      id: 1,
      title: "Building Permit Application",
      description: "Residential deck construction permit",
      status: "processing",
      submittedDate: "Dec 5, 2025",
      applicationId: "BP-2025-1234",
      progress: 65,
    },
    {
      id: 2,
      title: "Business License Renewal",
      description: "Annual retail business license renewal",
      status: "pending",
      submittedDate: "Dec 8, 2025",
      applicationId: "BL-2025-5678",
      progress: 25,
    },
    {
      id: 3,
      title: "Parking Permit Request",
      description: "Residential parking permit for 2026",
      status: "approved",
      submittedDate: "Dec 1, 2025",
      applicationId: "PP-2025-9012",
      progress: 100,
    },
  ];

  const deadlines = [
    {
      id: 1,
      title: "Property Tax Payment",
      category: "Taxes & Fees",
      dueDate: "Dec 15, 2025",
      priority: "high",
    },
    {
      id: 2,
      title: "Water Bill Payment",
      category: "Utilities",
      dueDate: "Dec 20, 2025",
      priority: "medium",
    },
    {
      id: 3,
      title: "Business License Renewal",
      category: "Permits & Licenses",
      dueDate: "Dec 31, 2025",
      priority: "medium",
    },
    {
      id: 4,
      title: "Community Survey Response",
      category: "Civic Engagement",
      dueDate: "Jan 5, 2026",
      priority: "low",
    },
  ];

  const communityUpdates = [
    {
      id: 1,
      category: "announcement",
      title: "New Community Center Opening",
      description:
        "Join us for the grand opening celebration of the Downtown Community Center on December 15th. Free activities for all ages.",
      timestamp: "2 hours ago",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_12cc38021-1764823928799.png",
      imageAlt:
        "Modern community center building with glass facade and people gathering at entrance during sunny day",
    },
    {
      id: 2,
      category: "alert",
      title: "Road Closure Notice",
      description:
        "Main Street will be closed for maintenance from December 12-14. Please use alternate routes and plan accordingly.",
      timestamp: "5 hours ago",
      image: "https://images.unsplash.com/photo-1597250410155-598fcbe3223a",
      imageAlt:
        "Construction workers in orange safety vests working on urban road repair with traffic cones and equipment",
    },
    {
      id: 3,
      category: "event",
      title: "Town Hall Meeting",
      description:
        "Monthly town hall meeting scheduled for December 18th at 6 PM. Discuss upcoming city projects and budget proposals.",
      timestamp: "1 day ago",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_17e471e18-1765114953008.png",
      imageAlt:
        "Large audience seated in modern auditorium facing stage with speakers during civic town hall meeting",
    },
    {
      id: 4,
      category: "news",
      title: "Winter Weather Preparedness",
      description:
        "City announces snow removal schedule and emergency contact information for the upcoming winter season.",
      timestamp: "2 days ago",
      image: "https://images.unsplash.com/photo-1704648167555-a55e8db11cc5",
      imageAlt:
        "Yellow snow plow truck clearing snowy residential street with houses covered in fresh white snow",
    },
  ];

  const serviceShortcuts = [
    { id: 1, name: "Pay Bills", icon: "CreditCard", path: "/payment-center" },
    {
      id: 2,
      name: "Report Issue",
      icon: "AlertCircle",
      path: "/service-request-portal",
    },
    { id: 3, name: "Apply Permit", icon: "FileText", path: "/business-hub" },
    {
      id: 4,
      name: "View Budget",
      icon: "PieChart",
      path: "/transparency-center",
    },
    { id: 5, name: "Community", icon: "Users", path: "/community-forum" },
    { id: 6, name: "Events", icon: "Calendar", path: "/community-forum" },
    {
      id: 7,
      name: "Documents",
      icon: "FolderOpen",
      path: "/citizen-dashboard",
    },
    { id: 8, name: "Support", icon: "HelpCircle", path: "/citizen-dashboard" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-12">
        <div className="container mx-auto px-4 space-civic-lg">
          {/* Welcome Section */}
          <WelcomeBanner
            userName="Sarah Johnson"
            lastLogin="Dec 8, 2025 at 2:30 PM"
          />

          {/* Search Bar */}
          <SearchBar />

          {/* Quick Actions */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions?.map((action) => (
                <QuickActionCard key={action?.id} {...action} />
              ))}
            </div>
          </section>

          {/* Stats Overview */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Your Overview
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats?.map((stat) => (
                <StatCard key={stat?.id} {...stat} />
              ))}
            </div>
          </section>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Applications & Services */}
            <div className="lg:col-span-2 space-y-6">
              <ApplicationTracker applications={applications} />
              <ServiceShortcuts services={serviceShortcuts} />
            </div>

            {/* Right Column - Deadlines & Updates */}
            <div className="space-y-6">
              <UpcomingDeadlines deadlines={deadlines} />
              <CommunityUpdates updates={communityUpdates} />
            </div>
          </div>

          {/* Help Section */}
          <section className="civic-card p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Need Help?
                </h2>
                <p className="text-muted-foreground">
                  Our support team is available 24/7 to assist you with any
                  questions or concerns about municipal services.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-civic-sm">
                  Contact Support
                </button>
                <button className="px-6 py-3 bg-card text-foreground border border-border rounded-lg font-medium hover:bg-muted transition-colors">
                  View FAQs
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CitizenDashboard;
