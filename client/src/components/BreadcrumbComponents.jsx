import React from "react";
import { Home, ChevronRight } from "lucide-react";

// Simple Breadcrumb
export const SimpleBreadcrumb = ({ customStyle }) => {
  const items = ["Home", "Components", "Buttons"];

  return (
    <nav className="flex items-center gap-2 font-space text-sm" style={customStyle}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <a
            href="#"
            className={`${
              index === items.length - 1
                ? 'text-white font-semibold'
                : 'text-white/60 hover:text-white transition-colors'
            }`}
          >
            {item}
          </a>
          {index < items.length - 1 && (
            <ChevronRight size={14} className="text-white/40" />
          )}
        </div>
      ))}
    </nav>
  );
};

// Icon Breadcrumb
export const IconBreadcrumb = ({ customStyle }) => {
  const items = [
    { label: "Home", icon: Home },
    { label: "Documentation" },
    { label: "Getting Started" }
  ];

  return (
    <nav className="flex items-center gap-2 font-space text-sm" style={customStyle}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <a
            href="#"
            className={`flex items-center gap-2 ${
              index === items.length - 1
                ? 'text-orange-400 font-semibold'
                : 'text-white/60 hover:text-white transition-colors'
            }`}
          >
            {item.icon && <item.icon size={16} />}
            {item.label}
          </a>
          {index < items.length - 1 && (
            <ChevronRight size={14} className="text-white/40" />
          )}
        </div>
      ))}
    </nav>
  );
};

// Card Breadcrumb
export const CardBreadcrumb = ({ customStyle }) => {
  const items = ["Dashboard", "Projects", "Lintelligence", "Components"];

  return (
    <nav className="card-base rounded-xl px-4 py-3 inline-flex items-center gap-2 font-space text-sm" style={customStyle}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <a
            href="#"
            className={`${
              index === items.length - 1
                ? 'text-white font-semibold'
                : 'text-white/60 hover:text-white transition-colors'
            }`}
          >
            {item}
          </a>
          {index < items.length - 1 && (
            <span className="text-white/20">/</span>
          )}
        </div>
      ))}
    </nav>
  );
};

// Styled Breadcrumb
export const StyledBreadcrumb = ({ customStyle }) => {
  const items = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Navigation", href: "/components/navigation" },
    { label: "Breadcrumb" }
  ];

  return (
    <nav className="flex items-center gap-1" style={customStyle}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1">
          <a
            href={item.href || "#"}
            className={`px-3 py-2 rounded-lg font-space text-sm transition-all ${
              index === items.length - 1
                ? 'bg-orange-500/20 text-orange-400 font-semibold border border-orange-500/30'
                : 'text-white/60 hover:bg-white/5 hover:text-white'
            }`}
          >
            {item.label}
          </a>
          {index < items.length - 1 && (
            <ChevronRight size={16} className="text-white/30" />
          )}
        </div>
      ))}
    </nav>
  );
};
