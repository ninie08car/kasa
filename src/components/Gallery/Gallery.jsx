import housing from "../../data/housing.json";
import Card from "../../components/Card/Card";
import "../Gallery/Gallery.scss";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="gallery-container">
      {housing.map(({ id, title, cover }) => (
        <Link key={id} to={`/logement/${id}`} className="card-link">
          <Card title={title} cover={cover} />
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
