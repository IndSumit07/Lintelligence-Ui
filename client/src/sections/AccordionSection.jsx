import React, { useState } from "react";
import { Copy, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ComponentCustomizer from "../components/ComponentCustomizer";
import { SimpleAccordion, StyledAccordion, MultiAccordion } from "../components/AccordionComponents";

const AccordionSection = () => {
  const [state, setState] = useState("Preview");
  const [copied, setCopied] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [customConfig, setCustomConfig] = useState(null);

  const accordionComponents = [
    {
      name: "Simple Accordion",
      component: <SimpleAccordion />,
      implementationCode: `export const SimpleAccordion = ({ customStyle }) => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const items = [
    {
      title: "What is Lintelligence?",
      content: "Lintelligence is a modern UI component library built with React and Tailwind CSS."
    },
    {
      title: "How do I use it?",
      content: "Simply copy the component code and paste it into your React project."
    },
    {
      title: "Is it free?",
      content: "Yes! Lintelligence is completely free and open-source."
    }
  ];

  return (
    <div className="w-full max-w-2xl space-y-3" style={customStyle}>
      {items.map((item, index) => (
        <div key={index} className="card-base rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
          >
            <span className="text-white font-space font-semibold">{item.title}</span>
            {openIndex === index ? (
              <ChevronUp className="text-orange-400" size={20} />
            ) : (
              <ChevronDown className="text-white/40" size={20} />
            )}
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4">
              <p className="text-white/60 font-space text-sm">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};`,
      usageCode: `import { SimpleAccordion } from "../components/AccordionComponents";

const MyComponent = () => (
  <SimpleAccordion />
);`,
      description: "Basic collapsible accordion",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius"],
        defaultConfig: {
          borderColor: "rgba(255, 255, 255, 0.1)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: "12"
        }
      }
    },
    {
      name: "Styled Accordion",
      component: <StyledAccordion />,
      implementationCode: `export const StyledAccordion = ({ customStyle }) => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const items = [
    {
      title: "Getting Started",
      content: "Learn the basics of using Lintelligence components in your project. No installation required!"
    },
    {
      title: "Customization",
      content: "All components are fully customizable. Modify colors, sizes, and styles to match your brand."
    },
    {
      title: "Best Practices",
      content: "Follow our recommended patterns for optimal performance and maintainability."
    }
  ];

  return (
    <div className="w-full max-w-2xl space-y-4" style={customStyle}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className={\`card-base rounded-xl overflow-hidden transition-all \${
            openIndex === index ? 'border-orange-500/50' : ''
          }\`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={\`w-8 h-8 rounded-lg flex items-center justify-center font-michroma text-sm \${
                openIndex === index ? 'bg-orange-500 text-black' : 'bg-white/5 text-white/60'
              }\`}>
                {index + 1}
              </div>
              <span className="text-white font-michroma text-sm">{item.title}</span>
            </div>
            {openIndex === index ? (
              <ChevronUp className="text-orange-400" size={20} />
            ) : (
              <ChevronDown className="text-white/40" size={20} />
            )}
          </button>
          {openIndex === index && (
            <div className="px-5 pb-5 pt-2">
              <p className="text-white/70 font-space leading-relaxed">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};`,
      usageCode: `import { StyledAccordion } from "../components/AccordionComponents";

const MyComponent = () => (
  <StyledAccordion />
);`,
      description: "Accordion with numbered steps",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius"],
        defaultConfig: {
          borderColor: "rgba(255, 255, 255, 0.1)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: "12"
        }
      }
    },
    {
      name: "Multi-Select Accordion",
      component: <MultiAccordion />,
      implementationCode: `export const MultiAccordion = ({ customStyle }) => {
  const [openItems, setOpenItems] = useState([0]);
  
  const items = [
    {
      title: "Installation",
      content: "No npm installation needed. Just copy and paste the components you need."
    },
    {
      title: "Dependencies",
      content: "Requires React and Tailwind CSS. Some components use Framer Motion for animations."
    },
    {
      title: "Browser Support",
      content: "Works on all modern browsers including Chrome, Firefox, Safari, and Edge."
    },
    {
      title: "License",
      content: "MIT License - free for personal and commercial use."
    }
  ];

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full max-w-2xl space-y-2" style={customStyle}>
      {items.map((item, index) => (
        <div key={index} className="card-base rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
          >
            <span className="text-white font-space">{item.title}</span>
            {openItems.includes(index) ? (
              <ChevronUp className="text-orange-400" size={18} />
            ) : (
              <ChevronDown className="text-white/40" size={18} />
            )}
          </button>
          {openItems.includes(index) && (
            <div className="px-4 pb-4 border-t border-white/10">
              <p className="text-white/60 font-space text-sm mt-3">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};`,
      usageCode: `import { MultiAccordion } from "../components/AccordionComponents";

const MyComponent = () => (
  <MultiAccordion />
);`,
      description: "Multiple items can be open",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius"],
        defaultConfig: {
          borderColor: "rgba(255, 255, 255, 0.1)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: "8"
        }
      }
    }
  ];

  const currentAccordion = accordionComponents[currentIndex];

  const generateCustomCode = (config) => {
    if (!config) return currentAccordion.usageCode;

    const styles = [];
    if (config.borderColor && currentAccordion.customization.relevantFields.includes("borderColor")) styles.push(`    border: "1px solid ${config.borderColor}"`);
    if (config.backgroundColor && currentAccordion.customization.relevantFields.includes("backgroundColor")) styles.push(`    backgroundColor: "${config.backgroundColor}"`);
    if (config.borderRadius && currentAccordion.customization.relevantFields.includes("borderRadius")) styles.push(`    borderRadius: "${config.borderRadius}px"`);

    return `<div style={{
${styles.join(",\n")}
}}>
  <${currentAccordion.component.type.name} />
</div>`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  const nextAccordion = () => {
    if (currentIndex < accordionComponents.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setCustomConfig(null);
    }
  };

  const prevAccordion = () => {
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
          Collapsible content panels for organizing information.
        </p>
      </div>

      {/* Quick Navigation Grid - NOW AT TOP */}
      <div className="w-full max-w-5xl card-base rounded-xl p-4 md:p-6">
        <h4 className="text-white font-michroma text-base md:text-lg mb-4">All Accordions</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
          {accordionComponents.map((accordion, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`px-3 md:px-4 py-2 md:py-2.5 rounded-lg font-space text-xs md:text-sm transition-all ${
                currentIndex === index
                  ? "bg-white text-black font-semibold"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {accordion.name}
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
              onClick={prevAccordion}
              disabled={currentIndex === 0}
              className={`p-2.5 md:p-3 rounded-lg glass-effect hover:bg-white/10 transition ${
                currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <ArrowLeft size={18} />
            </button>
            <span className="text-xs md:text-sm text-white font-medium px-3 md:px-4 text-center min-w-[140px] md:min-w-[180px]">
              {currentAccordion.name}
            </span>
            <button
              onClick={nextAccordion}
              disabled={currentIndex === accordionComponents.length - 1}
              className={`p-2.5 md:p-3 rounded-lg glass-effect hover:bg-white/10 transition ${
                currentIndex === accordionComponents.length - 1
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
            {currentAccordion.description}
          </p>
        </div>

        {/* Preview/Code/Customize Area */}
        <div className="w-full">
          {state === "Customize" ? (
            <ComponentCustomizer
              onConfigChange={(config) => setCustomConfig(config)}
              defaultConfig={currentAccordion.customization?.defaultConfig}
              relevantFields={currentAccordion.customization?.relevantFields}
            >
              {(config) =>
                React.cloneElement(currentAccordion.component, {
                  customStyle: {
                    borderColor: config.borderColor,
                    backgroundColor: config.backgroundColor,
                    borderRadius: config.borderRadius ? `${config.borderRadius}px` : undefined,
                  },
                })
              }
            </ComponentCustomizer>
          ) : (
            <div className="w-full px-6 md:px-12 py-8 md:py-12 border border-white/10 rounded-xl relative glass-effect">
              {state === "Preview" ? (
                <div className="flex justify-center items-center min-h-[320px]">
                  {currentAccordion.component}
                </div>
              ) : (
                <div className="flex flex-col gap-6 w-full">
                  {/* Implementation Code */}
                  {currentAccordion.implementationCode && (
                    <div className="relative w-full overflow-x-auto">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-white/70 font-michroma text-sm">Component Code</h4>
                        <button
                          onClick={() => copyToClipboard(currentAccordion.implementationCode)}
                          className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                        >
                          {copied === currentAccordion.implementationCode ? <Check size={14} /> : <Copy size={14} />}
                          {copied === currentAccordion.implementationCode ? "Copied!" : "Copy"}
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
                        {currentAccordion.implementationCode.trim()}
                      </SyntaxHighlighter>
                    </div>
                  )}

                  {/* Usage Code */}
                  <div className="relative w-full overflow-x-auto">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white/70 font-michroma text-sm">Usage Example</h4>
                      <button
                        onClick={() => copyToClipboard(customConfig ? generateCustomCode(customConfig) : currentAccordion.usageCode)}
                        className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                      >
                        {copied === (customConfig ? generateCustomCode(customConfig) : currentAccordion.usageCode) ? <Check size={14} /> : <Copy size={14} />}
                        {copied === (customConfig ? generateCustomCode(customConfig) : currentAccordion.usageCode) ? "Copied!" : "Copy"}
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
                      {customConfig ? generateCustomCode(customConfig) : currentAccordion.usageCode.trim()}
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

export default AccordionSection;
