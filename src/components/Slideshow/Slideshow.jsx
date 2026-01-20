import { useParams } from "react-router-dom";
import { useState } from "react";
import housings from "../../data/housing.json";
import arrow_left from "../../assets/arrow_back.png";
import arrow_right from "../../assets/arrow_forward.png";
import "./Slideshow.css";

function Slideshow() {
  const { id } = useParams();
  const housing = housings.find((item) => item.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  const pictures = housing.pictures;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  return (
    <div id="banner">
      <img
        src={pictures[currentIndex]}
        alt={housing.title}
        className="banner_img"
      />
      {pictures.length > 1 && (
        <div>
          <img
            className="arrow_left"
            src={arrow_left}
            alt="Précédent"
            onClick={prevSlide}
          />

          <img
            className="arrow_right"
            src={arrow_right}
            alt="Suivant"
            onClick={nextSlide}
          />

          <div className="dots">
            {pictures.map((_, index) => (
              <span
                key={index}
                className={index === currentIndex ? "dot dot_selected" : "dot"}
              ></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Slideshow;
