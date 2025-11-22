import React from "react";
import { motion } from "framer-motion";
import AboutCard from "../cards/AboutCard";
import { Layers, Palette, Smartphone, Zap, Box, Layout, Users } from "lucide-react";

const About = () => {
  const content = [
    {
      icon: Layers,
      heading: "Modern Components",
      details: [
        "Designed with latest UI/UX trends.",
        "Works out-of-the-box.",
        "Speed without sacrificing quality.",
      ],
    },
    {
      icon: Palette,
      heading: "Tailwind & CSS",
      details: [
        "Tailwind styling by default.",
        "Traditional CSS support.",
        "Clean and well-commented code.",
      ],
    },
    {
      icon: Smartphone,
      heading: "Fully Responsive",
      details: [
        "Perfect on all screen sizes.",
        "Mobile-first approach.",
        "Optimized for performance.",
      ],
    },
    {
      icon: Zap,
      heading: "Simple Integration",
      details: [
        "Copy and paste in seconds.",
        "Works with React, Next.js, Vue.",
        "Lightweight and modular.",
      ],
    },
    {
      icon: Box,
      heading: "Versatile Use Cases",
      details: [
        "Buttons, modals, forms, and more.",
        "Ideal for startups and MVPs.",
        "Production-ready code.",
      ],
    },
    {
      icon: Layout,
      heading: "Design System",
      details: [
        "Uniform spacing and typography.",
        "Professional, cohesive look.",
        "Customizable themes.",
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-10 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-orange-400 font-space text-sm font-semibold uppercase tracking-wider mb-4"
          >
            <span className="w-8 h-[1px] bg-orange-400"></span>
            Why Choose Us
            <span className="w-8 h-[1px] bg-orange-400"></span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-michroma text-white mb-6"
          >
            Built for Modern Development
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 font-space max-w-2xl text-base md:text-lg"
          >
            Everything you need to build world-class applications. 
            Thoughtfully designed, rigorously tested, and easy to customize.
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AboutCard
                icon={item.icon}
                heading={item.heading}
                details={item.details}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
