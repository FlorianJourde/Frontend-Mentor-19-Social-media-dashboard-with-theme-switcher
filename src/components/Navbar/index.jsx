import '../../styles/Navbar.scss';
import {useContext} from "react";
import {ThemeContext} from "../../utils/context";

function Navbar() {
  const {toggleTheme} = useContext(ThemeContext);

  return (
    <nav>
      <div className="wrapper">
        <div className={'left-column'}>
          <h1>Social Media Dashboard</h1>
          <p>Total followers 23,004</p>
        </div>
        <div className={'right-column'}>
          Dark Mode
          <div className={"container"}>
            <input type="checkbox" onClick={toggleTheme} className={"checkbox"} id="checkbox"/>
            <label className={"switch"} htmlFor="checkbox">
              <span className={"slider"}></span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;