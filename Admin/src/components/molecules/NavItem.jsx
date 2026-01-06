import React from 'react'

const NavItem = ({ icon: Icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full gap-3 px-4 py-3 text-sm font-medium transition-colors ${
        active 
          ? 'bg-blue-900/50 text-white border-r-2 border-blue-400' 
          : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {Icon && <Icon size={20} />}
      <span>{label}</span>
    </button>
  )
}

export default NavItem
