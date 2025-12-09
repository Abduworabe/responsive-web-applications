import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

const CreatePostModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    tags: "",
  });

  const categoryOptions = [
    { value: "infrastructure", label: "Infrastructure" },
    { value: "safety", label: "Public Safety" },
    { value: "environment", label: "Environment" },
    { value: "education", label: "Education" },
    { value: "health", label: "Health Services" },
    { value: "transportation", label: "Transportation" },
    { value: "parks", label: "Parks & Recreation" },
  ];

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log("Post submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-card rounded-xl shadow-civic-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-civic animate-slide-in-right">
          <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">
              Start a Discussion
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <Input
              label="Discussion Title"
              type="text"
              placeholder="What would you like to discuss?"
              value={formData?.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e?.target?.value })
              }
              required
            />

            <Select
              label="Category"
              placeholder="Select a category"
              options={categoryOptions}
              value={formData?.category}
              onChange={(value) =>
                setFormData({ ...formData, category: value })
              }
              required
            />

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Description
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent min-h-[200px] resize-y"
                placeholder="Provide details about your discussion topic..."
                value={formData?.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e?.target?.value })
                }
                required
              />
            </div>

            <Input
              label="Tags (Optional)"
              type="text"
              placeholder="Add tags separated by commas"
              description="e.g., downtown, parking, safety"
              value={formData?.tags}
              onChange={(e) =>
                setFormData({ ...formData, tags: e?.target?.value })
              }
            />

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon
                  name="Info"
                  size={20}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">
                    Community Guidelines
                  </p>
                  <p>
                    Please be respectful and constructive. Focus on issues, not
                    individuals. Provide context and evidence when possible.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Button type="submit" variant="default" fullWidth>
                Post Discussion
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePostModal;
