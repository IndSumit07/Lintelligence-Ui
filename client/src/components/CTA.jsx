import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { NavLink } from "react-router-dom";

const CTA = () => {
  return (
    <section className="w-full py-24 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-michroma text-white mb-6 leading-tight"
        >
          Ready to Build Something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Extraordinary?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white/60 font-space text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Join hundreds of developers using Lintelligence to create stunning web applications faster than ever before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <NavLink to="/components" className="w-full sm:w-auto">
            <button className="btn-primary px-8 py-4 rounded-xl font-semibold text-lg w-full sm:w-auto flex items-center justify-center gap-2 group">
              Start Building
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </NavLink>
          
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="btn-secondary px-8 py-4 rounded-xl font-semibold text-lg w-full sm:w-auto flex items-center justify-center gap-2">
              <Github size={20} />
              Star on GitHub
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
