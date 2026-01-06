import React from 'react'
import Card from '../atoms/Card'
import { MoreVertical } from 'lucide-react'

const StatCard = ({ title, value, subtext, icon: Icon, trend, trendLabel, primaryColor = 'text-blue-900' }) => {
  return (
    <Card className="flex flex-col h-full justify-between">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-bold text-gray-700 mb-1">{title}</h3>
          <div className={`text-xl font-bold ${primaryColor}`}>{value}</div>
        </div>
        {Icon && (
          <div className={`p-2 rounded bg-indigo-900 text-white`}>
            <Icon size={20} />
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
        <div className="flex items-center gap-1">
          {trend && <span className="text-teal-500">{trend}</span>}
          <span>{trendLabel}</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={16} />
        </button>
      </div>
    </Card>
  )
}

export default StatCard
