import React from "react";
import { Search, Mail, Lock, Eye, EyeOff, User } from "lucide-react";

export const BasicInput = ({ customStyle, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder || "Enter text..."}
      className="w-80 px-4 py-3 rounded-lg glass-effect border-2 border-white/10 text-white font-space placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-all duration-300"
      style={customStyle}
    />
  );
};

export const IconInput = ({ customStyle, placeholder }) => {
  return (
    <div className="relative w-80" style={{ width: customStyle?.width }}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        className="w-full pl-12 pr-4 py-3 rounded-lg glass-effect border-2 border-white/10 text-white font-space placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-all duration-300"
        style={customStyle}
      />
    </div>
  );
};

export const EmailInput = ({ customStyle, placeholder }) => {
  return (
    <div className="relative w-80" style={{ width: customStyle?.width }}>
      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
      <input
        type="email"
        placeholder={placeholder || "Email address"}
        className="w-full pl-12 pr-4 py-3 rounded-lg glass-effect border-2 border-white/10 text-white font-space placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-all duration-300"
        style={customStyle}
      />
    </div>
  );
};

export const PasswordInput = ({ customStyle, placeholder }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  
  return (
    <div className="relative w-80" style={{ width: customStyle?.width }}>
      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full pl-12 pr-12 py-3 rounded-lg glass-effect border-2 border-white/10 text-white font-space placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-all duration-300"
        style={customStyle}
      />
      <button
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-orange-400 transition-all"
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
};

export const FloatingLabelInput = ({ customStyle, placeholder }) => {
  const [focused, setFocused] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="relative w-80" style={{ width: customStyle?.width }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 pt-6 pb-2 rounded-lg glass-effect border-2 border-white/10 text-white font-space focus:border-orange-500/50 focus:outline-none transition-all duration-300"
        style={customStyle}
      />
      <label
        className={`absolute left-4 font-space transition-all duration-300 pointer-events-none ${
          focused || value
            ? "top-2 text-xs text-orange-400"
            : "top-1/2 -translate-y-1/2 text-white/40"
        }`}
      >
        {placeholder || "Username"}
      </label>
    </div>
  );
};

export const TextArea = ({ customStyle, placeholder }) => {
  return (
    <textarea
      placeholder={placeholder || "Enter your message..."}
      rows={4}
      className="w-80 px-4 py-3 rounded-lg glass-effect border-2 border-white/10 text-white font-space placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-all duration-300 resize-none"
      style={customStyle}
    />
  );
};

export const SelectInput = ({ customStyle }) => {
  return (
    <select 
      className="w-80 px-4 py-3 rounded-lg glass-effect border-2 border-white/10 text-white font-space focus:border-orange-500/50 focus:outline-none transition-all duration-300 bg-transparent"
      style={customStyle}
    >
      <option value="" className="bg-black">Select an option</option>
      <option value="1" className="bg-black">Option 1</option>
      <option value="2" className="bg-black">Option 2</option>
      <option value="3" className="bg-black">Option 3</option>
    </select>
  );
};

export const GradientInput = ({ customStyle, placeholder }) => {
  return (
    <div className="relative w-80 group" style={{ width: customStyle?.width }}>
      <div className="absolute -inset-0.5 gradient-orange rounded-lg blur opacity-30 group-focus-within:opacity-75 transition duration-300"></div>
      <input
        type="text"
        placeholder={placeholder || "Gradient border input..."}
        className="relative w-full px-4 py-3 rounded-lg bg-black border-2 border-transparent text-white font-space placeholder:text-white/40 focus:outline-none"
        style={customStyle}
      />
    </div>
  );
};
