import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

const RegistrationWizard = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    industry: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    taxId: "",
  });

  const steps = [
    { number: 1, title: "Business Info", icon: "Building2" },
    { number: 2, title: "Owner Details", icon: "User" },
    { number: 3, title: "Location", icon: "MapPin" },
    { number: 4, title: "Review", icon: "CheckCircle" },
  ];

  const businessTypes = [
    { value: "sole", label: "Sole Proprietorship" },
    { value: "llc", label: "Limited Liability Company (LLC)" },
    { value: "corp", label: "Corporation" },
    { value: "partnership", label: "Partnership" },
  ];

  const industries = [
    { value: "retail", label: "Retail" },
    { value: "food", label: "Food Service" },
    { value: "professional", label: "Professional Services" },
    { value: "construction", label: "Construction" },
    { value: "healthcare", label: "Healthcare" },
    { value: "technology", label: "Technology" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    alert(
      "Business registration submitted successfully! You will receive a confirmation email shortly."
    );
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-card rounded-2xl shadow-civic-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Business Registration Wizard</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            {steps?.map((step, index) => (
              <React.Fragment key={step?.number}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                      currentStep >= step?.number
                        ? "bg-white text-primary"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    <Icon name={step?.icon} size={20} />
                  </div>
                  <span className="text-sm font-medium hidden sm:block">
                    {step?.title}
                  </span>
                </div>
                {index < steps?.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded transition-all ${
                      currentStep > step?.number ? "bg-white" : "bg-white/20"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-240px)] scrollbar-civic">
          {currentStep === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Business Information
              </h3>
              <Input
                label="Business Name"
                type="text"
                placeholder="Enter your business name"
                value={formData?.businessName}
                onChange={(e) =>
                  handleInputChange("businessName", e?.target?.value)
                }
                required
              />
              <Select
                label="Business Type"
                placeholder="Select business type"
                options={businessTypes}
                value={formData?.businessType}
                onChange={(value) => handleInputChange("businessType", value)}
                required
              />
              <Select
                label="Industry"
                placeholder="Select industry"
                options={industries}
                value={formData?.industry}
                onChange={(value) => handleInputChange("industry", value)}
                required
              />
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Owner Details
              </h3>
              <Input
                label="Owner Full Name"
                type="text"
                placeholder="Enter owner's full name"
                value={formData?.ownerName}
                onChange={(e) =>
                  handleInputChange("ownerName", e?.target?.value)
                }
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="owner@business.com"
                value={formData?.email}
                onChange={(e) => handleInputChange("email", e?.target?.value)}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData?.phone}
                onChange={(e) => handleInputChange("phone", e?.target?.value)}
                required
              />
              <Input
                label="Tax ID / EIN"
                type="text"
                placeholder="XX-XXXXXXX"
                value={formData?.taxId}
                onChange={(e) => handleInputChange("taxId", e?.target?.value)}
                required
              />
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Business Location
              </h3>
              <Input
                label="Street Address"
                type="text"
                placeholder="123 Main Street"
                value={formData?.address}
                onChange={(e) => handleInputChange("address", e?.target?.value)}
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="City"
                  type="text"
                  placeholder="City name"
                  value={formData?.city}
                  onChange={(e) => handleInputChange("city", e?.target?.value)}
                  required
                />
                <Input
                  label="ZIP Code"
                  type="text"
                  placeholder="12345"
                  value={formData?.zipCode}
                  onChange={(e) =>
                    handleInputChange("zipCode", e?.target?.value)
                  }
                  required
                />
              </div>
              <div className="bg-muted rounded-lg p-4 mt-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Zoning Verification
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We'll automatically verify if your business type is
                      permitted at this location based on zoning regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Review Your Information
              </h3>

              <div className="civic-card p-4">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="Building2" size={18} className="mr-2" />
                  Business Information
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Business Name:
                    </span>
                    <span className="font-medium text-foreground">
                      {formData?.businessName || "Not provided"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Business Type:
                    </span>
                    <span className="font-medium text-foreground">
                      {businessTypes?.find(
                        (t) => t?.value === formData?.businessType
                      )?.label || "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Industry:</span>
                    <span className="font-medium text-foreground">
                      {industries?.find((i) => i?.value === formData?.industry)
                        ?.label || "Not selected"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="civic-card p-4">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="User" size={18} className="mr-2" />
                  Owner Details
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Owner Name:</span>
                    <span className="font-medium text-foreground">
                      {formData?.ownerName || "Not provided"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-medium text-foreground">
                      {formData?.email || "Not provided"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="font-medium text-foreground">
                      {formData?.phone || "Not provided"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="civic-card p-4">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="MapPin" size={18} className="mr-2" />
                  Business Location
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Address:</span>
                    <span className="font-medium text-foreground">
                      {formData?.address || "Not provided"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">City, ZIP:</span>
                    <span className="font-medium text-foreground">
                      {formData?.city && formData?.zipCode
                        ? `${formData?.city}, ${formData?.zipCode}`
                        : "Not provided"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-success mt-1"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Ready to Submit
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Your application will be reviewed within 5-7 business
                      days. You'll receive email updates on your application
                      status.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-border p-6 flex items-center justify-between bg-muted/30">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            iconName="ChevronLeft"
            iconPosition="left"
          >
            Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            Step {currentStep} of {steps?.length}
          </div>

          {currentStep < 4 ? (
            <Button
              variant="default"
              onClick={handleNext}
              iconName="ChevronRight"
              iconPosition="right"
            >
              Next
            </Button>
          ) : (
            <Button
              variant="success"
              onClick={handleSubmit}
              iconName="Send"
              iconPosition="left"
            >
              Submit Application
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationWizard;
