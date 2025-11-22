import React, { useState } from "react";
import { Bell, Mail, MessageSquare, AlertCircle, CheckCircle, Info, X } from "lucide-react";

export const SimpleNotification = ({ customStyle }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-start gap-3 md:gap-4 w-full max-w-md animate-fade-in" style={customStyle}>
      <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 flex-shrink-0">
        <Bell size={20} className="text-blue-400" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-michroma text-lg md:text-xl mb-1">New Notification</h4>
        <p className="text-white/60 font-space text-sm md:text-base">You have a new message waiting for you.</p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="p-1.5 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
      >
        <X size={16} className="text-white/60" />
      </button>
    </div>
  );
};

export const SuccessNotification = ({ customStyle }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-start gap-3 md:gap-4 w-full max-w-md border-l-4 border-green-500 animate-fade-in" style={customStyle}>
      <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20 flex-shrink-0">
        <CheckCircle size={20} className="text-green-400" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-michroma text-lg md:text-xl mb-1">Success!</h4>
        <p className="text-white/60 font-space text-sm md:text-base">Your changes have been saved successfully.</p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="p-1.5 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
      >
        <X size={16} className="text-white/60" />
      </button>
    </div>
  );
};

export const ErrorNotification = ({ customStyle }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-start gap-3 md:gap-4 w-full max-w-md border-l-4 border-red-500 animate-fade-in" style={customStyle}>
      <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 flex-shrink-0">
        <AlertCircle size={20} className="text-red-400" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-michroma text-lg md:text-xl mb-1">Error</h4>
        <p className="text-white/60 font-space text-sm md:text-base">Something went wrong. Please try again.</p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="p-1.5 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
      >
        <X size={16} className="text-white/60" />
      </button>
    </div>
  );
};

export const InfoNotification = ({ customStyle }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-start gap-3 md:gap-4 w-full max-w-md" style={customStyle}>
      <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 flex-shrink-0">
        <Info size={20} className="text-blue-400" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-michroma text-lg md:text-xl mb-1">Information</h4>
        <p className="text-white/60 font-space text-sm md:text-base">Here's some important information for you.</p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="p-1.5 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
      >
        <X size={16} className="text-white/60" />
      </button>
    </div>
  );
};

export const MessageNotification = ({ customStyle }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-start gap-3 md:gap-4 w-full max-w-md" style={customStyle}>
      <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
        <MessageSquare size={20} className="text-orange-400" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="text-white font-michroma text-lg md:text-xl">John Doe</h4>
          <span className="text-white/40 font-space text-xs md:text-sm flex-shrink-0">2m ago</span>
        </div>
        <p className="text-white/60 font-space text-sm md:text-base">Hey! How are you doing today?</p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="p-1.5 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
      >
        <X size={16} className="text-white/60" />
      </button>
    </div>
  );
};

export const EmailNotification = ({ customStyle }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-start gap-3 md:gap-4 w-full max-w-md" style={customStyle}>
      <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 flex-shrink-0">
        <Mail size={20} className="text-purple-400" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-michroma text-lg md:text-xl mb-1">New Email</h4>
        <p className="text-white/60 font-space text-sm md:text-base mb-2">You have 3 unread messages in your inbox.</p>
        <button className="text-orange-400 font-space text-sm md:text-base hover:text-orange-300 transition-colors">
          View Inbox →
        </button>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="p-1.5 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
      >
        <X size={16} className="text-white/60" />
      </button>
    </div>
  );
};
