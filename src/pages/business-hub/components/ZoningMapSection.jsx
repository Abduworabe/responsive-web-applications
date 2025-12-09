import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const ZoningMapSection = () => {
  const [searchAddress, setSearchAddress] = useState("");
  const [selectedZone, setSelectedZone] = useState(null);

  const zoningTypes = [
    {
      id: "commercial",
      name: "Commercial Zone",
      code: "C-1",
      color: "bg-blue-500",
      description:
        "Retail stores, offices, restaurants, and service businesses",
      allowedBusinesses: [
        "Retail stores",
        "Restaurants",
        "Professional offices",
        "Banks",
        "Salons",
      ],
    },
    {
      id: "industrial",
      name: "Industrial Zone",
      code: "I-1",
      color: "bg-amber-500",
      description: "Manufacturing, warehousing, and distribution facilities",
      allowedBusinesses: [
        "Manufacturing",
        "Warehouses",
        "Distribution centers",
        "Light industry",
      ],
    },
    {
      id: "mixed",
      name: "Mixed Use Zone",
      code: "MU-1",
      color: "bg-purple-500",
      description: "Combination of residential and commercial uses",
      allowedBusinesses: [
        "Ground floor retail",
        "Cafes",
        "Small offices",
        "Studios",
      ],
    },
    {
      id: "business-park",
      name: "Business Park",
      code: "BP-1",
      color: "bg-emerald-500",
      description: "Office parks, tech companies, and professional services",
      allowedBusinesses: [
        "Tech companies",
        "Corporate offices",
        "Research facilities",
        "Consulting firms",
      ],
    },
  ];

  const handleSearch = () => {
    if (searchAddress?.trim()) {
      setSelectedZone(
        zoningTypes?.[Math.floor(Math.random() * zoningTypes?.length)]
      );
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Interactive Zoning Map
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check zoning regulations for your business location. Enter an
            address to see permitted business types and requirements.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="civic-card p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Enter business address (e.g., 123 Main Street)"
                  value={searchAddress}
                  onChange={(e) => setSearchAddress(e?.target?.value)}
                  className="w-full"
                />
              </div>
              <Button
                variant="default"
                onClick={handleSearch}
                iconName="Search"
                iconPosition="left"
                className="md:w-auto"
              >
                Check Zoning
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="civic-card p-4 h-[500px] relative overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="City Zoning Map"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=40.7128,-74.0060&z=13&output=embed"
                  className="rounded-lg"
                />
                <div className="absolute top-6 left-6 bg-card/95 backdrop-blur-sm rounded-lg p-3 shadow-civic-md">
                  <div className="text-xs font-semibold text-muted-foreground mb-2">
                    Zoning Legend
                  </div>
                  <div className="space-y-2">
                    {zoningTypes?.map((zone) => (
                      <div
                        key={zone?.id}
                        className="flex items-center space-x-2"
                      >
                        <div className={`w-4 h-4 rounded ${zone?.color}`} />
                        <span className="text-xs font-medium text-foreground">
                          {zone?.code}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {zone?.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {selectedZone ? (
                <div className="civic-card p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${selectedZone?.color} flex items-center justify-center`}
                    >
                      <Icon name="MapPin" size={24} color="white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {selectedZone?.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        Zone Code: {selectedZone?.code}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {selectedZone?.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Permitted Business Types:
                    </h4>
                    <div className="space-y-2">
                      {selectedZone?.allowedBusinesses?.map(
                        (business, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <Icon
                              name="CheckCircle2"
                              size={16}
                              className="text-success"
                            />
                            <span className="text-sm text-foreground">
                              {business}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-success/10 border border-success/20 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <Icon
                        name="CheckCircle"
                        size={18}
                        className="text-success mt-0.5"
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Zoning Approved
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          This location is suitable for your business type
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="default"
                    fullWidth
                    className="mt-4"
                    iconName="FileText"
                    iconPosition="left"
                  >
                    View Full Zoning Details
                  </Button>
                </div>
              ) : (
                <div className="civic-card p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name="Map"
                      size={32}
                      className="text-muted-foreground"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Search for a Location
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Enter an address above to view zoning information and
                    permitted business types for that location.
                  </p>
                </div>
              )}

              <div className="civic-card p-4">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="Info" size={18} className="mr-2 text-primary" />
                  Need Help?
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Not sure about zoning requirements? Our team can help you
                  understand regulations and find the right location.
                </p>
                <Button
                  variant="outline"
                  fullWidth
                  size="sm"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Contact Zoning Office
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoningMapSection;
