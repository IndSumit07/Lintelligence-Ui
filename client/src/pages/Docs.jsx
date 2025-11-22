import React, { useState } from "react";
import { motion } from "framer-motion";
import { Book, Zap, Search, ChevronDown, ChevronUp, HelpCircle, Rocket, Palette, Code } from "lucide-react";

const Docs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const guides = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Rocket,
      sections: [
        {
          title: "Installation",
          content: "Lintelligence is a copy-paste component library. Simply browse the components section, find what you need, and copy the code directly into your project. No npm installation required!"
        },
        {
          title: "Prerequisites",
          content: "You'll need a React project with Tailwind CSS configured. Our components are built with React and styled using Tailwind utility classes for maximum flexibility."
        },
        {
          title: "First Component",
          content: "Navigate to the Components page, select a component you like, click the 'Code' tab, and copy the JSX code. Paste it into your React component and you're done!"
        }
      ]
    },
    {
      id: "using-components",
      title: "Using Components",
      icon: Code,
      sections: [
        {
          title: "Component Structure",
          content: "Each component is self-contained and follows React best practices. They accept props for customization and use Tailwind classes for styling."
        },
        {
          title: "Customization",
          content: "Use the 'Customize' tab on any component to adjust colors, sizes, and content in real-time. The code updates automatically to reflect your changes."
        },
        {
          title: "Responsive Design",
          content: "All components are mobile-first and fully responsive. They use Tailwind's responsive prefixes (sm:, md:, lg:) to adapt to different screen sizes."
        }
      ]
    },
    {
      id: "styling",
      title: "Styling & Theming",
      icon: Palette,
      sections: [
        {
          title: "Color System",
          content: "Our components use a minimalist black and white color scheme with orange accents. You can easily customize colors by modifying the Tailwind classes or using our Themes page to generate color palettes."
        },
        {
          title: "Glassmorphism",
          content: "Many components use glassmorphism effects (glass-effect class) for a modern look. This includes backdrop blur and semi-transparent backgrounds."
        },
        {
          title: "Typography",
          content: "We use Michroma for headings and Space Grotesk for body text. These fonts are loaded via Google Fonts and defined in the Tailwind config."
        }
      ]
    },
    {
      id: "best-practices",
      title: "Best Practices",
      icon: Zap,
      sections: [
        {
          title: "Component Organization",
          content: "Keep components in a dedicated folder (e.g., /components). Import only what you need to keep your bundle size small."
        },
        {
          title: "Accessibility",
          content: "Our components include basic accessibility features. Always add proper ARIA labels and ensure keyboard navigation works for interactive elements."
        },
        {
          title: "Performance",
          content: "Components are lightweight and optimized. Use React.memo() for frequently re-rendering components and lazy load components when possible."
        }
      ]
    }
  ];

  const faqs = [
    {
      question: "Is Lintelligence free to use?",
      answer: "Yes! Lintelligence is completely free and open-source. You can use it in personal and commercial projects without any restrictions."
    },
    {
      question: "Do I need to install anything?",
      answer: "No installation required! Simply copy the component code from our website and paste it into your React project. Just make sure you have Tailwind CSS configured."
    },
    {
      question: "Can I customize the components?",
      answer: "Absolutely! Use the 'Customize' tab on any component to adjust styles in real-time, or modify the Tailwind classes directly in the code to match your design."
    },
    {
      question: "Are the components responsive?",
      answer: "Yes, all components are built with a mobile-first approach and are fully responsive across all device sizes."
    },
    {
      question: "What frameworks are supported?",
      answer: "Our components are built with React and Tailwind CSS. They work great with Next.js, Vite, Create React App, and any React-based framework."
    },
    {
      question: "How do I report bugs or request features?",
      answer: "Visit our Contact page to get in touch, or open an issue on our GitHub repository. We welcome all feedback and contributions!"
    },
    {
      question: "Can I use these components without Tailwind?",
      answer: "While our components are designed for Tailwind CSS, you can convert the utility classes to regular CSS if needed. However, we recommend using Tailwind for the best experience."
    },
    {
      question: "Are there any dependencies?",
      answer: "Most components only require React and Tailwind CSS. Some components use Framer Motion for animations and Lucide React for icons, which you'll need to install separately."
    },
    {
      question: "How often are new components added?",
      answer: "We regularly add new components and update existing ones. Follow us on social media or star our GitHub repo to stay updated!"
    },
    {
      question: "Can I contribute to Lintelligence?",
      answer: "Yes! We welcome contributions. Check out our GitHub repository for contribution guidelines and open issues that need help."
    }
  ];

  const filteredGuides = guides.filter(guide =>
    guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.sections.some(section => 
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Documentation
            <span className="w-8 h-[1px] bg-orange-400"></span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-michroma text-white mb-6">
            Everything You Need to Know
          </h1>
          <p className="text-white/60 font-space text-lg max-w-2xl mx-auto">
            Learn how to use Lintelligence components in your projects
          </p>

          {/* Search */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition-colors"
            />
          </div>
        </motion.div>

        {/* Guides */}
        <div className="mb-20">
          <h2 className="text-3xl font-michroma text-white mb-8 flex items-center gap-3">
            <Book className="text-orange-400" size={32} />
            Usage Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredGuides.map((guide, guideIndex) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: guideIndex * 0.1 }}
                viewport={{ once: true }}
                className="card-base rounded-2xl p-8 hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <guide.icon size={24} className="text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-michroma text-white">
                    {guide.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {guide.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h4 className="text-lg font-michroma text-white mb-2">
                        {section.title}
                      </h4>
                      <p className="text-white/60 font-space leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-3xl font-michroma text-white mb-8 flex items-center gap-3">
            <HelpCircle className="text-orange-400" size={32} />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card-base rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-michroma text-white pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="text-orange-400 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-white/40 flex-shrink-0" size={24} />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-white/60 font-space leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: "Components", desc: "Browse all components", link: "/components" },
            { title: "Themes", desc: "Explore color palettes", link: "/themes" },
            { title: "Contact", desc: "Get in touch", link: "/contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="card-base rounded-xl p-6 hover:border-orange-500/50 transition-all group"
            >
              <h3 className="text-lg font-michroma text-white mb-2 group-hover:text-orange-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/60 font-space text-sm">{item.desc}</p>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Docs;
