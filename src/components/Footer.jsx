import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div><h3>🧭 TrailMate</h3>
          <p>Your friendly local guide to temples, hills, beaches and hidden gems across Tamil Nadu.</p></div>
        <div><h4>Quick Links</h4>
          <Link to="/">Home</Link><Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link><Link to="/register">Join TrailMate</Link></div>
        <div><h4>Explore</h4>
          <p>Heritage Temples</p><p>Hill Stations</p><p>Beaches</p><p>Local Food Trails</p></div>
        <div><h4>Visit Us</h4>
          <p>12, Race Course Road, Coimbatore - 641018</p>
          <p>+91 98765 43210</p><p>hello@trailmate.in</p></div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} TrailMate Local Tourism Guide. All rights reserved.</p>
    </footer>
  );
}
export default Footer;
