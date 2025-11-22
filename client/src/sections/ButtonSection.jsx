import React, { useState } from "react";
import { Copy, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ComponentCustomizer from "../components/ComponentCustomizer";
import {
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  GhostButton,
  IconButton,
  IconTextButton,
  IconRightButton,
  SmallButton,
  LargeButton,
  DisabledButton,
  LoadingButton,
  DangerButton,
  SuccessButton,
  RoundedButton,
  GradientBorderButton,
  HeartButton,
  LinkButton,
  GroupButton,
} from "../components/ButtonComponents";

const ButtonSection = () => {
  const [state, setState] = useState("Preview");
  const [copied, setCopied] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [customConfig, setCustomConfig] = useState(null);

  const buttonComponents = [
    {
      name: "Primary",
      component: <PrimaryButton />,
      implementationCode: `export const PrimaryButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-primary px-6 py-3 rounded-lg font-space font-semibold"
      style={customStyle}
    >
      {text || "Primary Button"}
    </button>
  );
};`,
      usageCode: `import { PrimaryButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <PrimaryButton text="Primary Button" />
);`,
      description: "Main call-to-action button",
      customization: {
        relevantFields: ["primaryColor", "textColor", "padding", "borderRadius", "fontSize", "width"],
        defaultConfig: { primaryColor: "#ff6b35", textColor: "#ffffff", padding: "12", borderRadius: "8", fontSize: "16", width: "auto" },
        customFields: [
          { key: "text", label: "Button Text", type: "text", default: "Primary Button" }
        ]
      }
    },
    {
      name: "Secondary",
      component: <SecondaryButton />,
      implementationCode: `export const SecondaryButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-secondary px-6 py-3 rounded-lg font-space font-semibold"
      style={customStyle}
    >
      {text || "Secondary Button"}
    </button>
  );
};`,
      usageCode: `import { SecondaryButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <SecondaryButton text="Secondary Button" />
);`,
      description: "Alternative action button",
      customization: {
        relevantFields: ["primaryColor", "textColor", "padding", "borderRadius", "fontSize", "width"],
        defaultConfig: { primaryColor: "#f7931e", textColor: "#ffffff", padding: "12", borderRadius: "8", fontSize: "16", width: "auto" },
        customFields: [
          { key: "text", label: "Button Text", type: "text", default: "Secondary Button" }
        ]
      }
    },
    {
      name: "Outline",
      component: <OutlineButton />,
      implementationCode: `export const OutlineButton = ({ customStyle, text }) => {
  return (
    <button 
      className="bg-transparent border-2 border-white/20 text-white px-6 py-3 rounded-lg font-space font-semibold hover:border-white/40 hover:bg-white/5 transition-all"
      style={customStyle}
    >
      {text || "Outline Button"}
    </button>
  );
};`,
      usageCode: `import { OutlineButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <OutlineButton text="Outline Button" />
);`,
      description: "Transparent button with border",
      customization: {
        relevantFields: ["borderColor", "textColor", "padding", "borderRadius", "fontSize", "width"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.2)", textColor: "#ffffff", padding: "12", borderRadius: "8", fontSize: "16", width: "auto" },
        customFields: [
          { key: "text", label: "Button Text", type: "text", default: "Outline Button" }
        ]
      }
    },
    {
      name: "Ghost",
      component: <GhostButton />,
      implementationCode: `export const GhostButton = ({ customStyle, text }) => {
  return (
    <button 
      className="bg-transparent text-white/70 px-6 py-3 rounded-lg font-space font-semibold hover:bg-white/5 hover:text-white transition-all"
      style={customStyle}
    >
      {text || "Ghost Button"}
    </button>
  );
};`,
      usageCode: `import { GhostButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <GhostButton text="Ghost Button" />
);`,
      description: "Minimal button for low emphasis actions",
      customization: {
        relevantFields: ["textColor", "padding", "borderRadius", "fontSize"],
        defaultConfig: { textColor: "rgba(255, 255, 255, 0.7)", padding: "12", borderRadius: "8", fontSize: "16" },
        customFields: [
          { key: "text", label: "Button Text", type: "text", default: "Ghost Button" }
        ]
      }
    },
    {
      name: "Icon Only",
      component: <IconButton />,
      implementationCode: `export const IconButton = ({ customStyle }) => {
  return (
    <button 
      className="btn-primary p-3 rounded-lg"
      style={customStyle}
    >
      <Download size={20} />
    </button>
  );
};`,
      usageCode: `import { IconButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <IconButton />
);`,
      description: "Button with icon only",
      customization: {
        relevantFields: ["primaryColor", "textColor", "padding", "borderRadius"],
        defaultConfig: { primaryColor: "#ff6b35", textColor: "#ffffff", padding: "12", borderRadius: "8" }
      }
    },
    {
      name: "Icon + Text",
      component: <IconTextButton />,
      implementationCode: `export const IconTextButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-primary px-6 py-3 rounded-lg font-space font-semibold flex items-center gap-2"
      style={customStyle}
    >
      <Download size={18} />
      {text || "Download"}
    </button>
  );
};`,
      usageCode: `import { IconTextButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <IconTextButton text="Download" />
);`,
      description: "Button with leading icon",
      customization: {
        relevantFields: ["primaryColor", "textColor", "padding", "borderRadius", "fontSize"],
        defaultConfig: { primaryColor: "#ff6b35", textColor: "#ffffff", padding: "12", borderRadius: "8", fontSize: "16" },
        customFields: [
          { key: "text", label: "Button Text", type: "text", default: "Download" }
        ]
      }
    },
    {
      name: "Text + Icon",
      component: <IconRightButton />,
      implementationCode: `export const IconRightButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-primary px-6 py-3 rounded-lg font-space font-semibold flex items-center gap-2"
      style={customStyle}
    >
      {text || "Continue"}
      <ArrowRight size={18} />
    </button>
  );
};`,
      usageCode: `import { IconRightButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <IconRightButton text="Continue" />
);`,
      description: "Button with trailing icon",
      customization: {
        relevantFields: ["primaryColor", "textColor", "padding", "borderRadius", "fontSize"],
        defaultConfig: { primaryColor: "#ff6b35", textColor: "#ffffff", padding: "12", borderRadius: "8", fontSize: "16" },
        customFields: [
          { key: "text", label: "Button Text", type: "text", default: "Continue" }
        ]
      }
    },
    {
      name: "Small",
      component: <SmallButton />,
      implementationCode: `export const SmallButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-primary px-4 py-2 rounded-lg font-space font-semibold text-sm"
      style={customStyle}
    >
      {text || "Small"}
    </button>
  );
};`,
      usageCode: `import { SmallButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <SmallButton text="Small" />
);`,
      description: "Compact button for tight spaces",
      customization: {
        relevantFields: ["primaryColor", "textColor", "padding", "borderRadius", "fontSize"],
        defaultConfig: { primaryColor: "#ff6b35", textColor: "#ffffff", padding: "8", borderRadius: "8", fontSize: "14" },
        customFields: [
          { key: "text", label: "Button Text", type: "text", default: "Small" }
        ]
      }
    },
    {
      name: "Large",
      component: <LargeButton />,
      implementationCode: `export const LargeButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-primary px-8 py-4 rounded-lg font-space font-semibold text-lg"
      style={customStyle}
    >
      {text || "Large Button"}
    </button>
  );
};`,
      usageCode: `import { LargeButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <LargeButton text="Large Button" />
);`,
      description: "Prominent button for main actions",
      customization: {
        relevantFields: ["primaryColor", "textColor", "padding", "borderRadius", "fontSize"],
        defaultConfig: { primaryColor: "#ff6b35", textColor: "#ffffff", padding: "16", borderRadius: "8", fontSize: "18" },
        customFields: [
          { key: "text", label: "Button Text", type: "text", default: "Large Button" }
        ]
      }
    },
    {
      name: "Disabled",
      component: <DisabledButton />,
      implementationCode: `export const DisabledButton = ({ customStyle, text }) => {
  return (
    <button
      disabled
      className="bg-white/10 text-white/30 px-6 py-3 rounded-lg font-space font-semibold cursor-not-allowed"
      style={customStyle}
    >
      {text || "Disabled"}
    </button>
  );
};`,
      usageCode: `import { DisabledButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <DisabledButton text="Disabled" />
);`,
      description: "Button in disabled state",
      customization: {
        relevantFields: ["padding", "borderRadius", "fontSize"],
        defaultConfig: { padding: "12", borderRadius: "8", fontSize: "16" },
        customFields: [
          { key: "text", label: "Button Text", type: "text", default: "Disabled" }
        ]
      }
    },
    {
      name: "Loading",
      component: <LoadingButton />,
      implementationCode: `export const LoadingButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-primary px-6 py-3 rounded-lg font-space font-semibold flex items-center gap-2"
      style={customStyle}
    >
      <Loader2 size={18} className="animate-spin" />
      {text || "Loading..."}
    </button>
  );
};`,
      usageCode: `import { LoadingButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <LoadingButton text="Loading..." />
);`,
      description: "Button with loading spinner",
      customization: {
        relevantFields: ["primaryColor", "textColor", "padding", "borderRadius", "fontSize"],
        defaultConfig: { primaryColor: "#ff6b35", textColor: "#ffffff", padding: "12", borderRadius: "8", fontSize: "16" },
        customFields: [
          { key: "text", label: "Button Text", type: "text", default: "Loading..." }
        ]
      }
    },
    {
      name: "Danger",
      component: <DangerButton />,
      implementationCode: `export const DangerButton = ({ customStyle, text }) => {
  return (
    <button 
      className="bg-red-500 text-white px-6 py-3 rounded-lg font-space font-semibold hover:bg-red-600 transition-all"
      style={customStyle}
    >
      {text || "Delete"}
    </button>
  );
};`,
      usageCode: `import { DangerButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <DangerButton text="Delete" />
);`,
      description: "Button for destructive actions",
      customization: {
        relevantFields: ["primaryColor", "textColor", "padding", "borderRadius", "fontSize"],
        defaultConfig: { primaryColor: "#ef4444", textColor: "#ffffff", padding: "12", borderRadius: "8", fontSize: "16" },
        customFields: [
          { key: "text", label: "Button Text", type: "text", default: "Delete" }
        ]
      }
    },
    {
      name: "Success",
      component: <SuccessButton />,
      implementationCode: `export const SuccessButton = ({ customStyle, text }) => {
  return (
    <button 
      className="bg-green-500 text-white px-6 py-3 rounded-lg font-space font-semibold hover:bg-green-600 transition-all"
      style={customStyle}
    >
      {text || "Confirm"}
    </button>
  );
};`,
      usageCode: `import { SuccessButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <SuccessButton text="Confirm" />
);`,
      description: "Button for positive actions",
      customization: {
        relevantFields: ["primaryColor", "textColor", "padding", "borderRadius", "fontSize"],
        defaultConfig: { primaryColor: "#22c55e", textColor: "#ffffff", padding: "12", borderRadius: "8", fontSize: "16" },
        customFields: [
          { key: "text", label: "Button Text", type: "text", default: "Confirm" }
        ]
      }
    },
    {
      name: "Rounded",
      component: <RoundedButton />,
      implementationCode: `export const RoundedButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-primary px-6 py-3 rounded-full font-space font-semibold"
      style={customStyle}
    >
      {text || "Rounded"}
    </button>
  );
};`,
      usageCode: `import { RoundedButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <RoundedButton text="Rounded" />
);`,
      description: "Fully rounded button",
      customization: {
        relevantFields: ["primaryColor", "textColor", "padding", "fontSize"],
        defaultConfig: { primaryColor: "#ff6b35", textColor: "#ffffff", padding: "12", fontSize: "16" },
        customFields: [
          { key: "text", label: "Button Text", type: "text", default: "Rounded" }
        ]
      }
    },
    {
      name: "Gradient Border",
      component: <GradientBorderButton />,
      implementationCode: `export const GradientBorderButton = ({ customStyle, text }) => {
  return (
    <button 
      className="relative bg-black text-white px-6 py-3 rounded-lg font-space font-semibold overflow-hidden group"
      style={customStyle}
    >
      <span className="relative z-10">{text || "Hover Me"}</span>
      <div className="absolute inset-0 border-2 border-white/20 rounded-lg group-hover:border-white/40 transition-all"></div>
    </button>
  );
};`,
      usageCode: `import { GradientBorderButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <GradientBorderButton text="Hover Me" />
);`,
      description: "Button with gradient border effect",
      customization: {
        relevantFields: ["textColor", "padding", "borderRadius", "fontSize"],
        defaultConfig: { textColor: "#ffffff", padding: "12", borderRadius: "8", fontSize: "16" },
        customFields: [
          { key: "text", label: "Button Text", type: "text", default: "Hover Me" }
        ]
      }
    },
    {
      name: "Heart",
      component: <HeartButton />,
      implementationCode: `export const HeartButton = ({ customStyle }) => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={\`p-3 rounded-lg transition-all \${
        liked
          ? "bg-red-500/20 border-2 border-red-500/50"
          : "bg-white/5 border-2 border-white/10 hover:border-white/20"
      }\`}
      style={customStyle}
    >
      <Heart
        size={20}
        className={\`transition-all \${
          liked ? "text-red-500 fill-red-500" : "text-white/60"
        }\`}
      />
    </button>
  );
};`,
      usageCode: `import { HeartButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <HeartButton />
);`,
      description: "Interactive toggle button",
      customization: {
        relevantFields: ["padding", "borderRadius"],
        defaultConfig: { padding: "12", borderRadius: "8" }
      }
    },
    {
      name: "Link",
      component: <LinkButton />,
      implementationCode: `export const LinkButton = ({ customStyle, text }) => {
  return (
    <button 
      className="text-white/70 font-space font-semibold hover:text-white underline underline-offset-4 transition-all"
      style={customStyle}
    >
      {text || "Link Button"}
    </button>
  );
};`,
      usageCode: `import { LinkButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <LinkButton text="Link Button" />
);`,
      description: "Button styled as a link",
      customization: {
        relevantFields: ["textColor", "fontSize"],
        defaultConfig: { textColor: "rgba(255, 255, 255, 0.7)", fontSize: "16" },
        customFields: [
          { key: "text", label: "Button Text", type: "text", default: "Link Button" }
        ]
      }
    },
    {
      name: "Group",
      component: <GroupButton />,
      implementationCode: `export const GroupButton = ({ customStyle, labels }) => {
  const buttonLabels = labels || ["Left", "Middle", "Right"];
  return (
    <div 
      className="flex rounded-lg overflow-hidden border border-white/10"
      style={customStyle}
    >
      <button className="btn-primary rounded-none px-6 py-3 font-space font-semibold border-r border-black">
        {buttonLabels[0]}
      </button>
      <button className="bg-white/5 text-white px-6 py-3 font-space font-semibold hover:bg-white/10 transition-all border-r border-white/10">
        {buttonLabels[1]}
      </button>
      <button className="bg-white/5 text-white px-6 py-3 font-space font-semibold hover:bg-white/10 transition-all rounded-none">
        {buttonLabels[2]}
      </button>
    </div>
  );
};`,
      usageCode: `import { GroupButton } from "../components/ButtonComponents";

const MyComponent = () => (
  <GroupButton labels={["Left", "Middle", "Right"]} />
);`,
      description: "Group of connected buttons",
      customization: {
        relevantFields: ["width"],
        defaultConfig: { width: "auto" }
      }
    }
  ];

  const currentButton = buttonComponents[currentIndex];

  const generateCustomCode = (config) => {
    if (!config) return currentButton.usageCode || currentButton.code;
    
    const styles = [];
    if (config.primaryColor && currentButton.customization.relevantFields.includes("primaryColor")) styles.push(`    backgroundColor: "${config.primaryColor}"`);
    if (config.textColor && currentButton.customization.relevantFields.includes("textColor")) styles.push(`    color: "${config.textColor}"`);
    if (config.borderRadius && currentButton.customization.relevantFields.includes("borderRadius")) styles.push(`    borderRadius: "${config.borderRadius}px"`);
    if (config.fontSize && currentButton.customization.relevantFields.includes("fontSize")) styles.push(`    fontSize: "${config.fontSize}px"`);
    if (config.fontFamily && currentButton.customization.relevantFields.includes("fontFamily")) styles.push(`    fontFamily: "${config.fontFamily}"`);
    if (config.padding && currentButton.customization.relevantFields.includes("padding")) styles.push(`    padding: "${parseInt(config.padding) / 2}px ${config.padding}px"`);
    if (config.borderColor && currentButton.customization.relevantFields.includes("borderColor")) styles.push(`    border: "2px solid ${config.borderColor}"`);
    
    // Special handling for GroupButton
    if (currentButton.name === "Group") {
      const labels = [config.label1 || "Left", config.label2 || "Middle", config.label3 || "Right"];
      return `<div
  className="flex overflow-hidden border border-white/10"
  style={{
    borderRadius: "${config.borderRadius || 8}px"
  }}
>
  <button className="btn-primary rounded-none px-6 py-3 font-space font-semibold border-r border-black">
    ${labels[0]}
  </button>
  <button className="bg-white/5 text-white px-6 py-3 font-space font-semibold hover:bg-white/10 transition-all border-r border-white/10">
    ${labels[1]}
  </button>
  <button className="bg-white/5 text-white px-6 py-3 font-space font-semibold hover:bg-white/10 transition-all rounded-none">
    ${labels[2]}
  </button>
</div>`;
    }

    // Common styles
    styles.push(`    fontWeight: "600"`);
    styles.push(`    cursor: "pointer"`);
    styles.push(`    transition: "all 0.3s ease"`);

    return `<button
  style={{
${styles.join(",\n")}
  }}
>
  ${config.text || currentButton.name}
</button>`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(false), 1500);
  };

  const nextButton = () => {
    if (currentIndex < buttonComponents.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setCustomConfig(null); // Reset customization when changing components
    }
  };

  const prevButton = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setCustomConfig(null); // Reset customization when changing components
    }
  };

  return (
    <div className="mt-8 md:mt-12 w-full flex flex-col justify-center items-center gap-6 md:gap-8 font-space px-4">
      {/* Description */}
      <div className="w-full max-w-5xl text-center">
        <p className="text-white/60 font-space text-sm md:text-base">
          Professional button components with various styles and states. All buttons are fully responsive and accessible.
        </p>
      </div>

      {/* Quick Navigation Grid - NOW AT TOP */}
      <div className="w-full max-w-5xl card-base rounded-xl p-4 md:p-6">
        <h4 className="text-white font-michroma text-base md:text-lg mb-4">All Buttons</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3">
          {buttonComponents.map((btn, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`px-3 md:px-4 py-2 md:py-2.5 rounded-lg font-space text-xs md:text-sm transition-all ${
                currentIndex === index
                  ? "bg-white text-black font-semibold"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {btn.name}
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
              onClick={prevButton}
              disabled={currentIndex === 0}
              className={`p-2.5 md:p-3 rounded-lg glass-effect hover:bg-white/10 transition ${
                currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <ArrowLeft size={18} />
            </button>
            <span className="text-xs md:text-sm text-white font-medium px-3 md:px-4 text-center min-w-[140px] md:min-w-[180px]">
              {currentButton.name}
            </span>
            <button
              onClick={nextButton}
              disabled={currentIndex === buttonComponents.length - 1}
              className={`p-2.5 md:p-3 rounded-lg glass-effect hover:bg-white/10 transition ${
                currentIndex === buttonComponents.length - 1
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
            {currentButton.description}
          </p>
        </div>

        {/* Preview/Code/Customize Area */}
        <div className="w-full">
          {state === "Customize" ? (
            <ComponentCustomizer
              onConfigChange={(config) => setCustomConfig(config)}
              defaultConfig={currentButton.customization?.defaultConfig}
              relevantFields={currentButton.customization?.relevantFields}
              customFields={currentButton.customization?.customFields}
            >
              {(config) => React.cloneElement(currentButton.component, {
                customStyle: {
                  backgroundColor: config.primaryColor,
                  color: config.textColor,
                  borderRadius: config.borderRadius ? `${config.borderRadius}px` : undefined,
                  fontSize: config.fontSize ? `${config.fontSize}px` : undefined,
                  fontFamily: config.fontFamily,
                  padding: config.padding ? `${parseInt(config.padding) / 2}px ${config.padding}px` : undefined,
                  border: config.borderColor ? `2px solid ${config.borderColor}` : undefined,
                },
                text: config.text,
                labels: [config.label1, config.label2, config.label3].filter(Boolean).length > 0 ? [config.label1, config.label2, config.label3] : undefined
              })}
            </ComponentCustomizer>
          ) : (
            <div className="w-full px-6 md:px-12 py-8 md:py-12 border border-white/10 rounded-xl relative glass-effect">
              {state === "Preview" ? (
                <div className="flex justify-center items-center min-h-[140px]">
                  {currentButton.component}
                </div>
              ) : (
                <div className="flex flex-col gap-6 w-full">
                  {/* Implementation Code */}
                  {currentButton.implementationCode && (
                    <div className="relative w-full overflow-x-auto">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-white/70 font-michroma text-sm">Component Code</h4>
                        <button
                          onClick={() => copyToClipboard(currentButton.implementationCode)}
                          className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                        >
                          {copied === currentButton.implementationCode ? <Check size={14} /> : <Copy size={14} />}
                          {copied === currentButton.implementationCode ? "Copied!" : "Copy"}
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
                        {currentButton.implementationCode.trim()}
                      </SyntaxHighlighter>
                    </div>
                  )}

                  {/* Usage Code */}
                  <div className="relative w-full overflow-x-auto">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white/70 font-michroma text-sm">Usage Example</h4>
                      <button
                        onClick={() => copyToClipboard(customConfig ? generateCustomCode(customConfig) : currentButton.usageCode)}
                        className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                      >
                        {copied === (customConfig ? generateCustomCode(customConfig) : currentButton.usageCode) ? <Check size={14} /> : <Copy size={14} />}
                        {copied === (customConfig ? generateCustomCode(customConfig) : currentButton.usageCode) ? "Copied!" : "Copy"}
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
                      {customConfig ? generateCustomCode(customConfig) : currentButton.usageCode.trim()}
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

export default ButtonSection;
