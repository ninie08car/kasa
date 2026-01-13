import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import homeImage from "../../assets/imageSource1.png";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Banner image={homeImage} title="Chez vous, partout et ailleurs"></Banner>
      <Gallery></Gallery>
    </div>
  );
}

export default Home;
