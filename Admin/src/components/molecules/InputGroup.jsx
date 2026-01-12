import React from 'react'

const InputGroup = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '', 
  icon: Icon,
  error,
  helperText,
  size = 'md',
  fullWidth = true,
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  }

  const iconSizes = {
    sm: 'pl-9',
    md: 'pl-10',
    lg: 'pl-12',
  }

  return (
    <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${size === 'sm' ? 'left-2.5' : size === 'lg' ? 'left-3.5' : ''}`}>
            <Icon size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} />
          </div>
        )}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full border rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${sizes[size]} ${Icon ? iconSizes[size] : ''} ${error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'} disabled:bg-gray-100 disabled:cursor-not-allowed`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
      </div>
      {error && (
        <p id={`${inputId}-error`} className="text-sm text-red-600">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  )
}

export default InputGroup
