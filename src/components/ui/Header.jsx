import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Dashboard", path: "/citizen-dashboard", icon: "LayoutDashboard" },
    { name: "Services", path: "/service-request-portal", icon: "FileText" },
    { name: "Payments", path: "/payment-center", icon: "CreditCard" },
    { name: "Community", path: "/community-forum", icon: "Users" },
  ];

  const moreItems = [
    { name: "Transparency", path: "/transparency-center", icon: "Eye" },
    { name: "Business Hub", path: "/business-hub", icon: "Briefcase" },
  ];

  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  const isActive = (path) => location?.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-card border-b border-border shadow-civic-sm">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Logo */}
        <Link
          to="/citizen-dashboard"
          className="flex items-center space-x-3 flex-shrink-0"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-civic-sm">
            <Icon name="Building2" size={24} color="white" />
          </div>
          <span className="text-xl font-bold text-foreground hidden sm:block">
            MuniConnect
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-civic-fast ${
                isActive(item?.path)
                  ? "bg-primary text-primary-foreground shadow-civic-sm"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <Icon name={item?.icon} size={18} />
              <span className="font-medium">{item?.name}</span>
            </Link>
          ))}

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreMenuOpen(!moreMenuOpen)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-all duration-civic-fast"
            >
              <Icon name="MoreHorizontal" size={18} />
              <span className="font-medium">More</span>
              <Icon
                name={moreMenuOpen ? "ChevronUp" : "ChevronDown"}
                size={16}
              />
            </button>

            {moreMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setMoreMenuOpen(false)}
                />
                <div className="absolute top-full right-0 mt-2 w-56 bg-popover border border-border rounded-lg shadow-civic-md z-50 animate-fade-in">
                  {moreItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      onClick={() => setMoreMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        isActive(item?.path) ? "bg-muted" : ""
                      }`}
                    >
                      <Icon name={item?.icon} size={18} />
                      <span className="font-medium">{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Icon name="Bell" size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Icon name="Settings" size={20} />
          </Button>
          <Button variant="default" size="sm" className="hidden md:flex">
            Get Help
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 left-0 right-0 bg-card border-b border-border shadow-civic-lg z-50 lg:hidden animate-slide-in-right">
            <nav className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto scrollbar-civic">
              {[...navigationItems, ...moreItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-civic-fast ${
                    isActive(item?.path)
                      ? "bg-primary text-primary-foreground shadow-civic-sm"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-medium">{item?.name}</span>
                </Link>
              ))}

              <div className="pt-4 border-t border-border space-y-2">
                <Button variant="ghost" fullWidth className="justify-start">
                  <Icon name="Bell" size={20} className="mr-3" />
                  Notifications
                </Button>
                <Button variant="ghost" fullWidth className="justify-start">
                  <Icon name="Settings" size={20} className="mr-3" />
                  Settings
                </Button>
                <Button variant="default" fullWidth>
                  Get Help
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
