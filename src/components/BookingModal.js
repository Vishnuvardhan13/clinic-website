"use client";
import { useEffect, useRef, useState } from "react";
import { useBooking } from "@/context/BookingContext";

const services = [
  "General Check-up",
  "Teeth Cleaning",
  "Root Canal",
  "Teeth Whitening",
  "Dental Implants",
  "Orthodontics / Braces",
  "Dental Filling",
  "Other",
];

const initialForm = {
  name: "",
  phone: "",
  date: "",
  time: "",
  service: "",
  message: "",
};

export default function BookingModal() {
  const { isOpen, closeModal } = useBooking();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const overlayRef = useRef(null);

  /* Lock body scroll when open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  /* Reset on close */
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => { setForm(initialForm); setErrors({}); setSubmitted(false); }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  /* Validation */
  function validate() {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.phone.trim())   e.phone   = "Phone number is required";
    else if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    if (!form.date)           e.date    = "Please select a date";
    if (!form.time)           e.time    = "Please select a time";
    if (!form.service)        e.service = "Please select a service";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  }

  /* WhatsApp redirect after success */
  function handleWhatsApp() {
    const msg = encodeURIComponent(
      `Hello SmileCare! 👋\n\nI'd like to book an appointment.\n\n📋 *Details:*\n• Name: ${form.name}\n• Phone: ${form.phone}\n• Date: ${form.date}\n• Time: ${form.time}\n• Service: ${form.service}${form.message ? `\n• Note: ${form.message}` : ""}`
    );
    window.open(`https://wa.me/918106775767?text=${msg}`, "_blank");
    closeModal();
  }

  /* Today's date as min */
  const today = new Date().toISOString().split("T")[0];

  return (
    /* Overlay */
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) closeModal(); }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{
        background: "rgba(10, 20, 40, 0.65)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        animation: "fadeOverlay 0.2s ease",
      }}
    >
      <style>{`
        @keyframes fadeOverlay { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
        @keyframes successPop { 0%{transform:scale(0.5);opacity:0} 70%{transform:scale(1.1)} 100%{transform:scale(1);opacity:1} }
        .modal-input {
          width: 100%;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.65rem 1rem;
          font-size: 0.9rem;
          color: #1e293b;
          background: #f8fafc;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
        }
        .modal-input:focus { border-color: #0ea5e9; box-shadow: 0 0 0 3px rgba(14,165,233,0.12); background: #fff; }
        .modal-input.error { border-color: #f87171; background: #fff5f5; }
        .field-error { font-size: 0.75rem; color: #ef4444; margin-top: 0.25rem; }
        .modal-label { font-size: 0.78rem; font-weight: 700; color: #475569; margin-bottom: 0.35rem; display: block; letter-spacing: 0.03em; }
      `}</style>

      {/* Modal panel */}
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "520px",
          maxHeight: "92vh",
          overflowY: "auto",
          boxShadow: "0 25px 80px rgba(0,0,0,0.25)",
          animation: "slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >

        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0c4a6e 100%)",
            borderRadius: "20px 20px 0 0",
            padding: "1.5rem 1.75rem",
            position: "relative",
          }}
        >
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.12)",
              border: "none",
              color: "#fff",
              fontSize: "1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.22)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
            aria-label="Close modal"
          >
            ✕
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{
              width: "44px", height: "44px", borderRadius: "12px",
              background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.4rem", flexShrink: 0,
              boxShadow: "0 4px 16px rgba(14,165,233,0.35)",
            }}>📅</span>
            <div>
              <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", lineHeight: 1.2 }}>
                Book an Appointment
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "0.8rem", marginTop: "0.2rem" }}>
                We'll confirm within 15 minutes
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "1.75rem" }}>

          {submitted ? (
            /* ── Success State ── */
            <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
              <div style={{
                width: "80px", height: "80px", borderRadius: "50%",
                background: "linear-gradient(135deg, #10b981, #059669)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "2.2rem", margin: "0 auto 1.25rem",
                boxShadow: "0 8px 30px rgba(16,185,129,0.4)",
                animation: "successPop 0.5s cubic-bezier(0.34,1.56,0.64,1) both",
              }}>✓</div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0f172a" }}>
                You're All Set!
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.9rem", marginTop: "0.5rem", lineHeight: 1.6 }}>
                Your request for <strong>{form.service}</strong> on <strong>{form.date}</strong> at <strong>{form.time}</strong> has been received.
              </p>
              <p style={{ color: "#64748b", fontSize: "0.85rem", marginTop: "0.35rem" }}>
                Send us a WhatsApp message to confirm instantly!
              </p>
              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginTop: "1.5rem", flexWrap: "wrap" }}>
                <button onClick={handleWhatsApp} className="btn-green" style={{ fontSize: "0.9rem" }}>
                  💬 Confirm on WhatsApp
                </button>
                <button onClick={closeModal} style={{
                  background: "none", border: "1.5px solid #e2e8f0", borderRadius: "999px",
                  padding: "0.7rem 1.4rem", color: "#64748b", fontSize: "0.9rem",
                  cursor: "pointer", fontWeight: 600,
                }}>
                  Close
                </button>
              </div>
            </div>

          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

              {/* Name */}
              <div>
                <label className="modal-label">Full Name <span style={{ color: "#ef4444" }}>*</span></label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                  className={`modal-input${errors.name ? " error" : ""}`}
                />
                {errors.name && <p className="field-error">⚠ {errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="modal-label">Phone Number <span style={{ color: "#ef4444" }}>*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={`modal-input${errors.phone ? " error" : ""}`}
                />
                {errors.phone && <p className="field-error">⚠ {errors.phone}</p>}
              </div>

              {/* Date + Time */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <div>
                  <label className="modal-label">Preferred Date <span style={{ color: "#ef4444" }}>*</span></label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={today}
                    className={`modal-input${errors.date ? " error" : ""}`}
                  />
                  {errors.date && <p className="field-error">⚠ {errors.date}</p>}
                </div>
                <div>
                  <label className="modal-label">Preferred Time <span style={{ color: "#ef4444" }}>*</span></label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className={`modal-input${errors.time ? " error" : ""}`}
                  >
                    <option value="">Select time</option>
                    {["9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM",
                      "12:00 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM",
                      "4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM"].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.time && <p className="field-error">⚠ {errors.time}</p>}
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="modal-label">Service Needed <span style={{ color: "#ef4444" }}>*</span></label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`modal-input${errors.service ? " error" : ""}`}
                >
                  <option value="">Choose a service…</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <p className="field-error">⚠ {errors.service}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="modal-label">Message <span style={{ color: "#94a3b8", fontWeight: 500 }}>(optional)</span></label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any specific concerns, allergies, or questions for the doctor…"
                  className="modal-input"
                  style={{ resize: "none" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", marginTop: "0.25rem", fontSize: "0.95rem", padding: "0.9rem" }}
              >
                📅 Book Appointment
              </button>

              <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#94a3b8" }}>
                🔒 Your information is private and will only be used to confirm your booking.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
