import React, { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Copy, Check, RefreshCw, Sparkles } from "lucide-react";

const Themes = () => {
  const [copied, setCopied] = useState(null);
  const [customPalette, setCustomPalette] = useState(null);

  const predefinedThemes = [
    {
      name: "Sunset Glow",
      colors: ["#FF6B6B", "#FF8E53", "#FFA726", "#FFB74D", "#FFCA28"],
      description: "Warm and inviting orange-red gradient",
    },
    {
      name: "Ocean Breeze",
      colors: ["#667EEA", "#764BA2", "#5B86E5", "#36D1DC", "#48C6EF"],
      description: "Cool blue and purple tones",
    },
    {
      name: "Forest Mist",
      colors: ["#11998E", "#38EF7D", "#56AB2F", "#A8E063", "#7FD957"],
      description: "Fresh green nature palette",
    },
    {
      name: "Midnight Dream",
      colors: ["#2C3E50", "#34495E", "#5D6D7E", "#85929E", "#ABB2B9"],
      description: "Dark sophisticated grays",
    },
    {
      name: "Cherry Blossom",
      colors: ["#FF6B9D", "#C06C84", "#F67280", "#F8B195", "#F9D5E5"],
      description: "Soft pink and coral shades",
    },
    {
      name: "Golden Hour",
      colors: ["#F7971E", "#FFD200", "#FFA500", "#FF8C00", "#FF7F00"],
      description: "Vibrant yellow-orange spectrum",
    },
  ];

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  };

  const generateRandomPalette = () => {
    const palette = [];
    for (let i = 0; i < 5; i++) {
      palette.push(generateRandomColor());
    }
    setCustomPalette({
      name: "Custom Palette",
      colors: palette,
      description: "Your randomly generated color scheme",
    });
  };

  const copyColor = (color, index) => {
    navigator.clipboard.writeText(color);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const copyPalette = (colors, themeName) => {
    const paletteText = colors.join(', ');
    navigator.clipboard.writeText(paletteText);
    setCopied(themeName);
    setTimeout(() => setCopied(null), 2000);
  };

  const allThemes = customPalette ? [customPalette, ...predefinedThemes] : predefinedThemes;

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-orange-400 font-space text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-8 h-[1px] bg-orange-400"></span>
            Color Themes
            <span className="w-8 h-[1px] bg-orange-400"></span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-michroma text-white mb-6">
            Beautiful <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Color Palettes</span>
          </h1>
          <p className="text-white/60 font-space text-lg max-w-2xl mx-auto mb-8">
            Curated color schemes and a custom palette generator for your next project
          </p>

          {/* Palette Generator */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateRandomPalette}
            className="btn-primary px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-2"
          >
            <Sparkles size={20} />
            Generate Random Palette
            <RefreshCw size={20} />
          </motion.button>
        </motion.div>

        {/* Theme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allThemes.map((theme, themeIndex) => (
            <motion.div
              key={themeIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: themeIndex * 0.1 }}
              viewport={{ once: true }}
              className={`card-base rounded-2xl p-8 group hover:border-orange-500/50 transition-all ${
                theme.name === "Custom Palette" ? "border-orange-500/50 ring-2 ring-orange-500/20" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Palette size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-michroma text-white flex items-center gap-2">
                      {theme.name}
                      {theme.name === "Custom Palette" && (
                        <Sparkles size={16} className="text-orange-400" />
                      )}
                    </h3>
                    <p className="text-white/50 font-space text-sm">
                      {theme.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => copyPalette(theme.colors, theme.name)}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
                  title="Copy all colors"
                >
                  {copied === theme.name ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} className="text-white/60" />
                  )}
                </button>
              </div>

              {/* Color Swatches */}
              <div className="grid grid-cols-5 gap-3 mb-4">
                {theme.colors.map((color, colorIndex) => (
                  <motion.div
                    key={colorIndex}
                    whileHover={{ scale: 1.1 }}
                    className="relative group/color"
                  >
                    <div
                      className="aspect-square rounded-xl cursor-pointer shadow-lg transition-transform"
                      style={{ backgroundColor: color }}
                      onClick={() => copyColor(color, `${themeIndex}-${colorIndex}`)}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/color:opacity-100 transition-opacity">
                        {copied === `${themeIndex}-${colorIndex}` ? (
                          <Check size={16} className="text-white drop-shadow-lg" />
                        ) : (
                          <Copy size={16} className="text-white drop-shadow-lg" />
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-white/60 font-mono text-center mt-2">
                      {color}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CSS Code */}
              <div className="bg-black/50 border border-white/10 rounded-xl p-4 mt-4">
                <code className="text-xs text-white/70 font-mono">
                  {theme.colors.map((color, i) => (
                    <div key={i}>
                      --color-{i + 1}: {color};
                    </div>
                  ))}
                </code>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Usage Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 card-base rounded-2xl p-8 md:p-10"
        >
          <h2 className="text-2xl md:text-3xl font-michroma text-white mb-6">
            How to Use These Palettes
          </h2>
          <div className="space-y-4 text-white/60 font-space">
            <p>
              <strong className="text-white">1. Click any color</strong> to copy its hex code to your clipboard
            </p>
            <p>
              <strong className="text-white">2. Use the copy button</strong> to copy the entire palette
            </p>
            <p>
              <strong className="text-white">3. Generate random palettes</strong> until you find the perfect combination
            </p>
            <p>
              <strong className="text-white">4. Apply to your CSS</strong> using the provided CSS variables
            </p>
          </div>

          <div className="mt-6 bg-black/50 border border-white/10 rounded-xl p-6">
            <p className="text-sm text-white/50 font-space mb-3">Example Usage:</p>
            <pre className="text-sm text-white/80 font-mono">
{`/* In your CSS */
:root {
  --primary: #FF6B6B;
  --secondary: #FF8E53;
}

/* Use in components */
.button {
  background: var(--primary);
  color: white;
}`}
            </pre>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Themes;
