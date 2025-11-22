import React, { useState, useEffect } from "react";
import { RefreshCw, Palette, Type, Sliders } from "lucide-react";
import ColorPickerField from "./ColorPickerField";

/**
 * ComponentCustomizer - A reusable customization panel for components
 * Allows users to modify colors, fonts, text, and other properties
 * Updates both preview and code in real-time
 */
const ComponentCustomizer = ({ 
  children, 
  defaultConfig = {},
  onConfigChange,
  customFields = [],
  generateCode,
  relevantFields = [] // Array of field keys to show. If empty, show all.
}) => {
  // Initialize custom fields defaults
  const customFieldsDefaults = customFields.reduce((acc, field) => {
    acc[field.key] = field.default || "";
    return acc;
  }, {});

  const [config, setConfig] = useState({
    // Default customization options
    primaryColor: defaultConfig.primaryColor || "#ff6b35",
    secondaryColor: defaultConfig.secondaryColor || "#f7931e",
    textColor: defaultConfig.textColor || "#ffffff",
    backgroundColor: defaultConfig.backgroundColor || "rgba(255, 255, 255, 0.05)",
    borderColor: defaultConfig.borderColor || "rgba(255, 255, 255, 0.1)",
    borderRadius: defaultConfig.borderRadius || "12",
    fontSize: defaultConfig.fontSize || "16",
    fontFamily: defaultConfig.fontFamily || "Space Grotesk",
    text: defaultConfig.text || "Component Text",
    padding: defaultConfig.padding || "24",
    ...customFieldsDefaults, // Add custom fields defaults
    ...defaultConfig // Override with any provided defaults
  });

  const handleConfigChange = (key, value) => {
    const newConfig = { ...config, [key]: value };
    setConfig(newConfig);
    if (onConfigChange) {
      onConfigChange(newConfig);
    }
  };

  // Notify parent of config changes
  useEffect(() => {
    if (onConfigChange) {
      onConfigChange(config);
    }
  }, [config]);

  const resetConfig = () => {
    const defaultCfg = {
      primaryColor: "#ff6b35",
      secondaryColor: "#f7931e",
      textColor: "#ffffff",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: "12",
      fontSize: "16",
      fontFamily: "Space Grotesk",
      text: "Component Text",
      padding: "24",
      ...customFieldsDefaults, // Add custom fields defaults
      ...defaultConfig // Override with any provided defaults
    };
    setConfig(defaultCfg);
  };

  const fontOptions = [
    "Space Grotesk",
    "Michroma",
    "Inter",
    "Roboto",
    "Poppins",
    "Montserrat",
    "Arial",
    "sans-serif"
  ];

  const isFieldRelevant = (key) => {
    if (!relevantFields || relevantFields.length === 0) return true;
    return relevantFields.includes(key);
  };

  return (
    <div className="w-full space-y-6">
      {/* Component Preview with Applied Styles */}
      <div className="w-full px-6 md:px-12 py-8 md:py-12 border border-white/10 rounded-xl glass-effect">
        <div className="flex justify-center items-center min-h-[140px]">
          {typeof children === 'function' ? children(config) : children}
        </div>
      </div>

      {/* Customization Panel - Always Visible */}
      <div className="card-base rounded-xl p-6 border-2 border-white/20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Palette size={20} className="text-white/60" />
            <h4 className="text-white font-michroma text-lg">Customize Component</h4>
          </div>
          <button
            onClick={resetConfig}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white transition-all"
            title="Reset to defaults"
          >
            <RefreshCw size={16} />
            <span className="text-sm font-space">Reset</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Colors Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Palette size={16} className="text-white/60" />
              <h5 className="text-white/80 font-space font-semibold text-sm">Colors</h5>
            </div>

            {isFieldRelevant("primaryColor") && (
              <ColorPickerField
                label="Primary Color"
                value={config.primaryColor}
                onChange={(value) => handleConfigChange("primaryColor", value)}
              />
            )}

            {isFieldRelevant("secondaryColor") && (
              <ColorPickerField
                label="Secondary Color"
                value={config.secondaryColor}
                onChange={(value) => handleConfigChange("secondaryColor", value)}
              />
            )}

            {isFieldRelevant("textColor") && (
              <ColorPickerField
                label="Text Color"
                value={config.textColor}
                onChange={(value) => handleConfigChange("textColor", value)}
              />
            )}

            {isFieldRelevant("borderColor") && (
              <ColorPickerField
                label="Border Color"
                value={config.borderColor}
                onChange={(value) => handleConfigChange("borderColor", value)}
              />
            )}
          </div>

          {/* Typography & Layout Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Type size={16} className="text-white/60" />
              <h5 className="text-white/80 font-space font-semibold text-sm">Typography & Layout</h5>
            </div>

            {isFieldRelevant("fontFamily") && (
              <div>
                <label className="block text-white/60 font-space text-xs mb-2">Font Family</label>
                <select
                  value={config.fontFamily}
                  onChange={(e) => handleConfigChange("fontFamily", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-space text-sm focus:border-orange-500/50 focus:outline-none"
                >
                  {fontOptions.map((font) => (
                    <option key={font} value={font} className="bg-black">
                      {font}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {isFieldRelevant("fontSize") && (
              <div>
                <label className="block text-white/60 font-space text-xs mb-2">
                  Font Size: {config.fontSize}px
                </label>
                <input
                  type="range"
                  min="10"
                  max="48"
                  value={config.fontSize}
                  onChange={(e) => handleConfigChange("fontSize", e.target.value)}
                  className="w-full accent-orange-500"
                />
              </div>
            )}

            {isFieldRelevant("borderRadius") && (
              <div>
                <label className="block text-white/60 font-space text-xs mb-2">
                  Border Radius: {config.borderRadius}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={config.borderRadius}
                  onChange={(e) => handleConfigChange("borderRadius", e.target.value)}
                  className="w-full accent-orange-500"
                />
              </div>
            )}

            {isFieldRelevant("padding") && (
              <div>
                <label className="block text-white/60 font-space text-xs mb-2">
                  Padding: {config.padding}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="64"
                  value={config.padding}
                  onChange={(e) => handleConfigChange("padding", e.target.value)}
                  className="w-full accent-orange-500"
                />
              </div>
            )}

            {isFieldRelevant("text") && (
              <div>
                <label className="block text-white/60 font-space text-xs mb-2">Text Content</label>
                <input
                  type="text"
                  value={config.text}
                  onChange={(e) => handleConfigChange("text", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-space text-sm focus:border-orange-500/50 focus:outline-none"
                  placeholder="Enter text..."
                />
              </div>
            )}
          </div>

          {/* Custom Fields */}
          {customFields.length > 0 && (
            <div className="md:col-span-2 space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Sliders size={16} className="text-white/60" />
                <h5 className="text-white/80 font-space font-semibold text-sm">Custom Options</h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {customFields.map((field, index) => (
                  <div key={index}>
                    <label className="block text-white/60 font-space text-xs mb-2">
                      {field.label}
                    </label>
                    {field.type === "text" && (
                      <input
                        type="text"
                        value={config[field.key] || field.default || ""}
                        onChange={(e) => handleConfigChange(field.key, e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-space text-sm focus:border-orange-500/50 focus:outline-none"
                        placeholder={field.placeholder}
                      />
                    )}
                    {field.type === "number" && (
                      <input
                        type="number"
                        value={config[field.key] || field.default || 0}
                        onChange={(e) => handleConfigChange(field.key, e.target.value)}
                        min={field.min}
                        max={field.max}
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-space text-sm focus:border-orange-500/50 focus:outline-none"
                      />
                    )}
                    {field.type === "select" && (
                      <select
                        value={config[field.key] || field.default || ""}
                        onChange={(e) => handleConfigChange(field.key, e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-space text-sm focus:border-orange-500/50 focus:outline-none"
                      >
                        {field.options.map((option) => (
                          <option key={option} value={option} className="bg-black">
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                    {field.type === "color" && (
                      <ColorPickerField
                        label=""
                        value={config[field.key] || field.default || "#ffffff"}
                        onChange={(value) => handleConfigChange(field.key, value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Export Config Button */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <button
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(config, null, 2));
              alert("Configuration copied to clipboard!");
            }}
            className="w-full btn-primary px-4 py-3 rounded-lg font-space font-semibold text-sm"
          >
            Copy Configuration JSON
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentCustomizer;
