import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export default function Layout({ children }:{children:ReactNode}) {
  return (
      <div className="w-[100%] h-full bottom-0 flex flex-col justify-between font-poppins text-text">
        <Navbar />
              <div className="w-full pt-16">{children}</div>
        <Footer/>
      </div>
  );
}
