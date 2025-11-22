# Lintelligence UI - Component Styling Standards

## Typography Standards

### Headings
- **H4 (Main Headings)**: `text-lg md:text-xl`
- **H3 (Section Headings)**: `text-xl md:text-2xl`
- **Small Labels**: `text-xs md:text-sm`

### Body Text
- **Primary Text**: `text-sm md:text-base`
- **Secondary Text**: `text-xs md:text-sm`
- **Timestamps/Meta**: `text-xs md:text-sm`

### Font Families
- **Headings**: `font-michroma`
- **Body Text**: `font-space`
- **Code/Mono**: Default monospace

## Layout Standards

### Container Classes
```jsx
className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl"
```

### Width Control
- **Small Components**: `w-full max-w-xs` (320px)
- **Medium Components**: `w-full max-w-md` (448px)
- **Large Components**: `w-full max-w-lg` (512px)
- **Extra Large**: `w-full max-w-xl` (576px)

### Spacing
- **Gap Between Elements**: `gap-3 md:gap-4`
- **Margin Bottom**: `mb-1` for tight spacing, `mb-2` for normal, `mb-4` for sections
- **Padding**: `p-2` for icons, `p-4` for small containers, `p-6` for large containers

## Color Standards

### Background Colors
- **Icon Containers**: `bg-{color}-500/10` with `border border-{color}-500/20`
- **Cards**: `card-base` (defined in CSS)
- **Hover States**: `hover:bg-white/10`

### Text Colors
- **Primary**: `text-white`
- **Secondary**: `text-white/60`
- **Tertiary/Meta**: `text-white/40`
- **Success**: `text-green-400`
- **Error**: `text-red-400`
- **Warning**: `text-yellow-400`
- **Info**: `text-blue-400`
- **Brand**: `text-orange-400`

### Border Colors
- **Default**: `border-white/10`
- **Accent**: `border-{color}-500/20` or `border-{color}-500/30`
- **Hover**: `hover:border-orange-500/50`

## Icon Standards

### Icon Sizes
- **Small**: `size={16}`
- **Medium**: `size={20}`
- **Large**: `size={24}`
- **Extra Large**: `size={28}`

### Icon Containers
```jsx
<div className="p-2 rounded-lg bg-{color}-500/10 border border-{color}-500/20 flex-shrink-0">
  <Icon size={20} className="text-{color}-400" />
</div>
```

### Circular Icon Containers
```jsx
<div className="w-10 h-10 rounded-full bg-{color}-500/20 border border-{color}-500/30 flex items-center justify-center flex-shrink-0">
  <Icon size={20} className="text-{color}-400" />
</div>
```

## Flex Standards

### Preventing Overflow
- **Flex Containers**: Add `min-w-0` to prevent text overflow
- **Icons/Buttons**: Add `flex-shrink-0` to prevent shrinking
- **Text Containers**: Use `flex-1 min-w-0` for proper truncation

### Common Patterns
```jsx
// Horizontal layout with icon
<div className="flex items-start gap-3 md:gap-4">
  <div className="flex-shrink-0">{/* Icon */}</div>
  <div className="flex-1 min-w-0">{/* Content */}</div>
  <button className="flex-shrink-0">{/* Action */}</button>
</div>
```

## Button Standards

### Primary Button
```jsx
className="btn-primary px-4 md:px-6 py-2 md:py-3 rounded-lg font-space font-semibold text-sm md:text-base"
```

### Secondary Button
```jsx
className="btn-secondary px-4 md:px-6 py-2 md:py-3 rounded-lg font-space font-semibold text-sm md:text-base"
```

### Icon Button
```jsx
className="p-1.5 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
```

## Responsive Patterns

### Mobile-First Approach
1. Define mobile styles first
2. Add `md:` prefix for tablet/desktop (768px+)
3. Use `lg:` for large screens (1024px+) when needed

### Common Responsive Classes
- Padding: `px-4 md:px-6 py-3 md:py-4`
- Text: `text-sm md:text-base`
- Gaps: `gap-3 md:gap-4`
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Border Radius Standards

- **Cards/Containers**: `rounded-xl` (12px)
- **Buttons**: `rounded-lg` (8px)
- **Small Elements**: `rounded` (4px)
- **Circular**: `rounded-full`

## Transition Standards

```jsx
className="transition-colors" // For color changes
className="transition-all" // For multiple properties
className="transition-all duration-300" // With custom duration
```

## Example: Complete Component

```jsx
export const ExampleComponent = ({ customStyle }) => {
  return (
    <div className="card-base px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-start gap-3 md:gap-4 w-full max-w-md" style={customStyle}>
      <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 flex-shrink-0">
        <Icon size={20} className="text-blue-400" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-michroma text-lg md:text-xl mb-1">Heading</h4>
        <p className="text-white/60 font-space text-sm md:text-base">Body text goes here.</p>
      </div>
      <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0">
        <X size={16} className="text-white/60" />
      </button>
    </div>
  );
};
```

## Checklist for New Components

- [ ] Uses `card-base` for containers
- [ ] Has responsive padding `px-4 md:px-6 py-3 md:py-4`
- [ ] Uses `rounded-xl` for main containers
- [ ] Headings use `text-lg md:text-xl` with `font-michroma`
- [ ] Body text uses `text-sm md:text-base` with `font-space`
- [ ] Icons have proper containers with borders
- [ ] Flex items have `flex-shrink-0` or `min-w-0` as needed
- [ ] Width controlled with `w-full max-w-{size}`
- [ ] Gaps are responsive `gap-3 md:gap-4`
- [ ] Colors follow the standard palette
- [ ] Transitions are smooth and consistent

---

**Last Updated**: 2025-11-22
**Status**: ✅ Applied to Notifications, needs to be applied to remaining new components
