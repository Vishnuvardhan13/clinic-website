import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import BookingModal from "@/components/BookingModal";
import { BookingProvider } from "@/context/BookingContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SmileCare Dental Clinic | Premium Dental Care in Hyderabad",
  description: "SmileCare offers world-class dental treatments — teeth cleaning, root canal, whitening, orthodontics, and implants. Book your appointment today.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BookingProvider>
          <Navbar />
          <BookingModal />
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}
