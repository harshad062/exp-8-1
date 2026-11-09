const team = [["AR","Arun R.","Founder"],["PS","Priya S.","Heritage Expert"],["KM","Karthik M.","Trek Lead"],["DN","Divya N.","Traveler Care"]];
export default function About() {
  return (
    <section className="page">
      <h2 className="title">About TrailMate</h2>
      <p className="subtitle center">Your partner in every journey</p>
      <div className="card intro">TrailMate is a local tourism guide started in 2018 with a simple mission: help every traveler experience authentic places, food and culture, while supporting local guides, homestays and artisans.</div>
      <div className="grid3">
        {[["Local Experts","Every route is verified by guides who live in the region."],
          ["Responsible Travel","We promote eco-friendly and community-run stays."],
          ["Hidden Gems","Go beyond crowded spots to quiet, memorable places."]].map(([h,t]) =>
          <div className="card accent" key={h}><h3>{h}</h3><p>{t}</p></div>)}
      </div>
      <h2 className="title">Meet Our Team</h2>
      <div className="grid4">
        {team.map(([i,n,r]) => <div className="card person" key={n}><div className="avatar">{i}</div><b>{n}</b><span>{r}</span></div>)}
      </div>
    </section>
  );
}
