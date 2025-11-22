import React, { useState } from "react";
import { Copy, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ComponentCustomizer from "../components/ComponentCustomizer";
import {
  BasicCard,
  ImageCard,
  ProfileCard,
  StatsCard,
  PricingCard,
  BlogCard,
  FeatureCard,
  HoverCard,
} from "../components/CardComponents";

const CardSection = () => {
  const [state, setState] = useState("Preview");
  const [copied, setCopied] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [customConfig, setCustomConfig] = useState(null);

  const cardComponents = [
    {
      name: "Basic",
      component: <BasicCard />,
      implementationCode: `export const BasicCard = ({ customStyle, title, content }) => {
  return (
    <div className="card-base rounded-xl p-6 w-full max-w-sm" style={customStyle}>
      <h3 className="text-xl md:text-2xl font-michroma text-white mb-3">{title || "Basic Card"}</h3>
      <p className="text-white/70 font-space text-sm md:text-base">
        {content || "This is a simple card component with clean styling and hover effects."}
      </p>
    </div>
  );
};`,
      usageCode: `import { BasicCard } from "../components/CardComponents";

const MyComponent = () => (
  <BasicCard 
    title="My Card" 
    content="This is a custom card description." 
  />
);`,
      description: "Simple card with title and description",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius", "padding", "width"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12", padding: "24", width: "384px" },
        customFields: [
          { key: "title", label: "Title", type: "text", default: "Basic Card" },
          { key: "content", label: "Content", type: "text", default: "This is a simple card component with clean styling and hover effects." }
        ]
      }
    },
    {
      name: "Image",
      component: <ImageCard />,
      implementationCode: `export const ImageCard = ({ customStyle, title, content }) => {
  return (
    <div className="card-base rounded-xl overflow-hidden w-full max-w-sm group" style={customStyle}>
      <div className="h-48 bg-white/5 flex items-center justify-center border-b border-white/10">
        <Zap size={64} className="text-white/20" />
      </div>
      <div className="p-6">
        <h3 className="text-lg md:text-xl font-michroma text-white mb-2">{title || "Image Card"}</h3>
        <p className="text-white/70 font-space text-sm">
          {content || "Card with image header and content section."}
        </p>
      </div>
    </div>
  );
};`,
      usageCode: `import { ImageCard } from "../components/CardComponents";

const MyComponent = () => (
  <ImageCard />
);`,
      description: "Card with image/icon header section",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius", "width"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12", width: "384px" },
        customFields: [
          { key: "title", label: "Title", type: "text", default: "Image Card" },
          { key: "content", label: "Content", type: "text", default: "Card with image header and content section." }
        ]
      }
    },
    {
      name: "Profile",
      component: <ProfileCard />,
      implementationCode: `export const ProfileCard = ({ customStyle, title, content }) => {
  return (
    <div className="card-base rounded-xl p-6 w-full max-w-sm" style={customStyle}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
          <Users size={32} className="text-white/60" />
        </div>
        <div>
          <h3 className="text-lg font-michroma text-white">{title || "John Doe"}</h3>
          <p className="text-white/60 font-space text-sm">@johndoe</p>
        </div>
      </div>
      <p className="text-white/70 font-space text-sm mb-4">
        {content || "Full-stack developer passionate about creating beautiful user experiences."}
      </p>
      <div className="flex gap-2">
        <button className="btn-primary px-4 py-2 rounded-lg font-space text-sm font-semibold flex-1">
          Follow
        </button>
        <button className="btn-secondary px-4 py-2 rounded-lg font-space text-sm font-semibold flex-1">
          Message
        </button>
      </div>
    </div>
  );
};`,
      usageCode: `import { ProfileCard } from "../components/CardComponents";

const MyComponent = () => (
  <ProfileCard title="Jane Doe" />
);`,
      description: "User profile card with avatar and actions",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius", "padding", "width"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12", padding: "24", width: "384px" },
        customFields: [
          { key: "title", label: "Name", type: "text", default: "John Doe" },
          { key: "content", label: "Bio", type: "text", default: "Full-stack developer passionate about creating beautiful user experiences." }
        ]
      }
    },
    {
      name: "Stats",
      component: <StatsCard />,
      implementationCode: `export const StatsCard = ({ customStyle, title, content }) => {
  return (
    <div className="card-base rounded-xl p-6 w-full max-w-sm group" style={customStyle}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-white/60 font-space text-sm">{title || "Total Users"}</p>
          <h3 className="text-3xl md:text-4xl font-michroma text-white">{content || "24.5K"}</h3>
        </div>
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <Users size={24} className="text-white/60" />
        </div>
      </div>
      <div className="flex items-center gap-2 text-green-400 font-space text-sm">
        <TrendingUp size={16} />
        <span>+12.5% from last month</span>
      </div>
    </div>
  );
};`,
      usageCode: `import { StatsCard } from "../components/CardComponents";

const MyComponent = () => (
  <StatsCard title="Revenue" content="$50K" />
);`,
      description: "Statistics card with metrics and trends",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius", "padding", "width"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12", padding: "24", width: "384px" },
        customFields: [
          { key: "title", label: "Label", type: "text", default: "Total Users" },
          { key: "content", label: "Value", type: "text", default: "24.5K" }
        ]
      }
    },
    {
      name: "Pricing",
      component: <PricingCard />,
      implementationCode: `export const PricingCard = ({ customStyle, title, content }) => {
  return (
    <div className="card-base rounded-xl p-6 md:p-8 w-full max-w-sm border-2 border-white/20" style={customStyle}>
      <div className="text-center mb-6">
        <div className="inline-block p-3 rounded-lg bg-white/5 border border-white/10 mb-4">
          <Award size={32} className="text-white/60" />
        </div>
        <h3 className="text-2xl font-michroma text-white mb-2">{title || "Pro Plan"}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-michroma text-white">{content || "$29"}</span>
          <span className="text-white/60 font-space">/month</span>
        </div>
      </div>
      <ul className="space-y-3 mb-6 font-space text-white/70 text-sm md:text-base">
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
          Unlimited Projects
        </li>
        {/* More items... */}
      </ul>
      <button className="w-full btn-primary px-6 py-3 rounded-lg font-space font-semibold">
        Get Started
      </button>
    </div>
  );
};`,
      usageCode: `import { PricingCard } from "../components/CardComponents";

const MyComponent = () => (
  <PricingCard title="Enterprise" content="$99" />
);`,
      description: "Pricing plan card with features list",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius", "padding", "width"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.2)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12", padding: "24", width: "384px" },
        customFields: [
          { key: "title", label: "Plan Name", type: "text", default: "Pro Plan" },
          { key: "content", label: "Price", type: "text", default: "$29" }
        ]
      }
    },
    {
      name: "Blog",
      component: <BlogCard />,
      implementationCode: `export const BlogCard = ({ customStyle, title, content }) => {
  return (
    <div className="card-base rounded-xl overflow-hidden w-full max-w-sm group" style={customStyle}>
      <div className="h-40 bg-white/5 flex items-center justify-center border-b border-white/10">
        <Star size={48} className="text-white/20" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 font-space text-xs font-semibold">
            Tutorial
          </span>
          <span className="text-white/50 font-space text-xs">5 min read</span>
        </div>
        <h3 className="text-lg md:text-xl font-michroma text-white mb-2 group-hover:text-white/80 transition-all">
          {title || "Getting Started with Components"}
        </h3>
        <p className="text-white/70 font-space text-sm mb-4">
          {content || "Learn how to integrate beautiful components into your project quickly."}
        </p>
        <div className="flex items-center gap-4 text-white/50">
          <button className="flex items-center gap-1 hover:text-white transition-all">
            <Heart size={16} />
            <span className="text-sm">24</span>
          </button>
          {/* More actions... */}
        </div>
      </div>
    </div>
  );
};`,
      usageCode: `import { BlogCard } from "../components/CardComponents";

const MyComponent = () => (
  <BlogCard />
);`,
      description: "Blog post card with engagement metrics",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius", "width"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12", width: "384px" },
        customFields: [
          { key: "title", label: "Title", type: "text", default: "Getting Started with Components" },
          { key: "content", label: "Excerpt", type: "text", default: "Learn how to integrate beautiful components into your project quickly." }
        ]
      }
    },
    {
      name: "Feature",
      component: <FeatureCard />,
      implementationCode: `export const FeatureCard = () => {
  return (
    <div className="card-base rounded-xl p-6 w-full max-w-sm group">
      <div className="p-3 rounded-lg bg-white/5 border border-white/10 w-fit mb-4">
        <Zap size={28} className="text-white/60" />
      </div>
      <h3 className="text-lg md:text-xl font-michroma text-white mb-3 group-hover:text-white/80 transition-all">
        Lightning Fast
      </h3>
      <p className="text-white/70 font-space text-sm">
        Optimized for performance with minimal bundle size and maximum efficiency.
      </p>
    </div>
  );
};`,
      usageCode: `import { FeatureCard } from "../components/CardComponents";

const MyComponent = () => (
  <FeatureCard />
);`,
      description: "Feature highlight card with icon",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius", "padding", "width"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12", padding: "24", width: "384px" },
        customFields: [
          { key: "title", label: "Title", type: "text", default: "Lightning Fast" },
          { key: "content", label: "Description", type: "text", default: "Optimized for performance with minimal bundle size and maximum efficiency." }
        ]
      }
    },
    {
      name: "Hover",
      component: <HoverCard />,
      implementationCode: `export const HoverCard = () => {
  return (
    <div className="relative w-full max-w-sm h-64 rounded-xl overflow-hidden group cursor-pointer card-base">
      <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-300"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="p-4 rounded-full bg-white/10 border border-white/20 mb-4 group-hover:scale-110 transition-transform duration-300">
          <Award size={40} className="text-white/60" />
        </div>
        <h3 className="text-xl md:text-2xl font-michroma text-white mb-2">Hover Me</h3>
        <p className="text-white/70 font-space text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          This card reveals content on hover with smooth animations.
        </p>
      </div>
    </div>
  );
};`,
      usageCode: `import { HoverCard } from "../components/CardComponents";

const MyComponent = () => (
  <HoverCard />
);`,
      description: "Interactive card with hover reveal effect",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius", "width"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12", width: "384px" },
        customFields: [
          { key: "title", label: "Title", type: "text", default: "Hover Me" },
          { key: "content", label: "Reveal Text", type: "text", default: "This card reveals content on hover with smooth animations." }
        ]
      }
    },
  ];

  const currentCard = cardComponents[currentIndex];

  const generateCustomCode = (config) => {
    if (!config) return currentCard.usageCode;

    const styles = [];
    if (config.borderColor && currentCard.customization.relevantFields.includes("borderColor")) styles.push(`    border: "2px solid ${config.borderColor}"`);
    if (config.backgroundColor && currentCard.customization.relevantFields.includes("backgroundColor")) styles.push(`    backgroundColor: "${config.backgroundColor}"`);
    if (config.borderRadius && currentCard.customization.relevantFields.includes("borderRadius")) styles.push(`    borderRadius: "${config.borderRadius}px"`);
    if (config.padding && currentCard.customization.relevantFields.includes("padding")) styles.push(`    padding: "${config.padding}px"`);
    if (config.width) styles.push(`    width: "${config.width}"`);

    // Basic wrapper code generation
    return `<div
  style={{
${styles.join(",\n")}
  }}
  className="card-base rounded-xl overflow-hidden"
>
  {/* Card Content */}
  <h3 className="text-xl font-michroma text-white mb-3">${config.title || "Card Title"}</h3>
  <p className="text-white/70 font-space text-sm">${config.content || "Card content goes here..."}</p>
</div>`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  const nextCard = () => {
    if (currentIndex < cardComponents.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setCustomConfig(null);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setCustomConfig(null);
    }
  };

  return (
    <div className="mt-8 md:mt-12 w-full flex flex-col justify-center items-center gap-6 md:gap-8 font-space px-4">
      {/* Description */}
      <div className="w-full max-w-5xl text-center">
        <p className="text-white/60 font-space text-sm md:text-base">
          Versatile card components for displaying content. Perfect for dashboards, profiles, pricing, and more.
        </p>
      </div>

      {/* Quick Navigation Grid - NOW AT TOP */}
      <div className="w-full max-w-5xl card-base rounded-xl p-4 md:p-6">
        <h4 className="text-white font-michroma text-base md:text-lg mb-4">All Cards</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
          {cardComponents.map((card, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`px-3 md:px-4 py-2 md:py-2.5 rounded-lg font-space text-xs md:text-sm transition-all ${
                currentIndex === index
                  ? "bg-white text-black font-semibold"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {card.name}
            </button>
          ))}
        </div>
      </div>

      {/* Preview/Code Section */}
      <div className="w-full max-w-5xl flex justify-center items-start flex-col gap-4">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-3 sm:gap-5">
          <div className="flex gap-2 md:gap-3 w-full sm:w-auto">
            <button
              onClick={() => setState("Preview")}
              className={`${
                state === "Preview"
                  ? "btn-primary"
                  : "btn-secondary"
              } px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base flex-1 sm:flex-none`}
            >
              Preview
            </button>
            <button
              onClick={() => setState("Code")}
              className={`${
                state === "Code"
                  ? "btn-primary"
                  : "btn-secondary"
              } px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base flex-1 sm:flex-none`}
            >
              Code
            </button>
            <button
              onClick={() => setState("Customize")}
              className={`${
                state === "Customize"
                  ? "btn-primary"
                  : "btn-secondary"
              } px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base flex-1 sm:flex-none`}
            >
              Customize
            </button>
          </div>

          <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <button
              onClick={prevCard}
              disabled={currentIndex === 0}
              className={`p-2.5 md:p-3 rounded-lg glass-effect hover:bg-white/10 transition ${
                currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <ArrowLeft size={18} />
            </button>
            <span className="text-xs md:text-sm text-white font-medium px-3 md:px-4 text-center min-w-[140px] md:min-w-[180px]">
              {currentCard.name}
            </span>
            <button
              onClick={nextCard}
              disabled={currentIndex === cardComponents.length - 1}
              className={`p-2.5 md:p-3 rounded-lg glass-effect hover:bg-white/10 transition ${
                currentIndex === cardComponents.length - 1
                  ? "opacity-40 cursor-not-allowed"
                  : ""
              }`}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Description of current component */}
        <div className="w-full">
          <p className="text-white/50 font-space text-xs md:text-sm italic">
            {currentCard.description}
          </p>
        </div>

        {/* Preview/Code/Customize Area */}
        <div className="w-full">
          {state === "Customize" ? (
            <ComponentCustomizer
              onConfigChange={(config) => setCustomConfig(config)}
              defaultConfig={currentCard.customization?.defaultConfig}
              relevantFields={currentCard.customization?.relevantFields}
              customFields={currentCard.customization?.customFields}
            >
              {(config) => React.cloneElement(currentCard.component, {
                customStyle: {
                  borderColor: config.borderColor,
                  backgroundColor: config.backgroundColor,
                  borderRadius: config.borderRadius ? `${config.borderRadius}px` : undefined,
                  padding: config.padding ? `${config.padding}px` : undefined,
                  width: config.width,
                },
                title: config.title,
                content: config.content
              })}
            </ComponentCustomizer>
          ) : (
            <div className="w-full px-6 md:px-12 py-8 md:py-12 border border-white/10 rounded-xl relative glass-effect">
              {state === "Preview" ? (
                <div className="flex justify-center items-center min-h-[320px]">
                  {currentCard.component}
                </div>
              ) : (
                <div className="flex flex-col gap-6 w-full">
                  {/* Implementation Code */}
                  {currentCard.implementationCode && (
                    <div className="relative w-full overflow-x-auto">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-white/70 font-michroma text-sm">Component Code</h4>
                        <button
                          onClick={() => copyToClipboard(currentCard.implementationCode)}
                          className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                        >
                          {copied === currentCard.implementationCode ? <Check size={14} /> : <Copy size={14} />}
                          {copied === currentCard.implementationCode ? "Copied!" : "Copy"}
                        </button>
                      </div>
                      <SyntaxHighlighter
                        language="jsx"
                        showLineNumbers
                        wrapLines
                        customStyle={{
                          borderRadius: "12px",
                          padding: "20px 24px",
                          background: "#000",
                          fontSize: "13px",
                          fontFamily: "monospace",
                          lineHeight: "1.7",
                          margin: 0,
                        }}
                        style={vscDarkPlus}
                      >
                        {currentCard.implementationCode.trim()}
                      </SyntaxHighlighter>
                    </div>
                  )}

                  {/* Usage Code */}
                  <div className="relative w-full overflow-x-auto">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white/70 font-michroma text-sm">Usage Example</h4>
                      <button
                        onClick={() => copyToClipboard(customConfig ? generateCustomCode(customConfig) : currentCard.usageCode)}
                        className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                      >
                        {copied === (customConfig ? generateCustomCode(customConfig) : currentCard.usageCode) ? <Check size={14} /> : <Copy size={14} />}
                        {copied === (customConfig ? generateCustomCode(customConfig) : currentCard.usageCode) ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <SyntaxHighlighter
                      language="jsx"
                      showLineNumbers
                      wrapLines
                      customStyle={{
                        borderRadius: "12px",
                        padding: "20px 24px",
                        background: "#000",
                        fontSize: "13px",
                        fontFamily: "monospace",
                        lineHeight: "1.7",
                        margin: 0,
                      }}
                      style={vscDarkPlus}
                    >
                      {customConfig ? generateCustomCode(customConfig) : currentCard.usageCode.trim()}
                    </SyntaxHighlighter>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
