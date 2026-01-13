import fiches from "../../data/fiches.json";
import Card from "../../components/Card/Card";
import "../Gallery/Gallery.css";

function Gallery() {
  return (
    <div className="gallery-container">
      {fiches.map((fiche) => (
        <Card key={fiche.id} title={fiche.title} cover={fiche.cover}></Card>
      ))}
    </div>
  );
}

export default Gallery;
