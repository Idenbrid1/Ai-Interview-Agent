import React from 'react'
import { cn } from '@/lib/utils'

export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info'
export type BadgeSize = 'sm' | 'md' | 'lg'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
  count?: number
  variant?: BadgeVariant
  size?: BadgeSize
  showZero?: boolean
  max?: number
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      count,
      variant = 'default',
      size = 'md',
      showZero = false,
      max = 99,
      className,
      ...props
    },
    ref
  ) => {
    // If count is provided, render as notification badge
    if (count !== undefined) {
      if (!showZero && count === 0) return null

      const displayCount = count > max ? `${max}+` : count

      const variants = {
        default: 'bg-red-500 text-white',
        success: 'bg-green-500 text-white',
        warning: 'bg-yellow-500 text-white',
        danger: 'bg-red-600 text-white',
        info: 'bg-blue-500 text-white',
      }

      const sizes = {
        sm: 'h-4 w-4 text-[10px]',
        md: 'h-5 w-5 text-xs',
        lg: 'h-6 w-6 text-sm',
      }

      return (
        <span
          ref={ref}
          className={cn(
            'absolute -top-1 -right-1 flex items-center justify-center rounded-full font-medium',
            variants[variant],
            sizes[size],
            className
          )}
          {...props}
        >
          {displayCount}
        </span>
      )
    }

    // Render as regular badge with children
    const variants = {
      default: 'bg-gray-100 text-gray-800',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      danger: 'bg-red-100 text-red-800',
      info: 'bg-blue-100 text-blue-800',
    }

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-medium',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
