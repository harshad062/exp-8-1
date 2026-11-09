import { useState } from "react";
export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", type: "", msg: "" });
  const [sent, setSent] = useState(false);
  const ok = f.name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) && f.type && f.msg.trim();
  const ch = (e) => { setF({ ...f, [e.target.name]: e.target.value }); setSent(false); };
  const submit = (e) => { e.preventDefault(); if (ok) { setSent(true); setF({ name: "", email: "", type: "", msg: "" }); } };
  return (
    <section className="page">
      <h2 className="title">Contact Us</h2>
      <p className="subtitle center">We usually respond within 24 hours</p>
      <div className="contact-grid">
        <div className="card dark"><h3>Office Details</h3>
          <b>📍 Address</b><p>12, Race Course Road, Coimbatore – 641018</p>
          <b>📞 Phone</b><p>+91 98765 43210</p>
          <b>✉ Email</b><p>hello@trailmate.in</p>
          <b>🕐 Hours</b><p>Mon – Sat, 9:00 AM – 7:00 PM</p></div>
        <form className="card" onSubmit={submit}>
          <h3>Send an Enquiry</h3>
          <div className="field"><label>Your Name</label><input name="name" value={f.name} onChange={ch} placeholder="Full name" /></div>
          <div className="field"><label>Email</label><input name="email" value={f.email} onChange={ch} placeholder="you@example.com" /></div>
          <div className="field"><label>Enquiry Type</label>
            <select name="type" value={f.type} onChange={ch}><option value="">Select a category</option>
              <option>Trip Planning</option><option>Guide Booking</option><option>Feedback</option></select></div>
          <div className="field"><label>Message</label><textarea name="msg" rows="4" value={f.msg} onChange={ch} placeholder="Tell us where you want to go" /></div>
          <button className="btn btn-primary btn-block" disabled={!ok}>Send Message</button>
          {sent && <div className="success">✓ Thanks! Our travel desk will reply soon.</div>}
        </form>
      </div>
    </section>
  );
}
