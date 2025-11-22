# 🎨 Lintelligence - Professional Component Library

## ✨ Recent Updates

### Design System Enhancements
- **Orange Gradient Theme**: Professional orange gradient color scheme throughout
- **Glass Morphism**: Modern glass effect backgrounds with blur
- **Custom Scrollbar**: Styled scrollbar with orange gradient
- **Gradient Utilities**: Reusable CSS classes for consistent styling

### Component Library

#### ✅ Alerts (6 variants)
- Simple Success Alert
- Simple Error Alert  
- Simple Warning Alert (NEW)
- Simple Info Alert (NEW)
- Dismissible Success Alert (NEW)
- Dismissible Warning Alert (NEW)

#### 🔘 Buttons (16 variants)
- Primary Button
- Secondary Button
- Outline Button
- Ghost Button
- Icon Button
- Icon Text Button
- Icon Right Button
- Small Button
- Large Button
- Disabled Button
- Loading Button
- Danger Button
- Success Button
- Rounded Button
- Gradient Border Button
- Heart Button

#### 🎴 Cards (8 variants)
- Basic Card
- Image Card
- Profile Card
- Stats Card
- Pricing Card
- Blog Card
- Feature Card
- Hover Card

#### 📝 Inputs (8 variants)
- Basic Input
- Icon Input
- Email Input
- Password Input (with toggle)
- Floating Label Input
- Text Area
- Select Input
- Gradient Border Input

#### 🏷️ Badges (12 variants)
- Basic Badge
- Orange Badge
- Outline Badge
- Success Badge
- Error Badge
- Warning Badge
- Info Badge
- Dot Badge (with pulse animation)
- Count Badge
- Removable Badge
- Star Badge
- Zap Badge

#### 🪟 Modals (4 variants)
- Basic Modal
- Confirm Modal
- Success Modal
- Info Modal

#### 📑 Tabs (4 variants)
- Basic Tabs
- Pill Tabs
- Icon Tabs
- Vertical Tabs

### Design Features

#### Color Palette
- **Primary Orange**: `#ff6b00` to `#ffa500`
- **Glass Effects**: Transparent backgrounds with backdrop blur
- **Shadows**: Colored shadows matching component themes
- **Gradients**: Smooth multi-color gradients

#### Animations
- Smooth transitions (300ms)
- Hover effects with scale/glow
- Pulse animations for live indicators
- Fade-in/zoom-in for modals

#### Typography
- **Michroma**: Headings and titles
- **Space Grotesk**: Body text and UI elements
- Gradient text effects for emphasis

### Custom CSS Utilities

```css
.gradient-orange          /* Orange gradient background */
.gradient-orange-subtle   /* Subtle orange gradient */
.text-gradient-orange     /* Orange gradient text */
.glow-orange             /* Orange glow shadow */
.glow-orange-hover       /* Orange glow on hover */
.glass-effect            /* Glass morphism effect */
.glass-effect-orange     /* Glass with orange tint */
```

### Navigation Enhancements
- Active state with orange gradient
- Smooth hover transitions
- Glass effect backgrounds
- Icon buttons with gradient hover

### Component Showcase Features
- Preview/Code toggle
- Syntax highlighting
- Copy to clipboard
- Navigation between variants
- Responsive layouts

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📦 Component Usage

### Example: Button
```jsx
<button className="gradient-orange px-6 py-3 rounded-lg font-space font-semibold text-white hover:opacity-90 transition-all duration-300 glow-orange-hover shadow-lg">
  Click Me
</button>
```

### Example: Card
```jsx
<div className="glass-effect border-2 border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300">
  <h3 className="text-2xl font-michroma text-white mb-3">Card Title</h3>
  <p className="text-white/70 font-space">Card content goes here.</p>
</div>
```

### Example: Alert
```jsx
<div className="glass-effect-orange border-2 border-orange-500/50 px-6 py-4 rounded-xl flex items-center gap-5 shadow-lg shadow-orange-500/20">
  <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
    <Icon size={32} className="text-white" />
  </div>
  <div>
    <h4 className="text-white font-michroma text-2xl">Title</h4>
    <p className="text-orange-400 font-space">Message</p>
  </div>
</div>
```

## 🎨 Design Philosophy

1. **Professional Aesthetics**: Premium look with gradients and glass effects
2. **Consistency**: Unified design language across all components
3. **Accessibility**: Proper contrast ratios and focus states
4. **Performance**: Optimized animations and transitions
5. **Flexibility**: Easy to customize and extend

## 🔧 Tech Stack

- **React** - UI library
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library
- **Framer Motion** - Animations
- **React Syntax Highlighter** - Code display
- **Vite** - Build tool

## 📝 License

MIT License - feel free to use in your projects!

---

Built with ❤️ by the Lintelligence team
