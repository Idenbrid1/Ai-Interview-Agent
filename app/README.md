# AI Interview Agent - App

Next.js application with TypeScript and Tailwind CSS, following Atomic Design principles.

## 🏗️ Atomic Design Structure

```
components/
├── atoms/          # Basic building blocks (Button, Badge, Card)
├── molecules/      # Simple component combinations (InputGroup, NavItem, StatCard)
├── organisms/      # Complex UI components (Sidebar, TopBar, StatsGrid)
└── templates/      # Page-level layouts (DashboardLayout, AuthLayout)
```

## 📦 Components

### Atoms

**Button** - Flexible button component with variants
```tsx
<Button variant="primary" size="md" fullWidth isLoading>
  Click me
</Button>
```

**Badge** - Notification badge or label
```tsx
<Badge count={5} variant="danger" size="sm" />
<Badge variant="success">New</Badge>
```

**Card** - Container component
```tsx
<Card variant="elevated" padding="lg">
  Content
</Card>
```

### Molecules

**InputGroup** - Form input with label and validation
```tsx
<InputGroup
  label="Email"
  type="email"
  error="Invalid email"
  icon={Mail}
/>
```

**NavItem** - Navigation item with icon
```tsx
<NavItem icon={Home} label="Dashboard" active badge={3} />
```

**StatCard** - Statistics display card
```tsx
<StatCard
  title="Users"
  value="1,000"
  icon={Users}
  trend="↗"
  trendLabel="This month"
/>
```

### Organisms

**Sidebar** - Main navigation sidebar
```tsx
<Sidebar
  navItems={customNavItems}
  footerItems={footerItems}
  isOpen={isOpen}
  onClose={handleClose}
/>
```

**TopBar** - Top navigation bar
```tsx
<TopBar
  contractPlanName="Premium Plan"
  title="Dashboard"
  profile={{ name: "John", notificationCount: 5 }}
/>
```

**StatsGrid** - Grid of statistics cards
```tsx
<StatsGrid stats={customStats} columns={4} />
```

## 🎨 Features

- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling
- **Reusable Components** - Consistent design system
- **Accessibility** - ARIA labels and keyboard navigation
- **Responsive** - Mobile-first design
- **Variants** - Multiple style options for components

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📝 Best Practices

1. **Use TypeScript** - All components are typed
2. **Follow Atomic Design** - Keep components at appropriate levels
3. **Reuse Components** - Don't duplicate, extend existing components
4. **Use Variants** - Use built-in variants instead of custom classes
5. **Accessibility** - Include ARIA labels and keyboard support

## 🔧 Utilities

- `cn()` - Class name utility (clsx + tailwind-merge)
- Located in `lib/utils.ts`
