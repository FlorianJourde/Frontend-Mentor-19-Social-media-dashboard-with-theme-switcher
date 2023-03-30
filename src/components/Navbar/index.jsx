import '../../styles/Navbar.scss';

function Navbar() {
  return (
    <nav>
      <div className="wrapper">
        <div className={'left-column'}>
          <h1>Social Media Dashboard</h1>
          <p>Total followers 23,004</p>
        </div>
        <div>
          Dark Mode
        </div>
      </div>
    </nav>
  )
}

export default Navbar;