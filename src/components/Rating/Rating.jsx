import "./Rating.scss";

function Rating({ rating }) {
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
