import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { value: "100+", label: "Components" },
    { value: "1k+", label: "Developers" },
    { value: "100%", label: "Free & Open Source" },
    { value: "24/7", label: "Community Support" },
  ];

  return (
    <section className="w-full py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-michroma text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-white/50 font-space text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
