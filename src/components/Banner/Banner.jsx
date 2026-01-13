import "./Banner.css";

function Banner({ image, title, showTitle = true }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" />
      {showTitle && <h1 className="title">{title}</h1>}
    </div>
  );
}
export default Banner;
