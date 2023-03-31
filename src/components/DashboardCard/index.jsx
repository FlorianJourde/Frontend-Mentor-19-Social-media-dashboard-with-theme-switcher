import {dashboard} from "../../datas/dashboard";

function DashboardCard() {
  return (
    <ul className={'dashboard cards'}>
      {dashboard.map(({id, user, number, title, todayFollower, brandIcon, arrowIcon, accentColor}) => (
        <li key={id} className={'card'}>
          <hr style={{background: accentColor}}/>
          <div className={'user'}>
            <img src={brandIcon} alt={`${brandIcon} name`}/>
            <p>{user}</p>
          </div>
          <div className={'followers'}>
            <h3>{number}</h3>
            <p>{title}</p>
          </div>
          <div className={arrowIcon.includes('up') ? 'today up' : 'today down'}>
            <img src={arrowIcon} alt=""/>
            <p>{todayFollower}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default DashboardCard