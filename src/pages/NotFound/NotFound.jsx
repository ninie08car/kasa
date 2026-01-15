import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-container">
      <h3 className="notfound-title">404</h3>
      <p className="notfound-content">
        Oups! La page que vous demandez n'existe pas
      </p>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}

export default NotFound();
