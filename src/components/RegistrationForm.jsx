import { useState } from "react";
const initialForm = { name: "", email: "", password: "", age: "", mobile: "", gender: "", state: "" };
const states = ["Andhra Pradesh","Karnataka","Kerala","Maharashtra","Delhi","Tamil Nadu","Telangana","West Bengal"];

// Returns an error message for a field, or "" when the value is valid
function validate(field, value) {
  const v = value.trim();
  switch (field) {
    case "name":
      if (!v) return "Full name is required.";
      if (!/^[A-Za-z ]+$/.test(v)) return "Name must contain letters and spaces only.";
      return "";
    case "email":
      if (!v) return "Email address is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Enter a valid email address.";
      return "";
    case "password":
      if (!value) return "Password is required.";
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value))
        return "Use uppercase, lowercase, a number and at least 8 characters.";
      return "";
    case "age":
      if (!v) return "Age is required.";
      if (!/^\d+$/.test(v) || Number(v) < 18 || Number(v) > 30) return "Age must be between 18 and 30.";
      return "";
    case "mobile":
      if (!v) return "Mobile number is required.";
      if (!/^\d{10}$/.test(v)) return "Enter exactly 10 digits.";
      return "";
    case "gender": return v ? "" : "Please select your gender.";
    case "state": return v ? "" : "Please select your home state.";
    default: return "";
  }
}

function RegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [success, setSuccess] = useState(false);
  const errors = {};
  Object.keys(initialForm).forEach((f) => { errors[f] = validate(f, form[f]); });
  const isValid = Object.values(errors).every((e) => e === "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setTouched({ ...touched, [name]: true });
    setSuccess(false);
  };
  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setSuccess(true); setForm(initialForm); setTouched({});
  };
  const cls = (f) => (touched[f] ? (errors[f] ? "field invalid" : "field valid") : "field");
  const err = (f) => (touched[f] && errors[f] ? <small className="error">{errors[f]}</small> : null);
  const p = (f) => ({ id: f, name: f, value: form[f], onChange: handleChange, onBlur: handleBlur });

  return (
    <form className="card form-card" onSubmit={handleSubmit} noValidate>
      <h2>Traveler Registration</h2>
      <p className="subtitle">Join TrailMate for curated itineraries and local travel deals</p>
      <div className={cls("name")}><label htmlFor="name">Full Name *</label>
        <input {...p("name")} placeholder="Enter your full name" />{err("name")}</div>
      <div className="row">
        <div className={cls("email")}><label htmlFor="email">Email Address *</label>
          <input {...p("email")} placeholder="you@example.com" />{err("email")}</div>
        <div className={cls("password")}><label htmlFor="password">Password *</label>
          <input {...p("password")} type="password" placeholder="Minimum 8 characters" />{err("password")}</div>
      </div>
      <div className="row">
        <div className={cls("age")}><label htmlFor="age">Age *</label>
          <input {...p("age")} placeholder="18 – 30" />{err("age")}</div>
        <div className={cls("mobile")}><label htmlFor="mobile">Mobile Number *</label>
          <input {...p("mobile")} placeholder="10-digit mobile number" />{err("mobile")}</div>
      </div>
      <div className="row">
        <div className={cls("gender")}><label htmlFor="gender">Gender *</label>
          <select {...p("gender")}><option value="">Select gender</option>
            <option>Male</option><option>Female</option><option>Other</option></select>{err("gender")}</div>
        <div className={cls("state")}><label htmlFor="state">Home State *</label>
          <select {...p("state")}><option value="">Select state</option>
            {states.map((s) => <option key={s}>{s}</option>)}</select>{err("state")}</div>
      </div>
      <button type="submit" className="btn btn-primary btn-block" disabled={!isValid}>Submit Registration</button>
      {success && <div className="success">✓ Registration completed successfully! Welcome to TrailMate.</div>}
    </form>
  );
}
export default RegistrationForm;
