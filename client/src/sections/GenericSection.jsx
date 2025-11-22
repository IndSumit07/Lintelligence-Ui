import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

// Generic Section Component for displaying components with Preview and Code tabs
const GenericSection = ({ title, description, components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeView, setActiveView] = useState("Preview");
  const [copied, setCopied] = useState(null);

  const currentComponent = components[currentIndex];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
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
            onClick={() => setCurrentIndex(index)}
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
      <div className="flex gap-2 mb-6">
        {["Preview", "Code"].map((view) => (
          <button
            key={view}
            onClick={() => setActiveView(view)}
            className={`px-6 py-2 rounded-lg font-space text-sm transition-all ${
              activeView === view
                ? "bg-orange-500 text-black font-semibold"
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            {view}
          </button>
        ))}
      </div>

      {/* Content */}
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
                  onClick={() => copyToClipboard(currentComponent.usageCode || currentComponent.code)}
                  className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                >
                  {copied === (currentComponent.usageCode || currentComponent.code) ? <Check size={14} /> : <Copy size={14} />}
                  {copied === (currentComponent.usageCode || currentComponent.code) ? "Copied!" : "Copy"}
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
                {(currentComponent.usageCode || currentComponent.code || "// See component file for full code").trim()}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </div>

      {currentComponent.description && (
        <p className="text-white/50 font-space text-sm text-center mt-6">
          {currentComponent.description}
        </p>
      )}
    </div>
  );
};

export default GenericSection;
