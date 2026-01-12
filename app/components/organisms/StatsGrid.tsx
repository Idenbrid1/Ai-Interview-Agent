import React from 'react'
import StatCard from '../molecules/StatCard'
import { BarChart2, TrendingUp, Users, UserPlus, CreditCard, XCircle, FileText, LucideIcon } from 'lucide-react'

export interface StatItem {
  title: string
  value: string | number
  subtext?: string
  icon?: LucideIcon
  trend?: string
  trendLabel?: string
  primaryColor?: string
  iconBgColor?: string
}

export interface StatsGridProps {
  stats?: StatItem[]
  columns?: 1 | 2 | 3 | 4
  className?: string
}

const defaultStats: StatItem[] = [
  { 
    title: '売上金額', 
    value: '¥ 1,000,000', 
    icon: BarChart2, 
    trend: '↗', 
    trendLabel: '今月or累計or YYYY/MM' 
  },
  { 
    title: 'ARPU', 
    value: '¥ 10,000', 
    icon: TrendingUp, 
    trend: '↗', 
    trendLabel: '1ユーザー当たりの平均課金額' 
  },
  { 
    title: 'ユーザー数', 
    value: '100,000人', 
    icon: Users, 
    trend: '↗', 
    trendLabel: '累計' 
  },
  { 
    title: '新規ユーザー', 
    value: '1,000人', 
    icon: UserPlus, 
    trend: '↗', 
    trendLabel: '今月or YYYY/MM' 
  },
  { 
    title: 'アクティブユーザー数', 
    value: '100,000人', 
    icon: Users, 
    trend: '↗', 
    trendLabel: '今月' 
  },
  { 
    title: '課金プラン別ユーザー数', 
    value: '100,000人', 
    icon: CreditCard, 
    trend: '↗', 
    trendLabel: 'プラン名/Plan name' 
  },
  { 
    title: '解約ユーザー数', 
    value: '100人', 
    icon: XCircle, 
    trend: '↗', 
    trendLabel: '今月or累計or YYYY/MM' 
  },
  { 
    title: '課金継続率', 
    value: '50%', 
    icon: FileText, 
    trend: '↗', 
    trendLabel: '1年あたり' 
  },
]

const StatsGrid: React.FC<StatsGridProps> = ({ 
  stats = defaultStats,
  columns = 4,
  className,
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-4 ${className || ''}`}>
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          subtext={stat.subtext}
          icon={stat.icon}
          trend={stat.trend}
          trendLabel={stat.trendLabel}
          primaryColor={stat.primaryColor}
          iconBgColor={stat.iconBgColor}
        />
      ))}
    </div>
  )
}

export default StatsGrid
