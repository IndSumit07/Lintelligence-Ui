import React from "react";

// Simple Progress Bar
export const SimpleProgress = ({ customStyle, progress = 60 }) => {
  return (
    <div className="w-full max-w-md" style={customStyle}>
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-orange-500 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

// Progress with Label
export const LabeledProgress = ({ customStyle, progress = 75 }) => {
  return (
    <div className="w-full max-w-md" style={customStyle}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-space text-sm">Loading...</span>
        <span className="text-orange-400 font-michroma text-sm">{progress}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

// Striped Progress
export const StripedProgress = ({ customStyle, progress = 45 }) => {
  return (
    <div className="w-full max-w-md" style={customStyle}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-white font-michroma text-sm">Upload Progress</span>
        <span className="text-white/60 font-space text-sm">{progress}% Complete</span>
      </div>
      <div className="w-full bg-white/10 rounded-lg h-4 overflow-hidden border border-white/10">
        <div 
          className="h-full bg-orange-500 rounded-lg transition-all duration-500 relative overflow-hidden"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

// Multi-Step Progress
export const MultiStepProgress = ({ customStyle, currentStep = 2 }) => {
  const steps = ["Account", "Profile", "Settings", "Complete"];
  
  return (
    <div className="w-full max-w-2xl" style={customStyle}>
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-michroma text-sm transition-all ${
                index < currentStep 
                  ? 'bg-orange-500 text-black' 
                  : index === currentStep 
                  ? 'bg-orange-500/20 border-2 border-orange-500 text-orange-400' 
                  : 'bg-white/5 border border-white/10 text-white/40'
              }`}>
                {index + 1}
              </div>
              <span className={`mt-2 text-xs font-space ${
                index <= currentStep ? 'text-white' : 'text-white/40'
              }`}>
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`h-0.5 flex-1 mx-2 ${
                index < currentStep ? 'bg-orange-500' : 'bg-white/10'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Circular Progress
export const CircularProgress = ({ customStyle, progress = 70 }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={customStyle}>
      <svg className="w-32 h-32 transform -rotate-90">
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke="#f97316"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-michroma text-white">{progress}%</span>
      </div>
    </div>
  );
};
