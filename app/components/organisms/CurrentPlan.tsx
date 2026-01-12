'use client'

import React, { useState } from 'react'
import Card from '../atoms/Card'
import { cn } from '@/lib/utils'

export interface Plan {
  id: string
  name: string
  price?: string
  features?: string[]
}

export interface CurrentPlanProps {
  title?: string
  plans?: Plan[]
  currentPlanId?: string
  nextRenewalDate?: string
  nextPaymentDate?: string
  nextPaymentAmount?: string
  onPlanChange?: (planId: string) => void
  onDetailsClick?: () => void
  className?: string
}

const defaultPlans: Plan[] = [
  { id: 'standard', name: 'スタンダード' },
  { id: 'advance', name: 'アドバンス' },
  { id: 'premium', name: 'プレミアム' },
]

const CurrentPlan: React.FC<CurrentPlanProps> = ({
  title = '現在のプラン',
  plans = defaultPlans,
  currentPlanId = 'advance',
  nextRenewalDate = '2026/11/30 (1年契約)',
  nextPaymentDate = '2025/9/10',
  nextPaymentAmount = '2500円',
  onPlanChange,
  onDetailsClick,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(currentPlanId)

  const handleTabClick = (planId: string) => {
    setActiveTab(planId)
    onPlanChange?.(planId)
  }

  const currentPlan = plans.find(p => p.id === activeTab) || plans[0]

  return (
    <Card className={cn('h-full', className)}>
      <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
      
      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => handleTabClick(plan.id)}
            className={cn(
              'px-4 py-2 text-sm font-medium transition-colors',
              activeTab === plan.id
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            )}
          >
            {plan.name}
          </button>
        ))}
      </div>

      {/* Plan Details */}
      <div className="space-y-3">
        <div>
          <div className="text-xs text-gray-500 mb-1">次回更新日</div>
          <div className="text-sm font-medium text-gray-800">{nextRenewalDate}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">次回支払日</div>
          <div className="text-sm font-medium text-gray-800">
            {nextPaymentDate} ({nextPaymentAmount})
          </div>
        </div>
      </div>

      {onDetailsClick && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <button
            onClick={onDetailsClick}
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            プラン概要詳細ページを確認する →
          </button>
        </div>
      )}
    </Card>
  )
}

export default CurrentPlan
