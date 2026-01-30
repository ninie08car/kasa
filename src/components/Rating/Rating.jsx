import { useParams } from "react-router-dom";
import housings from "../../data/housing.json";
import "./Rating.scss";

function Rating() {
  const { id } = useParams();

  const housing = housings.find((item) => item.id === id);
  const { rating } = housing;

  return (
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
  );
}

export default Rating;
