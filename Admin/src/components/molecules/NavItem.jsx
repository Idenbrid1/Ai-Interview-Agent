import React from 'react'

const NavItem = ({ 
  icon: Icon, 
  label, 
  active, 
  onClick,
  badge,
  size = 'md',
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-3 text-sm',
    lg: 'px-5 py-4 text-base',
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full gap-3 font-medium transition-colors relative ${sizes[size]} ${
        active 
          ? 'bg-blue-900/50 text-white border-r-2 border-blue-400' 
          : 'text-gray-400 hover:text-white hover:bg-white/5'
      } ${className}`}
      {...props}
    >
      {Icon && <Icon size={size === 'sm' ? 18 : size === 'lg' ? 22 : 20} />}
      <span className="flex-1 text-left">{label}</span>
      {badge !== undefined && badge > 0 && (
        <span className="px-2 py-0.5 text-xs rounded-full bg-red-500 text-white">
          {badge > 99 ? '99+' : badge}
        </span>
      )}
    </button>
  )
}

export default NavItem
