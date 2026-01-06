import React from 'react'
import { Mail, Bell } from 'lucide-react'
import Badge from '../atoms/Badge'

const TopBarProfile = ({ name = "Admin_name" }) => {
  return (
    <div className="flex items-center gap-4 bg-white px-4 py-2 rounded shadow-sm border border-gray-200">
      <span className="text-gray-600 text-sm font-medium">{`{管理者名/${name}}`}</span>
      <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
        <button className="text-gray-400 hover:text-gray-600 relative">
          <Mail size={20} />
        </button>
        <button className="text-gray-400 hover:text-gray-600 relative">
          <Bell size={20} />
          <Badge count={3} />
        </button>
      </div>
    </div>
  )
}

export default TopBarProfile
