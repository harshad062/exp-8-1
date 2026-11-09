import { Link } from "react-router-dom";
const spots = [
  { icon: "🛕", name: "Madurai", tag: "Heritage", text: "Meenakshi Amman Temple and the lively night markets." },
  { icon: "⛰️", name: "Ooty", tag: "Hill Station", text: "Tea gardens, toy train rides and misty viewpoints." },
  { icon: "🏖️", name: "Mahabalipuram", tag: "Beach", text: "Shore temples, stone carvings and sunrise walks." },
  { icon: "🌲", name: "Valparai", tag: "Nature", text: "Winding ghat roads, waterfalls and wildlife." },
];
export default function Home() {
  return (
    <>
      <section className="hero">
        <span className="pill">Free city walking maps for new members</span>
        <h1>Discover places <em>locals</em> love, <em>trips</em> made easy.</h1>
        <p>Handpicked temples, hills, beaches and food trails across Tamil Nadu, planned by people who live there.</p>
        <div className="hero-btns">
          <Link className="btn btn-primary" to="/register">Join TrailMate</Link>
          <Link className="btn btn-outline" to="/planner">Plan a Trip</Link>
        </div>
      </section>
      <div className="stats">
        {[["120+","Destinations"],["8k+","Happy Travelers"],["60+","Local Guides"],["4.8★","Traveler Rating"]].map(([a,b]) =>
          <div key={b}><strong>{a}</strong><span>{b}</span></div>)}
      </div>
      <section className="page">
        <h2 className="title">Popular Destinations</h2>
        <p className="subtitle center">Everything a curious traveler needs, in one guide</p>
        <div className="grid4">
          {spots.map((s) => (
            <div className="card spot" key={s.name}>
              <div className="icon">{s.icon}</div><h3>{s.name}</h3>
              <span className="badge">{s.tag}</span><p>{s.text}</p>
            </div>))}
        </div>
      </section>
    </>
  );
}
