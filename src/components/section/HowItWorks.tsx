import { useState } from "react";

const tabs = [
  {
    label: "Discover",
    content:
      "Find products and sellers easily with smart search and recommendations.",
  },
  {
    label: "Shop",
    content: "Buy securely using fiat or crypto, protected by escrow.",
  },
  {
    label: "Sell",
    content:
      "List your products, get paid instantly, and manage assets with smart wallets.",
  },
  {
    label: "Earn",
    content:
      "Get rewards for top ratings, referrals, and community participation.",
  },
];

const RADIUS_DESKTOP = 210; // px, large circle for desktop
const RADIUS_MOBILE = 100; // px, smaller for mobile
const TAB_SIZE_DESKTOP = 100;
const TAB_SIZE_MOBILE = 100;

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const angleStep = (2 * Math.PI) / tabs.length;
  const rotation = -active * (360 / tabs.length);

  return (
    <section className="w-full min-h-[500px] max-h-screen py-8 md:mb-[200px]">
      <h2 className="text-3xl font-bold text-center text-white sm:text-4xl montserrat">
        How It Works
      </h2>
      {/* Responsive: column on mobile, centered absolute on desktop */}
      <div className="w-full h-full flex flex-col items-center justify-start sm:justify-center sm:items-center relative sm:h-[700px] sm:w-[700px] mx-auto mt-[100px] md:mt-[200px]">
        {/* Circle of tabs */}
        <div
          className="relative flex justify-center mx-auto my-0 sm:absolute sm:inset-0"
          style={{
            width: "220px",
            height: "220px",
            maxWidth: "90vw",
            maxHeight: "90vw",
            left: undefined,
            top: undefined,
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.6s cubic-bezier(.7,1.7,.5,.9)",
          }}
        >
          {tabs.map((tab, i) => {
            // Responsive radius and tab size
            const isMobile =
              typeof window !== "undefined" && window.innerWidth < 640;
            const RADIUS = isMobile ? RADIUS_MOBILE : RADIUS_DESKTOP;
            const TAB_SIZE = isMobile ? TAB_SIZE_MOBILE : TAB_SIZE_DESKTOP;
            const angle = i * angleStep - Math.PI / 2;
            const x = Math.cos(angle) * RADIUS;
            const y = Math.sin(angle) * RADIUS;
            return (
              <button
                key={tab.label}
                className={`absolute flex items-center justify-center rounded-full border-2 font-bold shadow-[inset_0px_3px_15px_rgba(0,0,0,0.7)] text-base sm:text-lg transition-all duration-300
                  ${
                    i === active
                      ? "bg-[#161347] text-white border-4 border-[#2a2dff] scale-110 z-20 ring-4 ring-[#FFD700]/40"
                      : "bg-[#d1d1d1] text-[#0e0d2c] border-[#4F46E5] opacity-80 z-10"
                  }
                `}
                style={{
                  width: TAB_SIZE,
                  height: TAB_SIZE,
                  left: `calc(50% - ${TAB_SIZE / 2}px + ${x}px)`,
                  top: `calc(50% - ${TAB_SIZE / 2}px + ${y}px)`,
                  transform: `rotate(${-rotation}deg)`,
                }}
                onClick={() => setActive(i)}
                aria-label={tab.label}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        {/* Content: below the circle on mobile, centered in circle on desktop */}
        <div className="flex justify-center w-full mt-[50px] md:-mt-[150px]">
          <div
            key={active}
            className="bg-[#23262F] text-white rounded-2xl shadow-xl px-4 py-6 text-center text-base sm:text-lg font-medium animate-fadeInDrop w-full max-w-[320px] sm:max-w-[340px] sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[320px] sm:min-h-[120px]"
            style={{
              animation: "fadeInDrop 3s cubic-bezier(.7,1.7,.5,.9)",
            }}
          >
            {tabs[active].content}
          </div>
        </div>
      </div>
      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeInDrop {
          0% { opacity: 0; transform: translateY(-40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}
