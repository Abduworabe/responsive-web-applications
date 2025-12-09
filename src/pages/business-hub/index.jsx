import React, { useState } from "react";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import HeroSection from "./components/HeroSection";
import QuickActionsGrid from "./components/QuickActionsGrid";
import PermitTypesSection from "./components/PermitTypesSection";
import RegistrationWizard from "./components/RegistrationWizard";
import ZoningMapSection from "./components/ZoningMapSection";
import ComplianceCalendar from "./components/ComplianceCalendar";
import IncentivesSection from "./components/IncentivesSection";
import ResourcesSection from "./components/ResourcesSection";

const BusinessHub = () => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  const handleGetStarted = () => {
    setIsWizardOpen(true);
  };

  const handleScheduleConsultation = () => {
    alert(
      "Consultation scheduling feature coming soon! Our team will contact you within 24 hours."
    );
  };

  const handleActionClick = (action) => {
    if (action === "register") {
      setIsWizardOpen(true);
    } else {
      const sectionMap = {
        permits: "permits-section",
        zoning: "zoning-section",
        compliance: "compliance-section",
        incentives: "incentives-section",
        resources: "resources-section",
      };
      const element = document.getElementById(sectionMap?.[action]);
      if (element) {
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleApplyPermit = (permitId) => {
    alert(
      `Permit application for ID ${permitId} initiated. You will be redirected to the application form.`
    );
  };

  const handleApplyIncentive = (incentiveId) => {
    alert(
      `Incentive application for ID ${incentiveId} initiated. Please complete the eligibility questionnaire.`
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-16">
        <HeroSection
          onGetStarted={handleGetStarted}
          onScheduleConsultation={handleScheduleConsultation}
        />

        <QuickActionsGrid onActionClick={handleActionClick} />

        <div id="permits-section">
          <PermitTypesSection onApplyPermit={handleApplyPermit} />
        </div>

        <div id="zoning-section">
          <ZoningMapSection />
        </div>

        <div id="compliance-section">
          <ComplianceCalendar />
        </div>

        <div id="incentives-section">
          <IncentivesSection onApplyIncentive={handleApplyIncentive} />
        </div>

        <div id="resources-section">
          <ResourcesSection />
        </div>
      </main>

      <Footer />

      <RegistrationWizard
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
      />
    </div>
  );
};

export default BusinessHub;
