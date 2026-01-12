import React from 'react'

const Card = ({ 
  children, 
  className = '',
  variant = 'default',
  padding = 'md',
  ...props
}) => {
  const variants = {
    default: 'bg-white border border-gray-200',
    outlined: 'bg-white border-2 border-gray-300',
    elevated: 'bg-white shadow-md border border-gray-100',
  }

  const paddings = {
    none: '',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
  }

  return (
    <div 
      className={`rounded-lg shadow-sm ${variants[variant]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
