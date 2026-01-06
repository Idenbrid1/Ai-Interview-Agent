import React from 'react'
import { Menu } from 'lucide-react'
import TopBarProfile from '../molecules/TopBarProfile'

const TopBar = ({ onMenuClick }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuClick}
          className="lg:hidden text-gray-500 hover:text-gray-700"
        >
          <Menu size={24} />
        </button>
        <div className="text-sm font-medium text-gray-400">
          006_ダッシュボード
        </div>
      </div>
      <TopBarProfile />
    </div>
  )
}

export default TopBar
