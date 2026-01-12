import DashboardLayout from '@/components/templates/DashboardLayout'
import UpcomingInterviews from '@/components/organisms/UpcomingInterviews'
import InterviewReports from '@/components/organisms/InterviewReports'
import Notifications from '@/components/organisms/Notifications'
import CurrentPlan from '@/components/organisms/CurrentPlan'
import PaymentHistory from '@/components/organisms/PaymentHistory'

export default function Home() {
  return (
    <DashboardLayout contractPlanName="[契約プラン名]">
      <div className="space-y-6">
        {/* Top Row - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UpcomingInterviews />
          <InterviewReports />
        </div>

        {/* Middle Row - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Notifications />
          <CurrentPlan />
        </div>

        {/* Bottom Row - Payment History */}
        <div className="grid grid-cols-1 gap-6">
          <PaymentHistory />
        </div>
      </div>
    </DashboardLayout>
  );
}
