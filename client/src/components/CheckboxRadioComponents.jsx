import React, { useState } from "react";
import { Check, X, Circle, Square, Minus } from "lucide-react";

export const SimpleCheckbox = ({ customStyle }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center gap-3 cursor-pointer group" style={customStyle}>
      <div
        onClick={() => setChecked(!checked)}
        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
          checked
            ? "bg-orange-500 border-orange-500"
            : "border-white/20 group-hover:border-white/40"
        }`}
      >
        {checked && <Check size={14} className="text-black" />}
      </div>
      <span className="text-white font-space text-sm">Accept terms and conditions</span>
    </label>
  );
};

export const RoundedCheckbox = ({ customStyle }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center gap-3 cursor-pointer group" style={customStyle}>
      <div
        onClick={() => setChecked(!checked)}
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
          checked
            ? "bg-green-500 border-green-500"
            : "border-white/20 group-hover:border-white/40"
        }`}
      >
        {checked && <Check size={14} className="text-white" />}
      </div>
      <span className="text-white font-space text-sm">Subscribe to newsletter</span>
    </label>
  );
};

export const CheckboxGroup = ({ customStyle }) => {
  const [selected, setSelected] = useState(["option1"]);

  const toggleOption = (option) => {
    setSelected(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const options = [
    { id: "option1", label: "React" },
    { id: "option2", label: "Vue" },
    { id: "option3", label: "Angular" },
    { id: "option4", label: "Svelte" }
  ];

  return (
    <div className="space-y-3" style={customStyle}>
      <p className="text-white font-space text-sm mb-3">Select frameworks:</p>
      {options.map((option) => (
        <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
          <div
            onClick={() => toggleOption(option.id)}
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
              selected.includes(option.id)
                ? "bg-orange-500 border-orange-500"
                : "border-white/20 group-hover:border-white/40"
            }`}
          >
            {selected.includes(option.id) && <Check size={14} className="text-black" />}
          </div>
          <span className="text-white/70 font-space text-sm">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export const IndeterminateCheckbox = ({ customStyle }) => {
  const [parentChecked, setParentChecked] = useState(false);
  const [childrenChecked, setChildrenChecked] = useState([false, false, false]);

  const allChecked = childrenChecked.every(Boolean);
  const someChecked = childrenChecked.some(Boolean) && !allChecked;

  const toggleParent = () => {
    const newState = !allChecked;
    setParentChecked(newState);
    setChildrenChecked([newState, newState, newState]);
  };

  const toggleChild = (index) => {
    const newChildren = [...childrenChecked];
    newChildren[index] = !newChildren[index];
    setChildrenChecked(newChildren);
  };

  return (
    <div className="space-y-3" style={customStyle}>
      <label className="flex items-center gap-3 cursor-pointer group">
        <div
          onClick={toggleParent}
          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
            allChecked || someChecked
              ? "bg-orange-500 border-orange-500"
              : "border-white/20 group-hover:border-white/40"
          }`}
        >
          {allChecked && <Check size={14} className="text-black" />}
          {someChecked && <Minus size={14} className="text-black" />}
        </div>
        <span className="text-white font-space text-sm font-semibold">Select All</span>
      </label>
      <div className="ml-8 space-y-2">
        {["Option 1", "Option 2", "Option 3"].map((label, index) => (
          <label key={index} className="flex items-center gap-3 cursor-pointer group">
            <div
              onClick={() => toggleChild(index)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                childrenChecked[index]
                  ? "bg-orange-500 border-orange-500"
                  : "border-white/20 group-hover:border-white/40"
              }`}
            >
              {childrenChecked[index] && <Check size={14} className="text-black" />}
            </div>
            <span className="text-white/70 font-space text-sm">{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export const SimpleRadio = ({ customStyle }) => {
  const [selected, setSelected] = useState("option1");

  const options = [
    { id: "option1", label: "Daily" },
    { id: "option2", label: "Weekly" },
    { id: "option3", label: "Monthly" }
  ];

  return (
    <div className="space-y-3" style={customStyle}>
      <p className="text-white font-space text-sm mb-3">Notification frequency:</p>
      {options.map((option) => (
        <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
          <div
            onClick={() => setSelected(option.id)}
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
              selected === option.id
                ? "border-orange-500"
                : "border-white/20 group-hover:border-white/40"
            }`}
          >
            {selected === option.id && (
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            )}
          </div>
          <span className="text-white/70 font-space text-sm">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export const CardRadio = ({ customStyle }) => {
  const [selected, setSelected] = useState("basic");

  const plans = [
    { id: "basic", name: "Basic", price: "$9/mo", features: "Essential features" },
    { id: "pro", name: "Pro", price: "$29/mo", features: "Advanced features" },
    { id: "enterprise", name: "Enterprise", price: "$99/mo", features: "All features" }
  ];

  return (
    <div className="space-y-3 max-w-sm" style={customStyle}>
      {plans.map((plan) => (
        <label
          key={plan.id}
          className={`card-base rounded-xl p-4 cursor-pointer transition-all ${
            selected === plan.id ? "border-orange-500" : "hover:border-white/20"
          }`}
          onClick={() => setSelected(plan.id)}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                selected === plan.id
                  ? "border-orange-500"
                  : "border-white/20"
              }`}
            >
              {selected === plan.id && (
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-white font-michroma text-sm">{plan.name}</h4>
                <span className="text-orange-400 font-space text-sm font-semibold">{plan.price}</span>
              </div>
              <p className="text-white/60 font-space text-xs">{plan.features}</p>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
};

export const ToggleSwitch = ({ customStyle }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <label className="flex items-center gap-3 cursor-pointer" style={customStyle}>
      <div
        onClick={() => setEnabled(!enabled)}
        className={`w-11 h-6 rounded-full transition-all relative ${
          enabled ? "bg-orange-500" : "bg-white/20"
        }`}
      >
        <div
          className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </div>
      <span className="text-white font-space text-sm">Enable notifications</span>
    </label>
  );
};

export const ToggleSwitchWithLabels = ({ customStyle }) => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex items-center gap-3" style={customStyle}>
      <span className={`font-space text-sm ${enabled ? "text-white/40" : "text-white"}`}>
        Off
      </span>
      <div
        onClick={() => setEnabled(!enabled)}
        className={`w-14 h-7 rounded-full transition-all relative cursor-pointer ${
          enabled ? "bg-green-500" : "bg-white/20"
        }`}
      >
        <div
          className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${
            enabled ? "left-8" : "left-1"
          }`}
        />
      </div>
      <span className={`font-space text-sm ${enabled ? "text-white" : "text-white/40"}`}>
        On
      </span>
    </div>
  );
};
