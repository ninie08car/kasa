import { NavLink } from "react-router-dom";
import "./NotFound.scss";
import img404 from "../../assets/404.png";

function NotFound() {
  return (
    <div className="notfound-container">
      <img src={img404} alt="Page non trouvée" />
      <p className="notfound-content">
        Oups! La page que vous demandez n'existe pas
      </p>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}

export default NotFound;
