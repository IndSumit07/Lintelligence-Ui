import React from "react";
import { Star, Heart, ThumbsUp, Award, Zap, TrendingUp, Users, Clock } from "lucide-react";

export const SimpleStatCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-6 max-w-xs" style={customStyle}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white/60 font-space text-sm">Total Users</h4>
        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
          <Users size={20} className="text-blue-400" />
        </div>
      </div>
      <p className="text-white font-michroma text-3xl mb-2">12,543</p>
      <div className="flex items-center gap-2">
        <span className="text-green-400 font-space text-xs">+12.5%</span>
        <span className="text-white/40 font-space text-xs">from last month</span>
      </div>
    </div>
  );
};

export const RevenueStatCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-6 max-w-xs" style={customStyle}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white/60 font-space text-sm">Revenue</h4>
        <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
          <TrendingUp size={20} className="text-green-400" />
        </div>
      </div>
      <p className="text-white font-michroma text-3xl mb-2">$45,231</p>
      <div className="flex items-center gap-2">
        <span className="text-green-400 font-space text-xs">+23.1%</span>
        <span className="text-white/40 font-space text-xs">from last month</span>
      </div>
    </div>
  );
};

export const RatingStatCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-6 max-w-xs" style={customStyle}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white/60 font-space text-sm">Average Rating</h4>
        <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
          <Star size={20} className="text-yellow-400" />
        </div>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <p className="text-white font-michroma text-3xl">4.8</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
      <p className="text-white/40 font-space text-xs">Based on 1,234 reviews</p>
    </div>
  );
};

export const EngagementStatCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-6 max-w-xs" style={customStyle}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white/60 font-space text-sm">Engagement</h4>
        <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
          <Heart size={20} className="text-purple-400" />
        </div>
      </div>
      <p className="text-white font-michroma text-3xl mb-2">89.2%</p>
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: "89%" }} />
      </div>
    </div>
  );
};

export const PerformanceStatCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-6 max-w-xs" style={customStyle}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white/60 font-space text-sm">Performance</h4>
        <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
          <Zap size={20} className="text-orange-400" />
        </div>
      </div>
      <p className="text-white font-michroma text-3xl mb-2">95%</p>
      <div className="flex items-center gap-2">
        <span className="text-green-400 font-space text-xs">+5.2%</span>
        <span className="text-white/40 font-space text-xs">improvement</span>
      </div>
    </div>
  );
};

export const TimeStatCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-6 max-w-xs" style={customStyle}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white/60 font-space text-sm">Avg. Session</h4>
        <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
          <Clock size={20} className="text-cyan-400" />
        </div>
      </div>
      <p className="text-white font-michroma text-3xl mb-2">5m 42s</p>
      <div className="flex items-center gap-2">
        <span className="text-red-400 font-space text-xs">-2.3%</span>
        <span className="text-white/40 font-space text-xs">from last week</span>
      </div>
    </div>
  );
};

export const AchievementStatCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-6 max-w-xs" style={customStyle}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white/60 font-space text-sm">Achievements</h4>
        <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
          <Award size={20} className="text-amber-400" />
        </div>
      </div>
      <p className="text-white font-michroma text-3xl mb-2">24/30</p>
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" style={{ width: "80%" }} />
        </div>
        <span className="text-white/60 font-space text-xs">80%</span>
      </div>
    </div>
  );
};

export const LikesStatCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-6 max-w-xs" style={customStyle}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white/60 font-space text-sm">Total Likes</h4>
        <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
          <ThumbsUp size={20} className="text-pink-400" />
        </div>
      </div>
      <p className="text-white font-michroma text-3xl mb-2">8,432</p>
      <div className="flex items-center gap-2">
        <span className="text-green-400 font-space text-xs">+18.7%</span>
        <span className="text-white/40 font-space text-xs">this week</span>
      </div>
    </div>
  );
};
