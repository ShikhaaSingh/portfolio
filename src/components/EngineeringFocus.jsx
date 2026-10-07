import { engineeringFocus } from "../data/portfolio.js";
import SectionLabel from "./SectionLabel.jsx";

function EngineeringFocus() {
  return (
    <section className="content-section section-wrap engineering-focus">
      <SectionLabel number="02">ENGINEERING FOCUS</SectionLabel>
      <div className="section-heading-row">
        <h2>What I build</h2>
      </div>
      <ul className="focus-grid">
        {engineeringFocus.map((area, index) => (
          <li key={area}>
            <span>0{index + 1}</span>
            <h3>{area}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EngineeringFocus;
