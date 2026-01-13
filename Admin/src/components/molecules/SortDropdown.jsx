import React from 'react'

const SortDropdown = ({ value, onChange, className = '' }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-700 ${className}`}
    >
      <option value="">選択してください</option>
      <option value="newest">新しい順</option>
      <option value="oldest">古い順</option>
      <option value="company-asc">会社名（あいうえお順）</option>
      <option value="company-desc">会社名（逆順）</option>
      <option value="salary-asc">給与（低い順）</option>
      <option value="salary-desc">給与（高い順）</option>
    </select>
  )
}

export default SortDropdown
