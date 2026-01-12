'use client'

import React from 'react'
import Card from '../atoms/Card'
import Badge from '../atoms/Badge'
import { cn } from '@/lib/utils'

export interface Notification {
  id?: string
  date: string
  title: string
  content: string
  isNew?: boolean
  type?: 'info' | 'warning' | 'success' | 'error'
}

export interface NotificationsProps {
  title?: string
  notifications?: Notification[]
  showMoreLink?: boolean
  onMoreClick?: () => void
  onNotificationClick?: (notification: Notification) => void
  className?: string
}

const Notifications: React.FC<NotificationsProps> = ({ 
  title = '管理者からのお知らせ',
  notifications = [],
  showMoreLink = true,
  onMoreClick,
  onNotificationClick,
  className,
}) => {
  const defaultNotifications: Notification[] = [
    {
      id: '1',
      date: '2025/01/12',
      title: 'お知らせタイトル',
      content: '●お知らせ最初のコンテンツが表示される',
      isNew: true,
    },
    {
      id: '2',
      date: '2025/01/10',
      title: 'お知らせタイトル',
      content: '●お知らせ最初のコンテンツが表示される',
    },
  ]

  const displayNotifications = notifications.length > 0 ? notifications : defaultNotifications

  return (
    <Card className={cn('h-full', className)}>
      <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
      {displayNotifications.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>お知らせはありません</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {displayNotifications.map((notification, index) => (
              <div
                key={notification.id || index}
                className={cn(
                  'border-b border-gray-200 pb-4 last:border-b-0 last:pb-0',
                  onNotificationClick && 'cursor-pointer hover:bg-gray-50 rounded p-2 -m-2 transition-colors'
                )}
                onClick={() => onNotificationClick?.(notification)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="text-xs text-gray-500">{notification.date}</div>
                  {notification.isNew && (
                    <Badge variant="danger" size="sm">新規</Badge>
                  )}
                </div>
                <div className="text-sm font-semibold text-gray-800 mb-1">
                  {notification.title}
                </div>
                <div className="text-xs text-gray-600">
                  {notification.content}
                </div>
              </div>
            ))}
          </div>
          {showMoreLink && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={onMoreClick}
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                もっと見る →
              </button>
            </div>
          )}
        </>
      )}
    </Card>
  )
}

export default Notifications
