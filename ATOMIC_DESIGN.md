# Atomic Design Structure Guide

This document outlines the atomic design structure used across both **Admin** and **App** projects.

## 📐 Structure Overview

```
components/
├── atoms/          # Basic building blocks
│   ├── Button      # Reusable button with variants
│   ├── Badge      # Notification badge or label
│   └── Card       # Container component
│
├── molecules/      # Simple component combinations
│   ├── InputGroup # Form input with label/validation
│   ├── NavItem    # Navigation item with icon
│   ├── StatCard   # Statistics display card
│   └── TopBarProfile # User profile component
│
├── organisms/      # Complex UI components
│   ├── Sidebar    # Main navigation sidebar
│   ├── TopBar     # Top navigation bar
│   ├── StatsGrid  # Grid of statistics cards
│   └── [Feature Components] # Domain-specific components
│
└── templates/      # Page-level layouts
    ├── DashboardLayout # Main dashboard layout
    └── AuthLayout      # Authentication layout
```

## 🎯 Design Principles

### 1. **Single Responsibility**
Each component has one clear purpose and responsibility.

### 2. **Composition Over Configuration**
Build complex components by composing simpler ones.

### 3. **Reusability**
Components are designed to be reused across different contexts.

### 4. **Consistency**
Similar components follow the same patterns and API.

### 5. **Accessibility**
All components include proper ARIA labels and keyboard support.

## 🔧 Component Patterns

### Atoms

**Button**
- Variants: `primary`, `secondary`, `outline`, `ghost`, `danger`
- Sizes: `sm`, `md`, `lg`
- Props: `fullWidth`, `isLoading`, `disabled`

**Badge**
- Can render as notification badge (with count) or label (with children)
- Variants: `default`, `success`, `warning`, `danger`, `info`
- Sizes: `sm`, `md`, `lg`

**Card**
- Variants: `default`, `outlined`, `elevated`
- Padding: `none`, `sm`, `md`, `lg`

### Molecules

**InputGroup**
- Includes label, error, helper text
- Icon support
- Size variants
- Full accessibility support

**NavItem**
- Icon + label
- Active state
- Badge support
- Click handlers

**StatCard**
- Title, value, subtext
- Icon with customizable colors
- Trend indicators
- Optional action button

### Organisms

**Sidebar**
- Configurable navigation items
- Customizable logo
- Footer and bottom sections
- Mobile responsive

**TopBar**
- Contract plan name
- Customizable title
- Profile component integration
- Menu toggle for mobile

**StatsGrid**
- Configurable stats array
- Responsive columns (1-4)
- Reuses StatCard molecule

## 📝 Best Practices

### 1. **Use Variants, Not Custom Classes**
```tsx
// ✅ Good
<Button variant="primary" size="md" />

// ❌ Bad
<Button className="bg-blue-600 px-4 py-2" />
```

### 2. **Compose, Don't Duplicate**
```tsx
// ✅ Good - Reuse existing components
<Card>
  <StatCard title="Users" value="1000" />
</Card>

// ❌ Bad - Duplicate functionality
<div className="custom-stat-card">...</div>
```

### 3. **Type Safety (App/TypeScript)**
```tsx
// ✅ Good - Typed props
interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
}

// ❌ Bad - Any types
const Button = (props: any) => ...
```

### 4. **Accessibility First**
```tsx
// ✅ Good
<button aria-label="Close menu" onClick={onClose}>
  <X />
</button>

// ❌ Bad
<div onClick={onClose}>
  <X />
</div>
```

### 5. **Default Props for Flexibility**
```tsx
// ✅ Good - Defaults with override capability
const Component = ({ 
  title = 'Default Title',
  items = [],
  ...props 
}) => ...

// ❌ Bad - Hardcoded values
const Component = () => {
  const title = 'Default Title' // Can't be overridden
  ...
}
```

## 🔄 Migration Guide

### From Old to New Structure

**Old Button:**
```jsx
<Button className="px-4 py-2 bg-blue-600" onClick={handleClick}>
  Click
</Button>
```

**New Button:**
```jsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click
</Button>
```

**Old Badge:**
```jsx
<span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full">
  {count}
</span>
```

**New Badge:**
```jsx
<Badge count={count} variant="danger" size="sm" />
```

## 🎨 Styling Guidelines

1. **Use Tailwind utilities** - No custom CSS files
2. **Consistent spacing** - Use Tailwind spacing scale
3. **Color system** - Use semantic color names
4. **Responsive** - Mobile-first approach
5. **Dark mode ready** - Use Tailwind dark mode classes

## 📚 Resources

- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
