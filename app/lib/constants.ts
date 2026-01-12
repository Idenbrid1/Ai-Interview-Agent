// Shared constants for the application

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  VERIFY_OTP: '/verify-otp',
  RESET_SUCCESS: '/reset-success',
} as const

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  OUTLINE: 'outline',
  GHOST: 'ghost',
  DANGER: 'danger',
} as const

export const BUTTON_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const

export const BADGE_VARIANTS = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info',
} as const

export const CARD_VARIANTS = {
  DEFAULT: 'default',
  OUTLINED: 'outlined',
  ELEVATED: 'elevated',
} as const
