import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import Button from "../../../components/ui/Button";

const PublicRecordsSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [previewDocument, setPreviewDocument] = useState(null);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "council-minutes", label: "Council Minutes" },
    { value: "budget-reports", label: "Budget Reports" },
    { value: "permits", label: "Permits & Licenses" },
    { value: "ordinances", label: "Ordinances & Resolutions" },
    { value: "contracts", label: "Contracts & Agreements" },
    { value: "reports", label: "Annual Reports" },
  ];

  const years = [
    { value: "all", label: "All Years" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
  ];

  const documents = [
    {
      id: 1,
      title: "City Council Meeting Minutes - December 2024",
      category: "council-minutes",
      date: "2024-12-05",
      size: "2.4 MB",
      format: "PDF",
      description:
        "Official minutes from the December 5th, 2024 city council meeting covering budget discussions, zoning amendments, and community development initiatives.",
      downloads: 342,
      views: 1256,
    },
    {
      id: 2,
      title: "Annual Budget Report FY 2024-2025",
      category: "budget-reports",
      date: "2024-07-01",
      size: "8.7 MB",
      format: "PDF",
      description:
        "Comprehensive annual budget report detailing all municipal expenditures, revenue sources, and financial projections for fiscal year 2024-2025.",
      downloads: 892,
      views: 3421,
    },
    {
      id: 3,
      title: "Building Permit Application Guidelines",
      category: "permits",
      date: "2024-01-15",
      size: "1.2 MB",
      format: "PDF",
      description:
        "Complete guide for residential and commercial building permit applications including requirements, fees, and approval process timelines.",
      downloads: 1567,
      views: 5234,
    },
    {
      id: 4,
      title: "Ordinance 2024-089: Noise Control Regulations",
      category: "ordinances",
      date: "2024-11-20",
      size: "856 KB",
      format: "PDF",
      description:
        "Municipal ordinance establishing noise control regulations for residential and commercial areas with enforcement procedures and penalty structures.",
      downloads: 234,
      views: 876,
    },
    {
      id: 5,
      title: "Public Works Contract - Road Maintenance 2024",
      category: "contracts",
      date: "2024-03-10",
      size: "3.1 MB",
      format: "PDF",
      description:
        "Awarded contract for annual road maintenance services including scope of work, payment terms, and performance requirements.",
      downloads: 156,
      views: 543,
    },
    {
      id: 6,
      title: "Parks & Recreation Annual Report 2023",
      category: "reports",
      date: "2024-02-28",
      size: "5.4 MB",
      format: "PDF",
      description:
        "Annual report summarizing parks and recreation department activities, program participation statistics, and facility improvements for 2023.",
      downloads: 445,
      views: 1678,
    },
    {
      id: 7,
      title: "City Council Meeting Minutes - November 2024",
      category: "council-minutes",
      date: "2024-11-07",
      size: "2.1 MB",
      format: "PDF",
      description:
        "Official minutes from the November 7th, 2024 city council meeting discussing infrastructure projects and community safety initiatives.",
      downloads: 298,
      views: 1089,
    },
    {
      id: 8,
      title: "Quarterly Financial Report Q3 2024",
      category: "budget-reports",
      date: "2024-10-15",
      size: "4.2 MB",
      format: "PDF",
      description:
        "Third quarter financial report showing revenue collection, expenditure analysis, and budget variance explanations for Q3 2024.",
      downloads: 567,
      views: 2134,
    },
  ];

  const filteredDocuments = documents?.filter((doc) => {
    const matchesSearch =
      doc?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      doc?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || doc?.category === selectedCategory;
    const matchesYear =
      selectedYear === "all" || doc?.date?.startsWith(selectedYear);
    return matchesSearch && matchesCategory && matchesYear;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case "council-minutes":
        return "FileText";
      case "budget-reports":
        return "DollarSign";
      case "permits":
        return "FileCheck";
      case "ordinances":
        return "Scale";
      case "contracts":
        return "FileSignature";
      case "reports":
        return "BarChart3";
      default:
        return "File";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-card rounded-xl shadow-civic-md p-6 border border-border">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Public Records Search
        </h2>
        <p className="text-muted-foreground">
          Access municipal documents, meeting minutes, and official records
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="md:col-span-3">
          <Input
            type="search"
            placeholder="Search documents by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            className="w-full"
          />
        </div>
        <Select
          options={categories}
          value={selectedCategory}
          onChange={setSelectedCategory}
          placeholder="Select category"
        />
        <Select
          options={years}
          value={selectedYear}
          onChange={setSelectedYear}
          placeholder="Select year"
        />
        <Button
          variant="outline"
          fullWidth
          iconName="Filter"
          iconPosition="left"
        >
          Advanced Filters
        </Button>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Found {filteredDocuments?.length} document
          {filteredDocuments?.length !== 1 ? "s" : ""}
        </p>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" iconName="Download">
            Bulk Download
          </Button>
          <Button variant="ghost" size="sm" iconName="Share2">
            Share Results
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        {filteredDocuments?.map((doc) => (
          <div
            key={doc?.id}
            className="border border-border rounded-lg p-4 hover:shadow-civic-md transition-all duration-civic-fast civic-interactive"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start space-x-3 flex-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon
                    name={getCategoryIcon(doc?.category)}
                    size={24}
                    className="text-primary"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {doc?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {doc?.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} />
                      <span>{formatDate(doc?.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="FileType" size={14} />
                      <span>{doc?.format}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="HardDrive" size={14} />
                      <span>{doc?.size}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={14} />
                      <span>{doc?.views?.toLocaleString()} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Download" size={14} />
                      <span>{doc?.downloads?.toLocaleString()} downloads</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-3 border-t border-border">
              <Button
                variant="default"
                size="sm"
                iconName="Eye"
                iconPosition="left"
                onClick={() => setPreviewDocument(doc)}
              >
                Preview
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Download"
                iconPosition="left"
              >
                Download
              </Button>
              <Button
                variant="ghost"
                size="sm"
                iconName="Share2"
                iconPosition="left"
              >
                Share
              </Button>
              <Button
                variant="ghost"
                size="sm"
                iconName="Bookmark"
                iconPosition="left"
              >
                Save
              </Button>
            </div>
          </div>
        ))}
      </div>
      {filteredDocuments?.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Icon name="Search" size={32} className="text-muted-foreground" />
          </div>
          <p className="text-muted-foreground mb-2">No documents found</p>
          <p className="text-sm text-muted-foreground">
            Try adjusting your search criteria or filters
          </p>
        </div>
      )}
      {previewDocument && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
            onClick={() => setPreviewDocument(null)}
          />
          <div className="fixed inset-4 md:inset-8 lg:inset-16 bg-card rounded-xl shadow-civic-lg z-50 overflow-hidden animate-slide-in-right">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold text-foreground">
                {previewDocument?.title}
              </h3>
              <button
                onClick={() => setPreviewDocument(null)}
                className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto h-[calc(100%-4rem)] scrollbar-civic">
              <div className="max-w-4xl mx-auto">
                <div className="bg-muted/50 rounded-lg p-8 mb-6">
                  <Icon
                    name="FileText"
                    size={64}
                    className="text-muted-foreground mx-auto mb-4"
                  />
                  <p className="text-center text-muted-foreground">
                    Document preview would appear here
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Document Information
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {previewDocument?.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Date Published
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {formatDate(previewDocument?.date)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        File Size
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {previewDocument?.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2 pt-4">
                    <Button
                      variant="default"
                      fullWidth
                      iconName="Download"
                      iconPosition="left"
                    >
                      Download Document
                    </Button>
                    <Button
                      variant="outline"
                      fullWidth
                      iconName="Printer"
                      iconPosition="left"
                    >
                      Print
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PublicRecordsSearch;
