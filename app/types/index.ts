// Shared types for the application

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info'
export type CardVariant = 'default' | 'outlined' | 'elevated'

// Common entity types
export interface BaseEntity {
  id: string
  createdAt?: string
  updatedAt?: string
}

export interface User extends BaseEntity {
  name: string
  email: string
  role?: string
  avatar?: string
}

export interface PaginationParams {
  page?: number
  limit?: number
  total?: number
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
  pagination?: PaginationParams
}

// Component prop types
export interface WithClassName {
  className?: string
}

export interface WithChildren {
  children: React.ReactNode
}

export interface WithOnClick {
  onClick?: () => void
}
