import logo from "../../assets/imageSource1.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="home-banner">
      <img src={logo} alt="Falaise bord de mer" />
      <div className="texte">Chez vous, partout et ailleurs</div>
    </div>
  );
}
export default Banner;
