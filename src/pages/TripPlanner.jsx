import { useState } from "react";
export default function TripPlanner() {
  const [t, setT] = useState({ name: "Sample Traveler", destination: "Ooty", days: 3, budget: 12000, travelers: 2, style: "Hill Station" });
  const ch = (e) => setT({ ...t, [e.target.name]: e.target.value });
  const initials = t.name.split(" ").filter(Boolean).map((w) => w[0]).join("").slice(0, 2).toUpperCase() || "?";
  const perDay = Math.round(Number(t.budget) / Math.max(1, Number(t.days)) / Math.max(1, Number(t.travelers)));
  const level = perDay >= 3000 ? "Luxury" : perDay >= 1500 ? "Comfort" : "Budget";
  return (
    <section className="page">
      <h2 className="title">Trip Planner – Traveler Details</h2>
      <p className="subtitle center">Edit the details on the left — the trip card updates instantly</p>
      <div className="contact-grid">
        <div className="card">
          <h3>Edit Trip Information</h3>
          <div className="field"><label>Traveler Name</label><input name="name" value={t.name} onChange={ch} /></div>
          <div className="field"><label>Destination</label>
            <select name="destination" value={t.destination} onChange={ch}>
              {["Madurai","Ooty","Kodaikanal","Mahabalipuram","Valparai"].map((d) => <option key={d}>{d}</option>)}</select></div>
          <div className="row">
            <div className="field"><label>Days</label><input type="number" min="1" max="15" name="days" value={t.days} onChange={ch} /></div>
            <div className="field"><label>Travelers</label><input type="number" min="1" max="20" name="travelers" value={t.travelers} onChange={ch} /></div></div>
          <div className="field"><label>Total Budget (₹)</label><input type="number" min="0" name="budget" value={t.budget} onChange={ch} /></div>
          <div className="field"><label>Travel Style</label>
            <select name="style" value={t.style} onChange={ch}>
              {["Hill Station","Heritage","Beach","Adventure","Food Trail"].map((d) => <option key={d}>{d}</option>)}</select></div>
        </div>
        <div className="card profile">
          <div className="avatar big">{initials}</div>
          <h3>{t.name || "Traveler"}</h3><span className="muted">{t.destination} trip</span>
          <dl>
            <dt>Duration</dt><dd>{t.days} day(s)</dd>
            <dt>Travelers</dt><dd>{t.travelers}</dd>
            <dt>Style</dt><dd>{t.style}</dd>
            <dt>Budget</dt><dd>₹{Number(t.budget).toLocaleString("en-IN")}</dd>
            <dt>Per person/day</dt><dd>₹{perDay.toLocaleString("en-IN")}</dd>
            <dt>Trip Level</dt><dd><span className="badge">{level}</span></dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
