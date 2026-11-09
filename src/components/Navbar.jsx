import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/planner", label: "Trip Planner" },
  { to: "/register", label: "Register" },
];
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span>🧭</span><span>Trail<b>Mate</b></span>
        </Link>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end onClick={() => setOpen(false)}>{l.label}</NavLink>
          ))}
          <NavLink to="/login" className="nav-cta" onClick={() => setOpen(false)}>Traveler Login</NavLink>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
