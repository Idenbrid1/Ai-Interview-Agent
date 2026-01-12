'use client'

import React from 'react'
import { Menu } from 'lucide-react'
import TopBarProfile from '../molecules/TopBarProfile'
import { cn } from '@/lib/utils'

export interface TopBarProps {
  onMenuClick?: () => void
  contractPlanName?: string
  title?: string
  profile?: {
    name?: string
    email?: string
    notificationCount?: number
    mailCount?: number
  }
  className?: string
}

const TopBar: React.FC<TopBarProps> = ({ 
  onMenuClick, 
  contractPlanName,
  title = '006_ダッシュボード',
  profile,
  className,
}) => {
  return (
    <div className={cn('mb-4', className)}>
      {contractPlanName && (
        <div className="text-sm font-medium text-gray-600 mb-2">
          {contractPlanName}
        </div>
      )}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button 
            onClick={onMenuClick}
            className="lg:hidden text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          <div className="text-sm font-medium text-gray-400">
            {title}
          </div>
        </div>
        <TopBarProfile {...profile} />
      </div>
    </div>
  )
}

export default TopBar
