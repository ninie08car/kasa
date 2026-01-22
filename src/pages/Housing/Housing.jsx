import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";
import housings from "../../data/housing.json";
import "./Housing.scss";
function Housing() {
  const { id } = useParams();

  const housing = housings.find((item) => item.id === id);

  if (!housing) {
    return <Navigate to="/*" />;
  }

  return (
    <div className="housing-container">
      <Slideshow pictures={housing.pictures}></Slideshow>
      <div className="housing">
        <div className="housing-content">
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
        </div>
        <div className="housing-host">
          <p>{housing.host.name}</p>
          <img src={housing.host.picture} alt={housing.host.name} />
        </div>
      </div>
      <div>
        <div className="housing-tags">
          <ul>
            {housing.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="housing-rating">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
      <div className="collapses">
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
