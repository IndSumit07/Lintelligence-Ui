import React from "react";
import { ArrowRight } from "lucide-react";

const AboutCard = ({ heading, details, icon: Icon }) => {
  return (
    <div className="w-full h-full font-space p-8 card-base rounded-2xl cursor-pointer group relative overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
          {Icon && <Icon size={24} className="text-white/70 group-hover:text-white transition-colors" />}
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-michroma">{heading}</h3>
        
        <ul className="text-white/60 space-y-3 mb-8 flex-grow">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2 text-sm md:text-base leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
              {detail}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-sm font-semibold text-white/40 group-hover:text-white transition-colors mt-auto">
          <span>Learn more</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
