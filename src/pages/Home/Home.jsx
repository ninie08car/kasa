import "./Home.css";
import logo from "../../assets/imageSource1.png";

function Home() {
  return (
    <div className="home-container">
      <div className="home-banner">
        <h1>Accueil</h1>
        <img src={logo} alt="Falaise bord de mer" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="home-gallery"></div>
    </div>
  );
}

export default Home;
