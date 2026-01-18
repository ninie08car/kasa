import { useState } from "react";
import "../Collapse/Collapse.css";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className={`collapse-arrow ${isOpen ? "open" : ""}`}>
          <i className="fa-regular fa-angle-up"></i>
        </span>
      </button>

      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;
