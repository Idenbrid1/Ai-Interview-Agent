'use client'

import React from 'react'
import Card from '../atoms/Card'
import Badge from '../atoms/Badge'
import { cn } from '@/lib/utils'

export interface Interview {
  id?: string
  date: string
  company: string
  department: string
  position: string
  badges?: string[]
  status?: 'upcoming' | 'completed' | 'cancelled'
}

export interface UpcomingInterviewsProps {
  title?: string
  interviews?: Interview[]
  showMoreLink?: boolean
  onMoreClick?: () => void
  onInterviewClick?: (interview: Interview) => void
  className?: string
}

const UpcomingInterviews: React.FC<UpcomingInterviewsProps> = ({ 
  title = '今後の面接',
  interviews = [],
  showMoreLink = true,
  onMoreClick,
  onInterviewClick,
  className,
}) => {
  const defaultInterviews: Interview[] = [
    {
      id: '1',
      date: '2025/01/15',
      company: '面談先会社名 (株式会社XX)',
      department: '部署名',
      position: '職種名',
      badges: ['注目企業', '重要'],
    },
    {
      id: '2',
      date: '2025/01/20',
      company: '面談先会社名 (株式会社YY)',
      department: '部署名',
      position: '職種名',
      badges: ['重要'],
    },
  ]

  const displayInterviews = interviews.length > 0 ? interviews : defaultInterviews

  return (
    <Card className={cn('h-full', className)}>
      <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
      {displayInterviews.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>予定されている面接はありません</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {displayInterviews.map((interview, index) => (
              <div
                key={interview.id || index}
                className={cn(
                  'border-b border-gray-200 pb-4 last:border-b-0 last:pb-0',
                  onInterviewClick && 'cursor-pointer hover:bg-gray-50 rounded p-2 -m-2 transition-colors'
                )}
                onClick={() => onInterviewClick?.(interview)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="text-sm font-medium text-gray-600">{interview.date}</div>
                  {interview.badges && interview.badges.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      {interview.badges.map((badge, badgeIndex) => (
                        <Badge
                          key={badgeIndex}
                          variant="info"
                          size="sm"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-sm font-semibold text-gray-800 mb-1">
                  {interview.company}
                </div>
                <div className="text-xs text-gray-600">
                  {interview.department} / {interview.position}
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

export default UpcomingInterviews
