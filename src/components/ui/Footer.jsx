import React from "react";
import { Link } from "react-router-dom";
import Icon from "../AppIcon";

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Citizen Dashboard", path: "/citizen-dashboard" },
        { name: "Service Requests", path: "/service-request-portal" },
        { name: "Payment Center", path: "/payment-center" },
        { name: "Business Hub", path: "/business-hub" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Community Forum", path: "/community-forum" },
        { name: "Transparency Center", path: "/transparency-center" },
        { name: "Town Meetings", path: "#" },
        { name: "Volunteer", path: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", path: "#" },
        { name: "Contact Us", path: "#" },
        { name: "FAQs", path: "#" },
        { name: "Accessibility", path: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "#" },
        { name: "Terms of Service", path: "#" },
        { name: "Data Protection", path: "#" },
        { name: "Public Records", path: "#" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", url: "#" },
    { name: "Twitter", icon: "Twitter", url: "#" },
    { name: "Instagram", icon: "Instagram", url: "#" },
    { name: "Youtube", icon: "Youtube", url: "#" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-civic-sm">
                <Icon name="Building2" size={24} color="white" />
              </div>
              <span className="text-xl font-bold text-foreground">
                MuniConnect
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Empowering citizens through transparent, efficient municipal
              services.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-civic-fast civic-interactive"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections?.map((section) => (
            <div key={section?.title}>
              <h3 className="font-semibold text-foreground mb-4">
                {section?.title}
              </h3>
              <ul className="space-y-2">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    <Link
                      to={link?.path}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors duration-civic-fast"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-2xl">
            <h3 className="font-semibold text-foreground mb-2">
              Stay Informed
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to receive updates on municipal services, community
              events, and important announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity duration-civic-fast whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© {currentYear} MuniConnect. All rights reserved.</span>
              <div className="flex items-center space-x-2 glow-civic px-3 py-1 rounded-lg bg-muted/50">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="text-xs font-medium">Secure & Verified</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Accessibility Statement
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Report Issue
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="MapPin" size={16} />
                <span>City Hall, Main Street</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={16} />
              <span className="text-xs">SSL Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} />
              <span className="text-xs">WCAG AA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span className="text-xs">Data Protected</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} />
              <span className="text-xs">Government Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
