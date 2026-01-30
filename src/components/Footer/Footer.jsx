import "./Footer.scss";
import logo from "../../assets/logof.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logo} alt="Kasa logo" />
        <p>
          @2020 Kasa, All <span className="mobile-break">rights reserved</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
