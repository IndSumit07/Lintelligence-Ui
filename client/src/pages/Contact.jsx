import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Github, Twitter, Linkedin, Check } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com", color: "hover:text-white" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com", color: "hover:text-blue-400" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com", color: "hover:text-blue-500" },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@lintelligence.dev",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available 24/7",
      gradient: "from-orange-600 to-red-500",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Report issues or contribute",
      contact: "github.com/lintelligence",
      gradient: "from-orange-400 to-orange-500",
    },
  ];

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
            Get In Touch
            <span className="w-8 h-[1px] bg-orange-400"></span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-michroma text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Connect</span>
          </h1>
          <p className="text-white/60 font-space text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-base rounded-2xl p-6 hover:border-orange-500/50 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} p-[1px] mb-4`}>
                <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                  <method.icon size={24} className="text-orange-400" />
                </div>
              </div>
              <h3 className="text-xl font-michroma text-white mb-2">{method.title}</h3>
              <p className="text-white/50 font-space text-sm mb-2">{method.description}</p>
              <p className="text-orange-400 font-space text-sm font-semibold">{method.contact}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-michroma text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/70 font-space text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-white/70 font-space text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-white/70 font-space text-sm mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-white/70 font-space text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full btn-primary px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 ${
                  submitted ? "bg-green-500 hover:bg-green-500" : ""
                }`}
              >
                {submitted ? (
                  <>
                    <Check size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card-base rounded-2xl p-8">
              <h3 className="text-2xl font-michroma text-white mb-4">Why Choose Lintelligence?</h3>
              <ul className="space-y-4 text-white/60 font-space">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <span>Free and open-source component library</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <span>Regular updates and new components</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <span>Active community support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <span>Comprehensive documentation</span>
                </li>
              </ul>
            </div>

            <div className="card-base rounded-2xl p-8">
              <h3 className="text-2xl font-michroma text-white mb-4">Follow Us</h3>
              <p className="text-white/60 font-space mb-6">
                Stay updated with the latest features and announcements
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/60 ${social.color} transition-all hover:border-white/20`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="card-base rounded-2xl p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-500/20">
              <h3 className="text-xl font-michroma text-white mb-2">Quick Response</h3>
              <p className="text-white/70 font-space text-sm">
                We typically respond within 24 hours during business days
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
