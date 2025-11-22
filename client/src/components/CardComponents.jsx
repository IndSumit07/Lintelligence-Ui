import React from "react";
import { Zap, Users, TrendingUp, Award, Star, Heart, MessageCircle, Share2 } from "lucide-react";

export const BasicCard = ({ customStyle, title, content }) => {
  return (
    <div className="card-base rounded-xl p-6 w-full max-w-sm" style={customStyle}>
      <h3 className="text-xl md:text-2xl font-michroma text-white mb-3">{title || "Basic Card"}</h3>
      <p className="text-white/70 font-space text-sm md:text-base">
        {content || "This is a simple card component with clean styling and hover effects."}
      </p>
    </div>
  );
};

export const ImageCard = ({ customStyle, title, content }) => {
  return (
    <div className="card-base rounded-xl overflow-hidden w-full max-w-sm group" style={customStyle}>
      <div className="h-48 bg-white/5 flex items-center justify-center border-b border-white/10">
        <Zap size={64} className="text-white/20" />
      </div>
      <div className="p-6">
        <h3 className="text-lg md:text-xl font-michroma text-white mb-2">{title || "Image Card"}</h3>
        <p className="text-white/70 font-space text-sm">
          {content || "Card with image header and content section."}
        </p>
      </div>
    </div>
  );
};

export const ProfileCard = ({ customStyle, title, content }) => {
  return (
    <div className="card-base rounded-xl p-6 w-full max-w-sm" style={customStyle}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
          <Users size={32} className="text-white/60" />
        </div>
        <div>
          <h3 className="text-lg font-michroma text-white">{title || "John Doe"}</h3>
          <p className="text-white/60 font-space text-sm">@johndoe</p>
        </div>
      </div>
      <p className="text-white/70 font-space text-sm mb-4">
        {content || "Full-stack developer passionate about creating beautiful user experiences."}
      </p>
      <div className="flex gap-2">
        <button className="btn-primary px-4 py-2 rounded-lg font-space text-sm font-semibold flex-1">
          Follow
        </button>
        <button className="btn-secondary px-4 py-2 rounded-lg font-space text-sm font-semibold flex-1">
          Message
        </button>
      </div>
    </div>
  );
};

export const StatsCard = ({ customStyle, title, content }) => {
  return (
    <div className="card-base rounded-xl p-6 w-full max-w-sm group" style={customStyle}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-white/60 font-space text-sm">{title || "Total Users"}</p>
          <h3 className="text-3xl md:text-4xl font-michroma text-white">{content || "24.5K"}</h3>
        </div>
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <Users size={24} className="text-white/60" />
        </div>
      </div>
      <div className="flex items-center gap-2 text-green-400 font-space text-sm">
        <TrendingUp size={16} />
        <span>+12.5% from last month</span>
      </div>
    </div>
  );
};

export const PricingCard = ({ customStyle, title, content }) => {
  return (
    <div className="card-base rounded-xl p-6 md:p-8 w-full max-w-sm border-2 border-white/20" style={customStyle}>
      <div className="text-center mb-6">
        <div className="inline-block p-3 rounded-lg bg-white/5 border border-white/10 mb-4">
          <Award size={32} className="text-white/60" />
        </div>
        <h3 className="text-2xl font-michroma text-white mb-2">{title || "Pro Plan"}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-michroma text-white">{content || "$29"}</span>
          <span className="text-white/60 font-space">/month</span>
        </div>
      </div>
      <ul className="space-y-3 mb-6 font-space text-white/70 text-sm md:text-base">
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
          Unlimited Projects
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
          Priority Support
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
          Advanced Analytics
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
          Custom Integrations
        </li>
      </ul>
      <button className="w-full btn-primary px-6 py-3 rounded-lg font-space font-semibold">
        Get Started
      </button>
    </div>
  );
};

export const BlogCard = ({ customStyle, title, content }) => {
  return (
    <div className="card-base rounded-xl overflow-hidden w-full max-w-sm group" style={customStyle}>
      <div className="h-40 bg-white/5 flex items-center justify-center border-b border-white/10">
        <Star size={48} className="text-white/20" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 font-space text-xs font-semibold">
            Tutorial
          </span>
          <span className="text-white/50 font-space text-xs">5 min read</span>
        </div>
        <h3 className="text-lg md:text-xl font-michroma text-white mb-2 group-hover:text-white/80 transition-all">
          {title || "Getting Started with Components"}
        </h3>
        <p className="text-white/70 font-space text-sm mb-4">
          {content || "Learn how to integrate beautiful components into your project quickly."}
        </p>
        <div className="flex items-center gap-4 text-white/50">
          <button className="flex items-center gap-1 hover:text-white transition-all">
            <Heart size={16} />
            <span className="text-sm">24</span>
          </button>
          <button className="flex items-center gap-1 hover:text-white transition-all">
            <MessageCircle size={16} />
            <span className="text-sm">12</span>
          </button>
          <button className="flex items-center gap-1 hover:text-white transition-all">
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const FeatureCard = () => {
  return (
    <div className="card-base rounded-xl p-6 w-full max-w-sm group">
      <div className="p-3 rounded-lg bg-white/5 border border-white/10 w-fit mb-4">
        <Zap size={28} className="text-white/60" />
      </div>
      <h3 className="text-lg md:text-xl font-michroma text-white mb-3 group-hover:text-white/80 transition-all">
        Lightning Fast
      </h3>
      <p className="text-white/70 font-space text-sm">
        Optimized for performance with minimal bundle size and maximum efficiency.
      </p>
    </div>
  );
};

export const HoverCard = () => {
  return (
    <div className="relative w-full max-w-sm h-64 rounded-xl overflow-hidden group cursor-pointer card-base">
      <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-300"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="p-4 rounded-full bg-white/10 border border-white/20 mb-4 group-hover:scale-110 transition-transform duration-300">
          <Award size={40} className="text-white/60" />
        </div>
        <h3 className="text-xl md:text-2xl font-michroma text-white mb-2">Hover Me</h3>
        <p className="text-white/70 font-space text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          This card reveals content on hover with smooth animations.
        </p>
      </div>
    </div>
  );
};
