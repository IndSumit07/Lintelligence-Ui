import React, { useState } from "react";
import { Info, HelpCircle, AlertCircle } from "lucide-react";

// Simple Tooltip
export const SimpleTooltip = ({ customStyle }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block" style={customStyle}>
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="btn-primary px-6 py-3 rounded-lg font-semibold"
      >
        Hover me
      </button>
      
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black border border-white/20 rounded-lg text-white font-space text-sm whitespace-nowrap shadow-xl">
          This is a tooltip
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white/20"></div>
        </div>
      )}
    </div>
  );
};

// Icon Tooltip
export const IconTooltip = ({ customStyle }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block" style={customStyle}>
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
      >
        <Info size={18} className="text-white/70" />
      </button>
      
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-orange-500 rounded-lg text-black font-space text-sm font-semibold whitespace-nowrap shadow-xl">
          Click for more info
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-orange-500"></div>
        </div>
      )}
    </div>
  );
};

// Rich Tooltip
export const RichTooltip = ({ customStyle }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block" style={customStyle}>
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="card-base px-6 py-3 rounded-xl font-space hover:border-orange-500/50 transition-all"
      >
        <HelpCircle size={20} className="text-white inline mr-2" />
        Need help?
      </button>
      
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 card-base rounded-xl p-4 shadow-2xl">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle size={18} className="text-orange-400" />
            </div>
            <div>
              <h4 className="text-white font-michroma text-sm mb-1">Quick Help</h4>
              <p className="text-white/60 font-space text-xs leading-relaxed">
                Visit our documentation for detailed guides and examples.
              </p>
            </div>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-white/10"></div>
        </div>
      )}
    </div>
  );
};

// Positioned Tooltips
export const PositionedTooltips = ({ customStyle }) => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const positions = [
    { id: 'top', label: 'Top', position: 'bottom-full mb-2' },
    { id: 'bottom', label: 'Bottom', position: 'top-full mt-2' },
    { id: 'left', label: 'Left', position: 'right-full mr-2 top-1/2 -translate-y-1/2' },
    { id: 'right', label: 'Right', position: 'left-full ml-2 top-1/2 -translate-y-1/2' }
  ];

  return (
    <div className="flex gap-4 flex-wrap" style={customStyle}>
      {positions.map((pos) => (
        <div key={pos.id} className="relative inline-block">
          <button
            onMouseEnter={() => setActiveTooltip(pos.id)}
            onMouseLeave={() => setActiveTooltip(null)}
            className="btn-secondary px-4 py-2 rounded-lg font-space text-sm"
          >
            {pos.label}
          </button>
          
          {activeTooltip === pos.id && (
            <div className={`absolute ${pos.position} px-3 py-2 bg-black border border-orange-500/50 rounded-lg text-white font-space text-xs whitespace-nowrap shadow-xl z-10`}>
              Tooltip {pos.label}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
