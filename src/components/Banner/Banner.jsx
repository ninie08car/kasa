import "./Banner.scss";

function Banner({ image, title, showTitle = true }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" />
      {showTitle && (
        <h1 className="title">
          Chez vous,<span className="mobile-break"> partout et ailleurs</span>
        </h1>
      )}
    </div>
  );
}
export default Banner;
