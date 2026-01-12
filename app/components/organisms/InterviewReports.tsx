'use client'

import React from 'react'
import Card from '../atoms/Card'
import Button from '../atoms/Button'
import { cn } from '@/lib/utils'

export interface Report {
  id?: string
  date: string
  reportId: string
  title: string
  status?: 'draft' | 'published' | 'archived'
}

export interface InterviewReportsProps {
  title?: string
  reports?: Report[]
  showMoreLink?: boolean
  onMoreClick?: () => void
  onReportClick?: (report: Report) => void
  buttonText?: string
  className?: string
}

const InterviewReports: React.FC<InterviewReportsProps> = ({ 
  title = '面談にて作成されたレポートの一覧です',
  reports = [],
  showMoreLink = true,
  onMoreClick,
  onReportClick,
  buttonText = '面談レポート',
  className,
}) => {
  const defaultReports: Report[] = [
    {
      id: '1',
      date: '2025/01/10',
      reportId: 'REP-001',
      title: 'レポートタイトル',
    },
    {
      id: '2',
      date: '2025/01/05',
      reportId: 'REP-002',
      title: 'レポートタイトル',
    },
  ]

  const displayReports = reports.length > 0 ? reports : defaultReports

  return (
    <Card className={cn('h-full', className)}>
      <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
      {displayReports.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>レポートはありません</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {displayReports.map((report, index) => (
              <div
                key={report.id || index}
                className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={cn(
                      'flex-1',
                      onReportClick && 'cursor-pointer hover:text-blue-600 transition-colors'
                    )}
                    onClick={() => onReportClick?.(report)}
                  >
                    <div className="text-xs text-gray-500 mb-1">面談日: {report.date}</div>
                    <div className="text-xs text-gray-500 mb-1">レポートID: {report.reportId}</div>
                    <div className="text-sm font-medium text-gray-800">{report.title}</div>
                  </div>
                  <Button
                    size="sm"
                    variant="primary"
                    className="whitespace-nowrap"
                    onClick={() => onReportClick?.(report)}
                  >
                    {buttonText}
                  </Button>
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

export default InterviewReports
