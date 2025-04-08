"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  ShoppingCart,
  ShoppingBag,
  Mail,
  Cloud,
  Heart,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/", icon: <Home size={20} /> },
    {
      name: "Marketplace",
      href: "/marketplace",
      icon: <ShoppingBag size={20} />,
    },
    { name: "Orders", href: "/orders", icon: <ShoppingCart size={20} /> },
    { name: "Messages", href: "/messages", icon: <Mail size={20} /> },
    { name: "Weather", href: "/weatherforecast", icon: <Cloud size={20} /> },
  ];

  return (
    <nav className="bg-primary text-white h-[4rem] p-4 shadow-md fixed w-full flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        AgroConnect
      </Link>
      
      <div className="flex space-x-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center space-x-2 px-4 py-2 rounded ${
              pathname === link.href ? "bg-secondary" : "hover:bg-neutral"
            }`}
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </div>

      <div className="flex space-x-4">
        <button className="p-2 hover:bg-neutral rounded">
          <Heart size={20} />
        </button>
        <button className="p-2 hover:bg-neutral rounded">
          <ShoppingCart size={20} />
        </button>
      </div>
    </nav>
  );
};
