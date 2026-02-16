import { NavLink } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/logof.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <NavLink to="/">
          <img src={logo} alt="Kasa logo" />
        </NavLink>
        <p>
          @2020 Kasa, All <span className="mobile-break">rights reserved</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
