"use client";
import Link from "next/link";
import { useBooking } from "@/context/BookingContext";

const services = [
  { icon: "🦷", title: "Teeth Cleaning", desc: "Professional deep cleaning to remove plaque and tartar, leaving your smile sparkling fresh." },
  { icon: "🔬", title: "Root Canal", desc: "Painless, precision root canal treatments to save your natural tooth and relieve discomfort." },
  { icon: "✨", title: "Teeth Whitening", desc: "Advanced whitening technology to brighten your smile up to 8 shades in a single session." },
  { icon: "🦴", title: "Dental Implants", desc: "Permanent, natural-looking implants to restore your smile with lasting confidence." },
  { icon: "😁", title: "Orthodontics", desc: "Modern braces and clear aligners designed for effective, comfortable teeth straightening." },
  { icon: "🛡️", title: "Preventive Care", desc: "Comprehensive check-ups and X-rays to catch issues early and keep your oral health on track." },
];

const testimonials = [
  { name: "Priya M.", text: "Amazing experience! The team was so professional and my teeth have never felt better. Highly recommend SmileCare!", stars: 5 },
  { name: "Rahul S.", text: "I was nervous about my root canal but Dr. John made it completely painless. Will definitely be back!", stars: 5 },
  { name: "Anita R.", text: "Best dental clinic in the city. State-of-the-art equipment and incredibly caring staff.", stars: 5 },
];

const stats = [
  { value: "8,500+", label: "Happy Patients" },
  { value: "15+", label: "Years of Excellence" },
  { value: "3", label: "Expert Specialists" },
  { value: "99%", label: "Satisfaction Rate" },
];

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Click the 'Book Appointment' button anywhere on the site, fill in your details, and we'll confirm your slot within 15 minutes via call or WhatsApp.",
  },
  {
    q: "Do you accept walk-in patients?",
    a: "Yes! Walk-ins are always welcome. However, booking in advance guarantees your preferred time slot and reduces waiting time.",
  },
  {
    q: "Are your treatments painful?",
    a: "We use modern anaesthesia and gentle techniques to ensure every procedure is as comfortable as possible. Most patients are surprised by how pain-free it is.",
  },
  {
    q: "What are your clinic hours?",
    a: "We are open Monday to Saturday from 9:00 AM to 8:00 PM. Emergency dental care is available — call us anytime.",
  },
  {
    q: "Do you offer EMI or payment plans?",
    a: "Absolutely. We offer 0% EMI plans for treatments above ₹5,000. Our team will walk you through all available options before you commit.",
  },
  {
    q: "Is parking available at the clinic?",
    a: "Yes, we have free covered parking for up to 30 vehicles right outside the clinic entrance.",
  },
];

export default function Home() {
  const { openModal } = useBooking();
  return (
    <main>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #0c4a6e 100%)",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="hero-blob" style={{ width: 500, height: 500, background: "#0ea5e9", top: "-100px", right: "-100px" }} />
        <div className="hero-blob" style={{ width: 350, height: 350, background: "#06b6d4", bottom: "-80px", left: "-80px" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center w-full">
          <div>
            <div className="badge animate-fade-up mb-5">
              <span>⭐</span> Rated #1 Dental Clinic in the City
            </div>
            <h1 className="display-xl text-white animate-fade-up-1" style={{ letterSpacing: "-0.03em" }}>
              Your Perfect{" "}
              <span style={{ background: "linear-gradient(135deg, #38bdf8, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Smile
              </span>{" "}
              Starts Here
            </h1>
            <p className="mt-5 text-slate-300 text-lg leading-relaxed animate-fade-up-2 max-w-lg">
              World-class dental care with a gentle touch. From routine check-ups to
              advanced cosmetic procedures — we've got your smile covered.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-up-3">
              <button onClick={openModal} className="btn-primary">
                📅 Book Appointment
              </button>
              <Link href="/about" className="btn-outline">
                Learn More →
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-5 animate-fade-up-4">
              {["✅ No Waiting Time", "🏥 Fully Equipped", "💳 EMI Available"].map(b => (
                <span key={b} className="text-sm text-slate-300 font-medium">{b}</span>
              ))}
            </div>
          </div>

          {/* Right — Hero image */}
          <div className="hidden md:flex items-center justify-center animate-fade-up-2">
            <div style={{
              position: "relative",
              width: "100%",
              maxWidth: "520px",
              borderRadius: "2rem",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
              border: "3px solid rgba(255,255,255,0.12)",
            }}>
              <img
                src="/images/hero.jpg"
                alt="SmileCare Dental Clinic"
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
              />
              {/* Stat strip overlaid at bottom of image */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                background: "rgba(10, 20, 40, 0.78)",
                backdropFilter: "blur(10px)",
                padding: "0.85rem 1rem",
                display: "flex",
                justifyContent: "space-around",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}>
                {stats.map(({ value, label }) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div style={{
                      fontSize: "1.1rem", fontWeight: 800,
                      background: "linear-gradient(135deg, #38bdf8, #67e8f9)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>{value}</div>
                    <div style={{ fontSize: "0.62rem", color: "#94a3b8", marginTop: "0.1rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ width: "100%", height: "70px", display: "block" }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,70 L0,70 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">What We Offer</p>
          <h2 className="display-lg mt-2">Our <span className="gradient-text">Services</span></h2>
          <div className="gradient-divider" />
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Comprehensive dental solutions under one roof, delivered by specialists who genuinely care.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon, title, desc }) => (
            <div key={title} className="card p-7 flex flex-col gap-4">
              <div className="icon-box">{icon}</div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
                <p className="mt-1 text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
              <span className="text-sky-600 text-sm font-semibold mt-auto">Learn more →</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">Why SmileCare</p>
            <h2 className="display-lg mt-2">
              Dental Care You Can <span className="gradient-text">Trust</span>
            </h2>
            <div className="gradient-divider" style={{ margin: "0.75rem 0 0" }} />
            <p className="mt-5 text-slate-600 leading-relaxed">
              We combine cutting-edge technology with a warm, patient-first approach. Every treatment
              is tailored to your unique needs, ensuring comfort, clarity, and outstanding results.
            </p>
            <div className="mt-8 flex flex-col gap-5">
              {[
                { icon: "🏆", title: "Award-winning Care", desc: "Recognized by the Indian Dental Association for clinical excellence." },
                { icon: "🔬", title: "Advanced Technology", desc: "Digital X-rays, laser dentistry, and 3D imaging for precision treatments." },
                { icon: "💊", title: "Painless Procedures", desc: "Modern anaesthesia techniques ensuring a comfortable experience every time." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="icon-box flex-shrink-0">{icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-800">{title}</h4>
                    <p className="text-slate-500 text-sm mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="card p-8 text-center">
                <div className="stat-number">{value}</div>
                <p className="mt-2 text-slate-500 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Testimonials</p>
            <h2 className="display-lg mt-2">What Our <span className="gradient-text">Patients Say</span></h2>
            <div className="gradient-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, text, stars }) => (
              <div key={name} className="card testimonial-card p-7">
                <div className="text-yellow-400 text-lg mb-3">{"★".repeat(stars)}</div>
                <p className="text-slate-600 text-sm leading-relaxed italic">"{text}"</p>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: "linear-gradient(135deg, #0ea5e9, #0284c7)" }}
                  >
                    {name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{name}</p>
                    <p className="text-slate-400 text-xs">Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <section className="section-pad max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">Got Questions?</p>
          <h2 className="display-lg mt-2">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <div className="gradient-divider" />
          <p className="mt-4 text-slate-500 max-w-lg mx-auto">
            Everything you need to know before your visit. Can't find an answer? Just ask us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqs.map(({ q, a }) => (
            <div key={q} className="card p-6">
              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black text-white mt-0.5"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #06b6d4)" }}
                >
                  Q
                </span>
                <h3 className="font-bold text-slate-800 text-sm leading-snug">{q}</h3>
              </div>
              <p className="mt-3 text-slate-500 text-sm leading-relaxed pl-10">{a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm mb-4">Still have questions? We're happy to help.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={openModal} className="btn-primary">
              📅 Book Appointment
            </button>
            <Link href="/contact" className="btn-outline" style={{ color: "#475569", borderColor: "#cbd5e1" }}>
              💬 Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="section-pad text-center"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c4a6e 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <span className="text-4xl">😁</span>
          <h2 className="display-lg text-white mt-4">
            Ready for Your{" "}
            <span style={{ background: "linear-gradient(135deg, #38bdf8, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Best Smile?
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Book a free consultation today — no pressure, no hidden charges.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button onClick={openModal} className="btn-primary">
              📅 Book Appointment
            </button>
            <Link href="/contact" className="btn-outline">
              📍 Find Us
            </Link>
          </div>
          <p className="mt-6 text-slate-400 text-sm">
            🕐 Mon – Sat &nbsp;|&nbsp; 9:00 AM – 8:00 PM &nbsp;|&nbsp; Emergency care available
          </p>
        </div>
      </section>

    </main>
  );
}
