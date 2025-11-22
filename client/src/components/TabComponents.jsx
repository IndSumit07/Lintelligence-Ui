import React, { useState } from "react";
import { Home, User, Settings, Bell } from "lucide-react";

export const BasicTabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="w-full max-w-2xl">
      <div className="flex gap-2 border-b-2 border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-space font-semibold transition-all duration-300 relative ${
              activeTab === tab.id
                ? "text-white"
                : "text-white/50 hover:text-orange-400"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 gradient-orange"></div>
            )}
          </button>
        ))}
      </div>
      <div className="p-6 glass-effect rounded-b-xl">
        <p className="text-white/70 font-space">
          Content for {tabs.find((t) => t.id === activeTab)?.label} tab
        </p>
      </div>
    </div>
  );
};

export const PillTabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "analytics", label: "Analytics" },
    { id: "reports", label: "Reports" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <div className="w-full max-w-2xl">
      <div className="flex gap-2 p-2 glass-effect rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-lg font-space font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "gradient-orange text-white glow-orange"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4 p-6 glass-effect rounded-xl">
        <p className="text-white/70 font-space">
          {tabs.find((t) => t.id === activeTab)?.label} content goes here
        </p>
      </div>
    </div>
  );
};

export const IconTabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="w-full max-w-2xl">
      <div className="flex gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-space font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "gradient-orange text-white glow-orange"
                  : "glass-effect text-white/60 hover:text-white hover:glass-effect-orange"
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4 p-6 glass-effect-orange border-2 border-orange-500/20 rounded-xl">
        <p className="text-white/70 font-space">
          {tabs.find((t) => t.id === activeTab)?.label} section
        </p>
      </div>
    </div>
  );
};

export const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "account", label: "Account", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="flex gap-4 w-full max-w-2xl">
      <div className="flex flex-col gap-2 w-48">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-space font-semibold transition-all duration-300 text-left ${
                activeTab === tab.id
                  ? "gradient-orange text-white glow-orange"
                  : "glass-effect text-white/60 hover:text-white hover:glass-effect-orange"
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="flex-1 p-6 glass-effect rounded-xl">
        <h3 className="text-xl font-michroma text-white mb-3">
          {tabs.find((t) => t.id === activeTab)?.label}
        </h3>
        <p className="text-white/70 font-space">
          Configure your {tabs.find((t) => t.id === activeTab)?.label.toLowerCase()} settings here.
        </p>
      </div>
    </div>
  );
};
