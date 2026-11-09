import { Link } from "react-router-dom";
export default function Login() {
  return (
    <section className="page narrow">
      <div className="login card">
        <aside><h3>🧭 TrailMate Club</h3>
          <p>Save itineraries, bookmark places and unlock member-only guide offers.</p>
          <ul><li>✓ Saved trip plans</li><li>✓ Offline city maps</li><li>✓ Local guide discounts</li></ul></aside>
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Welcome Back</h2><p className="subtitle">Sign in to your account</p>
          <div className="field"><label>Email</label><input type="email" placeholder="you@example.com" /></div>
          <div className="field"><label>Password</label><input type="password" placeholder="Your password" /></div>
          <button className="btn btn-accent btn-block">Login</button>
          <p className="alt">New traveler? <Link to="/register">Register here</Link></p>
        </form>
      </div>
    </section>
  );
}
