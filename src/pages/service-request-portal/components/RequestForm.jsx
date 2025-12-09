import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import { Checkbox } from "../../../components/ui/Checkbox";

const RequestForm = ({ service, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    urgency: "medium",
    contactMethod: "email",
    phoneNumber: "",
    email: "",
    attachments: [],
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const urgencyOptions = [
    { value: "low", label: "Low - Can wait several days" },
    { value: "medium", label: "Medium - Needs attention soon" },
    { value: "high", label: "High - Urgent issue" },
  ];

  const contactMethodOptions = [
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone Call" },
    { value: "sms", label: "Text Message" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e?.target?.files);
    const newFiles = files?.map((file) => ({
      id: Date.now() + Math.random(),
      name: file?.name,
      size: (file?.size / 1024)?.toFixed(2) + " KB",
      type: file?.type?.split("/")?.[0],
    }));
    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (fileId) => {
    setUploadedFiles((prev) => prev?.filter((f) => f?.id !== fileId));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData?.title?.trim()) newErrors.title = "Title is required";
    if (!formData?.description?.trim())
      newErrors.description = "Description is required";
    if (!formData?.location?.trim())
      newErrors.location = "Location is required";
    if (!formData?.email?.trim()) newErrors.email = "Email is required";
    if (!formData?.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      onSubmit({ ...formData, attachments: uploadedFiles });
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-civic-md p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div
            className={`w-10 h-10 rounded-lg ${service?.color} flex items-center justify-center`}
          >
            <Icon name={service?.icon} size={20} color="white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              New {service?.name} Request
            </h2>
            <p className="text-sm text-muted-foreground">
              Fill out the form below to submit your request
            </p>
          </div>
        </div>
        <button
          onClick={onCancel}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <Icon name="X" size={20} />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Request Title"
          type="text"
          placeholder="Brief description of your request"
          value={formData?.title}
          onChange={(e) => handleInputChange("title", e?.target?.value)}
          error={errors?.title}
          required
        />

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Detailed Description <span className="text-error">*</span>
          </label>
          <textarea
            value={formData?.description}
            onChange={(e) => handleInputChange("description", e?.target?.value)}
            placeholder="Provide detailed information about your request..."
            rows={4}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors?.description ? "border-error" : "border-input"
            } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none`}
          />
          {errors?.description && (
            <p className="text-sm text-error mt-1">{errors?.description}</p>
          )}
        </div>

        <Input
          label="Location/Address"
          type="text"
          placeholder="Where is this issue located?"
          value={formData?.location}
          onChange={(e) => handleInputChange("location", e?.target?.value)}
          error={errors?.location}
          required
        />

        <Select
          label="Urgency Level"
          options={urgencyOptions}
          value={formData?.urgency}
          onChange={(value) => handleInputChange("urgency", value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Preferred Contact Method"
            options={contactMethodOptions}
            value={formData?.contactMethod}
            onChange={(value) => handleInputChange("contactMethod", value)}
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="(555) 123-4567"
            value={formData?.phoneNumber}
            onChange={(e) => handleInputChange("phoneNumber", e?.target?.value)}
          />
        </div>

        <Input
          label="Email Address"
          type="email"
          placeholder="your.email@example.com"
          value={formData?.email}
          onChange={(e) => handleInputChange("email", e?.target?.value)}
          error={errors?.email}
          required
        />

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Attachments (Photos/Videos)
          </label>
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Icon
                name="Upload"
                size={32}
                className="mx-auto mb-2 text-muted-foreground"
              />
              <p className="text-sm text-foreground font-medium mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-muted-foreground">
                PNG, JPG, MP4 up to 10MB each
              </p>
            </label>
          </div>

          {uploadedFiles?.length > 0 && (
            <div className="mt-4 space-y-2">
              {uploadedFiles?.map((file) => (
                <div
                  key={file?.id}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <Icon
                      name={file?.type === "image" ? "Image" : "Video"}
                      size={20}
                      className="text-primary"
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {file?.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {file?.size}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(file?.id)}
                    className="p-1 hover:bg-background rounded transition-colors"
                  >
                    <Icon name="X" size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <Checkbox
          label="I agree to the terms and conditions and privacy policy"
          checked={formData?.agreeToTerms}
          onChange={(e) =>
            handleInputChange("agreeToTerms", e?.target?.checked)
          }
          error={errors?.agreeToTerms}
          required
        />

        <div className="flex items-center justify-end space-x-3 pt-4 border-t border-border">
          <Button variant="outline" onClick={onCancel} type="button">
            Cancel
          </Button>
          <Button
            variant="default"
            type="submit"
            iconName="Send"
            iconPosition="right"
          >
            Submit Request
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
