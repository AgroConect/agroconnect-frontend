import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary w-[100%] text-white py-4 mt-12 z-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Section - Logo & Name */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">AgroMarket</h2>
          <p className="text-sm opacity-80">Connecting Farmers & Consumers</p>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <Link href="/" className="hover:opacity-80">
            Home
          </Link>
          <Link href="/marketplace" className="hover:opacity-80">
            Marketplace
          </Link>
          <Link href="/orders" className="hover:opacity-80">
            Orders
          </Link>
          <Link href="/messages" className="hover:opacity-80">
            Messages
          </Link>
          <Link href="/weatherforecast" className="hover:opacity-80">
            Weather
          </Link>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={20} className="hover:opacity-80" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={20} className="hover:opacity-80" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} className="hover:opacity-80" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} className="hover:opacity-80" />
          </a>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center text-xs opacity-70 mt-4">
        &copy; {new Date().getFullYear()} AgroMarket. All rights reserved.
      </div>
    </footer>
  );
}
