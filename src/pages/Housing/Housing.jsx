import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";
import HousingDescription from "../../components/Description/Description";
import housings from "../../data/housing.json";
import "./Housing.scss";

function Housing() {
  const { id } = useParams();
  const housing = housings.find((item) => item.id === id);

  if (!housing) {
    return <Navigate to="/*" />;
  }

  const { pictures, description, equipments } = housing;

  return (
    <div className="housing-container">
      <Slideshow pictures={pictures} /> <HousingDescription />
      <div className="housing-collapses">
        <Collapse title="Description">{description}</Collapse>
        <Collapse title="Equipements">
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Housing;
