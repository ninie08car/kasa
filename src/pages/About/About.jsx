import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import aboutImage from "../../assets/ImageSource2.png";

function About() {
  return (
    <div className="about-container">
      <Banner image={aboutImage} showTitle={false}></Banner>
      <Collapse></Collapse>
    </div>
  );
}

export default About;
