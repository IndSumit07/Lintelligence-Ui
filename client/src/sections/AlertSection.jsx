import React, { useState } from "react";
import { Copy, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ComponentCustomizer from "../components/ComponentCustomizer";
import {
  SimpleErrorAlert,
  SimpleSuccessAlert,
  SimpleWarningAlert,
  SimpleInfoAlert,
  DismissibleSuccessAlert,
  DismissibleWarningAlert,
} from "../components/AlertComponents";

const AlertSection = () => {
  const [state, setState] = useState("Preview");
  const [copied, setCopied] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [customConfig, setCustomConfig] = useState(null);

  const alertComponents = [
    {
      name: "Success",
      component: <SimpleSuccessAlert />,
      implementationCode: `export const SimpleSuccessAlert = ({ customStyle, title, message, iconColor, titleColor, messageColor }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center gap-3 md:gap-5 w-full max-w-md" style={customStyle}>
      <div 
        className="p-2 rounded-lg bg-green-500/10 border border-green-500/20"
        style={{ 
          borderColor: iconColor ? \`\${iconColor}40\` : undefined, 
          backgroundColor: iconColor ? \`\${iconColor}20\` : undefined 
        }}
      >
        <CircleCheckBig className="text-green-500" size={28} style={{ color: iconColor }} />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-michroma text-lg md:text-xl" style={{ color: titleColor }}>{title || "Success!"}</h4>
        <p className="text-green-400 font-space text-sm md:text-base" style={{ color: messageColor }}>
          {message || "Your action was completed successfully."}
        </p>
      </div>
    </div>
  );
};`,
      usageCode: `import { SimpleSuccessAlert } from "../components/AlertComponents";

const MyComponent = () => (
  <SimpleSuccessAlert 
    title="Success!" 
    message="Your action was completed successfully." 
  />
);`,
      description: "Display success messages to users",
      customization: {
        relevantFields: ["primaryColor", "textColor", "secondaryColor", "borderColor", "backgroundColor", "borderRadius", "padding", "width"],
        defaultConfig: { primaryColor: "#22c55e", textColor: "#ffffff", secondaryColor: "#4ade80", borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12", padding: "16", width: "448px" },
        customFields: [
          { key: "title", label: "Title", type: "text", default: "Success!" },
          { key: "message", label: "Message", type: "text", default: "Your action was completed successfully." }
        ]
      }
    },
    {
      name: "Error",
      component: <SimpleErrorAlert />,
      implementationCode: `export const SimpleErrorAlert = ({ customStyle, title, message, iconColor, titleColor, messageColor }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center gap-3 md:gap-5 w-full max-w-md" style={customStyle}>
      <div 
        className="p-2 rounded-lg bg-red-500/10 border border-red-500/20"
        style={{ 
          borderColor: iconColor ? \`\${iconColor}40\` : undefined, 
          backgroundColor: iconColor ? \`\${iconColor}20\` : undefined 
        }}
      >
        <CircleX className="text-red-500" size={28} style={{ color: iconColor }} />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-michroma text-lg md:text-xl" style={{ color: titleColor }}>{title || "Error!"}</h4>
        <p className="text-red-400 font-space text-sm md:text-base" style={{ color: messageColor }}>
          {message || "Something went wrong. Please try again."}
        </p>
      </div>
    </div>
  );
};`,
      usageCode: `import { SimpleErrorAlert } from "../components/AlertComponents";

const MyComponent = () => (
  <SimpleErrorAlert 
    title="Error!" 
    message="Something went wrong. Please try again." 
  />
);`,
      description: "Show error messages and failures",
      customization: {
        relevantFields: ["primaryColor", "textColor", "secondaryColor", "borderColor", "backgroundColor", "borderRadius", "padding", "width"],
        defaultConfig: { primaryColor: "#ef4444", textColor: "#ffffff", secondaryColor: "#f87171", borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12", padding: "16", width: "448px" },
        customFields: [
          { key: "title", label: "Title", type: "text", default: "Error!" },
          { key: "message", label: "Message", type: "text", default: "Something went wrong. Please try again." }
        ]
      }
    },
    {
      name: "Warning",
      component: <SimpleWarningAlert />,
      implementationCode: `export const SimpleWarningAlert = ({ customStyle, title, message, iconColor, titleColor, messageColor }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center gap-3 md:gap-5 w-full max-w-md" style={customStyle}>
      <div 
        className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20"
        style={{ 
          borderColor: iconColor ? \`\${iconColor}40\` : undefined, 
          backgroundColor: iconColor ? \`\${iconColor}20\` : undefined 
        }}
      >
        <BadgeInfo className="text-yellow-500" size={28} style={{ color: iconColor }} />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-michroma text-lg md:text-xl" style={{ color: titleColor }}>{title || "Warning!"}</h4>
        <p className="text-yellow-400 font-space text-sm md:text-base" style={{ color: messageColor }}>
          {message || "Please review your action before proceeding."}
        </p>
      </div>
    </div>
  );
};`,
      usageCode: `import { SimpleWarningAlert } from "../components/AlertComponents";

const MyComponent = () => (
  <SimpleWarningAlert 
    title="Warning!" 
    message="Please review your action before proceeding." 
  />
);`,
      description: "Alert users about important warnings",
      customization: {
        relevantFields: ["primaryColor", "textColor", "secondaryColor", "borderColor", "backgroundColor", "borderRadius", "padding", "width"],
        defaultConfig: { primaryColor: "#eab308", textColor: "#ffffff", secondaryColor: "#facc15", borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12", padding: "16", width: "448px" },
        customFields: [
          { key: "title", label: "Title", type: "text", default: "Warning!" },
          { key: "message", label: "Message", type: "text", default: "Please review your action before proceeding." }
        ]
      }
    },
    {
      name: "Info",
      component: <SimpleInfoAlert />,
      implementationCode: `export const SimpleInfoAlert = ({ customStyle, title, message, iconColor, titleColor, messageColor }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center gap-3 md:gap-5 w-full max-w-md" style={customStyle}>
      <div 
        className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20"
        style={{ 
          borderColor: iconColor ? \`\${iconColor}40\` : undefined, 
          backgroundColor: iconColor ? \`\${iconColor}20\` : undefined 
        }}
      >
        <Info className="text-blue-500" size={28} style={{ color: iconColor }} />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-michroma text-lg md:text-xl" style={{ color: titleColor }}>{title || "Info"}</h4>
        <p className="text-blue-400 font-space text-sm md:text-base" style={{ color: messageColor }}>
          {message || "Here's some information you should know."}
        </p>
      </div>
    </div>
  );
};`,
      usageCode: `import { SimpleInfoAlert } from "../components/AlertComponents";

const MyComponent = () => (
  <SimpleInfoAlert 
    title="Info" 
    message="Here's some information you should know." 
  />
);`,
      description: "Provide informational messages",
      customization: {
        relevantFields: ["primaryColor", "textColor", "secondaryColor", "borderColor", "backgroundColor", "borderRadius", "padding", "width"],
        defaultConfig: { primaryColor: "#3b82f6", textColor: "#ffffff", secondaryColor: "#60a5fa", borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12", padding: "16", width: "448px" },
        customFields: [
          { key: "title", label: "Title", type: "text", default: "Info" },
          { key: "message", label: "Message", type: "text", default: "Here's some information you should know." }
        ]
      }
    },
    {
      name: "Dismissible Success",
      component: <DismissibleSuccessAlert onClose={() => console.log("Closed")} />,
      implementationCode: `export const DismissibleSuccessAlert = ({ onClose, customStyle, title, message, iconColor, titleColor, messageColor }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center gap-3 md:gap-5 w-full max-w-md" style={customStyle}>
      <div 
        className="p-2 rounded-lg bg-green-500/10 border border-green-500/20"
        style={{ 
          borderColor: iconColor ? \`\${iconColor}40\` : undefined, 
          backgroundColor: iconColor ? \`\${iconColor}20\` : undefined 
        }}
      >
        <CircleCheckBig className="text-green-500" size={28} style={{ color: iconColor }} />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-michroma text-lg md:text-xl" style={{ color: titleColor }}>{title || "Success!"}</h4>
        <p className="text-green-400 font-space text-sm md:text-base" style={{ color: messageColor }}>
          {message || "Your changes have been saved."}
        </p>
      </div>
      <button
        onClick={onClose}
        className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
      >
        <X size={18} className="text-white/60 hover:text-white" />
      </button>
    </div>
  );
};`,
      usageCode: `import { DismissibleSuccessAlert } from "../components/AlertComponents";

const MyComponent = () => (
  <DismissibleSuccessAlert 
    title="Success!" 
    message="Your changes have been saved."
    onClose={() => console.log("Closed")}
  />
);`,
      description: "Closeable success alert with dismiss button",
      customization: {
        relevantFields: ["primaryColor", "textColor", "secondaryColor", "borderColor", "backgroundColor", "borderRadius", "padding", "width"],
        defaultConfig: { primaryColor: "#22c55e", textColor: "#ffffff", secondaryColor: "#4ade80", borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12", padding: "16", width: "448px" },
        customFields: [
          { key: "title", label: "Title", type: "text", default: "Success!" },
          { key: "message", label: "Message", type: "text", default: "Your changes have been saved." }
        ]
      }
    },
    {
      name: "Dismissible Warning",
      component: <DismissibleWarningAlert onClose={() => console.log("Closed")} />,
      implementationCode: `export const DismissibleWarningAlert = ({ onClose, customStyle, title, message, iconColor, titleColor, messageColor }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center gap-3 md:gap-5 w-full max-w-md" style={customStyle}>
      <div 
        className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20"
        style={{ 
          borderColor: iconColor ? \`\${iconColor}40\` : undefined, 
          backgroundColor: iconColor ? \`\${iconColor}20\` : undefined 
        }}
      >
        <BadgeInfo className="text-yellow-500" size={28} style={{ color: iconColor }} />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-michroma text-lg md:text-xl" style={{ color: titleColor }}>{title || "Warning!"}</h4>
        <p className="text-yellow-400 font-space text-sm md:text-base" style={{ color: messageColor }}>
          {message || "This action requires your attention."}
        </p>
      </div>
      <button
        onClick={onClose}
        className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
      >
        <X size={18} className="text-white/60 hover:text-white" />
      </button>
    </div>
  );
};`,
      usageCode: `import { DismissibleWarningAlert } from "../components/AlertComponents";

const MyComponent = () => (
  <DismissibleWarningAlert 
    title="Warning!" 
    message="This action requires your attention."
    onClose={() => console.log("Closed")}
  />
);`,
      description: "Closeable warning alert with dismiss button",
      customization: {
        relevantFields: ["primaryColor", "textColor", "secondaryColor", "borderColor", "backgroundColor", "borderRadius", "padding", "width"],
        defaultConfig: { primaryColor: "#eab308", textColor: "#ffffff", secondaryColor: "#facc15", borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12", padding: "16", width: "448px" },
        customFields: [
          { key: "title", label: "Title", type: "text", default: "Warning!" },
          { key: "message", label: "Message", type: "text", default: "This action requires your attention." }
        ]
      }
    },
  ];

  const currentAlert = alertComponents[currentIndex];

  const generateCustomCode = (config) => {
    if (!config) return currentAlert.usageCode;

    const styles = [];
    if (config.borderColor && currentAlert.customization.relevantFields.includes("borderColor")) styles.push(`    border: "2px solid ${config.borderColor}"`);
    if (config.backgroundColor && currentAlert.customization.relevantFields.includes("backgroundColor")) styles.push(`    backgroundColor: "${config.backgroundColor}"`);
    if (config.borderRadius && currentAlert.customization.relevantFields.includes("borderRadius")) styles.push(`    borderRadius: "${config.borderRadius}px"`);
    if (config.padding && currentAlert.customization.relevantFields.includes("padding")) styles.push(`    padding: "${config.padding}px"`);
    if (config.width) styles.push(`    width: "${config.width}"`);

    const props = [];
    if (config.primaryColor) props.push(`iconColor="${config.primaryColor}"`);
    if (config.textColor) props.push(`titleColor="${config.textColor}"`);
    if (config.secondaryColor) props.push(`messageColor="${config.secondaryColor}"`);
    if (config.title) props.push(`title="${config.title}"`);
    if (config.message) props.push(`message="${config.message}"`);

    return `<${currentAlert.component.type.name}
  style={{
${styles.join(",\n")}
  }}
  ${props.join("\n  ")}
/>`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  const nextAlert = () => {
    if (currentIndex < alertComponents.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setCustomConfig(null);
    }
  };

  const prevAlert = () => {
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
          Alert components for providing feedback and information to users.
        </p>
      </div>

      {/* Quick Navigation Grid - NOW AT TOP */}
      <div className="w-full max-w-5xl card-base rounded-xl p-4 md:p-6">
        <h4 className="text-white font-michroma text-base md:text-lg mb-4">All Alerts</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
          {alertComponents.map((alert, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`px-3 md:px-4 py-2 md:py-2.5 rounded-lg font-space text-xs md:text-sm transition-all ${
                currentIndex === index
                  ? "bg-white text-black font-semibold"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {alert.name}
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
              onClick={prevAlert}
              disabled={currentIndex === 0}
              className={`p-2.5 md:p-3 rounded-lg glass-effect hover:bg-white/10 transition ${
                currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <ArrowLeft size={18} />
            </button>
            <span className="text-xs md:text-sm text-white font-medium px-3 md:px-4 text-center min-w-[140px] md:min-w-[180px]">
              {currentAlert.name}
            </span>
            <button
              onClick={nextAlert}
              disabled={currentIndex === alertComponents.length - 1}
              className={`p-2.5 md:p-3 rounded-lg glass-effect hover:bg-white/10 transition ${
                currentIndex === alertComponents.length - 1
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
            {currentAlert.description}
          </p>
        </div>

        {/* Preview/Code/Customize Area */}
        <div className="w-full">
          {state === "Customize" ? (
            <ComponentCustomizer
              onConfigChange={(config) => setCustomConfig(config)}
              defaultConfig={currentAlert.customization?.defaultConfig}
              relevantFields={currentAlert.customization?.relevantFields}
              customFields={currentAlert.customization?.customFields}
            >
              {(config) => React.cloneElement(currentAlert.component, {
                customStyle: {
                  borderColor: config.borderColor,
                  backgroundColor: config.backgroundColor,
                  borderRadius: config.borderRadius ? `${config.borderRadius}px` : undefined,
                  padding: config.padding ? `${config.padding}px` : undefined,
                  width: config.width,
                },
                title: config.title,
                message: config.message,
                iconColor: config.primaryColor,
                titleColor: config.textColor,
                messageColor: config.secondaryColor
              })}
            </ComponentCustomizer>
          ) : (
            <div className="w-full px-6 md:px-12 py-8 md:py-12 border border-white/10 rounded-xl relative glass-effect">
              {state === "Preview" ? (
                <div className="flex justify-center items-center min-h-[200px]">
                  {currentAlert.component}
                </div>
              ) : (
                <div className="flex flex-col gap-6 w-full">
                  {/* Implementation Code */}
                  {currentAlert.implementationCode && (
                    <div className="relative w-full overflow-x-auto">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-white/70 font-michroma text-sm">Component Code</h4>
                        <button
                          onClick={() => copyToClipboard(currentAlert.implementationCode)}
                          className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                        >
                          {copied === currentAlert.implementationCode ? <Check size={14} /> : <Copy size={14} />}
                          {copied === currentAlert.implementationCode ? "Copied!" : "Copy"}
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
                        {currentAlert.implementationCode.trim()}
                      </SyntaxHighlighter>
                    </div>
                  )}

                  {/* Usage Code */}
                  <div className="relative w-full overflow-x-auto">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white/70 font-michroma text-sm">Usage Example</h4>
                      <button
                        onClick={() => copyToClipboard(customConfig ? generateCustomCode(customConfig) : currentAlert.usageCode)}
                        className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                      >
                        {copied === (customConfig ? generateCustomCode(customConfig) : currentAlert.usageCode) ? <Check size={14} /> : <Copy size={14} />}
                        {copied === (customConfig ? generateCustomCode(customConfig) : currentAlert.usageCode) ? "Copied!" : "Copy"}
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
                      {customConfig ? generateCustomCode(customConfig) : currentAlert.usageCode.trim()}
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

export default AlertSection;
