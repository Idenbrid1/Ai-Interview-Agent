'use client'

import React from 'react'
import Card from '../atoms/Card'
import { cn } from '@/lib/utils'

export interface Payment {
  id?: string
  count: number
  scheduledDate: string
  amount: string
  status: 'scheduled' | 'completed' | 'failed' | 'cancelled'
}

export interface PaymentHistoryProps {
  title?: string
  payments?: Payment[]
  onPaymentClick?: (payment: Payment) => void
  className?: string
}

const defaultPayments: Payment[] = [
  { id: '1', count: 1, scheduledDate: '2025/01/10', amount: '2,500円', status: 'completed' },
  { id: '2', count: 2, scheduledDate: '2025/02/10', amount: '2,500円', status: 'scheduled' },
  { id: '3', count: 3, scheduledDate: '2025/03/10', amount: '2,500円', status: 'scheduled' },
  { id: '4', count: 4, scheduledDate: '2025/04/10', amount: '2,500円', status: 'scheduled' },
  { id: '5', count: 5, scheduledDate: '2025/05/10', amount: '2,500円', status: 'scheduled' },
]

const PaymentHistory: React.FC<PaymentHistoryProps> = ({ 
  title = '決済履歴',
  payments = defaultPayments,
  onPaymentClick,
  className,
}) => {
  const getStatusBadge = (status: Payment['status']) => {
    const styles = {
      completed: 'text-green-600',
      scheduled: 'text-gray-500',
      failed: 'text-red-600',
      cancelled: 'text-gray-400',
    }

    const labels = {
      completed: '完了',
      scheduled: '予定日',
      failed: '失敗',
      cancelled: 'キャンセル',
    }

    return (
      <span className={cn('ml-2 text-xs', styles[status])}>
        {labels[status]}
      </span>
    )
  }

  return (
    <Card className={cn('h-full', className)}>
      <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
      {payments.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>決済履歴はありません</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 text-gray-600 font-medium">回</th>
                <th className="text-left py-2 px-3 text-gray-600 font-medium">予定日</th>
                <th className="text-left py-2 px-3 text-gray-600 font-medium">金額</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr
                  key={payment.id || index}
                  className={cn(
                    'border-b border-gray-100',
                    onPaymentClick && 'cursor-pointer hover:bg-gray-50 transition-colors'
                  )}
                  onClick={() => onPaymentClick?.(payment)}
                >
                  <td className="py-2 px-3 text-gray-700">{payment.count}</td>
                  <td className="py-2 px-3">
                    <span className="text-gray-700">{payment.scheduledDate}</span>
                    {getStatusBadge(payment.status)}
                  </td>
                  <td className="py-2 px-3 text-gray-700">{payment.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  )
}

export default PaymentHistory
