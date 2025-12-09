import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const ProjectTimeline = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const projects = [
    {
      id: 1,
      name: "Downtown Revitalization Project",
      description:
        "Comprehensive renovation of downtown area including new pedestrian zones, improved lighting, and public art installations.",
      status: "in-progress",
      progress: 65,
      budget: 8500000,
      spent: 5525000,
      startDate: "2024-03-15",
      estimatedCompletion: "2025-06-30",
      department: "Infrastructure",
      image: "https://images.unsplash.com/photo-1677700344819-795681adb13d",
      imageAlt:
        "Modern urban downtown area with wide pedestrian walkways, contemporary street lighting, and colorful public art sculptures during daytime",
      milestones: [
        { name: "Planning & Design", status: "completed", date: "2024-03-15" },
        {
          name: "Community Consultation",
          status: "completed",
          date: "2024-05-20",
        },
        {
          name: "Phase 1 Construction",
          status: "in-progress",
          date: "2024-08-01",
        },
        {
          name: "Phase 2 Construction",
          status: "upcoming",
          date: "2025-02-01",
        },
        { name: "Final Inspection", status: "upcoming", date: "2025-06-15" },
      ],
    },
    {
      id: 2,
      name: "Smart Traffic Management System",
      description:
        "Implementation of AI-powered traffic lights and real-time monitoring systems to reduce congestion and improve traffic flow.",
      status: "in-progress",
      progress: 42,
      budget: 3200000,
      spent: 1344000,
      startDate: "2024-06-01",
      estimatedCompletion: "2025-03-31",
      department: "Transportation",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_159cd84a3-1765084348972.png",
      imageAlt:
        "Busy city intersection with modern traffic lights, multiple lanes of vehicles, and digital traffic monitoring cameras mounted on poles",
      milestones: [
        { name: "System Design", status: "completed", date: "2024-06-01" },
        {
          name: "Hardware Procurement",
          status: "completed",
          date: "2024-08-15",
        },
        {
          name: "Installation Phase 1",
          status: "in-progress",
          date: "2024-10-01",
        },
        {
          name: "Testing & Calibration",
          status: "upcoming",
          date: "2025-01-15",
        },
        { name: "Full Deployment", status: "upcoming", date: "2025-03-15" },
      ],
    },
    {
      id: 3,
      name: "Community Recreation Center",
      description:
        "Construction of new multi-purpose recreation facility with indoor pool, gymnasium, fitness center, and community meeting spaces.",
      status: "planning",
      progress: 15,
      budget: 12000000,
      spent: 1800000,
      startDate: "2024-09-01",
      estimatedCompletion: "2026-08-31",
      department: "Parks & Recreation",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1a567bf7f-1764688876896.png",
      imageAlt:
        "Modern community recreation center exterior with large glass windows, contemporary architecture, outdoor basketball courts, and landscaped grounds",
      milestones: [
        { name: "Site Selection", status: "completed", date: "2024-09-01" },
        {
          name: "Architectural Design",
          status: "in-progress",
          date: "2024-11-01",
        },
        { name: "Permit Approval", status: "upcoming", date: "2025-03-01" },
        { name: "Construction Start", status: "upcoming", date: "2025-06-01" },
        { name: "Grand Opening", status: "upcoming", date: "2026-08-15" },
      ],
    },
    {
      id: 4,
      name: "Green Energy Initiative",
      description:
        "Installation of solar panels on municipal buildings and transition to renewable energy sources for city operations.",
      status: "completed",
      progress: 100,
      budget: 4500000,
      spent: 4350000,
      startDate: "2023-01-15",
      estimatedCompletion: "2024-10-31",
      department: "Sustainability",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_16ec99385-1765094977715.png",
      imageAlt:
        "Large array of blue solar panels installed on municipal building rooftop with clear blue sky background and city skyline visible in distance",
      milestones: [
        { name: "Energy Audit", status: "completed", date: "2023-01-15" },
        { name: "Vendor Selection", status: "completed", date: "2023-04-01" },
        { name: "Installation Phase", status: "completed", date: "2023-08-01" },
        { name: "Grid Connection", status: "completed", date: "2024-06-15" },
        { name: "Project Completion", status: "completed", date: "2024-10-31" },
      ],
    },
    {
      id: 5,
      name: "Water Infrastructure Upgrade",
      description:
        "Replacement of aging water pipes and installation of smart water meters throughout the city to reduce water loss and improve efficiency.",
      status: "in-progress",
      progress: 78,
      budget: 15000000,
      spent: 11700000,
      startDate: "2023-05-01",
      estimatedCompletion: "2025-04-30",
      department: "Public Works",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_146ff680d-1765217812037.png",
      imageAlt:
        "Construction workers installing large diameter water pipes in urban street excavation with heavy machinery and safety equipment visible",
      milestones: [
        {
          name: "Infrastructure Assessment",
          status: "completed",
          date: "2023-05-01",
        },
        { name: "Zone 1 Replacement", status: "completed", date: "2023-10-15" },
        { name: "Zone 2 Replacement", status: "completed", date: "2024-04-30" },
        {
          name: "Zone 3 Replacement",
          status: "in-progress",
          date: "2024-09-01",
        },
        { name: "Final Testing", status: "upcoming", date: "2025-03-15" },
      ],
    },
  ];

  const statusFilters = [
    {
      value: "all",
      label: "All Projects",
      icon: "Layers",
      count: projects?.length,
    },
    {
      value: "planning",
      label: "Planning",
      icon: "FileText",
      count: projects?.filter((p) => p?.status === "planning")?.length,
    },
    {
      value: "in-progress",
      label: "In Progress",
      icon: "Construction",
      count: projects?.filter((p) => p?.status === "in-progress")?.length,
    },
    {
      value: "completed",
      label: "Completed",
      icon: "CheckCircle",
      count: projects?.filter((p) => p?.status === "completed")?.length,
    },
  ];

  const filteredProjects =
    selectedStatus === "all"
      ? projects
      : projects?.filter((p) => p?.status === selectedStatus);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-success bg-success/10 border-success/20";
      case "in-progress":
        return "text-primary bg-primary/10 border-primary/20";
      case "planning":
        return "text-warning bg-warning/10 border-warning/20";
      case "upcoming":
        return "text-muted-foreground bg-muted/50 border-border";
      default:
        return "text-muted-foreground bg-muted/50 border-border";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return "CheckCircle";
      case "in-progress":
        return "Construction";
      case "planning":
        return "FileText";
      case "upcoming":
        return "Clock";
      default:
        return "Circle";
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })?.format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-card rounded-xl shadow-civic-md p-6 border border-border">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Project Timeline
        </h2>
        <p className="text-muted-foreground">
          Track municipal initiatives from planning through completion
        </p>
      </div>
      <div className="flex flex-wrap gap-3 mb-6">
        {statusFilters?.map((filter) => (
          <button
            key={filter?.value}
            onClick={() => setSelectedStatus(filter?.value)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-civic-fast ${
              selectedStatus === filter?.value
                ? "bg-primary text-primary-foreground border-primary shadow-civic-sm"
                : "bg-card text-foreground border-border hover:bg-muted"
            }`}
          >
            <Icon name={filter?.icon} size={18} />
            <span className="font-medium">{filter?.label}</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                selectedStatus === filter?.value
                  ? "bg-primary-foreground/20"
                  : "bg-muted"
              }`}
            >
              {filter?.count}
            </span>
          </button>
        ))}
      </div>
      <div className="space-y-6">
        {filteredProjects?.map((project) => (
          <div
            key={project?.id}
            className="border border-border rounded-lg overflow-hidden hover:shadow-civic-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {project?.name}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                          project?.status
                        )}`}
                      >
                        {project?.status?.replace("-", " ")?.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {project?.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Icon
                          name="Building2"
                          size={16}
                          className="text-muted-foreground"
                        />
                        <span className="text-foreground">
                          {project?.department}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon
                          name="Calendar"
                          size={16}
                          className="text-muted-foreground"
                        />
                        <span className="text-foreground">
                          {formatDate(project?.startDate)} -{" "}
                          {formatDate(project?.estimatedCompletion)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Overall Progress
                    </span>
                    <span className="font-semibold text-foreground">
                      {project?.progress}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-civic-slow"
                      style={{ width: `${project?.progress}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">
                      Total Budget
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {formatCurrency(project?.budget)}
                    </p>
                  </div>
                  <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                    <p className="text-xs text-muted-foreground mb-1">
                      Amount Spent
                    </p>
                    <p className="text-lg font-bold text-success">
                      {formatCurrency(project?.spent)}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">
                    Project Milestones
                  </h4>
                  <div className="space-y-2">
                    {project?.milestones?.map((milestone, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center border ${getStatusColor(
                            milestone?.status
                          )}`}
                        >
                          <Icon
                            name={getStatusIcon(milestone?.status)}
                            size={16}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">
                            {milestone?.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {formatDate(milestone?.date)}
                          </p>
                        </div>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                            milestone?.status
                          )}`}
                        >
                          {milestone?.status?.replace("-", " ")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="rounded-lg overflow-hidden h-full min-h-[300px]">
                  <Image
                    src={project?.image}
                    alt={project?.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredProjects?.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Icon
              name="FolderOpen"
              size={32}
              className="text-muted-foreground"
            />
          </div>
          <p className="text-muted-foreground">
            No projects found for this status
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectTimeline;
