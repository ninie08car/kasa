import collapse from "../../data/collapse.json";
import "../Collapse/Collapse.css";

function Collapse() {
  return (
    <div className="collapse-container">
      {collapse.map((item) => (
        <div className="collapse-item" key={item.id}>
          <div className="collapse-title">
            <h3>{item.title}</h3>
          </div>
          <div className="collapse-content">
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collapse;
