import React from 'react'

const InputGroup = ({ label, type = 'text', placeholder, value, onChange, className = '', icon: Icon }) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 ${Icon ? 'pl-10 pr-3' : 'px-3'}`}
        />
      </div>
    </div>
  )
}

export default InputGroup
