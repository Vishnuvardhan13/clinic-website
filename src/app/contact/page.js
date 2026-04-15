"use client";

const contactInfo = [
  { icon: "📞", label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: "✉️", label: "Email", value: "clinic@smilecare.in", href: "mailto:clinic@smilecare.in" },
  { icon: "📍", label: "Address", value: "123 Health Street, Hyderabad, Telangana – 500001", href: "#" },
  { icon: "🕐", label: "Hours", value: "Mon – Sat: 9:00 AM – 8:00 PM", href: "#" },
];

export default function Contact() {
  return (
    <main>

      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #0c4a6e 100%)",
          padding: "clamp(4rem, 8vw, 8rem) clamp(1.25rem, 5vw, 5rem)",
        }}
      >
        <div className="hero-blob" style={{ width: 400, height: 400, background: "#06b6d4", top: "-120px", left: "-80px" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="section-label" style={{ color: "#38bdf8" }}>Get In Touch</p>
          <h1 className="display-xl text-white mt-3 animate-fade-up">
            We're Here to{" "}
            <span style={{
              background: "linear-gradient(135deg, #38bdf8, #67e8f9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Help You
            </span>
          </h1>
          <p className="mt-5 text-slate-300 text-lg max-w-lg mx-auto animate-fade-up-1 leading-relaxed">
            Reach out to us via WhatsApp, phone, or email. We typically respond within minutes.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: "60px", display: "block" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ── WhatsApp + Form (moved UP) ─────────────────────────── */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left — WhatsApp CTA + Map placeholder */}
          <div className="flex flex-col gap-6">
            <div
              className="card p-8 text-center"
              style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)" }}
            >
              <div className="text-5xl mb-4">💬</div>
              <h2 className="text-xl font-bold text-slate-800">Book via WhatsApp</h2>
              <p className="text-slate-500 text-sm mt-2 mb-6 leading-relaxed">
                The fastest way to book an appointment or ask us anything. We're online all day!
              </p>
              <a
                href="https://wa.me/918106775767"
                target="_blank"
                rel="noreferrer"
                className="btn-green w-full justify-center"
              >
                Open WhatsApp →
              </a>
            </div>

            {/* Map placeholder */}
            <div
              className="card overflow-hidden"
              style={{ height: "200px", background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "0.5rem" }}
            >
              <span className="text-4xl">📍</span>
              <p className="text-slate-500 text-sm font-medium">123 Health Street, Hyderabad</p>
              <p className="text-slate-400 text-xs">Click to open in Google Maps</p>
            </div>
          </div>

          {/* Right — Quick contact form */}
          <div className="card p-8">
            <h2 className="text-xl font-bold text-slate-800 mb-1">Send Us a Message</h2>
            <p className="text-slate-500 text-sm mb-6">We'll get back to you within 2 hours.</p>

            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 mb-1.5 block">First Name</label>
                  <input
                    type="text"
                    placeholder="Priya"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 bg-slate-50 hover:border-sky-300 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 mb-1.5 block">Last Name</label>
                  <input
                    type="text"
                    placeholder="Sharma"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 bg-slate-50 hover:border-sky-300 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-600 mb-1.5 block">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 bg-slate-50 hover:border-sky-300 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-600 mb-1.5 block">Service Needed</label>
                <select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 bg-slate-50 hover:border-sky-300 transition-colors">
                  <option>General Check-up</option>
                  <option>Teeth Cleaning</option>
                  <option>Root Canal</option>
                  <option>Teeth Whitening</option>
                  <option>Orthodontics</option>
                  <option>Dental Implants</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-600 mb-1.5 block">Message (optional)</label>
                <textarea
                  rows={3}
                  placeholder="Any specific concerns or questions..."
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 bg-slate-50 hover:border-sky-300 transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                📨 Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Contact Info Cards (moved DOWN) ───────────────────── */}
      <section
        className="section-pad"
        style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="card p-7 text-center block group"
            >
              <div className="icon-box mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform duration-200">{icon}</div>
              <p className="section-label mb-1">{label}</p>
              <p className="text-slate-700 font-semibold text-sm leading-relaxed">{value}</p>
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}
