import React from 'react'
import { LucideIcon, MoreVertical } from 'lucide-react'
import Card from '../atoms/Card'
import { cn } from '@/lib/utils'

export interface StatCardProps {
  title: string
  value: string | number
  subtext?: string
  icon?: LucideIcon
  trend?: string
  trendLabel?: string
  primaryColor?: string
  iconBgColor?: string
  onClick?: () => void
  className?: string
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtext,
  icon: Icon,
  trend,
  trendLabel,
  primaryColor = 'text-blue-900',
  iconBgColor = 'bg-indigo-900',
  onClick,
  className,
}) => {
  return (
    <Card className={cn('flex flex-col h-full justify-between', className)}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-bold text-gray-700 mb-1">{title}</h3>
          <div className={cn('text-xl font-bold', primaryColor)}>{value}</div>
          {subtext && <p className="text-xs text-gray-500 mt-1">{subtext}</p>}
        </div>
        {Icon && (
          <div className={cn('p-2 rounded text-white', iconBgColor)}>
            <Icon size={20} />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
        <div className="flex items-center gap-1">
          {trend && <span className="text-teal-500">{trend}</span>}
          {trendLabel && <span>{trendLabel}</span>}
        </div>
        {onClick ? (
          <button
            onClick={onClick}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="More options"
          >
            <MoreVertical size={16} />
          </button>
        ) : (
          <div className="w-4" /> // Spacer
        )}
      </div>
    </Card>
  )
}

export default StatCard
