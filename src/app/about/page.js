"use client";
import { useState } from "react";
import Link from "next/link";
import { useBooking } from "@/context/BookingContext";
import DoctorModal from "@/components/DoctorModal";

const values = [
  { icon: "❤️", title: "Patient First", desc: "Every decision we make centres on your comfort, safety, and long-term oral health." },
  { icon: "🔬", title: "Science-Backed", desc: "We use only clinically proven treatments and the latest dental technology available." },
  { icon: "🤝", title: "Honest & Transparent", desc: "Clear pricing, clear diagnosis, and no unnecessary procedures — ever." },
  { icon: "🌱", title: "Continuous Growth", desc: "Our doctors regularly train to stay at the forefront of dental science." },
];

const doctors = [
  {
    name: "Dr. John Doe",
    role: "Senior Dentist",
    exp: "12 Years",
    img: "/images/doctor1.jpg",
    rating: "4.9",
    reviews: "340+",
    specialty: "General & Cosmetic Dentistry",
    tags: ["BDS", "MDS", "General Dentist"],
    bio: "Dr. John Doe brings over 12 years of clinical expertise in restorative and cosmetic dentistry. Known for his calm chairside manner and attention to detail, he has helped thousands of patients achieve healthy, confident smiles. He regularly participates in international dental conferences to stay at the forefront of modern techniques.",
    education: [
      "BDS – Manipal College of Dental Sciences, 2008",
      "MDS (Conservative Dentistry) – AIIMS Delhi, 2012",
      "Fellowship in Aesthetic Dentistry – Singapore, 2015",
    ],
    services: ["Teeth Cleaning", "Composite Bonding", "Crowns & Bridges", "Veneers", "Tooth Coloured Fillings", "Root Canal"],
    languages: ["English", "Hindi", "Telugu"],
  },
  {
    name: "Dr. Sarah Smith",
    role: "Orthodontist",
    exp: "9 Years",
    img: "/images/doctor2.jpg",
    rating: "4.8",
    reviews: "210+",
    specialty: "Braces & Clear Aligners",
    tags: ["BDS", "MDS Ortho", "Invisalign Certified"],
    bio: "Dr. Sarah Smith is a passionate orthodontist who specialises in creating beautifully aligned smiles using both traditional braces and cutting-edge clear aligner systems. With 9 years of experience, she is recognised for her precision treatment planning and warm, patient-focused approach — especially popular with teens and young adults.",
    education: [
      "BDS – SDM College of Dental Sciences, Dharwad, 2011",
      "MDS (Orthodontics & Dentofacial Orthopaedics) – Rajiv Gandhi University, 2015",
      "Invisalign Certified Provider – 2017",
    ],
    services: ["Metal Braces", "Ceramic Braces", "Invisalign / Clear Aligners", "Retainers", "Space Maintainers", "Jaw Correction"],
    languages: ["English", "Hindi", "Kannada"],
  },
  {
    name: "Dr. Alex Kumar",
    role: "Dental Surgeon",
    exp: "15 Years",
    img: "/images/doctor3.jpg",
    rating: "5.0",
    reviews: "510+",
    specialty: "Implants & Oral Surgery",
    tags: ["BDS", "MDS Oral Surgery", "Implantologist"],
    bio: "Dr. Alex Kumar is one of Hyderabad's most trusted dental surgeons, with 15 years of hands-on experience in complex oral surgeries and full-mouth implant rehabilitation. He has performed over 2,000 successful implant procedures and is the go-to specialist for patients who have been told 'surgery is risky'. His gentle technique and thorough pre-operative consultations set him apart.",
    education: [
      "BDS – Osmania Dental College, Hyderabad, 2006",
      "MDS (Oral & Maxillofacial Surgery) – Nair Hospital Dental College, Mumbai, 2010",
      "Advanced Implantology – ITI Fellow, Zurich, 2013",
    ],
    services: ["Dental Implants", "Wisdom Tooth Extraction", "Bone Grafting", "Sinus Lift", "Full Mouth Rehabilitation", "Jaw Surgery"],
    languages: ["English", "Hindi", "Telugu", "Urdu"],
  },
];

const milestones = [
  { year: "2009", title: "Founded", desc: "SmileCare opened its doors in Hyderabad with a vision for affordable, quality dentistry." },
  { year: "2014", title: "Expanded", desc: "Added a specialist orthodontics wing and welcomed two more senior doctors to our team." },
  { year: "2019", title: "Award", desc: "Recognised by the Indian Dental Association as a Centre of Excellence." },
  { year: "2024", title: "Digital Upgrade", desc: "Integrated 3D imaging, laser dentistry, and a fully digital treatment workflow." },
];

export default function About() {
  const { openModal } = useBooking();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  return (
    <main>
      {selectedDoctor && (
        <DoctorModal doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />
      )}

      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #0c4a6e 100%)",
          padding: "clamp(4rem, 8vw, 8rem) clamp(1.25rem, 5vw, 5rem)",
        }}
      >
        <div className="hero-blob" style={{ width: 400, height: 400, background: "#0ea5e9", top: "-100px", right: "-100px" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="section-label" style={{ color: "#38bdf8" }}>About Us</p>
          <h1 className="display-xl text-white mt-3 animate-fade-up">
            Caring for Smiles{" "}
            <span style={{ background: "linear-gradient(135deg, #38bdf8, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Since 2009
            </span>
          </h1>
          <p className="mt-5 text-slate-300 text-lg max-w-xl mx-auto animate-fade-up-1 leading-relaxed">
            SmileCare is more than a dental clinic. We are a team of passionate professionals
            dedicated to transforming lives, one smile at a time.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: "60px", display: "block" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────── */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label">Our Mission</p>
            <h2 className="display-lg mt-2">
              Making <span className="gradient-text">Premium Dental Care</span> Accessible
            </h2>
            <div className="gradient-divider" style={{ margin: "0.75rem 0 0" }} />
            <p className="mt-5 text-slate-600 leading-relaxed">
              At SmileCare, we believe everyone deserves a healthy, confident smile — regardless of age
              or budget. We blend clinical excellence with genuine compassion to deliver treatments that
              are not only effective but also comfortable and affordable.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our multidisciplinary team of specialists collaborates on every case to ensure you receive
              the most comprehensive, personalised care possible.
            </p>
            <div className="mt-8">
              <button onClick={openModal} className="btn-primary">
                📅 Book a Free Consultation
              </button>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="card p-6">
                <div className="icon-box mb-3">{icon}</div>
                <h3 className="font-bold text-slate-800">{title}</h3>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Banner ─────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "8,500+", label: "Happy Patients" },
            { value: "15+", label: "Years of Excellence" },
            { value: "20+", label: "Services Offered" },
            { value: "99%", label: "Satisfaction Rate" },
          ].map(({ value, label }) => (
            <div key={label} className="card p-7 text-center">
              <div className="stat-number">{value}</div>
              <p className="mt-2 text-slate-500 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Doctors / Meet the Team ───────────────────────────── */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">Our Team</p>
          <h2 className="display-lg mt-2">Meet Our <span className="gradient-text">Doctors</span></h2>
          <div className="gradient-divider" />
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Experienced specialists who genuinely care about your comfort and long-term oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {doctors.map((doctor) => {
            const { name, role, exp, img, rating, reviews, specialty } = doctor;
            return (
              <div
                key={name}
                className="card text-center"
                style={{ cursor: "pointer", overflow: "hidden", padding: 0 }}
                onClick={() => setSelectedDoctor(doctor)}
              >
                {/* Doctor photo — large, fills card top */}
                <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                  <img
                    src={img}
                    alt={name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", transition: "transform 0.4s ease" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  />
                  {/* "View Profile" hint on hover */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(10,20,40,0.65) 0%, transparent 55%)",
                    display: "flex", alignItems: "flex-end", justifyContent: "center",
                    padding: "1rem",
                    opacity: 0, transition: "opacity 0.3s ease",
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "1"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "0"}
                  >
                    <span style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", background: "rgba(14,165,233,0.85)", padding: "0.3rem 1rem", borderRadius: "999px" }}>
                      View Profile →
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                  <h3 className="font-bold text-slate-800 text-lg">{name}</h3>
                  <p className="text-sky-600 font-semibold text-sm mt-0.5">{role}</p>
                  <p className="text-slate-400 text-xs mt-1">{exp} Experience</p>

                  <span
                    className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#e0f2fe", color: "#0284c7" }}
                  >
                    {specialty}
                  </span>

                  <div className="mt-3 flex justify-center items-center gap-1.5">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="text-slate-700 text-sm font-bold">{rating}</span>
                    <span className="text-slate-400 text-xs">({reviews} reviews)</span>
                  </div>

                  <div
                    className="mt-4 text-sm font-semibold text-sky-600"
                    style={{ borderTop: "1px solid #f1f5f9", paddingTop: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.35rem" }}
                  >
                    <span>View Full Profile</span>
                    <span style={{ fontSize: "1rem" }}>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section className="section-pad max-w-4xl mx-auto" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)", borderRadius: "2rem", marginInline: "auto" }}>
        <div className="text-center mb-12">
          <p className="section-label">Our Journey</p>
          <h2 className="display-lg mt-2">Key <span className="gradient-text">Milestones</span></h2>
          <div className="gradient-divider" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block"
            style={{ background: "linear-gradient(180deg, #0ea5e9, #06b6d4)" }} />
          <div className="flex flex-col gap-8">
            {milestones.map(({ year, title, desc }) => (
              <div key={year} className="flex gap-6 items-start">
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white text-xs font-black shadow-md relative z-10"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #0284c7)" }}
                >
                  {year}
                </div>
                <div className="card p-5 flex-1 mt-2">
                  <h3 className="font-bold text-slate-800">{title}</h3>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="section-pad text-center"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c4a6e 100%)" }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="display-lg text-white">
            Join Our{" "}
            <span style={{ background: "linear-gradient(135deg, #38bdf8, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Family
            </span>
          </h2>
          <p className="mt-4 text-slate-300">
            Let us be your partner in lifelong oral health. Book your visit today.
          </p>
          <div className="mt-7 flex justify-center gap-4 flex-wrap">
            <button onClick={openModal} className="btn-primary">
              📅 Book Appointment
            </button>
            <Link href="/contact" className="btn-outline">
              📍 Contact Page
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
