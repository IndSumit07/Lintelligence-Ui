import React, { useState } from "react";
import { Copy, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ComponentCustomizer from "../components/ComponentCustomizer";
import {
  BasicInput,
  IconInput,
  EmailInput,
  PasswordInput,
  FloatingLabelInput,
  TextArea,
  SelectInput,
  GradientInput,
} from "../components/InputComponents";

const InputSection = () => {
  const [state, setState] = useState("Preview");
  const [copied, setCopied] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [customConfig, setCustomConfig] = useState(null);

  const inputComponents = [
    {
      name: "Basic",
      component: <BasicInput />,
      implementationCode: `export const BasicInput = ({ customStyle, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder || "Enter text..."}
      className="w-80 px-4 py-3 rounded-lg glass-effect border-2 border-white/10 text-white font-space placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-all duration-300"
      style={customStyle}
    />
  );
};`,
      usageCode: `import { BasicInput } from "../components/InputComponents";

const MyComponent = () => (
  <BasicInput placeholder="Enter your name" />
);`,
      description: "Standard text input with clean styling",
      customization: {
        relevantFields: ["borderColor", "textColor", "borderRadius", "padding", "text"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", textColor: "#ffffff", borderRadius: "8", padding: "12", text: "Enter text..." },
        customFields: [
          { key: "placeholder", label: "Placeholder", type: "text", default: "Enter text..." },
          { key: "focusBorderColor", label: "Focus Border Color", type: "color", default: "#ff6b35" },
          { key: "width", label: "Width", type: "select", options: ["240px", "320px", "400px", "100%"], default: "320px" }
        ]
      }
    },
    {
      name: "Icon",
      component: <IconInput />,
      implementationCode: `export const IconInput = ({ customStyle, placeholder }) => {
  return (
    <div className="relative w-80" style={{ width: customStyle?.width }}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        className="w-full pl-12 pr-4 py-3 rounded-lg glass-effect border-2 border-white/10 text-white font-space placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-all duration-300"
        style={customStyle}
      />
    </div>
  );
};`,
      usageCode: `import { IconInput } from "../components/InputComponents";

const MyComponent = () => (
  <IconInput placeholder="Search..." />
);`,
      description: "Input with icon prefix for better UX",
      customization: {
        relevantFields: ["borderColor", "textColor", "borderRadius", "padding"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", textColor: "#ffffff", borderRadius: "8", padding: "12" },
        customFields: [
          { key: "placeholder", label: "Placeholder", type: "text", default: "Search..." },
          { key: "width", label: "Width", type: "select", options: ["240px", "320px", "400px", "100%"], default: "320px" }
        ]
      }
    },
    {
      name: "Email",
      component: <EmailInput />,
      implementationCode: `export const EmailInput = ({ customStyle, placeholder }) => {
  return (
    <div className="relative w-80" style={{ width: customStyle?.width }}>
      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
      <input
        type="email"
        placeholder={placeholder || "Email address"}
        className="w-full pl-12 pr-4 py-3 rounded-lg glass-effect border-2 border-white/10 text-white font-space placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-all duration-300"
        style={customStyle}
      />
    </div>
  );
};`,
      usageCode: `import { EmailInput } from "../components/InputComponents";

const MyComponent = () => (
  <EmailInput placeholder="your@email.com" />
);`,
      description: "Email input with mail icon",
      customization: {
        relevantFields: ["borderColor", "textColor", "borderRadius", "padding"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", textColor: "#ffffff", borderRadius: "8", padding: "12" },
        customFields: [
          { key: "placeholder", label: "Placeholder", type: "text", default: "Email address" },
          { key: "width", label: "Width", type: "select", options: ["240px", "320px", "400px", "100%"], default: "320px" }
        ]
      }
    },
    {
      name: "Password",
      component: <PasswordInput />,
      implementationCode: `export const PasswordInput = ({ customStyle, placeholder }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  
  return (
    <div className="relative w-80" style={{ width: customStyle?.width }}>
      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full pl-12 pr-12 py-3 rounded-lg glass-effect border-2 border-white/10 text-white font-space placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-all duration-300"
        style={customStyle}
      />
      <button
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-orange-400 transition-all"
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
};`,
      usageCode: `import { PasswordInput } from "../components/InputComponents";

const MyComponent = () => (
  <PasswordInput />
);`,
      description: "Password input with show/hide toggle",
      customization: {
        relevantFields: ["borderColor", "textColor", "borderRadius", "padding"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", textColor: "#ffffff", borderRadius: "8", padding: "12" },
        customFields: [
          { key: "placeholder", label: "Placeholder", type: "text", default: "Password" },
          { key: "width", label: "Width", type: "select", options: ["240px", "320px", "400px", "100%"], default: "320px" }
        ]
      }
    },
    {
      name: "Floating Label",
      component: <FloatingLabelInput />,
      implementationCode: `export const FloatingLabelInput = ({ customStyle, placeholder }) => {
  const [focused, setFocused] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="relative w-80" style={{ width: customStyle?.width }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 pt-6 pb-2 rounded-lg glass-effect border-2 border-white/10 text-white font-space focus:border-orange-500/50 focus:outline-none transition-all duration-300"
        style={customStyle}
      />
      <label
        className={\`absolute left-4 font-space transition-all duration-300 pointer-events-none \${
          focused || value
            ? "top-2 text-xs text-orange-400"
            : "top-1/2 -translate-y-1/2 text-white/40"
        }\`}
      >
        {placeholder || "Username"}
      </label>
    </div>
  );
};`,
      usageCode: `import { FloatingLabelInput } from "../components/InputComponents";

const MyComponent = () => (
  <FloatingLabelInput placeholder="Full Name" />
);`,
      description: "Input with animated floating label",
      customization: {
        relevantFields: ["borderColor", "textColor", "borderRadius"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", textColor: "#ffffff", borderRadius: "8" },
        customFields: [
          { key: "placeholder", label: "Label Text", type: "text", default: "Username" },
          { key: "width", label: "Width", type: "select", options: ["240px", "320px", "400px", "100%"], default: "320px" }
        ]
      }
    },
    {
      name: "Text Area",
      component: <TextArea />,
      implementationCode: `export const TextArea = ({ customStyle, placeholder }) => {
  return (
    <textarea
      placeholder={placeholder || "Enter your message..."}
      rows={4}
      className="w-80 px-4 py-3 rounded-lg glass-effect border-2 border-white/10 text-white font-space placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-all duration-300 resize-none"
      style={customStyle}
    />
  );
};`,
      usageCode: `import { TextArea } from "../components/InputComponents";

const MyComponent = () => (
  <TextArea placeholder="Type your message here..." />
);`,
      description: "Multi-line text input for longer content",
      customization: {
        relevantFields: ["borderColor", "textColor", "borderRadius", "padding"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", textColor: "#ffffff", borderRadius: "8", padding: "12" },
        customFields: [
          { key: "placeholder", label: "Placeholder", type: "text", default: "Enter your message..." },
          { key: "width", label: "Width", type: "select", options: ["240px", "320px", "400px", "100%"], default: "320px" }
        ]
      }
    },
    {
      name: "Select",
      component: <SelectInput />,
      implementationCode: `export const SelectInput = ({ customStyle }) => {
  return (
    <select 
      className="w-80 px-4 py-3 rounded-lg glass-effect border-2 border-white/10 text-white font-space focus:border-orange-500/50 focus:outline-none transition-all duration-300 bg-transparent"
      style={customStyle}
    >
      <option value="" className="bg-black">Select an option</option>
      <option value="1" className="bg-black">Option 1</option>
      <option value="2" className="bg-black">Option 2</option>
      <option value="3" className="bg-black">Option 3</option>
    </select>
  );
};`,
      usageCode: `import { SelectInput } from "../components/InputComponents";

const MyComponent = () => (
  <SelectInput />
);`,
      description: "Dropdown select with custom styling",
      customization: {
        relevantFields: ["borderColor", "textColor", "borderRadius", "padding"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", textColor: "#ffffff", borderRadius: "8", padding: "12" },
        customFields: [
          { key: "width", label: "Width", type: "select", options: ["240px", "320px", "400px", "100%"], default: "320px" }
        ]
      }
    },
    {
      name: "Gradient Border",
      component: <GradientInput />,
      implementationCode: `export const GradientInput = ({ customStyle, placeholder }) => {
  return (
    <div className="relative w-80 group" style={{ width: customStyle?.width }}>
      <div className="absolute -inset-0.5 gradient-orange rounded-lg blur opacity-30 group-focus-within:opacity-75 transition duration-300"></div>
      <input
        type="text"
        placeholder={placeholder || "Gradient border input..."}
        className="relative w-full px-4 py-3 rounded-lg bg-black border-2 border-transparent text-white font-space placeholder:text-white/40 focus:outline-none"
        style={customStyle}
      />
    </div>
  );
};`,
      usageCode: `import { GradientInput } from "../components/InputComponents";

const MyComponent = () => (
  <GradientInput placeholder="Cool effect!" />
);`,
      description: "Input with enhanced border styling",
      customization: {
        relevantFields: ["textColor", "borderRadius", "padding"],
        defaultConfig: { textColor: "#ffffff", borderRadius: "8", padding: "12" },
        customFields: [
          { key: "placeholder", label: "Placeholder", type: "text", default: "Gradient border input..." },
          { key: "width", label: "Width", type: "select", options: ["240px", "320px", "400px", "100%"], default: "320px" }
        ]
      }
    },
  ];

  const currentInput = inputComponents[currentIndex];

  const generateCustomCode = (config) => {
    if (!config) return currentInput.usageCode;

    const styles = [];
    if (config.borderColor && currentInput.customization.relevantFields.includes("borderColor")) styles.push(`    border: "2px solid ${config.borderColor}"`);
    if (config.textColor && currentInput.customization.relevantFields.includes("textColor")) styles.push(`    color: "${config.textColor}"`);
    if (config.borderRadius && currentInput.customization.relevantFields.includes("borderRadius")) styles.push(`    borderRadius: "${config.borderRadius}px"`);
    if (config.padding && currentInput.customization.relevantFields.includes("padding")) styles.push(`    padding: "${config.padding}px"`);
    if (config.width) styles.push(`    width: "${config.width}"`);

    return `<input
  type="text"
  placeholder="${config.placeholder || "Enter text..."}"
  style={{
${styles.join(",\n")}
  }}
  className="rounded-lg glass-effect text-white font-space focus:outline-none transition-all"
/>`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  const nextInput = () => {
    if (currentIndex < inputComponents.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setCustomConfig(null);
    }
  };

  const prevInput = () => {
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
          Form input components with clean styling and smooth interactions. All inputs are fully responsive and accessible.
        </p>
      </div>

      {/* Quick Navigation Grid - NOW AT TOP */}
      <div className="w-full max-w-5xl card-base rounded-xl p-4 md:p-6">
        <h4 className="text-white font-michroma text-base md:text-lg mb-4">All Inputs</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
          {inputComponents.map((input, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`px-3 md:px-4 py-2 md:py-2.5 rounded-lg font-space text-xs md:text-sm transition-all ${
                currentIndex === index
                  ? "bg-white text-black font-semibold"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {input.name}
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
              onClick={prevInput}
              disabled={currentIndex === 0}
              className={`p-2.5 md:p-3 rounded-lg glass-effect hover:bg-white/10 transition ${
                currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <ArrowLeft size={18} />
            </button>
            <span className="text-xs md:text-sm text-white font-medium px-3 md:px-4 text-center min-w-[140px] md:min-w-[180px]">
              {currentInput.name}
            </span>
            <button
              onClick={nextInput}
              disabled={currentIndex === inputComponents.length - 1}
              className={`p-2.5 md:p-3 rounded-lg glass-effect hover:bg-white/10 transition ${
                currentIndex === inputComponents.length - 1
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
            {currentInput.description}
          </p>
        </div>

        {/* Preview/Code/Customize Area */}
        <div className="w-full">
          {state === "Customize" ? (
            <ComponentCustomizer
              onConfigChange={(config) => setCustomConfig(config)}
              defaultConfig={currentInput.customization?.defaultConfig}
              relevantFields={currentInput.customization?.relevantFields}
              customFields={currentInput.customization?.customFields}
            >
              {(config) => React.cloneElement(currentInput.component, {
                customStyle: {
                  borderColor: config.borderColor,
                  color: config.textColor,
                  borderRadius: config.borderRadius ? `${config.borderRadius}px` : undefined,
                  padding: config.padding ? `${config.padding}px` : undefined,
                  width: config.width,
                },
                placeholder: config.placeholder
              })}
            </ComponentCustomizer>
          ) : (
            <div className="w-full px-6 md:px-12 py-8 md:py-12 border border-white/10 rounded-xl relative glass-effect">
              {state === "Preview" ? (
                <div className="flex justify-center items-center min-h-[140px]">
                  {currentInput.component}
                </div>
              ) : (
                <div className="flex flex-col gap-6 w-full">
                  {/* Implementation Code */}
                  {currentInput.implementationCode && (
                    <div className="relative w-full overflow-x-auto">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-white/70 font-michroma text-sm">Component Code</h4>
                        <button
                          onClick={() => copyToClipboard(currentInput.implementationCode)}
                          className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                        >
                          {copied === currentInput.implementationCode ? <Check size={14} /> : <Copy size={14} />}
                          {copied === currentInput.implementationCode ? "Copied!" : "Copy"}
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
                        {currentInput.implementationCode.trim()}
                      </SyntaxHighlighter>
                    </div>
                  )}

                  {/* Usage Code */}
                  <div className="relative w-full overflow-x-auto">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white/70 font-michroma text-sm">Usage Example</h4>
                      <button
                        onClick={() => copyToClipboard(customConfig ? generateCustomCode(customConfig) : currentInput.usageCode)}
                        className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                      >
                        {copied === (customConfig ? generateCustomCode(customConfig) : currentInput.usageCode) ? <Check size={14} /> : <Copy size={14} />}
                        {copied === (customConfig ? generateCustomCode(customConfig) : currentInput.usageCode) ? "Copied!" : "Copy"}
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
                      {customConfig ? generateCustomCode(customConfig) : currentInput.usageCode.trim()}
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

export default InputSection;
