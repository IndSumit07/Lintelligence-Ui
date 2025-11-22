import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Palette, Code, Smartphone, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized components that load instantly and perform flawlessly across all devices.",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Production Ready",
      description: "Battle-tested components used by thousands of developers in real-world applications.",
      gradient: "from-orange-600 to-red-500",
    },
    {
      icon: Palette,
      title: "Fully Customizable",
      description: "Every component is designed to be easily customized to match your brand identity.",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Well-documented, semantic code that's easy to understand and maintain.",
      gradient: "from-orange-400 to-orange-500",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Responsive by default. Looks perfect on phones, tablets, and desktops.",
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Framework Agnostic",
      description: "Works seamlessly with React, Next.js, Vue, and vanilla JavaScript.",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const stats = [
    { value: "100+", label: "Components", color: "text-orange-400" },
    { value: "50k+", label: "Downloads", color: "text-orange-500" },
    { value: "1k+", label: "GitHub Stars", color: "text-orange-600" },
    { value: "99%", label: "Satisfaction", color: "text-orange-400" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 text-orange-400 font-space text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-8 h-[1px] bg-orange-400"></span>
            Features
            <span className="w-8 h-[1px] bg-orange-400"></span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-michroma text-white mb-6">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Excellence</span>
          </h1>
          <p className="text-white/60 font-space text-lg max-w-2xl mx-auto">
            Everything you need to build modern, professional web applications
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-base rounded-2xl p-6 text-center hover:border-orange-500/50 transition-all"
            >
              <h3 className={`text-3xl md:text-4xl font-michroma ${stat.color} mb-2`}>
                {stat.value}
              </h3>
              <p className="text-white/50 font-space text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-base rounded-2xl p-8 group hover:border-orange-500/50 transition-all hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-6`}>
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <feature.icon size={28} className="text-orange-400" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-michroma text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/60 font-space leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 card-base rounded-2xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-michroma text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 font-space text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of developers building amazing applications with Lintelligence UI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/components">
                <button className="btn-primary px-8 py-4 rounded-xl font-semibold text-lg">
                  Browse Components
                </button>
              </a>
              <a href="/docs">
                <button className="btn-secondary px-8 py-4 rounded-xl font-semibold text-lg">
                  Read Documentation
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
