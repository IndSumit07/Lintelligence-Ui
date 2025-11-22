import React, { useState } from "react";
import { Copy, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ComponentCustomizer from "../components/ComponentCustomizer";
import { SimpleFooter, FooterWithLinks, FooterWithNewsletter } from "../components/FooterComponents";

const FooterSection = () => {
  const [state, setState] = useState("Preview");
  const [copied, setCopied] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [customConfig, setCustomConfig] = useState(null);

  const footerComponents = [
    {
      name: "Simple Footer",
      component: <SimpleFooter />,
      implementationCode: `export const SimpleFooter = ({ customStyle }) => {
  return (
    <footer className="w-full border-t border-white/10 py-8 px-6" style={customStyle}>
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white/60 font-space text-sm">
          © 2024 Lintelligence. All rights reserved.
        </p>
      </div>
    </footer>
  );
};`,
      usageCode: `import { SimpleFooter } from "../components/FooterComponents";

const MyComponent = () => (
  <SimpleFooter />
);`,
      description: "Minimal footer with copyright text",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "padding"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "transparent", padding: "32" }
      }
    },
    {
      name: "Footer with Links",
      component: <FooterWithLinks />,
      implementationCode: `export const FooterWithLinks = ({ customStyle }) => {
  return (
    <footer className="w-full border-t border-white/10 py-12 px-6" style={customStyle}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Brain size={24} className="text-white" />
            <h3 className="text-xl font-michroma text-white">Lintelligence</h3>
          </div>
          <p className="text-white/60 font-space text-sm">
            Beautiful UI components for modern web applications.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-michroma text-sm mb-4">Product</h4>
          <ul className="space-y-2 text-white/60 font-space text-sm">
            <li><a href="/components" className="hover:text-white transition-colors">Components</a></li>
            <li><a href="/themes" className="hover:text-white transition-colors">Themes</a></li>
            <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-michroma text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-white/60 font-space text-sm">
            <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-michroma text-sm mb-4">Connect</h4>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 text-center">
        <p className="text-white/60 font-space text-sm flex items-center justify-center gap-1">
          Made with <Heart size={14} className="text-red-500" /> by Lintelligence Team
        </p>
      </div>
    </footer>
  );
};`,
      usageCode: `import { FooterWithLinks } from "../components/FooterComponents";

const MyComponent = () => (
  <FooterWithLinks />
);`,
      description: "Multi-column footer with navigation links",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "padding"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "transparent", padding: "48" }
      }
    },
    {
      name: "Footer with Newsletter",
      component: <FooterWithNewsletter />,
      implementationCode: `export const FooterWithNewsletter = ({ customStyle }) => {
  return (
    <footer className="w-full border-t border-white/10 py-12 px-6" style={customStyle}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain size={28} className="text-white" />
              <h3 className="text-2xl font-michroma text-white">Lintelligence</h3>
            </div>
            <p className="text-white/60 font-space mb-6">
              Subscribe to our newsletter for updates and new components.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition-colors"
              />
              <button className="btn-primary px-6 py-3 rounded-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-michroma text-sm mb-4">Resources</h4>
              <ul className="space-y-2 text-white/60 font-space text-sm">
                <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="/components" className="hover:text-white transition-colors">Components</a></li>
                <li><a href="/themes" className="hover:text-white transition-colors">Themes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-michroma text-sm mb-4">Legal</h4>
              <ul className="space-y-2 text-white/60 font-space text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">License</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 font-space text-sm">
            © 2024 Lintelligence. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};`,
      usageCode: `import { FooterWithNewsletter } from "../components/FooterComponents";

const MyComponent = () => (
  <FooterWithNewsletter />
);`,
      description: "Footer with newsletter subscription form",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "padding"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "transparent", padding: "48" }
      }
    }
  ];

  const currentFooter = footerComponents[currentIndex];

  const generateCustomCode = (config) => {
    if (!config) return currentFooter.usageCode;

    const styles = [];
    if (config.borderColor && currentFooter.customization.relevantFields.includes("borderColor")) styles.push(`    borderTop: "1px solid ${config.borderColor}"`);
    if (config.backgroundColor && currentFooter.customization.relevantFields.includes("backgroundColor")) styles.push(`    backgroundColor: "${config.backgroundColor}"`);
    if (config.padding && currentFooter.customization.relevantFields.includes("padding")) styles.push(`    padding: "${config.padding}px"`);

    return `<div style={{
${styles.join(",\n")}
}}>
  <${currentFooter.component.type.name} />
</div>`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  const nextFooter = () => {
    if (currentIndex < footerComponents.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setCustomConfig(null);
    }
  };

  const prevFooter = () => {
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
          Professional footer components for your website.
        </p>
      </div>

      {/* Quick Navigation Grid - NOW AT TOP */}
      <div className="w-full max-w-5xl card-base rounded-xl p-4 md:p-6">
        <h4 className="text-white font-michroma text-base md:text-lg mb-4">All Footers</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
          {footerComponents.map((footer, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`px-3 md:px-4 py-2 md:py-2.5 rounded-lg font-space text-xs md:text-sm transition-all ${
                currentIndex === index
                  ? "bg-white text-black font-semibold"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {footer.name}
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
              onClick={prevFooter}
              disabled={currentIndex === 0}
              className={`p-2.5 md:p-3 rounded-lg glass-effect hover:bg-white/10 transition ${
                currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <ArrowLeft size={18} />
            </button>
            <span className="text-xs md:text-sm text-white font-medium px-3 md:px-4 text-center min-w-[140px] md:min-w-[180px]">
              {currentFooter.name}
            </span>
            <button
              onClick={nextFooter}
              disabled={currentIndex === footerComponents.length - 1}
              className={`p-2.5 md:p-3 rounded-lg glass-effect hover:bg-white/10 transition ${
                currentIndex === footerComponents.length - 1
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
            {currentFooter.description}
          </p>
        </div>

        {/* Preview/Code/Customize Area */}
        <div className="w-full">
          {state === "Customize" ? (
            <ComponentCustomizer
              onConfigChange={(config) => setCustomConfig(config)}
              defaultConfig={currentFooter.customization?.defaultConfig}
              relevantFields={currentFooter.customization?.relevantFields}
              customFields={currentFooter.customization?.customFields}
            >
              {(config) => React.cloneElement(currentFooter.component, {
                customStyle: {
                  borderColor: config.borderColor,
                  backgroundColor: config.backgroundColor,
                  padding: config.padding ? `${config.padding}px` : undefined,
                }
              })}
            </ComponentCustomizer>
          ) : (
            <div className="w-full px-6 md:px-12 py-8 md:py-12 border border-white/10 rounded-xl relative glass-effect">
              {state === "Preview" ? (
                <div className="flex justify-center items-center min-h-[200px] bg-black/50 rounded-xl overflow-hidden">
                  {currentFooter.component}
                </div>
              ) : (
                <div className="flex flex-col gap-6 w-full">
                  {/* Implementation Code */}
                  {currentFooter.implementationCode && (
                    <div className="relative w-full overflow-x-auto">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-white/70 font-michroma text-sm">Component Code</h4>
                        <button
                          onClick={() => copyToClipboard(currentFooter.implementationCode)}
                          className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                        >
                          {copied === currentFooter.implementationCode ? <Check size={14} /> : <Copy size={14} />}
                          {copied === currentFooter.implementationCode ? "Copied!" : "Copy"}
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
                        {currentFooter.implementationCode.trim()}
                      </SyntaxHighlighter>
                    </div>
                  )}

                  {/* Usage Code */}
                  <div className="relative w-full overflow-x-auto">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white/70 font-michroma text-sm">Usage Example</h4>
                      <button
                        onClick={() => copyToClipboard(customConfig ? generateCustomCode(customConfig) : currentFooter.usageCode)}
                        className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                      >
                        {copied === (customConfig ? generateCustomCode(customConfig) : currentFooter.usageCode) ? <Check size={14} /> : <Copy size={14} />}
                        {copied === (customConfig ? generateCustomCode(customConfig) : currentFooter.usageCode) ? "Copied!" : "Copy"}
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
                      {customConfig ? generateCustomCode(customConfig) : currentFooter.usageCode.trim()}
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

export default FooterSection;
