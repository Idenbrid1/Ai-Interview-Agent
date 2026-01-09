import DashboardLayout from '../../components/templates/DashboardLayout'
import StatsGrid from '../../components/organisms/StatsGrid'
import FunnelSection from '../../components/organisms/FunnelSection'

function Home() {
  return (
    <DashboardLayout>
       <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800 mb-1">販売管理・ダッシュボード</h1>
          <p className="text-xs text-gray-500">プラットフォームにおけるユーザーの課金販売を管理するダッシュボード</p>
       </div>
       <StatsGrid />
       <FunnelSection />
    </DashboardLayout>
  )
}

export default Home
