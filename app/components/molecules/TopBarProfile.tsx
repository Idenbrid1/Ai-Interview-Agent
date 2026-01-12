import React from 'react'
import { Mail, Bell } from 'lucide-react'
import Badge from '../atoms/Badge'
import { cn } from '@/lib/utils'

export interface TopBarProfileProps {
  name?: string
  email?: string
  notificationCount?: number
  mailCount?: number
  className?: string
}

const TopBarProfile: React.FC<TopBarProfileProps> = ({
  name = 'Admin_name',
  email,
  notificationCount = 3,
  mailCount,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex items-center gap-4 bg-white px-4 py-2 rounded shadow-sm border border-gray-200',
        className
      )}
    >
      <div className="flex flex-col">
        <span className="text-gray-600 text-sm font-medium">
          {name && `管理者名/${name}`}
        </span>
        {email && (
          <span className="text-gray-400 text-xs">{email}</span>
        )}
      </div>
      <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
        {mailCount !== undefined && (
          <button className="text-gray-400 hover:text-gray-600 relative transition-colors">
            <Mail size={20} />
            {mailCount > 0 && <Badge count={mailCount} size="sm" />}
          </button>
        )}
        <button className="text-gray-400 hover:text-gray-600 relative transition-colors">
          <Bell size={20} />
          {notificationCount > 0 && <Badge count={notificationCount} size="sm" />}
        </button>
      </div>
    </div>
  )
}

export default TopBarProfile
