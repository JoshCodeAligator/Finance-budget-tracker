import { NavLink } from "react-router-dom"
import "./navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
      <div className="container">
        <div className="logo">
            Finance
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/spending">Spending</NavLink>
            </li>
            <li>
              <NavLink to="/budget">Budget</NavLink>
            </li>
            <li>
              <NavLink to="/tips">Tips</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navbar