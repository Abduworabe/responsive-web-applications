import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ForumHeader = ({ activeTab, setActiveTab, onCreatePost }) => {
  const tabs = [
    { id: "discussions", label: "Discussions", icon: "MessageSquare" },
    { id: "town-halls", label: "Town Halls", icon: "Users" },
    { id: "polls", label: "Polls & Surveys", icon: "BarChart3" },
    { id: "announcements", label: "Announcements", icon: "Megaphone" },
  ];

  return (
    <div className="bg-card border-b border-border sticky top-16 z-30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="civic-heading-lg text-foreground mb-2">
              Community Forum
            </h1>
            <p className="text-muted-foreground">
              Your digital town square for civic engagement
            </p>
          </div>
          <Button
            variant="default"
            iconName="Plus"
            iconPosition="left"
            onClick={onCreatePost}
            className="w-full lg:w-auto"
          >
            Start Discussion
          </Button>
        </div>

        <div className="flex items-center gap-2 mt-6 overflow-x-auto scrollbar-civic">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-civic-fast ${
                activeTab === tab?.id
                  ? "bg-primary text-primary-foreground shadow-civic-sm"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span className="font-medium">{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumHeader;
