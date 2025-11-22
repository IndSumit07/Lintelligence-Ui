import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Simple Accordion
export const SimpleAccordion = ({ customStyle }) => {
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
};

// Styled Accordion
export const StyledAccordion = ({ customStyle }) => {
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
          className={`card-base rounded-xl overflow-hidden transition-all ${
            openIndex === index ? 'border-orange-500/50' : ''
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-michroma text-sm ${
                openIndex === index ? 'bg-orange-500 text-black' : 'bg-white/5 text-white/60'
              }`}>
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
};

// Multiple Open Accordion
export const MultiAccordion = ({ customStyle }) => {
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
};
