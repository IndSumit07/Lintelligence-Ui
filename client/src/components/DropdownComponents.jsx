import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

// Simple Dropdown
export const SimpleDropdown = ({ customStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");
  
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <div className="relative w-64" style={customStyle}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-space flex items-center justify-between hover:bg-white/10 transition-colors"
      >
        <span className={selected === "Select an option" ? "text-white/40" : "text-white"}>
          {selected}
        </span>
        <ChevronDown size={18} className={`text-white/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black border border-white/10 rounded-lg overflow-hidden z-10 shadow-xl">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left text-white/70 font-space hover:bg-white/10 hover:text-white transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Dropdown with Icons
export const IconDropdown = ({ customStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  
  const options = [
    { label: "Components", value: "components" },
    { label: "Themes", value: "themes" },
    { label: "Documentation", value: "docs" },
    { label: "Contact", value: "contact" }
  ];

  return (
    <div className="relative w-64" style={customStyle}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full card-base rounded-xl px-4 py-3 text-white font-space flex items-center justify-between hover:border-orange-500/50 transition-all"
      >
        <span className={!selected ? "text-white/40" : "text-white"}>
          {selected ? options.find(o => o.value === selected)?.label : "Choose a page"}
        </span>
        <ChevronDown size={18} className={`text-white/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 card-base rounded-xl overflow-hidden z-10 shadow-2xl">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                setSelected(option.value);
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left text-white/70 font-space hover:bg-white/10 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>{option.label}</span>
              {selected === option.value && (
                <Check size={16} className="text-orange-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Multi-Select Dropdown
export const MultiSelectDropdown = ({ customStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  
  const options = ["React", "Vue", "Angular", "Svelte", "Next.js"];

  const toggleOption = (option) => {
    setSelected(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="relative w-72" style={customStyle}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full card-base rounded-xl px-4 py-3 text-white font-space flex items-center justify-between hover:border-orange-500/50 transition-all"
      >
        <span className={selected.length === 0 ? "text-white/40" : "text-white"}>
          {selected.length === 0 
            ? "Select frameworks" 
            : `${selected.length} selected`}
        </span>
        <ChevronDown size={18} className={`text-white/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 card-base rounded-xl overflow-hidden z-10 shadow-2xl">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => toggleOption(option)}
              className="w-full px-4 py-3 text-left text-white/70 font-space hover:bg-white/10 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>{option}</span>
              {selected.includes(option) && (
                <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center">
                  <Check size={14} className="text-black" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
      
      {selected.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {selected.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-400 font-space text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
