import React from 'react'

const InputGroup = ({ label, type = 'text', placeholder, value, onChange, className = '', icon: Icon }) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm text-left text-primary-color font-medium">{label}</label>}
      <div className="relative">
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
