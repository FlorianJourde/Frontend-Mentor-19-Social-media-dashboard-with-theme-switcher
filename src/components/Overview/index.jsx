import OverviewCard from "../OverviewCard";
import '../../styles/Overview.scss'

function Overview() {
  return (
    <section className={'overview-section'}>
      <div className={'wrapper'}>
        <OverviewCard/>
      </div>
    </section>
  )
}

export default Overview