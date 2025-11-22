import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * ColorPickerField - Enhanced color picker with color wheel
 * Provides both visual color picker and hex input
 */
const ColorPickerField = ({ label, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleColorChange = (newColor) => {
    setTempValue(newColor);
    onChange(newColor);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setTempValue(newValue);
    // Only update if it's a valid hex color
    if (/^#[0-9A-Fa-f]{6}$/.test(newValue) || /^#[0-9A-Fa-f]{3}$/.test(newValue)) {
      onChange(newValue);
    } else if (newValue.startsWith('rgba')) {
      onChange(newValue);
    }
  };

  // Convert rgba to hex for color picker (if needed)
  const getHexValue = () => {
    if (value.includes('rgba')) {
      return '#ffffff'; // Default for rgba values
    }
    return value;
  };

  return (
    <div className="space-y-2">
      <label className="block text-white/60 font-space text-xs">{label}</label>
      
      {/* Color Preview and Input */}
      <div className="flex items-center gap-3">
        {/* Color Preview Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-12 h-10 rounded-lg border-2 border-white/20 overflow-hidden cursor-pointer hover:border-white/40 transition-all"
          style={{ backgroundColor: value.includes('rgba') ? 'transparent' : value }}
        >
          {value.includes('rgba') && (
            <div 
              className="absolute inset-0" 
              style={{ 
                background: value,
                backdropFilter: 'blur(0px)'
              }}
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            {isOpen ? (
              <ChevronUp size={16} className="text-white drop-shadow-lg" />
            ) : (
              <ChevronDown size={16} className="text-white drop-shadow-lg" />
            )}
          </div>
        </button>

        {/* Hex Input */}
        <input
          type="text"
          value={tempValue}
          onChange={handleInputChange}
          onBlur={() => setTempValue(value)} // Reset to actual value on blur
          className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-mono text-sm focus:border-orange-500/50 focus:outline-none transition-all"
          placeholder="#ffffff or rgba(...)"
        />
      </div>

      {/* Color Picker Dropdown */}
      {isOpen && (
        <div className="relative">
          <div className="absolute top-2 left-0 z-50 p-4 rounded-xl bg-black/95 border-2 border-white/20 shadow-2xl backdrop-blur-sm">
            <div className="mb-3">
              <HexColorPicker 
                color={getHexValue()} 
                onChange={handleColorChange}
                style={{ width: '200px', height: '200px' }}
              />
            </div>
            
            {/* Preset Colors */}
            <div className="space-y-2">
              <p className="text-white/60 font-space text-xs">Quick Colors</p>
              <div className="grid grid-cols-8 gap-1.5">
                {[
                  '#ff6b35', '#f7931e', '#3b82f6', '#8b5cf6', 
                  '#ec4899', '#10b981', '#f59e0b', '#ef4444',
                  '#06b6d4', '#84cc16', '#a855f7', '#f97316',
                  '#14b8a6', '#6366f1', '#f43f5e', '#22c55e',
                  '#ffffff', '#e5e7eb', '#9ca3af', '#6b7280',
                  '#374151', '#1f2937', '#111827', '#000000'
                ].map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => {
                      handleColorChange(color);
                      setIsOpen(false);
                    }}
                    className="w-6 h-6 rounded border border-white/20 hover:scale-110 transition-transform cursor-pointer"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* RGBA Helper */}
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-white/40 font-space text-xs">
                Tip: Use rgba(r, g, b, a) for transparency
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-3 w-full px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-space text-xs transition-all"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPickerField;
