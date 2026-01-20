import "./Slideshow.css";

function Slideshow({ pictures }) {
  return (
    <div id="banner">
      <img
        class="banner-img"
        src="assets/images/slideshow/slide1.jpg"
        alt="Banner Print-it"
      />
      <img
        id="arrow_left"
        class="arrow_left"
        src="assets/images/arrow_left.png"
        alt="Précédent"
      />
      <img
        id="arrow_right"
        class="arrow_right"
        src="assets/images/arrow_right.png"
        alt="Suivant"
      />
      <div class="dots">
        <i id="slide1" class="fa-solid dot_selected fa-circle dot"></i>
        <i id="slide2" class="fa-light fa-circle dot"></i>
        <i id="slide3" class="fa-light fa-circle dot"></i>
        <i id="slide4" class="fa-light fa-circle dot"></i>
      </div>
    </div>
  );
}

export default Slideshow;
