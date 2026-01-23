import "./Card.scss";

function Card({ title, cover }) {
  return (
    <div className="card">
      <div className="card-content">
        <img src={cover} alt={title} />
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
}
export default Card;
