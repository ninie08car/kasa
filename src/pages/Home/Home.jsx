import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Banner></Banner>
      <Gallery></Gallery>
    </div>
  );
}

export default Home;
