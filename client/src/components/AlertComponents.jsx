import React, { useState } from "react";
import { CircleCheckBig, CircleX, BadgeInfo, Info, X } from "lucide-react";

export const SimpleSuccessAlert = ({ customStyle, title, message, iconColor, titleColor, messageColor }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center gap-3 md:gap-5 w-full max-w-md" style={customStyle}>
      <div 
        className="p-2 rounded-lg bg-green-500/10 border border-green-500/20"
        style={{ 
          borderColor: iconColor ? `${iconColor}40` : undefined, 
          backgroundColor: iconColor ? `${iconColor}20` : undefined 
        }}
      >
        <CircleCheckBig className="text-green-500" size={28} style={{ color: iconColor }} />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-michroma text-lg md:text-xl" style={{ color: titleColor }}>{title || "Success!"}</h4>
        <p className="text-green-400 font-space text-sm md:text-base" style={{ color: messageColor }}>
          {message || "Your action was completed successfully."}
        </p>
      </div>
    </div>
  );
};

export const SimpleErrorAlert = ({ customStyle, title, message, iconColor, titleColor, messageColor }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center gap-3 md:gap-5 w-full max-w-md" style={customStyle}>
      <div 
        className="p-2 rounded-lg bg-red-500/10 border border-red-500/20"
        style={{ 
          borderColor: iconColor ? `${iconColor}40` : undefined, 
          backgroundColor: iconColor ? `${iconColor}20` : undefined 
        }}
      >
        <CircleX className="text-red-500" size={28} style={{ color: iconColor }} />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-michroma text-lg md:text-xl" style={{ color: titleColor }}>{title || "Error!"}</h4>
        <p className="text-red-400 font-space text-sm md:text-base" style={{ color: messageColor }}>
          {message || "Something went wrong. Please try again."}
        </p>
      </div>
    </div>
  );
};

export const SimpleWarningAlert = ({ customStyle, title, message, iconColor, titleColor, messageColor }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center gap-3 md:gap-5 w-full max-w-md" style={customStyle}>
      <div 
        className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20"
        style={{ 
          borderColor: iconColor ? `${iconColor}40` : undefined, 
          backgroundColor: iconColor ? `${iconColor}20` : undefined 
        }}
      >
        <BadgeInfo className="text-yellow-500" size={28} style={{ color: iconColor }} />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-michroma text-lg md:text-xl" style={{ color: titleColor }}>{title || "Warning!"}</h4>
        <p className="text-yellow-400 font-space text-sm md:text-base" style={{ color: messageColor }}>
          {message || "Please review your action before proceeding."}
        </p>
      </div>
    </div>
  );
};

export const SimpleInfoAlert = ({ customStyle, title, message, iconColor, titleColor, messageColor }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center gap-3 md:gap-5 w-full max-w-md" style={customStyle}>
      <div 
        className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20"
        style={{ 
          borderColor: iconColor ? `${iconColor}40` : undefined, 
          backgroundColor: iconColor ? `${iconColor}20` : undefined 
        }}
      >
        <Info className="text-blue-500" size={28} style={{ color: iconColor }} />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-michroma text-lg md:text-xl" style={{ color: titleColor }}>{title || "Info"}</h4>
        <p className="text-blue-400 font-space text-sm md:text-base" style={{ color: messageColor }}>
          {message || "Here's some information you should know."}
        </p>
      </div>
    </div>
  );
};

export const DismissibleSuccessAlert = ({ onClose, customStyle, title, message, iconColor, titleColor, messageColor }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center gap-3 md:gap-5 w-full max-w-md" style={customStyle}>
      <div 
        className="p-2 rounded-lg bg-green-500/10 border border-green-500/20"
        style={{ 
          borderColor: iconColor ? `${iconColor}40` : undefined, 
          backgroundColor: iconColor ? `${iconColor}20` : undefined 
        }}
      >
        <CircleCheckBig className="text-green-500" size={28} style={{ color: iconColor }} />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-michroma text-lg md:text-xl" style={{ color: titleColor }}>{title || "Success!"}</h4>
        <p className="text-green-400 font-space text-sm md:text-base" style={{ color: messageColor }}>
          {message || "Your changes have been saved."}
        </p>
      </div>
      <button
        onClick={onClose}
        className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
      >
        <X size={18} className="text-white/60 hover:text-white" />
      </button>
    </div>
  );
};

export const DismissibleWarningAlert = ({ onClose, customStyle, title, message, iconColor, titleColor, messageColor }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center gap-3 md:gap-5 w-full max-w-md" style={customStyle}>
      <div 
        className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20"
        style={{ 
          borderColor: iconColor ? `${iconColor}40` : undefined, 
          backgroundColor: iconColor ? `${iconColor}20` : undefined 
        }}
      >
        <BadgeInfo className="text-yellow-500" size={28} style={{ color: iconColor }} />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-michroma text-lg md:text-xl" style={{ color: titleColor }}>{title || "Warning!"}</h4>
        <p className="text-yellow-400 font-space text-sm md:text-base" style={{ color: messageColor }}>
          {message || "This action requires your attention."}
        </p>
      </div>
      <button
        onClick={onClose}
        className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
      >
        <X size={18} className="text-white/60 hover:text-white" />
      </button>
    </div>
  );
};
