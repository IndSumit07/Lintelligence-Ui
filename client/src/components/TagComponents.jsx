import React from "react";
import { Tag, X, Plus, Hash, Star, Zap, Flame, Award, TrendingUp, Shield } from "lucide-react";

export const SimpleTag = ({ customStyle }) => {
  return (
    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white font-space text-sm" style={customStyle}>
      React
    </span>
  );
};

export const ColoredTag = ({ customStyle }) => {
  return (
    <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 font-space text-sm" style={customStyle}>
      JavaScript
    </span>
  );
};

export const RemovableTag = ({ customStyle }) => {
  return (
    <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-400 font-space text-sm flex items-center gap-2" style={customStyle}>
      TypeScript
      <button className="hover:text-orange-300 transition-colors">
        <X size={14} />
      </button>
    </span>
  );
};

export const IconTag = ({ customStyle }) => {
  return (
    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 font-space text-sm flex items-center gap-2" style={customStyle}>
      <Tag size={14} />
      Design
    </span>
  );
};

export const PillTag = ({ customStyle }) => {
  return (
    <span className="px-4 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 font-space text-xs font-semibold" style={customStyle}>
      NEW
    </span>
  );
};

export const DotTag = ({ customStyle }) => {
  return (
    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white font-space text-sm flex items-center gap-2" style={customStyle}>
      <div className="w-2 h-2 rounded-full bg-green-400" />
      Active
    </span>
  );
};

export const CountTag = ({ customStyle }) => {
  return (
    <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 font-space text-sm flex items-center gap-2" style={customStyle}>
      Issues
      <span className="px-1.5 py-0.5 bg-red-500 text-white rounded text-xs font-semibold">12</span>
    </span>
  );
};

export const HashTag = ({ customStyle }) => {
  return (
    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 font-space text-sm flex items-center gap-1" style={customStyle}>
      <Hash size={14} />
      trending
    </span>
  );
};

export const StarTag = ({ customStyle }) => {
  return (
    <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-yellow-400 font-space text-sm flex items-center gap-2" style={customStyle}>
      <Star size={14} className="fill-yellow-400" />
      Featured
    </span>
  );
};

export const ZapTag = ({ customStyle }) => {
  return (
    <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 rounded-lg text-orange-400 font-space text-sm flex items-center gap-2" style={customStyle}>
      <Zap size={14} className="fill-orange-400" />
      Pro
    </span>
  );
};

export const FlameTag = ({ customStyle }) => {
  return (
    <span className="px-3 py-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg text-red-400 font-space text-sm flex items-center gap-2" style={customStyle}>
      <Flame size={14} className="fill-red-400" />
      Hot
    </span>
  );
};

export const AwardTag = ({ customStyle }) => {
  return (
    <span className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-lg text-amber-400 font-space text-sm flex items-center gap-2" style={customStyle}>
      <Award size={14} />
      Premium
    </span>
  );
};

export const TrendingTag = ({ customStyle }) => {
  return (
    <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg text-green-400 font-space text-sm flex items-center gap-2" style={customStyle}>
      <TrendingUp size={14} />
      Trending
    </span>
  );
};

export const VerifiedTag = ({ customStyle }) => {
  return (
    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg text-blue-400 font-space text-sm flex items-center gap-2" style={customStyle}>
      <Shield size={14} />
      Verified
    </span>
  );
};

export const TagGroup = ({ customStyle }) => {
  const tags = ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"];

  return (
    <div className="flex flex-wrap gap-2" style={customStyle}>
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white/70 font-space text-sm hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export const InteractiveTagGroup = ({ customStyle }) => {
  const tags = [
    { label: "Design", color: "purple" },
    { label: "Development", color: "blue" },
    { label: "Marketing", color: "green" },
    { label: "Sales", color: "orange" }
  ];

  return (
    <div className="flex flex-wrap gap-2" style={customStyle}>
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`px-3 py-1 bg-${tag.color}-500/20 border border-${tag.color}-500/30 rounded-lg text-${tag.color}-400 font-space text-sm flex items-center gap-2 hover:bg-${tag.color}-500/30 transition-colors cursor-pointer`}
        >
          {tag.label}
          <button className="hover:opacity-70 transition-opacity">
            <X size={14} />
          </button>
        </span>
      ))}
      <button className="px-3 py-1 bg-white/5 border border-white/10 border-dashed rounded-lg text-white/60 font-space text-sm flex items-center gap-1 hover:bg-white/10 hover:text-white transition-colors">
        <Plus size={14} />
        Add Tag
      </button>
    </div>
  );
};

export const SizeVariantTags = ({ customStyle }) => {
  return (
    <div className="flex flex-wrap items-center gap-3" style={customStyle}>
      <span className="px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded text-blue-400 font-space text-xs">
        Small
      </span>
      <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 font-space text-sm">
        Medium
      </span>
      <span className="px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 font-space text-base">
        Large
      </span>
    </div>
  );
};

export const OutlineTag = ({ customStyle }) => {
  return (
    <span className="px-3 py-1 border-2 border-orange-500 rounded-lg text-orange-400 font-space text-sm font-semibold" style={customStyle}>
      Important
    </span>
  );
};

export const SolidTag = ({ customStyle }) => {
  return (
    <span className="px-3 py-1 bg-orange-500 rounded-lg text-white font-space text-sm font-semibold" style={customStyle}>
      Primary
    </span>
  );
};

export const GradientTag = ({ customStyle }) => {
  return (
    <span className="px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-space text-sm font-semibold" style={customStyle}>
      Premium
    </span>
  );
};
