import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const popularSearches = [
    "Pay property tax",
    "Report pothole",
    "Apply for permit",
    "Utility bill payment",
    "Community events",
  ];

  return (
    <div className="relative">
      <div
        className={`civic-card p-4 transition-all duration-civic-fast ${
          isFocused ? "shadow-civic-md ring-2 ring-primary/20" : ""
        }`}
      >
        <div className="flex items-center space-x-3">
          <Icon name="Search" size={20} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Search services, payments, or ask a question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
          />
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            Search
          </button>
        </div>
      </div>
      {isFocused && (
        <div className="absolute top-full left-0 right-0 mt-2 civic-card p-4 shadow-civic-lg z-50 animate-fade-in">
          <p className="text-xs font-medium text-muted-foreground uppercase mb-3">
            Popular Searches
          </p>
          <div className="space-y-2">
            {popularSearches?.map((search, index) => (
              <button
                key={index}
                className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors text-left"
              >
                <Icon
                  name="TrendingUp"
                  size={16}
                  className="text-muted-foreground"
                />
                <span className="text-sm text-foreground">{search}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
