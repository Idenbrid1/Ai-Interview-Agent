import React from 'react'
import StatCard from '../molecules/StatCard'
import { BarChart2, TrendingUp, Users, UserPlus, CreditCard, XCircle, FileText } from 'lucide-react'

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard 
        title="売上金額" 
        value="¥ 1,000,000" 
        icon={BarChart2} 
        trend="↗" 
        trendLabel="今月or累計or YYYY/MM" 
      />
      <StatCard 
        title="ARPU" 
        value="¥ 10,000" 
        icon={TrendingUp} 
        trend="↗" 
        trendLabel="1ユーザー当たりの平均課金額" 
      />
       <StatCard 
        title="ユーザー数" 
        value="100,000人" 
        icon={Users} 
        trend="↗" 
        trendLabel="累計" 
      />
       <StatCard 
        title="新規ユーザー" 
        value="1,000人" 
        icon={UserPlus} 
        trend="↗" 
        trendLabel="今月or YYYY/MM" 
      />
      
       <StatCard 
        title="アクティブユーザー数" 
        value="100,000人" 
        icon={Users} 
        trend="↗" 
        trendLabel="今月" 
      />
       <StatCard 
        title="課金プラン別ユーザー数" 
        value="100,000人" 
        icon={CreditCard} 
        trend="↗" 
        trendLabel="{プラン名/Plan name}" 
      />
       <StatCard 
        title="解約ユーザー数" 
        value="100人" 
        icon={XCircle} 
        trend="↗" 
        trendLabel="今月or累計or YYYY/MM" 
      />
       <StatCard 
        title="課金継続率" 
        value="50%" 
        icon={FileText} 
        trend="↗" 
        trendLabel="1年あたり" 
      />
    </div>
  )
}

export default StatsGrid
