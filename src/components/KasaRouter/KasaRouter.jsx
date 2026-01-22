import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Housing from "../../pages/Housing/Housing";
import NotFound from "../../pages/NotFound/NotFound";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function KasaRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Route Accueil */}
        <Route path="/" element={<Home />} />
        {/* Route A Propos */}
        <Route path="/about" element={<About />} />
        {/* Route Logement avec ID*/}
        <Route path="/logement/:id" element={<Housing />} />
        {/* Route 404 */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default KasaRouter;
