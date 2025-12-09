import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const HeroSection = ({ onGetStarted, onScheduleConsultation }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-deep-civic overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="Briefcase" size={20} color="white" />
            <span className="text-white text-sm font-medium">
              Your Business Success Partner
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Start, Grow & Thrive
            <br />
            <span className="text-accent">Your Business Hub</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Streamlined permits, licenses, and compliance management. Everything
            you need to launch and scale your business in one powerful platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-civic-lg"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={onGetStarted}
            >
              Get Started Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10"
              iconName="Calendar"
              iconPosition="left"
              onClick={onScheduleConsultation}
            >
              Schedule Consultation
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: "FileCheck",
                label: "Fast Approvals",
                value: "48hrs avg",
              },
              { icon: "Users", label: "Active Businesses", value: "2,500+" },
              { icon: "TrendingUp", label: "Success Rate", value: "98%" },
            ]?.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <Icon
                  name={stat?.icon}
                  size={32}
                  color="white"
                  className="mx-auto mb-2"
                />
                <div className="text-2xl font-bold text-white mb-1">
                  {stat?.value}
                </div>
                <div className="text-sm text-white/80">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
