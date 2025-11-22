import React, { useState } from "react";
import { Search, Filter, X, ChevronDown } from "lucide-react";

export const SimpleSearchBar = ({ customStyle }) => {
  return (
    <div className="relative max-w-md" style={customStyle}>
      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white font-space placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition-colors"
      />
    </div>
  );
};

export const SearchBarWithButton = ({ customStyle }) => {
  return (
    <div className="flex gap-2 max-w-md" style={customStyle}>
      <div className="relative flex-1">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white font-space placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition-colors"
        />
      </div>
      <button className="btn-primary px-6 py-3 rounded-lg font-space font-semibold">
        Search
      </button>
    </div>
  );
};

export const SearchBarWithFilter = ({ customStyle }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="max-w-md" style={customStyle}>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Search with filters..."
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white font-space placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition-colors"
          />
        </div>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="btn-secondary px-4 py-3 rounded-lg flex items-center gap-2"
        >
          <Filter size={18} />
          <span className="font-space text-sm">Filter</span>
        </button>
      </div>
      {showFilter && (
        <div className="mt-2 card-base rounded-lg p-4 space-y-3">
          <div>
            <label className="text-white/70 font-space text-xs mb-2 block">Category</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white font-space text-sm focus:outline-none focus:border-orange-500/50">
              <option>All Categories</option>
              <option>Design</option>
              <option>Development</option>
              <option>Marketing</option>
            </select>
          </div>
          <div>
            <label className="text-white/70 font-space text-xs mb-2 block">Date Range</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white font-space text-sm focus:outline-none focus:border-orange-500/50">
              <option>All Time</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last Year</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export const SearchBarWithTags = ({ customStyle }) => {
  const [tags, setTags] = useState(["React", "JavaScript"]);

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="max-w-md" style={customStyle}>
      <div className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
        <input
          type="text"
          placeholder="Search by tags..."
          className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white font-space placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition-colors"
        />
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-400 font-space text-sm flex items-center gap-2"
            >
              {tag}
              <button onClick={() => removeTag(tag)} className="hover:text-orange-300">
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export const SearchBarWithDropdown = ({ customStyle }) => {
  const [searchType, setSearchType] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative max-w-md" style={customStyle}>
      <div className="flex">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="bg-white/5 border border-white/10 border-r-0 rounded-l-lg px-4 py-3 text-white font-space text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
        >
          {searchType}
          <ChevronDown size={16} />
        </button>
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white/5 border border-white/10 rounded-r-lg pl-12 pr-4 py-3 text-white font-space placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition-colors"
          />
        </div>
      </div>
      {showDropdown && (
        <div className="absolute top-full left-0 mt-2 bg-black border border-white/10 rounded-lg overflow-hidden z-10 shadow-xl">
          {["All", "Posts", "Users", "Pages"].map((type) => (
            <button
              key={type}
              onClick={() => {
                setSearchType(type);
                setShowDropdown(false);
              }}
              className="w-full px-4 py-2 text-left text-white/70 font-space text-sm hover:bg-white/10 hover:text-white transition-colors"
            >
              {type}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const SearchBarWithSuggestions = ({ customStyle }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = ["React Components", "JavaScript Tutorial", "CSS Grid", "TypeScript Guide"];

  return (
    <div className="relative max-w-md" style={customStyle}>
      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 z-10" />
      <input
        type="text"
        placeholder="Search..."
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white font-space placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition-colors"
      />
      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black border border-white/10 rounded-lg overflow-hidden z-10 shadow-xl">
          <div className="px-4 py-2 text-white/40 font-space text-xs border-b border-white/10">
            Popular Searches
          </div>
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="w-full px-4 py-3 text-left text-white/70 font-space text-sm hover:bg-white/10 hover:text-white transition-colors flex items-center gap-3"
            >
              <Search size={14} className="text-white/40" />
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
