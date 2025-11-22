import React, { useState } from "react";

import AlertSection from "../sections/AlertSection";
import ButtonSection from "../sections/ButtonSection";
import CardSection from "../sections/CardSection";
import InputSection from "../sections/InputSection";
import FooterSection from "../sections/FooterSection";
import AccordionSection from "../sections/AccordionSection";
import TableSection from "../sections/TableSection";
import GenericSection from "../sections/GenericSection";

import { SimpleDropdown, IconDropdown, MultiSelectDropdown } from "../components/DropdownComponents";
import { SimpleTooltip, IconTooltip, RichTooltip, PositionedTooltips } from "../components/TooltipComponents";
import { SimpleProgress, LabeledProgress, StripedProgress, MultiStepProgress, CircularProgress } from "../components/ProgressComponents";
import { SimplePagination, InfoPagination, CompactPagination } from "../components/PaginationComponents";
import { SimpleBreadcrumb, IconBreadcrumb, CardBreadcrumb, StyledBreadcrumb } from "../components/BreadcrumbComponents";
import { SimpleSkeleton, CardSkeleton, ListSkeleton, ProfileSkeleton, TableSkeleton } from "../components/SkeletonComponents";
import { BasicBadge, OrangeBadge, OutlineBadge, SuccessBadge, ErrorBadge, WarningBadge, InfoBadge, DotBadge, CountBadge, RemovableBadge, StarBadge, ZapBadge } from "../components/BadgeComponents";
import { BasicModal, ConfirmModal, SuccessModal, InfoModal } from "../components/ModalComponents";
import { BasicTabs, PillTabs, IconTabs, VerticalTabs } from "../components/TabComponents";

// New component imports
import { SimpleNotification, SuccessNotification, ErrorNotification, InfoNotification, MessageNotification, EmailNotification } from "../components/NotificationComponents";
import { SimpleStatCard, RevenueStatCard, RatingStatCard, EngagementStatCard, PerformanceStatCard, TimeStatCard, AchievementStatCard, LikesStatCard } from "../components/StatCardComponents";
import { SimpleProfileCard, DetailedProfileCard, CompactProfileCard, SocialProfileCard, TeamMemberCard, ContactProfileCard } from "../components/ProfileCardComponents";
import { SimpleSearchBar, SearchBarWithButton, SearchBarWithFilter, SearchBarWithTags, SearchBarWithDropdown, SearchBarWithSuggestions } from "../components/SearchBarComponents";
import { SimpleCheckbox, RoundedCheckbox, CheckboxGroup, IndeterminateCheckbox, SimpleRadio, CardRadio, ToggleSwitch, ToggleSwitchWithLabels } from "../components/CheckboxRadioComponents";
import { SimpleTimelineItem, DetailedTimeline, HorizontalTimeline, ActivityTimeline, MilestoneTimeline } from "../components/TimelineComponents";
import { SimpleMetricCard, CompactMetricCard, DetailedMetricCard, MetricCardWithChart, ComparisonMetricCard, GoalMetricCard, TrendMetricCard } from "../components/MetricCardComponents";
import { ImageMediaCard, VideoMediaCard, AudioMediaCard, DocumentMediaCard, GalleryMediaCard, PlaylistMediaCard } from "../components/MediaCardComponents";
import { SimpleTag, ColoredTag, RemovableTag, IconTag, PillTag, DotTag, CountTag, HashTag, StarTag, ZapTag, FlameTag, AwardTag, TrendingTag, VerifiedTag, TagGroup, InteractiveTagGroup, SizeVariantTags, OutlineTag, SolidTag, GradientTag } from "../components/TagComponents";

const BasicModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="btn-primary px-6 py-3 rounded-lg" onClick={() => setIsOpen(true)}>Open Basic Modal</button>
      <BasicModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

const ConfirmModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="btn-primary px-6 py-3 rounded-lg" onClick={() => setIsOpen(true)}>Open Confirm Modal</button>
      <ConfirmModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        onConfirm={() => { setIsOpen(false); alert("Confirmed!"); }} 
      />
    </>
  );
};

const SuccessModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="btn-primary px-6 py-3 rounded-lg" onClick={() => setIsOpen(true)}>Open Success Modal</button>
      <SuccessModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

const InfoModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="btn-primary px-6 py-3 rounded-lg" onClick={() => setIsOpen(true)}>Open Info Modal</button>
      <InfoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

const Components = () => {
  const [isActive, setisActive] = useState("All");
  const components = [
    "All",
    "Alerts",
    "Buttons",
    "Cards",
    "Inputs",
    "Tables",
    "Footers",
    "Accordions",
    "Dropdowns",
    "Tooltips",
    "Progress",
    "Pagination",
    "Breadcrumbs",
    "Skeletons",
    "Badges",
    "Modals",
    "Tabs",
    "Notifications",
    "Stat Cards",
    "Profile Cards",
    "Search Bars",
    "Checkboxes & Radios",
    "Timelines",
    "Metric Cards",
    "Media Cards",
    "Tags",
  ];

  return (
    <div className="w-full min-h-screen pt-[80px] flex flex-col lg:flex-row">
      {/* Left Sidebar */}
      <aside className="w-full lg:w-1/5 h-auto lg:h-screen p-4 lg:p-5 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col glass-effect lg:sticky lg:top-[80px] overflow-y-auto">
        <h3 className="text-white font-michroma text-lg mb-4 hidden lg:block">Components</h3>
        <ul className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
          {components.map((component, index) => (
            <li
              key={index}
              className={`cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg whitespace-nowrap text-sm md:text-base ${
                isActive === component ? "bg-white text-black font-semibold" : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setisActive(component)}
            >
              {component}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Section */}
      <section className="w-full lg:w-4/5 min-h-screen p-4 md:p-6 lg:p-8 flex justify-start items-center flex-col overflow-y-auto">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-michroma text-white mb-6 md:mb-8">
          {isActive === "All" ? "Components" : `${isActive}`}
        </h3>

        {isActive === "All" && (
          <div className="w-full max-w-6xl">
            <p className="text-white/70 font-space text-center mb-8 md:mb-12 text-sm md:text-base max-w-2xl mx-auto">
              Browse our collection of professional, responsive components. Click on any category to explore detailed examples and code.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {components.slice(1).map((component, index) => (
                <div
                  key={index}
                  className="card-base rounded-xl p-6 cursor-pointer group hover:border-orange-500/50 transition-all"
                  onClick={() => setisActive(component)}
                >
                  <p className="text-base md:text-lg font-space text-white/70 group-hover:text-white transition-all duration-300">
                    {component}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {isActive === "Alerts" && <AlertSection />}
        {isActive === "Buttons" && <ButtonSection />}
        {isActive === "Cards" && <CardSection />}
        {isActive === "Inputs" && <InputSection />}
        {isActive === "Tables" && <TableSection />}
        {isActive === "Footers" && <FooterSection />}
        {isActive === "Accordions" && <AccordionSection />}

        {isActive === "Dropdowns" && (
          <GenericSection
            title="Dropdowns"
            description="Selection menus and dropdowns"
            components={[
              {
                name: "Simple Dropdown",
                component: <SimpleDropdown />,
                implementationCode: `export const SimpleDropdown = ({ customStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");
  
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <div className="relative w-64" style={customStyle}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-space flex items-center justify-between hover:bg-white/10 transition-colors"
      >
        <span className={selected === "Select an option" ? "text-white/40" : "text-white"}>
          {selected}
        </span>
        <ChevronDown size={18} className={\`text-white/60 transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black border border-white/10 rounded-lg overflow-hidden z-10 shadow-xl">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left text-white/70 font-space hover:bg-white/10 hover:text-white transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};`,
                usageCode: `import { SimpleDropdown } from "../components/DropdownComponents";

const MyComponent = () => {
  return (
    <div className="p-4">
      <SimpleDropdown />
    </div>
  );
};`
              },
              {
                name: "Icon Dropdown",
                component: <IconDropdown />,
                implementationCode: `export const IconDropdown = ({ customStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  
  const options = [
    { label: "Components", value: "components" },
    { label: "Themes", value: "themes" },
    { label: "Documentation", value: "docs" },
    { label: "Contact", value: "contact" }
  ];

  return (
    <div className="relative w-64" style={customStyle}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full card-base rounded-xl px-4 py-3 text-white font-space flex items-center justify-between hover:border-orange-500/50 transition-all"
      >
        <span className={!selected ? "text-white/40" : "text-white"}>
          {selected ? options.find(o => o.value === selected)?.label : "Choose a page"}
        </span>
        <ChevronDown size={18} className={\`text-white/60 transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 card-base rounded-xl overflow-hidden z-10 shadow-2xl">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                setSelected(option.value);
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left text-white/70 font-space hover:bg-white/10 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>{option.label}</span>
              {selected === option.value && (
                <Check size={16} className="text-orange-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};`,
                usageCode: `import { IconDropdown } from "../components/DropdownComponents";

const MyComponent = () => {
  return (
    <div className="p-4">
      <IconDropdown />
    </div>
  );
};`
              },
              {
                name: "Multi-Select Dropdown",
                component: <MultiSelectDropdown />,
                implementationCode: `export const MultiSelectDropdown = ({ customStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  
  const options = ["React", "Vue", "Angular", "Svelte", "Next.js"];

  const toggleOption = (option) => {
    setSelected(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="relative w-72" style={customStyle}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full card-base rounded-xl px-4 py-3 text-white font-space flex items-center justify-between hover:border-orange-500/50 transition-all"
      >
        <span className={selected.length === 0 ? "text-white/40" : "text-white"}>
          {selected.length === 0 
            ? "Select frameworks" 
            : \`\${selected.length} selected\`}
        </span>
        <ChevronDown size={18} className={\`text-white/60 transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 card-base rounded-xl overflow-hidden z-10 shadow-2xl">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => toggleOption(option)}
              className="w-full px-4 py-3 text-left text-white/70 font-space hover:bg-white/10 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>{option}</span>
              {selected.includes(option) && (
                <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center">
                  <Check size={14} className="text-black" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
      
      {selected.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {selected.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-400 font-space text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};`,
                usageCode: `import { MultiSelectDropdown } from "../components/DropdownComponents";

const MyComponent = () => {
  return (
    <div className="p-4">
      <MultiSelectDropdown />
    </div>
  );
};`
              }
            ]}
          />
        )}

        {isActive === "Tooltips" && (
          <GenericSection
            title="Tooltips"
            description="Helpful hover information"
            components={[
              {
                name: "Simple Tooltip",
                component: <SimpleTooltip />,
                implementationCode: `export const SimpleTooltip = ({ customStyle }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block" style={customStyle}>
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="btn-primary px-6 py-3 rounded-lg font-semibold"
      >
        Hover me
      </button>
      
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black border border-white/20 rounded-lg text-white font-space text-sm whitespace-nowrap shadow-xl">
          This is a tooltip
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white/20"></div>
        </div>
      )}
    </div>
  );
};`,
                usageCode: `import { SimpleTooltip } from "../components/TooltipComponents";

const MyComponent = () => (
  <SimpleTooltip />
);`
              },
              {
                name: "Icon Tooltip",
                component: <IconTooltip />,
                implementationCode: `export const IconTooltip = ({ customStyle }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block" style={customStyle}>
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
      >
        <Info size={18} className="text-white/70" />
      </button>
      
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-orange-500 rounded-lg text-black font-space text-sm font-semibold whitespace-nowrap shadow-xl">
          Click for more info
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-orange-500"></div>
        </div>
      )}
    </div>
  );
};`,
                usageCode: `import { IconTooltip } from "../components/TooltipComponents";

const MyComponent = () => (
  <IconTooltip />
);`
              },
              {
                name: "Rich Tooltip",
                component: <RichTooltip />,
                implementationCode: `export const RichTooltip = ({ customStyle }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block" style={customStyle}>
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="card-base px-6 py-3 rounded-xl font-space hover:border-orange-500/50 transition-all"
      >
        <HelpCircle size={20} className="text-white inline mr-2" />
        Need help?
      </button>
      
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 card-base rounded-xl p-4 shadow-2xl">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle size={18} className="text-orange-400" />
            </div>
            <div>
              <h4 className="text-white font-michroma text-sm mb-1">Quick Help</h4>
              <p className="text-white/60 font-space text-xs leading-relaxed">
                Visit our documentation for detailed guides and examples.
              </p>
            </div>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-white/10"></div>
        </div>
      )}
    </div>
  );
};`,
                usageCode: `import { RichTooltip } from "../components/TooltipComponents";

const MyComponent = () => (
  <RichTooltip />
);`
              },
              {
                name: "Positioned Tooltips",
                component: <PositionedTooltips />,
                implementationCode: `export const PositionedTooltips = ({ customStyle }) => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const positions = [
    { id: 'top', label: 'Top', position: 'bottom-full mb-2' },
    { id: 'bottom', label: 'Bottom', position: 'top-full mt-2' },
    { id: 'left', label: 'Left', position: 'right-full mr-2 top-1/2 -translate-y-1/2' },
    { id: 'right', label: 'Right', position: 'left-full ml-2 top-1/2 -translate-y-1/2' }
  ];

  return (
    <div className="flex gap-4 flex-wrap" style={customStyle}>
      {positions.map((pos) => (
        <div key={pos.id} className="relative inline-block">
          <button
            onMouseEnter={() => setActiveTooltip(pos.id)}
            onMouseLeave={() => setActiveTooltip(null)}
            className="btn-secondary px-4 py-2 rounded-lg font-space text-sm"
          >
            {pos.label}
          </button>
          
          {activeTooltip === pos.id && (
            <div className={\`absolute \${pos.position} px-3 py-2 bg-black border border-orange-500/50 rounded-lg text-white font-space text-xs whitespace-nowrap shadow-xl z-10\`}>
              Tooltip {pos.label}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};`,
                usageCode: `import { PositionedTooltips } from "../components/TooltipComponents";

const MyComponent = () => (
  <PositionedTooltips />
);`
              }
            ]}
          />
        )}

        {isActive === "Progress" && (
          <GenericSection
            title="Progress"
            description="Progress indicators and loaders"
            components={[
              {
                name: "Simple Progress",
                component: <SimpleProgress />,
                implementationCode: `export const SimpleProgress = ({ customStyle, progress = 60 }) => {
  return (
    <div className="w-full max-w-md" style={customStyle}>
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-orange-500 rounded-full transition-all duration-500"
          style={{ width: \`\${progress}%\` }}
        />
      </div>
    </div>
  );
};`,
                usageCode: `import { SimpleProgress } from "../components/ProgressComponents";

const MyComponent = () => (
  <SimpleProgress progress={45} />
);`
              },
              {
                name: "Labeled Progress",
                component: <LabeledProgress />,
                implementationCode: `export const LabeledProgress = ({ customStyle, progress = 75 }) => {
  return (
    <div className="w-full max-w-md" style={customStyle}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-space text-sm">Loading...</span>
        <span className="text-orange-400 font-michroma text-sm">{progress}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500"
          style={{ width: \`\${progress}%\` }}
        />
      </div>
    </div>
  );
};`,
                usageCode: `import { LabeledProgress } from "../components/ProgressComponents";

const MyComponent = () => (
  <LabeledProgress progress={70} />
);`
              },
              {
                name: "Striped Progress",
                component: <StripedProgress />,
                implementationCode: `export const StripedProgress = ({ customStyle, progress = 45 }) => {
  return (
    <div className="w-full max-w-md" style={customStyle}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-white font-michroma text-sm">Upload Progress</span>
        <span className="text-white/60 font-space text-sm">{progress}% Complete</span>
      </div>
      <div className="w-full bg-white/10 rounded-lg h-4 overflow-hidden border border-white/10">
        <div 
          className="h-full bg-orange-500 rounded-lg transition-all duration-500 relative overflow-hidden"
          style={{ width: \`\${progress}%\` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};`,
                usageCode: `import { StripedProgress } from "../components/ProgressComponents";

const MyComponent = () => (
  <StripedProgress progress={55} />
);`
              },
              {
                name: "Multi-Step Progress",
                component: <MultiStepProgress />,
                implementationCode: `export const MultiStepProgress = ({ customStyle, currentStep = 2 }) => {
  const steps = ["Account", "Profile", "Settings", "Complete"];
  
  return (
    <div className="w-full max-w-2xl" style={customStyle}>
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div className={\`w-10 h-10 rounded-full flex items-center justify-center font-michroma text-sm transition-all \${
                index < currentStep 
                  ? 'bg-orange-500 text-black' 
                  : index === currentStep 
                  ? 'bg-orange-500/20 border-2 border-orange-500 text-orange-400' 
                  : 'bg-white/5 border border-white/10 text-white/40'
              }\`}>
                {index + 1}
              </div>
              <span className={\`mt-2 text-xs font-space \${
                index <= currentStep ? 'text-white' : 'text-white/40'
              }\`}>
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={\`h-0.5 flex-1 mx-2 \${
                index < currentStep ? 'bg-orange-500' : 'bg-white/10'
              }\`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};`,
                usageCode: `import { MultiStepProgress } from "../components/ProgressComponents";

const MyComponent = () => (
  <MultiStepProgress currentStep={2} />
);`
              },
              {
                name: "Circular Progress",
                component: <CircularProgress />,
                implementationCode: `export const CircularProgress = ({ customStyle, progress = 70 }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={customStyle}>
      <svg className="w-32 h-32 transform -rotate-90">
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke="#f97316"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-michroma text-white">{progress}%</span>
      </div>
    </div>
  );
};`,
                usageCode: `import { CircularProgress } from "../components/ProgressComponents";

const MyComponent = () => (
  <CircularProgress progress={80} />
);`
              }
            ]}
          />
        )}

        {isActive === "Pagination" && (
          <GenericSection
            title="Pagination"
            description="Page navigation components"
            components={[
              {
                name: "Simple Pagination",
                component: <SimplePagination />,
                implementationCode: `export const SimplePagination = ({ customStyle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="flex items-center gap-2" style={customStyle}>
      <button
        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
        disabled={currentPage === 1}
        className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronLeft size={18} />
      </button>
      
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={\`w-10 h-10 rounded-lg font-space text-sm transition-all \${
            currentPage === index + 1
              ? 'bg-orange-500 text-black font-semibold'
              : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
          }\`}
        >
          {index + 1}
        </button>
      ))}
      
      <button
        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
        disabled={currentPage === totalPages}
        className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};`,
                usageCode: `import { SimplePagination } from "../components/PaginationComponents";

const MyComponent = () => (
  <SimplePagination />
);`
              },
              {
                name: "Info Pagination",
                component: <InfoPagination />,
                implementationCode: `export const InfoPagination = ({ customStyle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const itemsPerPage = 20;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-2xl" style={customStyle}>
      <p className="text-white/60 font-space text-sm">
        Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, 200)} of 200 results
      </p>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/60 font-space text-sm hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          Previous
        </button>
        
        {/* ... page numbers ... */}
        
        <button
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/60 font-space text-sm hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};`,
                usageCode: `import { InfoPagination } from "../components/PaginationComponents";

const MyComponent = () => (
  <InfoPagination />
);`
              },
              {
                name: "Compact Pagination",
                component: <CompactPagination />,
                implementationCode: `export const CompactPagination = ({ customStyle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  return (
    <div className="flex items-center gap-3" style={customStyle}>
      <button
        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
        disabled={currentPage === 1}
        className="btn-secondary px-4 py-2 rounded-lg font-space text-sm disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={16} className="inline mr-1" />
        Prev
      </button>
      
      <div className="card-base px-4 py-2 rounded-lg">
        <span className="text-white font-space text-sm">
          Page <span className="text-orange-400 font-semibold">{currentPage}</span> of {totalPages}
        </span>
      </div>
      
      <button
        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
        disabled={currentPage === totalPages}
        className="btn-secondary px-4 py-2 rounded-lg font-space text-sm disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Next
        <ChevronRight size={16} className="inline ml-1" />
      </button>
    </div>
  );
};`,
                usageCode: `import { CompactPagination } from "../components/PaginationComponents";

const MyComponent = () => (
  <CompactPagination />
);`
              }
            ]}
          />
        )}

        {isActive === "Breadcrumbs" && (
          <GenericSection
            title="Breadcrumbs"
            description="Navigation breadcrumb trails"
            components={[
              {
                name: "Simple Breadcrumb",
                component: <SimpleBreadcrumb />,
                implementationCode: `export const SimpleBreadcrumb = ({ customStyle }) => {
  const items = ["Home", "Components", "Buttons"];

  return (
    <nav className="flex items-center gap-2 font-space text-sm" style={customStyle}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <a
            href="#"
            className={\`\${
              index === items.length - 1
                ? 'text-white font-semibold'
                : 'text-white/60 hover:text-white transition-colors'
            }\`}
          >
            {item}
          </a>
          {index < items.length - 1 && (
            <ChevronRight size={14} className="text-white/40" />
          )}
        </div>
      ))}
    </nav>
  );
};`,
                usageCode: `import { SimpleBreadcrumb } from "../components/BreadcrumbComponents";

const MyComponent = () => (
  <SimpleBreadcrumb />
);`
              },
              {
                name: "Icon Breadcrumb",
                component: <IconBreadcrumb />,
                implementationCode: `export const IconBreadcrumb = ({ customStyle }) => {
  const items = [
    { label: "Home", icon: Home },
    { label: "Documentation" },
    { label: "Getting Started" }
  ];

  return (
    <nav className="flex items-center gap-2 font-space text-sm" style={customStyle}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <a
            href="#"
            className={\`flex items-center gap-2 \${
              index === items.length - 1
                ? 'text-orange-400 font-semibold'
                : 'text-white/60 hover:text-white transition-colors'
            }\`}
          >
            {item.icon && <item.icon size={16} />}
            {item.label}
          </a>
          {index < items.length - 1 && (
            <ChevronRight size={14} className="text-white/40" />
          )}
        </div>
      ))}
    </nav>
  );
};`,
                usageCode: `import { IconBreadcrumb } from "../components/BreadcrumbComponents";

const MyComponent = () => (
  <IconBreadcrumb />
);`
              },
              {
                name: "Card Breadcrumb",
                component: <CardBreadcrumb />,
                implementationCode: `export const CardBreadcrumb = ({ customStyle }) => {
  const items = ["Dashboard", "Projects", "Lintelligence", "Components"];

  return (
    <nav className="card-base rounded-xl px-4 py-3 inline-flex items-center gap-2 font-space text-sm" style={customStyle}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <a
            href="#"
            className={\`\${
              index === items.length - 1
                ? 'text-white font-semibold'
                : 'text-white/60 hover:text-white transition-colors'
            }\`}
          >
            {item}
          </a>
          {index < items.length - 1 && (
            <span className="text-white/20">/</span>
          )}
        </div>
      ))}
    </nav>
  );
};`,
                usageCode: `import { CardBreadcrumb } from "../components/BreadcrumbComponents";

const MyComponent = () => (
  <CardBreadcrumb />
);`
              },
              {
                name: "Styled Breadcrumb",
                component: <StyledBreadcrumb />,
                implementationCode: `export const StyledBreadcrumb = ({ customStyle }) => {
  const items = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Navigation", href: "/components/navigation" },
    { label: "Breadcrumb" }
  ];

  return (
    <nav className="flex items-center gap-1" style={customStyle}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1">
          <a
            href={item.href || "#"}
            className={\`px-3 py-2 rounded-lg font-space text-sm transition-all \${
              index === items.length - 1
                ? 'bg-orange-500/20 text-orange-400 font-semibold border border-orange-500/30'
                : 'text-white/60 hover:bg-white/5 hover:text-white'
            }\`}
          >
            {item.label}
          </a>
          {index < items.length - 1 && (
            <ChevronRight size={16} className="text-white/30" />
          )}
        </div>
      ))}
    </nav>
  );
};`,
                usageCode: `import { StyledBreadcrumb } from "../components/BreadcrumbComponents";

const MyComponent = () => (
  <StyledBreadcrumb />
);`
              }
            ]}
          />
        )}

        {isActive === "Skeletons" && (
          <GenericSection
            title="Skeletons"
            description="Loading state placeholders"
            components={[
              {
                name: "Simple Skeleton",
                component: <SimpleSkeleton />,
                implementationCode: `export const SimpleSkeleton = ({ customStyle }) => {
  return (
    <div className="w-full max-w-md space-y-4" style={customStyle}>
      <div className="h-4 bg-white/10 rounded-lg animate-pulse" />
      <div className="h-4 bg-white/10 rounded-lg animate-pulse w-5/6" />
      <div className="h-4 bg-white/10 rounded-lg animate-pulse w-4/6" />
    </div>
  );
};`,
                usageCode: `import { SimpleSkeleton } from "../components/SkeletonComponents";

const MyComponent = () => (
  <SimpleSkeleton />
);`
              },
              {
                name: "Card Skeleton",
                component: <CardSkeleton />,
                implementationCode: `export const CardSkeleton = ({ customStyle }) => {
  return (
    <div className="card-base rounded-2xl p-6 w-full max-w-sm" style={customStyle}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-white/10 rounded-full animate-pulse" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-white/10 rounded animate-pulse w-3/4" />
          <div className="h-3 bg-white/10 rounded animate-pulse w-1/2" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-3 bg-white/10 rounded animate-pulse" />
        <div className="h-3 bg-white/10 rounded animate-pulse w-5/6" />
        <div className="h-3 bg-white/10 rounded animate-pulse w-4/6" />
      </div>
    </div>
  );
};`,
                usageCode: `import { CardSkeleton } from "../components/SkeletonComponents";

const MyComponent = () => (
  <CardSkeleton />
);`
              },
              {
                name: "List Skeleton",
                component: <ListSkeleton />,
                implementationCode: `export const ListSkeleton = ({ customStyle }) => {
  return (
    <div className="w-full max-w-md space-y-3" style={customStyle}>
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="card-base rounded-xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 bg-white/10 rounded-lg animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-white/10 rounded animate-pulse w-3/4" />
            <div className="h-3 bg-white/10 rounded animate-pulse w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
};`,
                usageCode: `import { ListSkeleton } from "../components/SkeletonComponents";

const MyComponent = () => (
  <ListSkeleton />
);`
              },
              {
                name: "Profile Skeleton",
                component: <ProfileSkeleton />,
                implementationCode: `export const ProfileSkeleton = ({ customStyle }) => {
  return (
    <div className="card-base rounded-2xl p-8 w-full max-w-md" style={customStyle}>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-white/10 rounded-full animate-pulse mb-4" />
        <div className="h-6 bg-white/10 rounded animate-pulse w-32 mb-2" />
        <div className="h-4 bg-white/10 rounded animate-pulse w-48 mb-6" />
        
        <div className="w-full space-y-4">
          {/* ... skeleton lines ... */}
        </div>
        
        <div className="w-full h-10 bg-white/10 rounded-lg animate-pulse mt-6" />
      </div>
    </div>
  );
};`,
                usageCode: `import { ProfileSkeleton } from "../components/SkeletonComponents";

const MyComponent = () => (
  <ProfileSkeleton />
);`
              },
              {
                name: "Table Skeleton",
                component: <TableSkeleton />,
                implementationCode: `export const TableSkeleton = ({ customStyle }) => {
  return (
    <div className="w-full max-w-3xl" style={customStyle}>
      <div className="card-base rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 border-b border-white/10">
          <div className="h-4 bg-white/10 rounded animate-pulse w-32" />
          <div className="h-4 bg-white/10 rounded animate-pulse w-40" />
          <div className="h-4 bg-white/10 rounded animate-pulse w-24" />
          <div className="h-4 bg-white/10 rounded animate-pulse w-28" />
        </div>
        
        {/* Rows */}
        {[1, 2, 3, 4, 5].map((row) => (
          <div key={row} className="flex items-center gap-4 p-4 border-b border-white/10 last:border-0">
            <div className="h-3 bg-white/10 rounded animate-pulse w-32" />
            <div className="h-3 bg-white/10 rounded animate-pulse w-40" />
            <div className="h-3 bg-white/10 rounded animate-pulse w-24" />
            <div className="h-3 bg-white/10 rounded animate-pulse w-28" />
          </div>
        ))}
      </div>
    </div>
  );
};`,
                usageCode: `import { TableSkeleton } from "../components/SkeletonComponents";

const MyComponent = () => (
  <TableSkeleton />
);`
              }
            ]}
          />
        )}

        {isActive === "Badges" && (
          <GenericSection
            title="Badges"
            description="Status indicators and labels"
            components={[
              {
                name: "Basic Badge",
                component: <BasicBadge />,
                implementationCode: `export const BasicBadge = () => {
  return (
    <span className="px-3 py-1 rounded-full glass-effect border border-white/20 text-white font-space text-sm font-semibold">
      Badge
    </span>
  );
};`,
                usageCode: `import { BasicBadge } from "../components/BadgeComponents";

const MyComponent = () => (
  <BasicBadge />
);`
              },
              {
                name: "Orange Badge",
                component: <OrangeBadge />,
                implementationCode: `export const OrangeBadge = () => {
  return (
    <span className="px-3 py-1 rounded-full gradient-orange text-white font-space text-sm font-semibold shadow-lg shadow-orange-500/20">
      Orange
    </span>
  );
};`,
                usageCode: `import { OrangeBadge } from "../components/BadgeComponents";

const MyComponent = () => (
  <OrangeBadge />
);`
              },
              {
                name: "Outline Badge",
                component: <OutlineBadge />,
                implementationCode: `export const OutlineBadge = () => {
  return (
    <span className="px-3 py-1 rounded-full border-2 border-orange-500/50 text-orange-400 font-space text-sm font-semibold">
      Outline
    </span>
  );
};`,
                usageCode: `import { OutlineBadge } from "../components/BadgeComponents";

const MyComponent = () => (
  <OutlineBadge />
);`
              },
              {
                name: "Success Badge",
                component: <SuccessBadge />,
                implementationCode: `export const SuccessBadge = () => {
  return (
    <span className="px-3 py-1.5 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white font-space text-sm font-semibold flex items-center gap-1.5 w-fit shadow-lg shadow-green-500/20">
      <Check size={14} />
      Success
    </span>
  );
};`,
                usageCode: `import { SuccessBadge } from "../components/BadgeComponents";

const MyComponent = () => (
  <SuccessBadge />
);`
              },
              {
                name: "Error Badge",
                component: <ErrorBadge />,
                implementationCode: `export const ErrorBadge = () => {
  return (
    <span className="px-3 py-1.5 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white font-space text-sm font-semibold flex items-center gap-1.5 w-fit shadow-lg shadow-red-500/20">
      <X size={14} />
      Error
    </span>
  );
};`,
                usageCode: `import { ErrorBadge } from "../components/BadgeComponents";

const MyComponent = () => (
  <ErrorBadge />
);`
              },
              {
                name: "Warning Badge",
                component: <WarningBadge />,
                implementationCode: `export const WarningBadge = () => {
  return (
    <span className="px-3 py-1.5 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-space text-sm font-semibold flex items-center gap-1.5 w-fit shadow-lg shadow-orange-500/20">
      <AlertCircle size={14} />
      Warning
    </span>
  );
};`,
                usageCode: `import { WarningBadge } from "../components/BadgeComponents";

const MyComponent = () => (
  <WarningBadge />
);`
              },
              {
                name: "Info Badge",
                component: <InfoBadge />,
                implementationCode: `export const InfoBadge = () => {
  return (
    <span className="px-3 py-1.5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-space text-sm font-semibold flex items-center gap-1.5 w-fit shadow-lg shadow-blue-500/20">
      <Info size={14} />
      Info
    </span>
  );
};`,
                usageCode: `import { InfoBadge } from "../components/BadgeComponents";

const MyComponent = () => (
  <InfoBadge />
);`
              },
              {
                name: "Dot Badge",
                component: <DotBadge />,
                implementationCode: `export const DotBadge = () => {
  return (
    <span className="px-3 py-1.5 rounded-full glass-effect border border-orange-500/30 text-white font-space text-sm font-semibold flex items-center gap-2 w-fit">
      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
      Live
    </span>
  );
};`,
                usageCode: `import { DotBadge } from "../components/BadgeComponents";

const MyComponent = () => (
  <DotBadge />
);`
              },
              {
                name: "Count Badge",
                component: <CountBadge />,
                implementationCode: `export const CountBadge = () => {
  return (
    <span className="px-2.5 py-1 rounded-full gradient-orange text-white font-space text-xs font-bold min-w-[24px] text-center shadow-lg shadow-orange-500/30">
      99+
    </span>
  );
};`,
                usageCode: `import { CountBadge } from "../components/BadgeComponents";

const MyComponent = () => (
  <CountBadge />
);`
              },
              {
                name: "Removable Badge",
                component: <RemovableBadge />,
                implementationCode: `export const RemovableBadge = () => {
  const [visible, setVisible] = React.useState(true);
  
  if (!visible) return null;
  
  return (
    <span className="px-3 py-1.5 rounded-full glass-effect-orange border border-orange-500/30 text-white font-space text-sm font-semibold flex items-center gap-2 w-fit">
      Tag
      <button
        onClick={() => setVisible(false)}
        className="hover:text-orange-400 transition-all"
      >
        <X size={14} />
      </button>
    </span>
  );
};`,
                usageCode: `import { RemovableBadge } from "../components/BadgeComponents";

const MyComponent = () => (
  <RemovableBadge />
);`
              },
              {
                name: "Star Badge",
                component: <StarBadge />,
                implementationCode: `export const StarBadge = () => {
  return (
    <span className="px-3 py-1.5 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 text-white font-space text-sm font-semibold flex items-center gap-1.5 w-fit shadow-lg shadow-yellow-500/20">
      <Star size={14} className="fill-white" />
      Premium
    </span>
  );
};`,
                usageCode: `import { StarBadge } from "../components/BadgeComponents";

const MyComponent = () => (
  <StarBadge />
);`
              },
              {
                name: "Zap Badge",
                component: <ZapBadge />,
                implementationCode: `export const ZapBadge = () => {
  return (
    <span className="px-3 py-1.5 rounded-full gradient-orange text-white font-space text-sm font-semibold flex items-center gap-1.5 w-fit shadow-lg shadow-orange-500/30 glow-orange">
      <Zap size={14} className="fill-white" />
      New
    </span>
  );
};`,
                usageCode: `import { ZapBadge } from "../components/BadgeComponents";

const MyComponent = () => (
  <ZapBadge />
);`
              }
            ]}
          />
        )}

        {isActive === "Modals" && (
          <GenericSection
            title="Modals"
            description="Overlay dialogs for user interaction"
            components={[
              {
                name: "Basic Modal",
                component: <BasicModalWrapper />,
                implementationCode: `export const BasicModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative glass-effect-orange border-2 border-orange-500/30 rounded-xl p-6 w-full max-w-md shadow-2xl shadow-orange-500/20 animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-all"
        >
          <X size={20} />
        </button>
        <h3 className="text-2xl font-michroma text-white mb-4">Modal Title</h3>
        <p className="text-white/70 font-space mb-6">
          This is a basic modal component with glass morphism effect and smooth animations.
        </p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="glass-effect px-5 py-2.5 rounded-lg font-space font-semibold hover:glass-effect-orange transition-all"
          >
            Cancel
          </button>
          <button className="gradient-orange px-5 py-2.5 rounded-lg font-space font-semibold hover:opacity-90 transition-all glow-orange">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};`,
                usageCode: `import { BasicModal } from "../components/ModalComponents";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <BasicModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};`
              },
              {
                name: "Confirm Modal",
                component: <ConfirmModalWrapper />,
                implementationCode: `export const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative glass-effect border-2 border-white/10 rounded-xl p-6 w-full max-w-md shadow-2xl">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
            <AlertCircle size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-michroma text-white mb-2">Confirm Action</h3>
            <p className="text-white/70 font-space text-sm">
              Are you sure you want to proceed? This action cannot be undone.
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="glass-effect px-5 py-2.5 rounded-lg font-space font-semibold hover:bg-white/10 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-gradient-to-br from-red-500 to-red-600 px-5 py-2.5 rounded-lg font-space font-semibold hover:opacity-90 transition-all shadow-lg shadow-red-500/20"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};`,
                usageCode: `import { ConfirmModal } from "../components/ModalComponents";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete Item</button>
      <ConfirmModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          // Handle confirmation
          setIsOpen(false);
        }}
      />
    </>
  );
};`
              },
              {
                name: "Success Modal",
                component: <SuccessModalWrapper />,
                implementationCode: `export const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative glass-effect border-2 border-green-500/50 rounded-xl p-8 w-full max-w-md shadow-2xl shadow-green-500/20 text-center">
        <div className="inline-block p-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 mb-4">
          <CheckCircle size={48} className="text-white" />
        </div>
        <h3 className="text-2xl font-michroma text-white mb-3">Success!</h3>
        <p className="text-white/70 font-space mb-6">
          Your action has been completed successfully.
        </p>
        <button
          onClick={onClose}
          className="gradient-orange px-6 py-3 rounded-lg font-space font-semibold hover:opacity-90 transition-all glow-orange"
        >
          Continue
        </button>
      </div>
    </div>
  );
};`,
                usageCode: `import { SuccessModal } from "../components/ModalComponents";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show Success</button>
      <SuccessModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};`
              },
              {
                name: "Info Modal",
                component: <InfoModalWrapper />,
                implementationCode: `export const InfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative glass-effect border-2 border-blue-500/50 rounded-xl p-6 w-full max-w-lg shadow-2xl shadow-blue-500/20">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
            <Info size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-michroma text-white mb-3">Information</h3>
            <p className="text-white/70 font-space text-sm mb-4">
              Here's some important information you should know about this feature.
            </p>
            <ul className="space-y-2 text-white/60 font-space text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                Feature is available in Pro plan
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                Supports all major browsers
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                Regular updates included
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="gradient-orange px-5 py-2.5 rounded-lg font-space font-semibold hover:opacity-90 transition-all"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};`,
                usageCode: `import { InfoModal } from "../components/ModalComponents";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show Info</button>
      <InfoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};`
              }
            ]}
          />
        )}

        {isActive === "Tabs" && (
          <GenericSection
            title="Tabs"
            description="Navigation tabs for switching content"
            components={[
              {
                name: "Basic Tabs",
                component: <BasicTabs />,
                implementationCode: `export const BasicTabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="w-full max-w-2xl">
      <div className="flex gap-2 border-b-2 border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={\`px-6 py-3 font-space font-semibold transition-all duration-300 relative \${
              activeTab === tab.id
                ? "text-white"
                : "text-white/50 hover:text-orange-400"
            }\`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 gradient-orange"></div>
            )}
          </button>
        ))}
      </div>
      <div className="p-6 glass-effect rounded-b-xl">
        <p className="text-white/70 font-space">
          Content for {tabs.find((t) => t.id === activeTab)?.label} tab
        </p>
      </div>
    </div>
  );
};`,
                usageCode: `import { BasicTabs } from "../components/TabComponents";

const MyComponent = () => (
  <BasicTabs />
);`
              },
              {
                name: "Pill Tabs",
                component: <PillTabs />,
                implementationCode: `export const PillTabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "analytics", label: "Analytics" },
    { id: "reports", label: "Reports" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <div className="w-full max-w-2xl">
      <div className="flex gap-2 p-2 glass-effect rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={\`px-5 py-2.5 rounded-lg font-space font-semibold transition-all duration-300 \${
              activeTab === tab.id
                ? "gradient-orange text-white glow-orange"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }\`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4 p-6 glass-effect rounded-xl">
        <p className="text-white/70 font-space">
          {tabs.find((t) => t.id === activeTab)?.label} content goes here
        </p>
      </div>
    </div>
  );
};`,
                usageCode: `import { PillTabs } from "../components/TabComponents";

const MyComponent = () => (
  <PillTabs />
);`
              },
              {
                name: "Icon Tabs",
                component: <IconTabs />,
                implementationCode: `export const IconTabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="w-full max-w-2xl">
      <div className="flex gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={\`flex items-center gap-2 px-5 py-3 rounded-lg font-space font-semibold transition-all duration-300 \${
                activeTab === tab.id
                  ? "gradient-orange text-white glow-orange"
                  : "glass-effect text-white/60 hover:text-white hover:glass-effect-orange"
              }\`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4 p-6 glass-effect-orange border-2 border-orange-500/20 rounded-xl">
        <p className="text-white/70 font-space">
          {tabs.find((t) => t.id === activeTab)?.label} section
        </p>
      </div>
    </div>
  );
};`,
                usageCode: `import { IconTabs } from "../components/TabComponents";

const MyComponent = () => (
  <IconTabs />
);`
              },
              {
                name: "Vertical Tabs",
                component: <VerticalTabs />,
                implementationCode: `export const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "account", label: "Account", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="flex gap-4 w-full max-w-2xl">
      <div className="flex flex-col gap-2 w-48">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={\`flex items-center gap-3 px-4 py-3 rounded-lg font-space font-semibold transition-all duration-300 text-left \${
                activeTab === tab.id
                  ? "gradient-orange text-white glow-orange"
                  : "glass-effect text-white/60 hover:text-white hover:glass-effect-orange"
              }\`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="flex-1 p-6 glass-effect rounded-xl">
        <h3 className="text-xl font-michroma text-white mb-3">
          {tabs.find((t) => t.id === activeTab)?.label}
        </h3>
        <p className="text-white/70 font-space">
          Configure your {tabs.find((t) => t.id === activeTab)?.label.toLowerCase()} settings here.
        </p>
      </div>
    </div>
  );
};`,
                usageCode: `import { VerticalTabs } from "../components/TabComponents";

const MyComponent = () => (
  <VerticalTabs />
);`
              }
            ]}
          />
        )}

        {isActive === "Notifications" && (
          <GenericSection
            title="Notifications"
            description="Toast notifications and alerts"
            components={[
              { name: "Simple Notification", component: <SimpleNotification /> },
              { name: "Success Notification", component: <SuccessNotification /> },
              { name: "Error Notification", component: <ErrorNotification /> },
              { name: "Info Notification", component: <InfoNotification /> },
              { name: "Message Notification", component: <MessageNotification /> },
              { name: "Email Notification", component: <EmailNotification /> }
            ]}
          />
        )}

        {isActive === "Stat Cards" && (
          <GenericSection
            title="Stat Cards"
            description="Statistics and data display cards"
            components={[
              { name: "Simple Stat Card", component: <SimpleStatCard /> },
              { name: "Revenue Stat Card", component: <RevenueStatCard /> },
              { name: "Rating Stat Card", component: <RatingStatCard /> },
              { name: "Engagement Stat Card", component: <EngagementStatCard /> },
              { name: "Performance Stat Card", component: <PerformanceStatCard /> },
              { name: "Time Stat Card", component: <TimeStatCard /> },
              { name: "Achievement Stat Card", component: <AchievementStatCard /> },
              { name: "Likes Stat Card", component: <LikesStatCard /> }
            ]}
          />
        )}

        {isActive === "Profile Cards" && (
          <GenericSection
            title="Profile Cards"
            description="User profile and contact cards"
            components={[
              { name: "Simple Profile Card", component: <SimpleProfileCard /> },
              { name: "Detailed Profile Card", component: <DetailedProfileCard /> },
              { name: "Compact Profile Card", component: <CompactProfileCard /> },
              { name: "Social Profile Card", component: <SocialProfileCard /> },
              { name: "Team Member Card", component: <TeamMemberCard /> },
              { name: "Contact Profile Card", component: <ContactProfileCard /> }
            ]}
          />
        )}

        {isActive === "Search Bars" && (
          <GenericSection
            title="Search Bars"
            description="Search inputs and filters"
            components={[
              { name: "Simple Search Bar", component: <SimpleSearchBar /> },
              { name: "Search Bar with Button", component: <SearchBarWithButton /> },
              { name: "Search Bar with Filter", component: <SearchBarWithFilter /> },
              { name: "Search Bar with Tags", component: <SearchBarWithTags /> },
              { name: "Search Bar with Dropdown", component: <SearchBarWithDropdown /> },
              { name: "Search Bar with Suggestions", component: <SearchBarWithSuggestions /> }
            ]}
          />
        )}

        {isActive === "Checkboxes & Radios" && (
          <GenericSection
            title="Checkboxes & Radios"
            description="Selection controls and toggles"
            components={[
              { name: "Simple Checkbox", component: <SimpleCheckbox /> },
              { name: "Rounded Checkbox", component: <RoundedCheckbox /> },
              { name: "Checkbox Group", component: <CheckboxGroup /> },
              { name: "Indeterminate Checkbox", component: <IndeterminateCheckbox /> },
              { name: "Simple Radio", component: <SimpleRadio /> },
              { name: "Card Radio", component: <CardRadio /> },
              { name: "Toggle Switch", component: <ToggleSwitch /> },
              { name: "Toggle Switch with Labels", component: <ToggleSwitchWithLabels /> }
            ]}
          />
        )}

        {isActive === "Timelines" && (
          <GenericSection
            title="Timelines"
            description="Event timelines and activity feeds"
            components={[
              { name: "Simple Timeline Item", component: <SimpleTimelineItem /> },
              { name: "Detailed Timeline", component: <DetailedTimeline /> },
              { name: "Horizontal Timeline", component: <HorizontalTimeline /> },
              { name: "Activity Timeline", component: <ActivityTimeline /> },
              { name: "Milestone Timeline", component: <MilestoneTimeline /> }
            ]}
          />
        )}

        {isActive === "Metric Cards" && (
          <GenericSection
            title="Metric Cards"
            description="Dashboard metrics and KPIs"
            components={[
              { name: "Simple Metric Card", component: <SimpleMetricCard /> },
              { name: "Compact Metric Card", component: <CompactMetricCard /> },
              { name: "Detailed Metric Card", component: <DetailedMetricCard /> },
              { name: "Metric Card with Chart", component: <MetricCardWithChart /> },
              { name: "Comparison Metric Card", component: <ComparisonMetricCard /> },
              { name: "Goal Metric Card", component: <GoalMetricCard /> },
              { name: "Trend Metric Card", component: <TrendMetricCard /> }
            ]}
          />
        )}

        {isActive === "Media Cards" && (
          <GenericSection
            title="Media Cards"
            description="Image, video, and audio cards"
            components={[
              { name: "Image Media Card", component: <ImageMediaCard /> },
              { name: "Video Media Card", component: <VideoMediaCard /> },
              { name: "Audio Media Card", component: <AudioMediaCard /> },
              { name: "Document Media Card", component: <DocumentMediaCard /> },
              { name: "Gallery Media Card", component: <GalleryMediaCard /> },
              { name: "Playlist Media Card", component: <PlaylistMediaCard /> }
            ]}
          />
        )}

        {isActive === "Tags" && (
          <GenericSection
            title="Tags"
            description="Labels, badges, and tags"
            components={[
              { name: "Simple Tag", component: <SimpleTag /> },
              { name: "Colored Tag", component: <ColoredTag /> },
              { name: "Removable Tag", component: <RemovableTag /> },
              { name: "Icon Tag", component: <IconTag /> },
              { name: "Pill Tag", component: <PillTag /> },
              { name: "Dot Tag", component: <DotTag /> },
              { name: "Count Tag", component: <CountTag /> },
              { name: "Hash Tag", component: <HashTag /> },
              { name: "Star Tag", component: <StarTag /> },
              { name: "Zap Tag", component: <ZapTag /> },
              { name: "Flame Tag", component: <FlameTag /> },
              { name: "Award Tag", component: <AwardTag /> },
              { name: "Trending Tag", component: <TrendingTag /> },
              { name: "Verified Tag", component: <VerifiedTag /> },
              { name: "Tag Group", component: <TagGroup /> },
              { name: "Interactive Tag Group", component: <InteractiveTagGroup /> },
              { name: "Size Variant Tags", component: <SizeVariantTags /> },
              { name: "Outline Tag", component: <OutlineTag /> },
              { name: "Solid Tag", component: <SolidTag /> },
              { name: "Gradient Tag", component: <GradientTag /> }
            ]}
          />
        )}
      </section>
    </div>
  );
};

export default Components;
