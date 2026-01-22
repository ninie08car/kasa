import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logoh.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Kasa Logo" />
        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
