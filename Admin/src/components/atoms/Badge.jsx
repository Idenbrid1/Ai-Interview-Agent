import React from 'react'

const Badge = ({ count, className = '' }) => {
  if (!count) return null
  return (
    <span className={`absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white ${className}`}>
      {count}
    </span>
  )
}

export default Badge
