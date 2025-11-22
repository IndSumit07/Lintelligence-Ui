import React, { useState, useEffect } from "react";
import { Brain, Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/docs", label: "Docs" },
    { path: "/components", label: "Components" },
    { path: "/features", label: "Features" },
    { path: "/themes", label: "Themes" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "h-[70px] bg-black/80 backdrop-blur-md border-b border-white/10"
            : "h-[80px] bg-transparent border-b border-transparent"
        } flex justify-between items-center px-6 md:px-10 lg:px-16`}
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="flex justify-center items-center gap-3 cursor-pointer group"
        >
          <div className="p-2 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-white/20 transition-all shadow-lg shadow-orange-500/10">
            <Brain size={24} className="text-white" />
          </div>
          <h1 className="text-lg md:text-xl font-michroma text-white tracking-wide">
            Lintelligence <span className="text-orange-400">UI</span>
          </h1>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex justify-center gap-8 items-center rounded-full px-8 py-2 bg-white/5 border border-white/5 backdrop-blur-sm font-space text-sm text-white/60">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-all duration-300 hover:text-white relative ${
                  isActive ? "text-white font-semibold" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex justify-center items-center gap-4">
          <a
            href="https://github.com/IndSumit07/Lintelligence-Ui"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/5 border border-white/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/70 group-hover:text-white transition-colors"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <button className="btn-primary px-5 py-2 rounded-lg text-sm font-semibold hidden lg:block">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 bg-white/5 border border-white/10 flex justify-center items-center rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-300 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-[70px] bg-black/95 backdrop-blur-xl z-40 border-t border-white/10"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8 font-space text-xl p-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `transition-all duration-300 text-2xl ${
                        isActive ? "text-white font-bold" : "text-white/50 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="btn-primary px-8 py-3 rounded-xl text-lg font-semibold mt-4 w-full max-w-xs"
              >
                Get Started
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
