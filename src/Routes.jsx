import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import PaymentCenter from "./pages/payment-center";
import BusinessHub from "./pages/business-hub";
import ServiceRequestPortal from "./pages/service-request-portal";
import CommunityForum from "./pages/community-forum";
import CitizenDashboard from "./pages/citizen-dashboard";
import TransparencyCenter from "./pages/transparency-center";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your route here */}
          <Route path="/" element={<CitizenDashboard />} />
          <Route path="/payment-center" element={<PaymentCenter />} />
          <Route path="/business-hub" element={<BusinessHub />} />
          <Route
            path="/service-request-portal"
            element={<ServiceRequestPortal />}
          />
          <Route path="/community-forum" element={<CommunityForum />} />
          <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
          <Route path="/transparency-center" element={<TransparencyCenter />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
