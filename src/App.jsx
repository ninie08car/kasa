import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Housing from "./pages/Housing/Housing";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
