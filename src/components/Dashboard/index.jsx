import DashboardCard from "../DashboardCard";
import '../../styles/Dashboard.scss'

function Dashboard() {
  return (
    <main className={'dashboard-section'}>
      <div className={'wrapper'}>
        <DashboardCard/>
      </div>
    </main>
  )
}

export default Dashboard;