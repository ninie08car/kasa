import { useParams } from "react-router-dom";
import housings from "../../data/housing.json";
import "./Description.scss";

function HousingDescription() {
  const { id } = useParams();

  const housing = housings.find((item) => item.id === id);
  return (
    <div className="housing">
      <div className="housing-content">
        <h1>{housing.title}</h1>
        <p>{housing.location}</p>
      </div>
      <div className="housing-host">
        <p>{housing.host.name}</p>
        <img src={housing.host.picture} alt={housing.host.name} />
      </div>
      <div className="housing-tags">
        <ul>
          {housing.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="housing-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            className={
              star <= housing.rating
                ? "fa-solid fa-star active"
                : "fa-solid fa-star"
            }
          ></i>
        ))}
      </div>
    </div>
  );
}

export default HousingDescription;
