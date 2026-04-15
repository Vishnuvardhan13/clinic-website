"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useBooking } from "@/context/BookingContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openModal } = useBooking();
  const pathname = usePathname();

  return (
    <header className="navbar-glass sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3.5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-lg font-black shadow-md"
            style={{ background: "linear-gradient(135deg, #0ea5e9, #0284c7)" }}
          >
            ✦
          </span>
          <span className="text-xl font-black tracking-tight" style={{ color: "#0f172a" }}>
            Smile<span className="gradient-text">Care</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="relative pb-1 text-sm font-semibold transition-colors duration-200 group"
                style={{ color: isActive ? "#0ea5e9" : "#475569" }}
              >
                {label}
                {/* underline — full width when active, animates in on hover when inactive */}
                <span
                  className="absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    width: isActive ? "100%" : "0%",
                    background: "#0ea5e9",
                  }}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={openModal}
            className="btn-primary text-sm animate-pulse-glow"
          >
            📅 Book Appointment
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-slate-100 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-slate-700 rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-700 rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-700 rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-2">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm font-semibold transition-colors duration-200"
                style={{
                  color: isActive ? "#0ea5e9" : "#475569",
                  borderLeft: isActive ? "2.5px solid #0ea5e9" : "2.5px solid transparent",
                }}
              >
                {label}
              </Link>
            );
          })}
          <button
            onClick={() => { setOpen(false); openModal(); }}
            className="btn-primary text-sm text-center justify-center"
          >
            📅 Book Appointment
          </button>
        </div>
      )}
    </header>
  );
}
