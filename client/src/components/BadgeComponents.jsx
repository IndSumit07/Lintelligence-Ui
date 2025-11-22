import React from "react";
import { X, Check, AlertCircle, Info, Star, Zap } from "lucide-react";

export const BasicBadge = () => {
  return (
    <span className="px-3 py-1 rounded-full glass-effect border border-white/20 text-white font-space text-sm font-semibold">
      Badge
    </span>
  );
};

export const OrangeBadge = () => {
  return (
    <span className="px-3 py-1 rounded-full gradient-orange text-white font-space text-sm font-semibold shadow-lg shadow-orange-500/20">
      Orange
    </span>
  );
};

export const OutlineBadge = () => {
  return (
    <span className="px-3 py-1 rounded-full border-2 border-orange-500/50 text-orange-400 font-space text-sm font-semibold">
      Outline
    </span>
  );
};

export const SuccessBadge = () => {
  return (
    <span className="px-3 py-1.5 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white font-space text-sm font-semibold flex items-center gap-1.5 w-fit shadow-lg shadow-green-500/20">
      <Check size={14} />
      Success
    </span>
  );
};

export const ErrorBadge = () => {
  return (
    <span className="px-3 py-1.5 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white font-space text-sm font-semibold flex items-center gap-1.5 w-fit shadow-lg shadow-red-500/20">
      <X size={14} />
      Error
    </span>
  );
};

export const WarningBadge = () => {
  return (
    <span className="px-3 py-1.5 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-space text-sm font-semibold flex items-center gap-1.5 w-fit shadow-lg shadow-orange-500/20">
      <AlertCircle size={14} />
      Warning
    </span>
  );
};

export const InfoBadge = () => {
  return (
    <span className="px-3 py-1.5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-space text-sm font-semibold flex items-center gap-1.5 w-fit shadow-lg shadow-blue-500/20">
      <Info size={14} />
      Info
    </span>
  );
};

export const DotBadge = () => {
  return (
    <span className="px-3 py-1.5 rounded-full glass-effect border border-orange-500/30 text-white font-space text-sm font-semibold flex items-center gap-2 w-fit">
      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
      Live
    </span>
  );
};

export const CountBadge = () => {
  return (
    <span className="px-2.5 py-1 rounded-full gradient-orange text-white font-space text-xs font-bold min-w-[24px] text-center shadow-lg shadow-orange-500/30">
      99+
    </span>
  );
};

export const RemovableBadge = () => {
  const [visible, setVisible] = React.useState(true);
  
  if (!visible) return null;
  
  return (
    <span className="px-3 py-1.5 rounded-full glass-effect-orange border border-orange-500/30 text-white font-space text-sm font-semibold flex items-center gap-2 w-fit">
      Tag
      <button
        onClick={() => setVisible(false)}
        className="hover:text-orange-400 transition-all"
      >
        <X size={14} />
      </button>
    </span>
  );
};

export const StarBadge = () => {
  return (
    <span className="px-3 py-1.5 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 text-white font-space text-sm font-semibold flex items-center gap-1.5 w-fit shadow-lg shadow-yellow-500/20">
      <Star size={14} className="fill-white" />
      Premium
    </span>
  );
};

export const ZapBadge = () => {
  return (
    <span className="px-3 py-1.5 rounded-full gradient-orange text-white font-space text-sm font-semibold flex items-center gap-1.5 w-fit shadow-lg shadow-orange-500/30 glow-orange">
      <Zap size={14} className="fill-white" />
      New
    </span>
  );
};
