import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

const ServiceDirectory = ({ services, onServiceSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedUrgency, setSelectedUrgency] = useState("all");

  const departments = [
    { value: "all", label: "All Departments" },
    { value: "public-works", label: "Public Works" },
    { value: "utilities", label: "Utilities" },
    { value: "parks", label: "Parks & Recreation" },
    { value: "safety", label: "Public Safety" },
    { value: "planning", label: "Planning & Zoning" },
  ];

  const urgencyLevels = [
    { value: "all", label: "All Priority Levels" },
    { value: "high", label: "High Priority" },
    { value: "medium", label: "Medium Priority" },
    { value: "low", label: "Low Priority" },
  ];

  const filteredServices = services?.filter((service) => {
    const matchesSearch =
      service?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      service?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" ||
      service?.department === selectedDepartment;
    const matchesUrgency =
      selectedUrgency === "all" || service?.urgency === selectedUrgency;
    return matchesSearch && matchesDepartment && matchesUrgency;
  });

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl shadow-civic-sm p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Icon name="Search" size={24} className="text-primary" />
          <h2 className="text-xl font-semibold text-foreground">
            Find Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-3">
            <Input
              type="search"
              placeholder="Search services by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e?.target?.value)}
            />
          </div>

          <Select
            label="Department"
            options={departments}
            value={selectedDepartment}
            onChange={setSelectedDepartment}
          />

          <Select
            label="Priority Level"
            options={urgencyLevels}
            value={selectedUrgency}
            onChange={setSelectedUrgency}
          />

          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDepartment("all");
                setSelectedUrgency("all");
              }}
              className="w-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <Icon name="RotateCcw" size={16} className="inline mr-2" />
              Clear Filters
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <span>{filteredServices?.length} services found</span>
          {(searchQuery ||
            selectedDepartment !== "all" ||
            selectedUrgency !== "all") && (
            <span className="text-primary font-medium">Filters active</span>
          )}
        </div>
      </div>
      {filteredServices?.length === 0 ? (
        <div className="bg-card rounded-xl shadow-civic-sm p-12 text-center">
          <Icon
            name="Search"
            size={48}
            className="mx-auto mb-4 text-muted-foreground opacity-50"
          />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            No services found
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your search criteria or filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices?.map((service) => (
            <div
              key={service?.id}
              onClick={() => onServiceSelect(service)}
              className="civic-card p-6 cursor-pointer hover:shadow-civic-md transition-all duration-civic-fast group"
            >
              <div
                className={`w-12 h-12 rounded-lg ${service?.color} flex items-center justify-center shadow-civic-sm mb-4 group-hover:scale-110 transition-transform duration-civic-fast`}
              >
                <Icon name={service?.icon} size={24} color="white" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service?.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {service?.description}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{service?.avgResolutionTime}</span>
                <Icon
                  name="ArrowRight"
                  size={16}
                  className="text-primary group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceDirectory;
