import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";

import RequestForm from "./components/RequestForm";
import ActiveRequestCard from "./components/ActiveRequestCard";
import ServiceDirectory from "./components/ServiceDirectory";
import RequestDetailsModal from "./components/RequestDetailsModal";

const ServiceRequestPortal = () => {
  const [activeView, setActiveView] = useState("directory");
  const [selectedService, setSelectedService] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const services = [
    {
      id: 1,
      name: "Pothole Repair",
      description:
        "Report potholes, road damage, or street surface issues requiring immediate attention for public safety.",
      icon: "Construction",
      color: "bg-gradient-to-br from-orange-500 to-red-500",
      department: "public-works",
      urgency: "high",
      avgResolutionTime: "3-5 days",
      requestsThisMonth: 142,
    },
    {
      id: 2,
      name: "Street Light Outage",
      description:
        "Report non-functioning street lights, damaged poles, or lighting issues affecting neighborhood safety.",
      icon: "Lightbulb",
      color: "bg-gradient-to-br from-yellow-500 to-amber-500",
      department: "utilities",
      urgency: "medium",
      avgResolutionTime: "2-3 days",
      requestsThisMonth: 89,
    },
    {
      id: 3,
      name: "Trash Collection Issue",
      description:
        "Report missed pickups, damaged bins, or schedule changes for residential waste management services.",
      icon: "Trash2",
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
      department: "utilities",
      urgency: "medium",
      avgResolutionTime: "1-2 days",
      requestsThisMonth: 203,
    },
    {
      id: 4,
      name: "Park Maintenance",
      description:
        "Report issues with park facilities, playground equipment, landscaping, or general park maintenance needs.",
      icon: "Trees",
      color: "bg-gradient-to-br from-green-600 to-teal-600",
      department: "parks",
      urgency: "low",
      avgResolutionTime: "5-7 days",
      requestsThisMonth: 67,
    },
    {
      id: 5,
      name: "Water Leak",
      description:
        "Report water main breaks, leaks, or water quality concerns requiring immediate utility response.",
      icon: "Droplet",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      department: "utilities",
      urgency: "high",
      avgResolutionTime: "1-2 days",
      requestsThisMonth: 54,
    },
    {
      id: 6,
      name: "Noise Complaint",
      description:
        "Report excessive noise disturbances affecting quality of life in residential neighborhoods.",
      icon: "Volume2",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      department: "safety",
      urgency: "medium",
      avgResolutionTime: "Same day",
      requestsThisMonth: 128,
    },
    {
      id: 7,
      name: "Graffiti Removal",
      description:
        "Report graffiti vandalism on public property requiring cleanup and removal services.",
      icon: "Paintbrush",
      color: "bg-gradient-to-br from-indigo-500 to-purple-500",
      department: "public-works",
      urgency: "low",
      avgResolutionTime: "3-5 days",
      requestsThisMonth: 45,
    },
    {
      id: 8,
      name: "Sidewalk Repair",
      description:
        "Report damaged sidewalks, trip hazards, or accessibility issues requiring repair or replacement.",
      icon: "Footprints",
      color: "bg-gradient-to-br from-slate-500 to-gray-600",
      department: "public-works",
      urgency: "medium",
      avgResolutionTime: "7-10 days",
      requestsThisMonth: 76,
    },
    {
      id: 9,
      name: "Tree Trimming",
      description:
        "Request tree maintenance, removal of hazardous branches, or tree-related safety concerns.",
      icon: "TreePine",
      color: "bg-gradient-to-br from-lime-600 to-green-700",
      department: "parks",
      urgency: "low",
      avgResolutionTime: "10-14 days",
      requestsThisMonth: 92,
    },
    {
      id: 10,
      name: "Building Code Violation",
      description:
        "Report suspected building code violations, unsafe structures, or zoning compliance issues.",
      icon: "AlertTriangle",
      color: "bg-gradient-to-br from-red-600 to-orange-600",
      department: "planning",
      urgency: "high",
      avgResolutionTime: "5-7 days",
      requestsThisMonth: 38,
    },
    {
      id: 11,
      name: "Animal Control",
      description:
        "Report stray animals, wildlife concerns, or pet-related issues requiring animal control services.",
      icon: "Dog",
      color: "bg-gradient-to-br from-amber-600 to-yellow-600",
      department: "safety",
      urgency: "medium",
      avgResolutionTime: "Same day",
      requestsThisMonth: 112,
    },
    {
      id: 12,
      name: "Snow Removal",
      description:
        "Request snow plowing, ice treatment, or winter weather-related street maintenance services.",
      icon: "Snowflake",
      color: "bg-gradient-to-br from-cyan-400 to-blue-500",
      department: "public-works",
      urgency: "high",
      avgResolutionTime: "12-24 hours",
      requestsThisMonth: 0,
    },
  ];

  const activeRequests = [
    {
      id: "SR-2025-001234",
      title: "Large pothole on Main Street near intersection",
      description:
        "Deep pothole causing vehicle damage, approximately 2 feet in diameter and 6 inches deep. Located in the right lane heading eastbound.",
      category: "Pothole Repair",
      location: "Main Street & 5th Avenue",
      status: "in-progress",
      submittedDate: new Date(Date.now() - 259200000)?.toISOString(),
      estimatedResolution: new Date(Date.now() + 172800000)?.toISOString(),
      progress: 65,
      attachments: [1, 2],
    },
    {
      id: "SR-2025-001189",
      title: "Street light not working on Oak Avenue",
      description:
        "Street light pole #4523 has been out for over a week, creating safety concerns for pedestrians at night.",
      category: "Street Light Outage",
      location: "Oak Avenue between 2nd & 3rd Street",
      status: "pending",
      submittedDate: new Date(Date.now() - 432000000)?.toISOString(),
      estimatedResolution: new Date(Date.now() + 86400000)?.toISOString(),
      progress: 25,
    },
    {
      id: "SR-2025-001156",
      title: "Missed trash collection for third week",
      description:
        "Residential trash has not been collected for three consecutive weeks despite being placed out on schedule.",
      category: "Trash Collection Issue",
      location: "456 Elm Street",
      status: "resolved",
      submittedDate: new Date(Date.now() - 1209600000)?.toISOString(),
      estimatedResolution: new Date(Date.now() - 86400000)?.toISOString(),
      progress: 100,
    },
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setActiveView("form");
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    setShowSuccessMessage(true);
    setActiveView("directory");
    setSelectedService(null);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const handleFormCancel = () => {
    setSelectedService(null);
    setActiveView("directory");
  };

  const handleViewRequestDetails = (request) => {
    setSelectedRequest(request);
  };

  const stats = [
    {
      label: "Active Requests",
      value: "3",
      icon: "FileText",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Avg. Response Time",
      value: "2.5 days",
      icon: "Clock",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      label: "Resolution Rate",
      value: "94%",
      icon: "CheckCircle",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      label: "Total Services",
      value: "12",
      icon: "Grid3x3",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-secondary to-primary/90 text-white py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h1 className="civic-heading-xl mb-4">Service Request Portal</h1>
              <p className="civic-body mb-8 opacity-90">
                Report issues, request services, and track resolution progress.
                Our streamlined system ensures your concerns are addressed
                efficiently and transparently.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  iconName="Plus"
                  iconPosition="left"
                  onClick={() => setActiveView("directory")}
                >
                  New Request
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  iconName="FileText"
                  iconPosition="left"
                  onClick={() => setActiveView("my-requests")}
                >
                  My Requests
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 px-4 border-b border-border">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats?.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl shadow-civic-sm p-4 hover:shadow-civic-md transition-shadow"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div
                      className={`w-10 h-10 rounded-lg ${stat?.bgColor} flex items-center justify-center`}
                    >
                      <Icon
                        name={stat?.icon}
                        size={20}
                        className={stat?.color}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-foreground">
                        {stat?.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stat?.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="container mx-auto max-w-7xl px-4 pt-6">
            <div className="bg-success/10 border border-success/20 rounded-lg p-4 flex items-start space-x-3 animate-fade-in">
              <Icon
                name="CheckCircle"
                size={24}
                className="text-success flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-success mb-1">
                  Request Submitted Successfully!
                </h3>
                <p className="text-sm text-foreground">
                  Your service request has been received and assigned a tracking
                  number. You'll receive email updates on progress.
                </p>
              </div>
              <button
                onClick={() => setShowSuccessMessage(false)}
                className="p-1 hover:bg-success/20 rounded transition-colors"
              >
                <Icon name="X" size={18} className="text-success" />
              </button>
            </div>
          </div>
        )}

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            {/* View Toggle */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveView("directory")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeView === "directory" || activeView === "form"
                      ? "bg-primary text-primary-foreground shadow-civic-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon name="Grid3x3" size={18} className="inline mr-2" />
                  Service Directory
                </button>
                <button
                  onClick={() => setActiveView("my-requests")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeView === "my-requests"
                      ? "bg-primary text-primary-foreground shadow-civic-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon name="FileText" size={18} className="inline mr-2" />
                  My Requests
                </button>
              </div>

              <Link
                to="/citizen-dashboard"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1"
              >
                <Icon name="ArrowLeft" size={16} />
                <span>Back to Dashboard</span>
              </Link>
            </div>

            {/* Content Views */}
            {activeView === "directory" && (
              <ServiceDirectory
                services={services}
                onServiceSelect={handleServiceSelect}
              />
            )}

            {activeView === "form" && selectedService && (
              <RequestForm
                service={selectedService}
                onSubmit={handleFormSubmit}
                onCancel={handleFormCancel}
              />
            )}

            {activeView === "my-requests" && (
              <div className="space-y-6">
                <div className="bg-card rounded-xl shadow-civic-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground mb-1">
                        My Active Requests
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Track and manage your submitted service requests
                      </p>
                    </div>
                    <Button
                      variant="default"
                      iconName="Plus"
                      onClick={() => setActiveView("directory")}
                    >
                      New Request
                    </Button>
                  </div>

                  {activeRequests?.length === 0 ? (
                    <div className="text-center py-12">
                      <Icon
                        name="FileText"
                        size={48}
                        className="mx-auto mb-4 text-muted-foreground opacity-50"
                      />
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        No Active Requests
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        You haven't submitted any service requests yet
                      </p>
                      <Button
                        variant="default"
                        iconName="Plus"
                        onClick={() => setActiveView("directory")}
                      >
                        Submit Your First Request
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {activeRequests?.map((request) => (
                        <ActiveRequestCard
                          key={request?.id}
                          request={request}
                          onViewDetails={handleViewRequestDetails}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="civic-card p-6 hover:shadow-civic-md transition-shadow cursor-pointer">
                    <Icon
                      name="MessageSquare"
                      size={32}
                      className="text-primary mb-3"
                    />
                    <h3 className="font-semibold text-foreground mb-2">
                      Contact Support
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get help with your requests or ask questions
                    </p>
                    <Button variant="outline" size="sm" fullWidth>
                      Start Chat
                    </Button>
                  </div>

                  <div className="civic-card p-6 hover:shadow-civic-md transition-shadow cursor-pointer">
                    <Icon
                      name="Download"
                      size={32}
                      className="text-primary mb-3"
                    />
                    <h3 className="font-semibold text-foreground mb-2">
                      Download Reports
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Export your request history and details
                    </p>
                    <Button variant="outline" size="sm" fullWidth>
                      Export Data
                    </Button>
                  </div>

                  <div className="civic-card p-6 hover:shadow-civic-md transition-shadow cursor-pointer">
                    <Icon name="Bell" size={32} className="text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">
                      Notification Settings
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Manage how you receive request updates
                    </p>
                    <Button variant="outline" size="sm" fullWidth>
                      Configure
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Help Section */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-card rounded-xl shadow-civic-md p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="HelpCircle" size={32} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-foreground mb-3">
                    Need Help?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Our support team is here to assist you with any questions
                    about submitting requests, tracking progress, or
                    understanding our services.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="default" iconName="MessageSquare">
                      Live Chat Support
                    </Button>
                    <Button variant="outline" iconName="Phone">
                      Call (555) 123-4567
                    </Button>
                    <Button variant="ghost" iconName="Mail">
                      Email Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* Request Details Modal */}
      {selectedRequest && (
        <RequestDetailsModal
          request={selectedRequest}
          onClose={() => setSelectedRequest(null)}
        />
      )}
    </div>
  );
};

export default ServiceRequestPortal;
