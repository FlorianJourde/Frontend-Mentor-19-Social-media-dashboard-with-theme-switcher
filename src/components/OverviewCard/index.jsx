import {dashboard, overview} from "../../datas/dashboard";

function OverviewCard() {
  return (
    <div>
      <h2>Overview Card</h2>
      <ul className={'overview cards'}>
        {overview.map(({id, title, number,percentage, brandIcon, arrowIcon}) => (
          <li key={id} className={'card'}>
            <div className={'left-column'}>
              <p>{title}</p>
              <h3>{number}</h3>
            </div>
            <div className={'right-column'}>
              <img src={brandIcon} alt={`${brandIcon} name`}/>
              <div className={arrowIcon.includes('up') ? 'percentage up' : 'percentage down'}>
                <img src={arrowIcon} alt=""/>
                <p>{percentage}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OverviewCard