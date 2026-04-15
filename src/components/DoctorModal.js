"use client";
import { useEffect, useRef } from "react";
import { useBooking } from "@/context/BookingContext";

export default function DoctorModal({ doctor, onClose }) {
  const { openModal } = useBooking();
  const overlayRef = useRef(null);

  /* Lock scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  /* Escape key */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!doctor) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "rgba(8, 16, 32, 0.72)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
        animation: "dmFadeIn 0.22s ease both",
      }}
    >
      <style>{`
        @keyframes dmFadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes dmSlideUp { from{opacity:0;transform:translateY(36px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
      `}</style>

      <div
        style={{
          background: "#fff",
          borderRadius: "22px",
          width: "100%",
          maxWidth: "900px",
          maxHeight: "92vh",
          overflowY: "auto",
          boxShadow: "0 40px 120px rgba(0,0,0,0.35)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          animation: "dmSlideUp 0.32s cubic-bezier(0.34,1.3,0.64,1) both",
        }}
        className="doctor-modal-grid"
      >
        <style>{`
          @media (max-width: 640px) {
            .doctor-modal-grid { grid-template-columns: 1fr !important; }
            .doctor-modal-img  { height: 280px !important; border-radius: 22px 22px 0 0 !important; }
          }
        `}</style>

        {/* ── Left: Big Hero Image ── */}
        <div
          className="doctor-modal-img"
          style={{
            position: "relative",
            height: "100%",
            minHeight: "420px",
            borderRadius: "22px 0 0 22px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <img
            src={doctor.img}
            alt={doctor.name}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "top",
              display: "block",
            }}
          />
          {/* Gradient overlay at bottom */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "linear-gradient(to top, rgba(10,20,40,0.88) 0%, rgba(10,20,40,0.3) 55%, transparent 100%)",
            padding: "2rem 1.5rem 1.5rem",
          }}>
            <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
              {doctor.tags.map(t => (
                <span key={t} style={{
                  background: "rgba(14,165,233,0.25)",
                  border: "1px solid rgba(14,165,233,0.45)",
                  color: "#7dd3fc",
                  fontSize: "0.68rem", fontWeight: 700,
                  padding: "0.2rem 0.6rem", borderRadius: "999px",
                  backdropFilter: "blur(4px)",
                }}>{t}</span>
              ))}
            </div>
            <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.4rem", lineHeight: 1.2 }}>{doctor.name}</h2>
            <p style={{ color: "#7dd3fc", fontWeight: 600, fontSize: "0.85rem", marginTop: "0.2rem" }}>{doctor.role}</p>
          </div>
        </div>

        {/* ── Right: Details ── */}
        <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem", position: "relative" }}>

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: "1rem", right: "1rem",
              width: "34px", height: "34px", borderRadius: "50%",
              background: "#f1f5f9", border: "none",
              color: "#64748b", fontSize: "1rem",
              cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#e2e8f0"}
            onMouseLeave={e => e.currentTarget.style.background = "#f1f5f9"}
            aria-label="Close"
          >✕</button>

          {/* Rating row */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
            <span style={{ color: "#facc15", fontSize: "1rem" }}>★★★★★</span>
            <span style={{ fontWeight: 800, color: "#0f172a", fontSize: "0.95rem" }}>{doctor.rating}</span>
            <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>({doctor.reviews} reviews)</span>
          </div>

          {/* Exp + Specialty chips */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <span style={{ background: "#e0f2fe", color: "#0284c7", fontSize: "0.75rem", fontWeight: 700, padding: "0.3rem 0.8rem", borderRadius: "999px" }}>
              🏥 {doctor.exp} Experience
            </span>
            <span style={{ background: "#f0fdf4", color: "#15803d", fontSize: "0.75rem", fontWeight: 700, padding: "0.3rem 0.8rem", borderRadius: "999px" }}>
              ✓ {doctor.specialty}
            </span>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "#f1f5f9" }} />

          {/* Bio */}
          <div>
            <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.4rem" }}>About</p>
            <p style={{ color: "#475569", fontSize: "0.88rem", lineHeight: 1.7 }}>{doctor.bio}</p>
          </div>

          {/* Education */}
          <div>
            <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Education</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {doctor.education.map(e => (
                <div key={e} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                  <span style={{
                    width: "6px", height: "6px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
                    marginTop: "0.45rem", flexShrink: 0,
                  }} />
                  <span style={{ color: "#334155", fontSize: "0.83rem" }}>{e}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Specialises In</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {doctor.services.map(s => (
                <span key={s} style={{
                  background: "#f8fafc", border: "1px solid #e2e8f0",
                  color: "#334155", fontSize: "0.75rem", fontWeight: 600,
                  padding: "0.25rem 0.65rem", borderRadius: "8px",
                }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em" }}>Languages:</span>
            <span style={{ color: "#475569", fontSize: "0.82rem" }}>{doctor.languages.join(", ")}</span>
          </div>

          {/* CTA */}
          <div style={{ marginTop: "auto", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button
              onClick={() => { onClose(); openModal(); }}
              className="btn-primary"
              style={{ flex: 1, justifyContent: "center", fontSize: "0.9rem" }}
            >
              📅 Book with {doctor.name.split(" ")[1]}
            </button>
            <a
              href={`https://wa.me/918106775767?text=Hi, I'd like to book with ${doctor.name}`}
              target="_blank"
              rel="noreferrer"
              className="btn-green"
              style={{ fontSize: "0.9rem" }}
            >
              💬
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
