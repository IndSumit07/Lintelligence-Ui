import React from "react";
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Eye, Download, Heart } from "lucide-react";

export const SimpleMetricCard = ({ customStyle }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl w-full max-w-xs animate-fade-in" style={customStyle}>
      <div className="flex items-center justify-between gap-3 mb-3 md:mb-4">
        <h4 className="text-white/60 font-space text-sm md:text-base">Page Views</h4>
        <Eye size={20} className="text-white/40 flex-shrink-0" />
      </div>
      <p className="text-white font-michroma text-3xl md:text-4xl mb-2">24.5K</p>
      <div className="flex items-center gap-2">
        <TrendingUp size={16} className="text-green-400 flex-shrink-0" />
        <span className="text-green-400 font-space text-sm md:text-base">+12.5%</span>
      </div>
    </div>
  );
};

export const CompactMetricCard = ({ customStyle }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center gap-3 md:gap-4 w-full max-w-md animate-fade-in" style={customStyle}>
      <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
        <Users size={24} className="text-blue-400" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white/60 font-space text-xs md:text-sm mb-1">Active Users</p>
        <p className="text-white font-michroma text-xl md:text-2xl">1,234</p>
      </div>
      <div className="flex items-center gap-1 flex-shrink-0">
        <TrendingUp size={14} className="text-green-400" />
        <span className="text-green-400 font-space text-xs md:text-sm">8%</span>
      </div>
    </div>
  );
};

export const DetailedMetricCard = ({ customStyle }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl w-full max-w-sm animate-fade-in" style={customStyle}>
      <div className="flex items-start justify-between gap-4 mb-4 md:mb-6">
        <div className="flex-1 min-w-0">
          <h4 className="text-white/60 font-space text-sm md:text-base mb-1">Total Revenue</h4>
          <p className="text-white font-michroma text-2xl md:text-3xl">$45,231</p>
        </div>
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
          <DollarSign size={28} className="text-green-400" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 pt-3 md:pt-4 border-t border-white/10">
        <div className="flex-1 min-w-0">
          <p className="text-white/40 font-space text-xs md:text-sm mb-1">vs last month</p>
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-green-400 flex-shrink-0" />
            <span className="text-green-400 font-space text-sm md:text-base font-semibold">+23.1%</span>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-white/40 font-space text-xs md:text-sm mb-1">Target</p>
          <p className="text-white font-space text-sm md:text-base">$50,000</p>
        </div>
      </div>
    </div>
  );
};

export const MetricCardWithChart = ({ customStyle }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl w-full max-w-sm animate-fade-in" style={customStyle}>
      <div className="flex items-start justify-between gap-4 mb-3 md:mb-4">
        <div className="flex-1 min-w-0">
          <h4 className="text-white/60 font-space text-sm md:text-base mb-1">Sales</h4>
          <p className="text-white font-michroma text-2xl md:text-3xl">$12,426</p>
        </div>
        <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
          <ShoppingCart size={24} className="text-purple-400" />
        </div>
      </div>
      <div className="flex items-center gap-2 mb-3 md:mb-4 flex-wrap">
        <TrendingUp size={16} className="text-green-400 flex-shrink-0" />
        <span className="text-green-400 font-space text-sm md:text-base">+18.2%</span>
        <span className="text-white/40 font-space text-sm md:text-base">from last week</span>
      </div>
      <div className="flex items-end gap-1 h-16 md:h-20">
        {[40, 60, 45, 70, 55, 80, 65].map((height, index) => (
          <div
            key={index}
            className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t min-w-0 animate-scale-up"
            style={{ height: `${height}%`, animationDelay: `${index * 100}ms` }}
          />
        ))}
      </div>
    </div>
  );
};

export const ComparisonMetricCard = ({ customStyle }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl w-full max-w-sm animate-fade-in" style={customStyle}>
      <h4 className="text-white font-michroma text-base md:text-lg mb-4 md:mb-6">Performance Comparison</h4>
      <div className="space-y-4">
        <div className="animate-slide-in" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-white/70 font-space text-sm md:text-base flex-shrink-0">This Month</span>
            <span className="text-white font-michroma text-base md:text-lg">$24,500</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-progress" style={{ width: "85%" }} />
          </div>
        </div>
        <div className="animate-slide-in" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-white/70 font-space text-sm md:text-base flex-shrink-0">Last Month</span>
            <span className="text-white/60 font-michroma text-base md:text-lg">$18,200</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-progress" style={{ width: "63%" }} />
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-white/10 flex items-center justify-between gap-4 animate-slide-in" style={{ animationDelay: '300ms' }}>
        <span className="text-white/60 font-space text-sm md:text-base flex-shrink-0">Growth</span>
        <div className="flex items-center gap-2">
          <TrendingUp size={18} className="text-green-400 flex-shrink-0" />
          <span className="text-green-400 font-space text-base md:text-lg font-semibold">+34.6%</span>
        </div>
      </div>
    </div>
  );
};

export const GoalMetricCard = ({ customStyle }) => {
  const progress = 72;

  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl w-full max-w-xs animate-fade-in" style={customStyle}>
      <div className="flex items-center justify-between gap-4 mb-3 md:mb-4">
        <h4 className="text-white font-michroma text-base md:text-lg flex-1 min-w-0">Monthly Goal</h4>
        <Download size={20} className="text-orange-400 flex-shrink-0" />
      </div>
      <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-3 md:mb-4 animate-scale-up">
        <svg className="transform -rotate-90 w-28 h-28 md:w-32 md:h-32">
          <circle
            cx="56"
            cy="56"
            r="48"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
            fill="none"
            className="md:hidden"
          />
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
            fill="none"
            className="hidden md:block"
          />
          <circle
            cx="56"
            cy="56"
            r="48"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 48}`}
            strokeDashoffset={`${2 * Math.PI * 48 * (1 - progress / 100)}`}
            strokeLinecap="round"
            className="md:hidden animate-draw-circle"
          />
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 56}`}
            strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`}
            strokeLinecap="round"
            className="hidden md:block animate-draw-circle"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#f7931e" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <p className="text-white font-michroma text-2xl md:text-3xl">{progress}%</p>
          <p className="text-white/60 font-space text-xs md:text-sm">Complete</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 text-xs md:text-sm">
        <span className="text-white/60 font-space">Current: 720</span>
        <span className="text-white font-space">Goal: 1000</span>
      </div>
    </div>
  );
};

export const TrendMetricCard = ({ customStyle }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl w-full max-w-sm animate-fade-in" style={customStyle}>
      <div className="flex items-start justify-between gap-4 mb-4 md:mb-6">
        <div className="flex-1 min-w-0">
          <h4 className="text-white/60 font-space text-sm md:text-base mb-1">Engagement Rate</h4>
          <p className="text-white font-michroma text-2xl md:text-3xl">68.4%</p>
        </div>
        <div className="w-12 h-12 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0">
          <Heart size={24} className="text-pink-400" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        <div className="text-center min-w-0 animate-slide-in" style={{ animationDelay: '100ms' }}>
          <p className="text-white/40 font-space text-xs md:text-sm mb-1">Today</p>
          <div className="flex items-center justify-center gap-1">
            <TrendingUp size={14} className="text-green-400 flex-shrink-0" />
            <span className="text-white font-space text-sm md:text-base">72%</span>
          </div>
        </div>
        <div className="text-center min-w-0 animate-slide-in" style={{ animationDelay: '200ms' }}>
          <p className="text-white/40 font-space text-xs md:text-sm mb-1">Week</p>
          <div className="flex items-center justify-center gap-1">
            <TrendingUp size={14} className="text-green-400 flex-shrink-0" />
            <span className="text-white font-space text-sm md:text-base">68%</span>
          </div>
        </div>
        <div className="text-center min-w-0 animate-slide-in" style={{ animationDelay: '300ms' }}>
          <p className="text-white/40 font-space text-xs md:text-sm mb-1">Month</p>
          <div className="flex items-center justify-center gap-1">
            <TrendingDown size={14} className="text-red-400 flex-shrink-0" />
            <span className="text-white font-space text-sm md:text-base">65%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
