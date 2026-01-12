# Atomic Design Structure

This project follows the Atomic Design methodology, organizing components into four main categories:

## Structure

```
components/
├── atoms/          # Basic building blocks (Button, Badge, Card)
├── molecules/      # Simple combinations of atoms (InputGroup, NavItem, StatCard)
├── organisms/      # Complex UI components (Sidebar, TopBar, StatsGrid)
└── templates/      # Page-level layouts (DashboardLayout, AuthLayout)
```

## Components

### Atoms
- **Button**: Basic button component with customizable styles
- **Badge**: Notification badge component
- **Card**: Container component with shadow and border

### Molecules
- **InputGroup**: Form input with label and optional icon
- **NavItem**: Navigation item with icon and active state
- **StatCard**: Statistics card with icon, value, and trend
- **TopBarProfile**: User profile component with notifications

### Organisms
- **Sidebar**: Main navigation sidebar with menu items
- **TopBar**: Top navigation bar with menu toggle
- **StatsGrid**: Grid of statistics cards

### Templates
- **DashboardLayout**: Main dashboard layout with sidebar and top bar
- **AuthLayout**: Authentication page layout with split screen design

## Usage

Import components from their respective folders:

```tsx
// Import from atoms
import { Button, Badge, Card } from '@/components/atoms'

// Import from molecules
import { InputGroup, NavItem } from '@/components/molecules'

// Import from organisms
import { Sidebar, TopBar } from '@/components/organisms'

// Import from templates
import { DashboardLayout, AuthLayout } from '@/components/templates'
```

## Technologies

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
