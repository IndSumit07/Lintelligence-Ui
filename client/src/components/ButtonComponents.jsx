import React, { useState } from "react";
import { ArrowRight, Download, Heart, Loader2 } from "lucide-react";

export const PrimaryButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-primary px-6 py-3 rounded-lg font-space font-semibold"
      style={customStyle}
    >
      {text || "Primary Button"}
    </button>
  );
};

export const SecondaryButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-secondary px-6 py-3 rounded-lg font-space font-semibold"
      style={customStyle}
    >
      {text || "Secondary Button"}
    </button>
  );
};

export const OutlineButton = ({ customStyle, text }) => {
  return (
    <button 
      className="bg-transparent border-2 border-white/20 text-white px-6 py-3 rounded-lg font-space font-semibold hover:border-white/40 hover:bg-white/5 transition-all"
      style={customStyle}
    >
      {text || "Outline Button"}
    </button>
  );
};

export const GhostButton = ({ customStyle, text }) => {
  return (
    <button 
      className="bg-transparent text-white/70 px-6 py-3 rounded-lg font-space font-semibold hover:bg-white/5 hover:text-white transition-all"
      style={customStyle}
    >
      {text || "Ghost Button"}
    </button>
  );
};

export const IconButton = ({ customStyle }) => {
  return (
    <button 
      className="btn-primary p-3 rounded-lg"
      style={customStyle}
    >
      <Download size={20} />
    </button>
  );
};

export const IconTextButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-primary px-6 py-3 rounded-lg font-space font-semibold flex items-center gap-2"
      style={customStyle}
    >
      <Download size={18} />
      {text || "Download"}
    </button>
  );
};

export const IconRightButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-primary px-6 py-3 rounded-lg font-space font-semibold flex items-center gap-2"
      style={customStyle}
    >
      {text || "Continue"}
      <ArrowRight size={18} />
    </button>
  );
};

export const SmallButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-primary px-4 py-2 rounded-lg font-space font-semibold text-sm"
      style={customStyle}
    >
      {text || "Small"}
    </button>
  );
};

export const LargeButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-primary px-8 py-4 rounded-lg font-space font-semibold text-lg"
      style={customStyle}
    >
      {text || "Large Button"}
    </button>
  );
};

export const DisabledButton = ({ customStyle, text }) => {
  return (
    <button
      disabled
      className="bg-white/10 text-white/30 px-6 py-3 rounded-lg font-space font-semibold cursor-not-allowed"
      style={customStyle}
    >
      {text || "Disabled"}
    </button>
  );
};

export const LoadingButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-primary px-6 py-3 rounded-lg font-space font-semibold flex items-center gap-2"
      style={customStyle}
    >
      <Loader2 size={18} className="animate-spin" />
      {text || "Loading..."}
    </button>
  );
};

export const DangerButton = ({ customStyle, text }) => {
  return (
    <button 
      className="bg-red-500 text-white px-6 py-3 rounded-lg font-space font-semibold hover:bg-red-600 transition-all"
      style={customStyle}
    >
      {text || "Delete"}
    </button>
  );
};

export const SuccessButton = ({ customStyle, text }) => {
  return (
    <button 
      className="bg-green-500 text-white px-6 py-3 rounded-lg font-space font-semibold hover:bg-green-600 transition-all"
      style={customStyle}
    >
      {text || "Confirm"}
    </button>
  );
};

export const RoundedButton = ({ customStyle, text }) => {
  return (
    <button 
      className="btn-primary px-6 py-3 rounded-full font-space font-semibold"
      style={customStyle}
    >
      {text || "Rounded"}
    </button>
  );
};

export const GradientBorderButton = ({ customStyle, text }) => {
  return (
    <button 
      className="relative bg-black text-white px-6 py-3 rounded-lg font-space font-semibold overflow-hidden group"
      style={customStyle}
    >
      <span className="relative z-10">{text || "Hover Me"}</span>
      <div className="absolute inset-0 border-2 border-white/20 rounded-lg group-hover:border-white/40 transition-all"></div>
    </button>
  );
};

export const HeartButton = ({ customStyle }) => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`p-3 rounded-lg transition-all ${
        liked
          ? "bg-red-500/20 border-2 border-red-500/50"
          : "bg-white/5 border-2 border-white/10 hover:border-white/20"
      }`}
      style={customStyle}
    >
      <Heart
        size={20}
        className={`transition-all ${
          liked ? "text-red-500 fill-red-500" : "text-white/60"
        }`}
      />
    </button>
  );
};

export const LinkButton = ({ customStyle, text }) => {
  return (
    <button 
      className="text-white/70 font-space font-semibold hover:text-white underline underline-offset-4 transition-all"
      style={customStyle}
    >
      {text || "Link Button"}
    </button>
  );
};

export const GroupButton = ({ customStyle, labels }) => {
  const buttonLabels = labels || ["Left", "Middle", "Right"];
  return (
    <div 
      className="flex rounded-lg overflow-hidden border border-white/10"
      style={customStyle}
    >
      <button className="btn-primary rounded-none px-6 py-3 font-space font-semibold border-r border-black">
        {buttonLabels[0]}
      </button>
      <button className="bg-white/5 text-white px-6 py-3 font-space font-semibold hover:bg-white/10 transition-all border-r border-white/10">
        {buttonLabels[1]}
      </button>
      <button className="bg-white/5 text-white px-6 py-3 font-space font-semibold hover:bg-white/10 transition-all rounded-none">
        {buttonLabels[2]}
      </button>
    </div>
  );
};
