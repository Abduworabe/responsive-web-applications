import React, { useState } from "react";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";

import ForumHeader from "./components/ForumHeader";
import CategoryFilter from "./components/CategoryFilter";
import DiscussionCard from "./components/DiscussionCard";
import TownHallCard from "./components/TownHallCard";
import PollCard from "./components/PollCard";
import AnnouncementCard from "./components/AnnouncementCard";
import TrendingTopics from "./components/TrendingTopics";
import QuickStats from "./components/QuickStats";
import CreatePostModal from "./components/CreatePostModal";

const CommunityForum = () => {
  const [activeTab, setActiveTab] = useState("discussions");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState("recent");

  const discussions = [
    {
      id: 1,
      title: "Proposal for New Community Park in Downtown Area",
      excerpt:
        "I'd like to propose the development of a new community park in the downtown area. The vacant lot on Main Street could be transformed into a green space with playgrounds, walking paths, and community gardens.",
      category: "parks",
      categoryLabel: "Parks & Recreation",
      author: {
        name: "Sarah Johnson",
        role: "Community Member",
        avatar:
          "https://img.rocket.new/generatedImages/rocket_gen_img_170699746-1763294878713.png",
        avatarAlt:
          "Professional headshot of woman with shoulder-length brown hair wearing blue blazer smiling warmly",
        verified: true,
      },
      likes: 156,
      replies: 43,
      views: 892,
      tags: ["parks", "downtown", "development"],
      createdAt: "2025-12-09T10:15:00",
    },
    {
      id: 2,
      title: "Traffic Light Needed at Oak Street Intersection",
      excerpt:
        "The intersection at Oak Street and Maple Avenue has become increasingly dangerous. Multiple near-miss accidents have occurred in recent months. A traffic light installation would significantly improve safety.",
      category: "infrastructure",
      categoryLabel: "Infrastructure",
      author: {
        name: "Michael Chen",
        role: "Neighborhood Association",
        avatar:
          "https://img.rocket.new/generatedImages/rocket_gen_img_1bd15b436-1763300581767.png",
        avatarAlt:
          "Professional headshot of Asian man with short black hair wearing gray suit and glasses",
        verified: true,
      },
      likes: 234,
      replies: 67,
      views: 1543,
      tags: ["traffic", "safety", "infrastructure"],
      createdAt: "2025-12-09T08:30:00",
    },
    {
      id: 3,
      title: "Community Garden Initiative - Volunteers Needed",
      excerpt:
        "We're launching a community garden initiative and looking for volunteers! This project will provide fresh produce to local families and create a space for community connection.",
      category: "environment",
      categoryLabel: "Environment",
      author: {
        name: "Emily Rodriguez",
        role: "Green Initiative Leader",
        avatar:
          "https://img.rocket.new/generatedImages/rocket_gen_img_162a57531-1763296100992.png",
        avatarAlt:
          "Professional headshot of Hispanic woman with long dark hair wearing green shirt smiling brightly",
        verified: false,
      },
      likes: 189,
      replies: 52,
      views: 1124,
      tags: ["environment", "volunteer", "community"],
      createdAt: "2025-12-08T16:45:00",
    },
    {
      id: 4,
      title: "Improved Street Lighting on Residential Streets",
      excerpt:
        "Many residential streets lack adequate lighting, creating safety concerns for evening walkers and cyclists. I propose a comprehensive street lighting improvement plan.",
      category: "safety",
      categoryLabel: "Public Safety",
      author: {
        name: "David Thompson",
        role: "Safety Committee",
        avatar:
          "https://img.rocket.new/generatedImages/rocket_gen_img_1737de3d0-1763299932237.png",
        avatarAlt:
          "Professional headshot of man with short blonde hair wearing navy blue shirt",
        verified: true,
      },
      likes: 167,
      replies: 38,
      views: 876,
      tags: ["safety", "lighting", "infrastructure"],
      createdAt: "2025-12-08T14:20:00",
    },
    {
      id: 5,
      title: "Expanding Recycling Program to Include Electronics",
      excerpt:
        "Our current recycling program is great, but we need to expand it to include electronic waste. Many residents don't know how to properly dispose of old electronics.",
      category: "environment",
      categoryLabel: "Environment",
      author: {
        name: "Lisa Anderson",
        role: "Environmental Advocate",
        avatar:
          "https://img.rocket.new/generatedImages/rocket_gen_img_1d6a9f69d-1763296590694.png",
        avatarAlt:
          "Professional headshot of woman with curly red hair wearing green sweater smiling confidently",
        verified: false,
      },
      likes: 143,
      replies: 29,
      views: 654,
      tags: ["recycling", "environment", "sustainability"],
      createdAt: "2025-12-08T11:00:00",
    },
  ];

  const townHalls = [
    {
      id: 1,
      title: "2025 City Budget Planning Session",
      description:
        "Join us for an interactive discussion about the 2025 city budget. Share your priorities and learn how municipal funds are allocated.",
      date: "2025-12-15T18:00:00",
      location: "City Hall Auditorium & Virtual",
      attendees: 342,
      status: "upcoming",
      host: {
        name: "Mayor Jennifer Williams",
        title: "City Mayor",
        avatar:
          "https://img.rocket.new/generatedImages/rocket_gen_img_1e6e945e2-1764866141793.png",
        avatarAlt:
          "Professional headshot of woman with short gray hair wearing navy suit smiling warmly",
      },
    },
    {
      id: 2,
      title: "Downtown Revitalization Project Update",
      description:
        "Live discussion about the progress of downtown revitalization efforts. Q&A session with project managers and city planners.",
      date: "2025-12-09T16:33:06",
      location: "Virtual Meeting",
      attendees: 156,
      status: "live",
      host: {
        name: "Robert Martinez",
        title: "City Planning Director",
        avatar:
          "https://img.rocket.new/generatedImages/rocket_gen_img_145ad4bba-1763294926258.png",
        avatarAlt:
          "Professional headshot of Hispanic man with dark hair wearing gray suit and tie",
      },
    },
    {
      id: 3,
      title: "Public Safety & Emergency Preparedness Forum",
      description:
        "Learn about emergency response protocols, disaster preparedness, and community safety initiatives. Meet with police and fire department representatives.",
      date: "2025-12-20T19:00:00",
      location: "Community Center",
      attendees: 289,
      status: "upcoming",
      host: {
        name: "Chief Patricia Davis",
        title: "Police Chief",
        avatar:
          "https://img.rocket.new/generatedImages/rocket_gen_img_19e056667-1763298884548.png",
        avatarAlt:
          "Professional headshot of African American woman with short black hair in police uniform",
      },
    },
  ];

  const polls = [
    {
      id: 1,
      question: "What should be the priority for the new community center?",
      description:
        "Help us decide which facilities to prioritize in the new community center development.",
      options: [
        { text: "Indoor Sports Facilities", percentage: 35 },
        { text: "Arts & Cultural Spaces", percentage: 28 },
        { text: "Senior Activity Center", percentage: 22 },
        { text: "Youth Programs Area", percentage: 15 },
      ],

      totalVotes: 1847,
      comments: 234,
      endDate: "2025-12-20T23:59:59",
      hasVoted: false,
    },
    {
      id: 2,
      question: "Preferred timing for community events",
      description:
        "When would you most likely attend community events and town halls?",
      options: [
        { text: "Weekday Evenings (6-8 PM)", percentage: 42 },
        { text: "Weekend Mornings (9-11 AM)", percentage: 31 },
        { text: "Weekend Afternoons (2-4 PM)", percentage: 18 },
        { text: "Weekday Lunch Hours", percentage: 9 },
      ],

      totalVotes: 2134,
      comments: 156,
      endDate: "2025-12-18T23:59:59",
      hasVoted: false,
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "Water Main Maintenance - Service Interruption",
      content:
        "Scheduled water main maintenance will affect the downtown area on December 12th from 8 AM to 4 PM. Residents are advised to store water in advance. Emergency water stations will be available at City Hall and Community Center.",
      department: "Public Works Department",
      priority: "urgent",
      icon: "Droplet",
      publishedAt: "2025-12-09T09:00:00",
      views: 3456,
      actionRequired: true,
      actionDetails: "Store water before December 12th, 8 AM",
      link: true,
    },
    {
      id: 2,
      title: "New Online Permit Application System Launch",
      content:
        "We're excited to announce the launch of our new online permit application system. Apply for building permits, business licenses, and event permits from the comfort of your home. The system features real-time status tracking and automated notifications.",
      department: "City Administration",
      priority: "high",
      icon: "FileText",
      publishedAt: "2025-12-08T14:30:00",
      views: 2789,
      actionRequired: false,
      link: true,
    },
    {
      id: 3,
      title: "Holiday Waste Collection Schedule Changes",
      content:
        "Please note that waste collection schedules will be adjusted during the holiday season. Collections scheduled for December 25th and January 1st will be moved to the following day. Recycling pickup remains on regular schedule.",
      department: "Sanitation Services",
      priority: "normal",
      icon: "Trash2",
      publishedAt: "2025-12-07T11:15:00",
      views: 1923,
      actionRequired: false,
      link: false,
    },
  ];

  const sortOptions = [
    { value: "recent", label: "Most Recent" },
    { value: "popular", label: "Most Popular" },
    { value: "replies", label: "Most Replies" },
    { value: "views", label: "Most Viewed" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "discussions":
        return (
          <div className="space-y-4">
            {discussions?.map((discussion) => (
              <DiscussionCard key={discussion?.id} discussion={discussion} />
            ))}
          </div>
        );

      case "town-halls":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {townHalls?.map((townHall) => (
              <TownHallCard key={townHall?.id} townHall={townHall} />
            ))}
          </div>
        );

      case "polls":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {polls?.map((poll) => (
              <PollCard key={poll?.id} poll={poll} />
            ))}
          </div>
        );

      case "announcements":
        return (
          <div className="space-y-4">
            {announcements?.map((announcement) => (
              <AnnouncementCard
                key={announcement?.id}
                announcement={announcement}
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <ForumHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onCreatePost={() => setIsCreateModalOpen(true)}
        />

        <div className="container mx-auto px-4 py-8">
          <QuickStats />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar */}
            <aside className="lg:col-span-3 space-y-6">
              <CategoryFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />

              <TrendingTopics />

              {/* Community Guidelines */}
              <div className="bg-card rounded-xl border border-border p-4 shadow-civic-sm">
                <h3 className="font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="Shield" size={18} className="mr-2 text-primary" />
                  Community Guidelines
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-success flex-shrink-0 mt-0.5"
                    />
                    <span>Be respectful and constructive</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-success flex-shrink-0 mt-0.5"
                    />
                    <span>Focus on issues, not individuals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-success flex-shrink-0 mt-0.5"
                    />
                    <span>Provide evidence when possible</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-success flex-shrink-0 mt-0.5"
                    />
                    <span>Stay on topic</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" fullWidth className="mt-4">
                  Read Full Guidelines
                </Button>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9">
              {/* Search and Sort */}
              <div className="bg-card rounded-xl border border-border p-4 mb-6 shadow-civic-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Icon
                        name="Search"
                        size={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      />

                      <input
                        type="text"
                        placeholder="Search discussions, topics, or keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e?.target?.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-48">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e?.target?.value)}
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    >
                      {sortOptions?.map((option) => (
                        <option key={option?.value} value={option?.value}>
                          {option?.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              {renderContent()}

              {/* Load More */}
              {activeTab === "discussions" && (
                <div className="mt-8 text-center">
                  <Button
                    variant="outline"
                    iconName="RefreshCw"
                    iconPosition="left"
                  >
                    Load More Discussions
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
};

export default CommunityForum;
