import React from "react";
import { User, Mail, Phone, MapPin, Calendar, Briefcase, Globe, Github, Linkedin, Twitter } from "lucide-react";

export const SimpleProfileCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-6 max-w-sm" style={customStyle}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
          <User size={32} className="text-white" />
        </div>
        <div>
          <h3 className="text-white font-michroma text-lg">John Doe</h3>
          <p className="text-white/60 font-space text-sm">Software Engineer</p>
        </div>
      </div>
      <p className="text-white/70 font-space text-sm mb-4">
        Passionate developer building amazing web experiences.
      </p>
      <button className="btn-primary w-full py-2 rounded-lg font-space font-semibold text-sm">
        View Profile
      </button>
    </div>
  );
};

export const DetailedProfileCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-6 max-w-sm" style={customStyle}>
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-3">
          <User size={48} className="text-white" />
        </div>
        <h3 className="text-white font-michroma text-xl mb-1">Sarah Johnson</h3>
        <p className="text-white/60 font-space text-sm mb-3">Product Designer</p>
        <div className="flex gap-2">
          <button className="btn-primary px-4 py-2 rounded-lg font-space text-sm">Follow</button>
          <button className="btn-secondary px-4 py-2 rounded-lg font-space text-sm">Message</button>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-white/70 font-space text-sm">
          <Mail size={16} className="text-white/40" />
          <span>sarah.j@example.com</span>
        </div>
        <div className="flex items-center gap-3 text-white/70 font-space text-sm">
          <MapPin size={16} className="text-white/40" />
          <span>San Francisco, CA</span>
        </div>
        <div className="flex items-center gap-3 text-white/70 font-space text-sm">
          <Briefcase size={16} className="text-white/40" />
          <span>5 years experience</span>
        </div>
      </div>
    </div>
  );
};

export const CompactProfileCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-4 max-w-xs flex items-center gap-3" style={customStyle}>
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
        <User size={24} className="text-white" />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-michroma text-sm mb-1">Alex Chen</h4>
        <p className="text-white/60 font-space text-xs">UX Designer</p>
      </div>
      <button className="btn-primary px-3 py-1.5 rounded-lg font-space text-xs">
        Follow
      </button>
    </div>
  );
};

export const SocialProfileCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-6 max-w-sm" style={customStyle}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <User size={32} className="text-white" />
        </div>
        <div>
          <h3 className="text-white font-michroma text-lg">Emma Wilson</h3>
          <p className="text-white/60 font-space text-sm">@emmawilson</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y border-white/10">
        <div className="text-center">
          <p className="text-white font-michroma text-xl">1.2K</p>
          <p className="text-white/60 font-space text-xs">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-white font-michroma text-xl">543</p>
          <p className="text-white/60 font-space text-xs">Following</p>
        </div>
        <div className="text-center">
          <p className="text-white font-michroma text-xl">89</p>
          <p className="text-white/60 font-space text-xs">Posts</p>
        </div>
      </div>

      <div className="flex gap-2 justify-center">
        <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
          <Twitter size={18} className="text-white/70" />
        </button>
        <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
          <Github size={18} className="text-white/70" />
        </button>
        <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
          <Linkedin size={18} className="text-white/70" />
        </button>
        <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
          <Globe size={18} className="text-white/70" />
        </button>
      </div>
    </div>
  );
};

export const TeamMemberCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-6 max-w-xs text-center" style={customStyle}>
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
        <User size={40} className="text-white" />
      </div>
      <h3 className="text-white font-michroma text-lg mb-1">Michael Brown</h3>
      <p className="text-white/60 font-space text-sm mb-3">Lead Developer</p>
      <p className="text-white/70 font-space text-xs mb-4">
        Full-stack developer with 8+ years of experience in building scalable applications.
      </p>
      <div className="flex gap-2 justify-center">
        <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
          <Mail size={16} className="text-white/70" />
        </button>
        <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
          <Phone size={16} className="text-white/70" />
        </button>
        <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
          <Linkedin size={16} className="text-white/70" />
        </button>
      </div>
    </div>
  );
};

export const ContactProfileCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-6 max-w-sm" style={customStyle}>
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
          <User size={28} className="text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-michroma text-base mb-1">Lisa Anderson</h3>
          <p className="text-white/60 font-space text-sm mb-3">Marketing Manager</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white/70 font-space text-xs">
              <Mail size={14} className="text-white/40" />
              <span>lisa.a@company.com</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 font-space text-xs">
              <Phone size={14} className="text-white/40" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 font-space text-xs">
              <Calendar size={14} className="text-white/40" />
              <span>Available Mon-Fri</span>
            </div>
          </div>
        </div>
      </div>
      <button className="btn-primary w-full py-2 rounded-lg font-space font-semibold text-sm">
        Schedule Meeting
      </button>
    </div>
  );
};
