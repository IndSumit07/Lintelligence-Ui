import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import ComponentCustomizer from "../components/ComponentCustomizer";

// Generic Section Component for displaying components with Preview, Code, and Customize tabs
const GenericSection = ({ title, description, components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeView, setActiveView] = useState("Preview");
  const [copied, setCopied] = useState(null);
  const [customConfig, setCustomConfig] = useState(null);

  const currentComponent = components[currentIndex];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  const generateCustomCode = (config) => {
    if (!config || !currentComponent.customization) return currentComponent.usageCode;

    const styles = [];
    const props = [];

    // Build style object based on relevant fields
    if (config.primaryColor && currentComponent.customization.relevantFields?.includes("primaryColor")) {
      styles.push(`    backgroundColor: "${config.primaryColor}"`);
    }
    if (config.textColor && currentComponent.customization.relevantFields?.includes("textColor")) {
      styles.push(`    color: "${config.textColor}"`);
    }
    if (config.borderColor && currentComponent.customization.relevantFields?.includes("borderColor")) {
      styles.push(`    borderColor: "${config.borderColor}"`);
    }
    if (config.backgroundColor && currentComponent.customization.relevantFields?.includes("backgroundColor")) {
      styles.push(`    backgroundColor: "${config.backgroundColor}"`);
    }
    if (config.borderRadius && currentComponent.customization.relevantFields?.includes("borderRadius")) {
      styles.push(`    borderRadius: "${config.borderRadius}px"`);
    }
    if (config.padding && currentComponent.customization.relevantFields?.includes("padding")) {
      styles.push(`    padding: "${config.padding}px"`);
    }
    if (config.fontSize && currentComponent.customization.relevantFields?.includes("fontSize")) {
      styles.push(`    fontSize: "${config.fontSize}px"`);
    }
    if (config.width && currentComponent.customization.relevantFields?.includes("width")) {
      styles.push(`    width: "${config.width}"`);
    }

    // Add custom field props
    if (currentComponent.customization.customFields) {
      currentComponent.customization.customFields.forEach(field => {
        if (config[field.key]) {
          props.push(`  ${field.key}="${config[field.key]}"`);
        }
      });
    }

    const componentName = currentComponent.component.type.name || currentComponent.name.replace(/\s+/g, '');
    
    return `<${componentName}
  style={{
${styles.join(",\n")}
  }}
${props.join("\n")}
/>`;
  };

  return (
    <div className="w-full max-w-6xl">
      <p className="text-white/60 font-space text-center mb-8">
        {description}
      </p>

      {/* Navigation Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
        {components.map((comp, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setCustomConfig(null);
            }}
            className={`px-4 py-2.5 rounded-lg font-space text-sm transition-all ${
              currentIndex === index
                ? "bg-white text-black font-semibold"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            {comp.name}
          </button>
        ))}
      </div>

      {/* View Tabs */}
      <div className="flex gap-2 md:gap-3 mb-6">
        {["Preview", "Code", "Customize"].map((view) => (
          <button
            key={view}
            onClick={() => setActiveView(view)}
            className={`px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-space font-semibold text-sm md:text-base transition-all ${
              activeView === view
                ? "bg-white text-black"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            {view}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeView === "Customize" && currentComponent.customization ? (
        <ComponentCustomizer
          onConfigChange={(config) => setCustomConfig(config)}
          defaultConfig={currentComponent.customization.defaultConfig}
          relevantFields={currentComponent.customization.relevantFields}
          customFields={currentComponent.customization.customFields}
        >
          {(config) => {
            // Clone the component with custom styles and props
            const customStyle = {};
            if (config.primaryColor) customStyle.backgroundColor = config.primaryColor;
            if (config.textColor) customStyle.color = config.textColor;
            if (config.borderColor) customStyle.borderColor = config.borderColor;
            if (config.backgroundColor) customStyle.backgroundColor = config.backgroundColor;
            if (config.borderRadius) customStyle.borderRadius = `${config.borderRadius}px`;
            if (config.padding) customStyle.padding = `${config.padding}px`;
            if (config.fontSize) customStyle.fontSize = `${config.fontSize}px`;
            if (config.width) customStyle.width = config.width;

            const customProps = { customStyle };
            
            // Add custom field values as props
            if (currentComponent.customization.customFields) {
              currentComponent.customization.customFields.forEach(field => {
                if (config[field.key] !== undefined) {
                  customProps[field.key] = config[field.key];
                }
              });
            }

            return React.cloneElement(currentComponent.component, customProps);
          }}
        </ComponentCustomizer>
      ) : (
        <div className="glass-effect border border-white/10 rounded-2xl p-8">
          {activeView === "Preview" && (
            <div className="flex items-center justify-center min-h-[300px]">
              {currentComponent.component}
            </div>
          )}

          {activeView === "Code" && (
            <div className="flex flex-col gap-6">
              {currentComponent.implementationCode && (
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white/70 font-michroma text-sm">Component Code</h4>
                    <button
                      onClick={() => copyToClipboard(currentComponent.implementationCode)}
                      className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                    >
                      {copied === currentComponent.implementationCode ? <Check size={14} /> : <Copy size={14} />}
                      {copied === currentComponent.implementationCode ? "Copied!" : "Copy"}
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
                    {currentComponent.implementationCode.trim()}
                  </SyntaxHighlighter>
                </div>
              )}

              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white/70 font-michroma text-sm">
                    {currentComponent.implementationCode ? "Usage Example" : "Code"}
                  </h4>
                  <button
                    onClick={() => copyToClipboard(customConfig ? generateCustomCode(customConfig) : (currentComponent.usageCode || currentComponent.code))}
                    className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                  >
                    {copied === (customConfig ? generateCustomCode(customConfig) : (currentComponent.usageCode || currentComponent.code)) ? <Check size={14} /> : <Copy size={14} />}
                    {copied === (customConfig ? generateCustomCode(customConfig) : (currentComponent.usageCode || currentComponent.code)) ? "Copied!" : "Copy"}
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
                  {customConfig ? generateCustomCode(customConfig) : (currentComponent.usageCode || currentComponent.code || "// See component file for full code").trim()}
                </SyntaxHighlighter>
              </div>
            </div>
          )}
        </div>
      )}

      {currentComponent.description && (
        <p className="text-white/50 font-space text-sm text-center mt-6">
          {currentComponent.description}
        </p>
      )}
    </div>
  );
};

export default GenericSection;
