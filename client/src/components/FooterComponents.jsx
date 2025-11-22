import React from "react";
import { Brain, Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

// Simple Footer
export const SimpleFooter = ({ customStyle }) => {
  return (
    <footer className="w-full border-t border-white/10 py-8 px-6" style={customStyle}>
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white/60 font-space text-sm">
          © 2024 Lintelligence. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Footer with Links
export const FooterWithLinks = ({ customStyle }) => {
  return (
    <footer className="w-full border-t border-white/10 py-12 px-6" style={customStyle}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Brain size={24} className="text-white" />
            <h3 className="text-xl font-michroma text-white">Lintelligence</h3>
          </div>
          <p className="text-white/60 font-space text-sm">
            Beautiful UI components for modern web applications.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-michroma text-sm mb-4">Product</h4>
          <ul className="space-y-2 text-white/60 font-space text-sm">
            <li><a href="/components" className="hover:text-white transition-colors">Components</a></li>
            <li><a href="/themes" className="hover:text-white transition-colors">Themes</a></li>
            <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-michroma text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-white/60 font-space text-sm">
            <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-michroma text-sm mb-4">Connect</h4>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 text-center">
        <p className="text-white/60 font-space text-sm flex items-center justify-center gap-1">
          Made with <Heart size={14} className="text-red-500" /> by Lintelligence Team
        </p>
      </div>
    </footer>
  );
};

// Footer with Newsletter
export const FooterWithNewsletter = ({ customStyle }) => {
  return (
    <footer className="w-full border-t border-white/10 py-12 px-6" style={customStyle}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain size={28} className="text-white" />
              <h3 className="text-2xl font-michroma text-white">Lintelligence</h3>
            </div>
            <p className="text-white/60 font-space mb-6">
              Subscribe to our newsletter for updates and new components.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition-colors"
              />
              <button className="btn-primary px-6 py-3 rounded-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-michroma text-sm mb-4">Resources</h4>
              <ul className="space-y-2 text-white/60 font-space text-sm">
                <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="/components" className="hover:text-white transition-colors">Components</a></li>
                <li><a href="/themes" className="hover:text-white transition-colors">Themes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-michroma text-sm mb-4">Legal</h4>
              <ul className="space-y-2 text-white/60 font-space text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">License</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 font-space text-sm">
            © 2024 Lintelligence. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
