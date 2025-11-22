import React from "react";
import { Brain, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 md:px-10 lg:px-16 pt-24 lg:pt-0 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 h-full flex justify-center lg:justify-start items-start flex-col gap-6 md:gap-8 z-10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass-effect border border-white/10 px-4 py-2 rounded-full text-white/80 font-space flex items-center gap-2 text-sm hover:bg-white/5 transition-colors cursor-default"
        >
          <Sparkles size={14} className="text-orange-400" />
          <span>Lintelligence UI 1.0 is now live</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-michroma tracking-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Ultimate</span> <br />
          UI Library
        </h1>

        <p className="text-white/60 font-space text-base md:text-lg max-w-xl leading-relaxed">
          Build stunning, modern web applications with our professionally designed component library. 
          Copy, paste, and customize in seconds.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
          <NavLink to="/components" className="w-full sm:w-auto">
            <button className="btn-primary px-8 py-4 rounded-xl font-semibold w-full sm:w-auto flex items-center justify-center gap-2 group text-lg">
              Explore Components
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </NavLink>
          <NavLink to="/docs" className="w-full sm:w-auto">
            <button className="btn-secondary px-8 py-4 rounded-xl font-semibold w-full sm:w-auto text-lg">
              Read Documentation
            </button>
          </NavLink>
        </div>

        <div className="flex items-center gap-4 mt-4 text-white/40 font-space text-sm">
          <div className="flex -space-x-3">
            {[
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/women/44.jpg",
              "https://randomuser.me/api/portraits/men/86.jpg",
              "https://randomuser.me/api/portraits/women/65.jpg"
            ].map((avatar, i) => (
              <img 
                key={i} 
                src={avatar} 
                alt={`Developer ${i + 1}`}
                className="w-10 h-10 rounded-full border-2 border-black object-cover"
              />
            ))}
          </div>
          <p>Trusted by 1000+ developers</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-1/2 h-full flex justify-center items-center mt-12 lg:mt-0 relative"
      >
        <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
           {/* Abstract background shapes */}
           <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-orange-600/20 rounded-full blur-3xl animate-pulse-slow" />
           
           <img 
            src="/Frameworks.svg" 
            alt="Frameworks" 
            className="w-full h-full object-contain relative z-10 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" 
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
