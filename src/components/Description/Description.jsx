import { useParams } from "react-router-dom";
import housings from "../../data/housing.json";
import "./Description.scss";

function HousingDescription() {
  const { id } = useParams();

  const housing = housings.find((item) => item.id === id);
  const { title, location, tags, host, rating } = housing;

  return (
    <div className="housing">
      <div className="housing-left">
        <div className="housing-content">
          <h1>{title}</h1>
          <p className="location">{location}</p>
        </div>
        <div className="housing-tags">
          {tags.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="housing-right">
        <div className="housing-host">
          <p>{host.name}</p>
          <div className="round-container">
            <img src={host.picture} alt={host.name} />
          </div>
        </div>
        <div className="housing-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <i
              key={star}
              className={
                star <= rating ? "fa-solid fa-star active" : "fa-solid fa-star"
              }
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HousingDescription;
