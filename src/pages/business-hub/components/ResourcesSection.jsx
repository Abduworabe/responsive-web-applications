import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ResourcesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Resources", icon: "Grid3x3" },
    { id: "guides", label: "Guides", icon: "BookOpen" },
    { id: "templates", label: "Templates", icon: "FileText" },
    { id: "videos", label: "Videos", icon: "Video" },
    { id: "webinars", label: "Webinars", icon: "Monitor" },
  ];

  const resources = [
    {
      id: 1,
      title: "Complete Business Registration Guide",
      category: "guides",
      description:
        "Step-by-step guide covering everything from choosing a business structure to obtaining your first permits.",
      type: "PDF Guide",
      duration: "45 min read",
      downloads: 2450,
      icon: "FileText",
      color: "text-blue-600",
    },
    {
      id: 2,
      title: "Business Plan Template",
      category: "templates",
      description:
        "Professional business plan template with sections for market analysis, financial projections, and operational strategy.",
      type: "Word Template",
      duration: "Editable",
      downloads: 1890,
      icon: "FileEdit",
      color: "text-emerald-600",
    },
    {
      id: 3,
      title: "Permit Application Walkthrough",
      category: "videos",
      description:
        "Video tutorial demonstrating how to complete and submit permit applications through our online portal.",
      type: "Video Tutorial",
      duration: "12 minutes",
      downloads: 3200,
      icon: "PlayCircle",
      color: "text-purple-600",
    },
    {
      id: 4,
      title: "Tax Compliance for Small Business",
      category: "webinars",
      description:
        "Recorded webinar covering tax obligations, filing requirements, and common deductions for small businesses.",
      type: "Webinar Recording",
      duration: "60 minutes",
      downloads: 1560,
      icon: "Monitor",
      color: "text-amber-600",
    },
    {
      id: 5,
      title: "Zoning Regulations Handbook",
      category: "guides",
      description:
        "Comprehensive guide to understanding zoning codes, permitted uses, and variance application procedures.",
      type: "PDF Guide",
      duration: "30 min read",
      downloads: 980,
      icon: "Map",
      color: "text-rose-600",
    },
    {
      id: 6,
      title: "Employee Handbook Template",
      category: "templates",
      description:
        "Customizable employee handbook template covering policies, procedures, and legal requirements.",
      type: "Word Template",
      duration: "Editable",
      downloads: 1420,
      icon: "Users",
      color: "text-cyan-600",
    },
    {
      id: 7,
      title: "Marketing Your New Business",
      category: "videos",
      description:
        "Video series on effective marketing strategies for new businesses, including digital marketing and local outreach.",
      type: "Video Series",
      duration: "8 videos",
      downloads: 2100,
      icon: "Megaphone",
      color: "text-indigo-600",
    },
    {
      id: 8,
      title: "Financial Management Basics",
      category: "webinars",
      description:
        "Learn essential financial management skills including bookkeeping, cash flow management, and financial reporting.",
      type: "Webinar Recording",
      duration: "45 minutes",
      downloads: 1750,
      icon: "DollarSign",
      color: "text-green-600",
    },
  ];

  const filteredResources =
    selectedCategory === "all"
      ? resources
      : resources?.filter((r) => r?.category === selectedCategory);

  const mentorshipPrograms = [
    {
      id: 1,
      name: "SCORE Business Mentoring",
      description: "Free mentoring from experienced business professionals",
      icon: "Users",
      availability: "Available",
    },
    {
      id: 2,
      name: "Industry Expert Network",
      description: "Connect with experts in your specific industry",
      icon: "Network",
      availability: "Available",
    },
    {
      id: 3,
      name: "Peer Advisory Groups",
      description: "Join groups of fellow business owners for support",
      icon: "MessageCircle",
      availability: "Limited Spots",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Resources & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive guides, templates, and educational materials to
            support your business journey.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setSelectedCategory(category?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category?.id
                    ? "bg-primary text-primary-foreground shadow-civic-md"
                    : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                <Icon name={category?.icon} size={20} />
                <span>{category?.label}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredResources?.map((resource) => (
              <div
                key={resource?.id}
                className="civic-card p-6 hover:shadow-civic-lg transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 ${resource?.color}`}
                >
                  <Icon name={resource?.icon} size={24} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {resource?.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {resource?.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-foreground font-medium">
                    {resource?.type}
                  </span>
                  <span className="text-muted-foreground flex items-center">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {resource?.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Icon name="Download" size={14} className="mr-1" />
                    {resource?.downloads?.toLocaleString()} downloads
                  </span>
                  <Button
                    variant="default"
                    size="sm"
                    iconName="Download"
                    iconPosition="left"
                  >
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="civic-card p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Business Mentorship Programs
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Connect with experienced mentors who can provide guidance,
                support, and insights to help your business succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mentorshipPrograms?.map((program) => (
                <div
                  key={program?.id}
                  className="bg-muted/50 rounded-lg p-6 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={program?.icon}
                      size={32}
                      className="text-primary"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {program?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {program?.description}
                  </p>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      program?.availability === "Available"
                        ? "bg-success/10 text-success"
                        : "bg-warning/10 text-warning"
                    }`}
                  >
                    {program?.availability}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                variant="default"
                size="lg"
                iconName="UserPlus"
                iconPosition="left"
              >
                Request a Mentor
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="civic-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Calendar" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Upcoming Workshops
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Free educational events
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Join our monthly workshops covering topics like business
                planning, marketing, and financial management.
              </p>
              <Button
                variant="outline"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
              >
                View Workshop Schedule
              </Button>
            </div>

            <div className="civic-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon
                    name="MessageSquare"
                    size={24}
                    className="text-primary"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Business Community
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Connect with peers
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Join our online community to network with other business owners,
                share experiences, and get advice.
              </p>
              <Button
                variant="outline"
                fullWidth
                iconName="Users"
                iconPosition="left"
              >
                Join Community Forum
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
