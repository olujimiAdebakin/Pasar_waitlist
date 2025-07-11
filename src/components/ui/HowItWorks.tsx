import React, { useState, useEffect, useRef } from "react";

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

const RADIUS_DESKTOP = 180; // Optimized radius for desktop
const RADIUS_MOBILE = 130; // Optimized radius for mobile
const TAB_SIZE = 90; // Consistent size for both mobile and desktop

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const angleStep = (2 * Math.PI) / tabs.length;
  const rotation = -active * (360 / tabs.length);
  const intervalRef = useRef<number | null>(null);

  // Handle responsiveness
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-advance active tab every 3 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % tabs.length);
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Handle tab click with pause/resume functionality
  const handleTabClick = (index: number) => {
    setActive(index);
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Resume auto-rotation after 3 seconds
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % tabs.length);
    }, 10);
  };

  // Calculate responsive radius
  const radius = isMobile ? RADIUS_MOBILE : RADIUS_DESKTOP;

  return (
    <div className="w-full min-h-screen py-8 bg-[#18181C]">
      <h2 className="mb-12 text-3xl font-bold text-center text-white sm:mb-16 sm:text-4xl">
        How It Works
      </h2>

      <div className="w-full h-full flex flex-col items-center justify-start sm:justify-center relative sm:min-h-[500px]">
        {/* Circle container */}
        <div
          className="relative mx-auto"
          style={{
            width: `${(radius + TAB_SIZE / 2) * 2}px`,
            height: `${(radius + TAB_SIZE / 2) * 2}px`,
            maxWidth: "90vw",
            maxHeight: "90vw",
          }}
        >
          {/* Rotating wrapper */}
          <div
            className="absolute inset-0"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.6s cubic-bezier(.7,1.7,.5,.9)",
            }}
          >
            {tabs.map((tab, i) => {
              const angle = i * angleStep - Math.PI / 2;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <button
                  key={tab.label}
                  className={`absolute flex items-center justify-center rounded-full border-2 font-bold shadow-[inset_0px_3px_15px_rgba(0,0,0,0.7)] shadow-[0px_0px_15px_rgba(0,0,0,0.7)]  text-sm sm:text-base transition-all duration-300
                    ${
                      i === active
                        ? "bg-[#161347] text-white border-4 border-[#2a2dff] scale-110 z-20 ring-4 ring-[#FFD700]/40"
                        : "bg-[#d1d1d1] text-[#0e0d2c] border-[#4F46E5] opacity-80 z-10"
                    }
                  `}
                  style={{
                    width: TAB_SIZE,
                    height: TAB_SIZE,
                    left: `calc(50% - ${TAB_SIZE / 2}px)`,
                    top: `calc(50% - ${TAB_SIZE / 2}px)`,
                    transform: `translate(${x}px, ${y}px) rotate(${-rotation}deg)`,
                  }}
                  onClick={() => handleTabClick(i)}
                  aria-label={tab.label}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Content panel - centered in the circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              key={active}
              className="bg-[#23262F] text-white rounded-2xl shadow-xl px-4 py-6 text-center text-sm sm:text-base font-medium w-[80%] max-w-[280px]"
              style={{
                animation: "fadeInDrop 0.5s ease-out",
              }}
            >
              {tabs[active].content}
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeInDrop {
          0% { opacity: 0; transform: translateY(-20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
