import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";
import HousingDescription from "../../components/Description/Description";
import housings from "../../data/housing.json";
import "./Housing.scss";

function Housing() {
  const { id } = useParams();

  const housing = housings.find((item) => item.id === id);

  return (
    <div className="housing-container">
      <Slideshow pictures={housing.pictures}></Slideshow>
      <HousingDescription></HousingDescription>
      <div className="housing-collapses">
        <Collapse title="Description">{housing.description}</Collapse>
        <Collapse title="Equipements">
          <ul>
            {housing.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Housing;
