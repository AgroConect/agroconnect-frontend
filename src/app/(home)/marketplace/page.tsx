import {
  Truck,
  RotateCcw,
  ShoppingCart,
  Headphones,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <ShoppingCart />, 
    label: "Member Discount", 
    desc: "Only for selected User App",
  },
  {
    icon: <RotateCcw />, 
    label: "Money Return", 
    desc: "Back guarantee in 7 days",
  },
  { 
    icon: <Truck />, 
    label: "Free Shipping", 
    desc: "Order over $100"
  },
  { 
    icon: <Headphones />, 
    label: "Online Support", 
    desc: "Support 24/7"
  },
];

const products = [
  { name: "Corn", price: 45, image: "/images/maize.png" },
  { name: "Tomato", price: 30, image: "/images/tomato.png", discount: 22 },
  { name: "Cabbage", price: 40, discount: 36, image: "/images/cabbage.png" },
  { name: "Kiwi", price: 50, discount: 30, image: "/images/kiwi.png" },
];

export default function Page() {
  return (
    <section className="bg-[#fefef8] py-16 px-12">
      {/* HERO */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 bg-[#5a9052] rounded-3xl overflow-hidden p-8 mb-12 text-white">
        <div className="flex-1">
          <span className="text-sm bg-white text-green-700 px-3 py-1 rounded-full font-semibold inline-block">
            100% Natural Organic
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight">
            Respect Nature,
            <br /> <span className="text-white/90">Gain Benefits</span>
          </h2>
          <button className="mt-6 px-6 py-3 bg-white text-green-800 font-medium rounded-full shadow hover:bg-gray-100 transition">
            Contact Us →
          </button>
        </div>
        <div className="flex-1 w-full">
          <Image
            src="/images/market-hero.png"
            alt="farm"
            height={480}
            width={480}
            className="rounded-2xl object-cover w-full h-64 sm:h-80 lg:h-full"
          />
        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 mb-16">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center min-w-[140px] text-gray-700 space-y-2 text-center">
            <div className="text-yellow-600 w-10 h-10 flex items-center justify-center">{f.icon}</div>
            <h4 className="font-semibold text-sm">{f.label}</h4>
            <p className="text-xs text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto">
        <div className="flex lg:flex-col flex-row justify-between items-center mb-8 gap-4">
          <h3 className="text-2xl font-semibold text-[#3c4f3d]">
            Check Our Products
          </h3>
          <div className="sm:w-full lg:hidden flex gap-2 place-content-end lg:place-content-center">
            <button className="p-2 border rounded hover:bg-gray-100">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-2 border rounded hover:bg-gray-100">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white text-center rounded-2xl p-4 shadow hover:shadow-lg transition relative group"
            >
              <Image
                src={product.image}
                alt={product.name}
                height={480}
                width={480}
                className="w-24 h-24 object-contain mx-auto mb-3"
              />
              <h4 className="font-semibold text-gray-700 mb-1 text-sm">
                {product.name}
              </h4>
              <div className="text-xs text-gray-500">
                {product.discount ? (
                  <>
                    <span className="line-through mr-1 text-gray-400">
                      ${product.price}
                    </span>
                    <span className="text-green-600">${product.discount}</span>
                  </>
                ) : (
                  <span>${product.price}</span>
                )}
              </div>

              <button className="absolute bottom-3 right-3 bg-[#f3e38e] hover:bg-[#e9dc59] w-8 h-8 flex items-center justify-center rounded-full transition">
                <ArrowUpRight className="w-4 h-4 text-[#3c4f3d]" />
              </button>
            </div>
          ))}
        </div>
        <div className="sm:w-full lg:flex gap-2 hidden mt-[5rem] lg:place-content-center">
            <button className="p-2 border rounded hover:bg-gray-100">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-2 border rounded hover:bg-gray-100">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
      </div>
    </section>
  );
}