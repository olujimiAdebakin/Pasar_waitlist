import { useState, useEffect } from "react";

const tabs = [
  {
    label: "Discover",
    content:
      "Browse a curated marketplace built for trust. Pasar helps you discover high-quality products and verified sellers using intelligent filters, AI-driven recommendations, and seller ratings. Whether you're shopping with cash or crypto, it's easy to find exactly what you need — safely and transparently.",
  },
  {
    label: "Shop",
    content:
      "Enjoy a seamless checkout experience with support for both fiat (cards, bank transfers) and crypto (USDT, USDC). Your funds are locked in smart escrow until you confirm delivery. No wallet? No problem — Pasar handles the complexity so you don’t have to. Just pay, track, and relax.",
  },
  {
    label: "Sell",
    content:
      "Start selling in minutes with a simple onboarding process and full support for crypto and fiat payouts. Every seller gets an AI-powered smart wallet to manage earnings, automate transfers, and bridge assets — all within your seller dashboard. Gain visibility, track performance, and scale with ease.",
  },
  {
    label: "Earn",
    content:
      "Unlock rewards as you grow. Top-rated sellers earn bonuses, boosted visibility, and monthly perks. Invite others to join Pasar and earn referral rewards. Engage with the community, maintain fast delivery and dispute free records, and watch your reputation and earnings grow.",
  },
];

const RADIUS_DESKTOP = 280; // px, large circle for desktop
const RADIUS_MOBILE = 100; // px, smaller for mobile
const TAB_SIZE_DESKTOP = 100;
const TAB_SIZE_MOBILE = 100;

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const angleStep = (2 * Math.PI) / tabs.length;
  const rotation = -active * (360 / tabs.length);

  // Auto-rotate tabs every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % tabs.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-[700px] md:h-[fit-content] py-8 md:mb-[200px] flex flex-col items-center justify-center">
      <h2 className="-mt-[0px] text-3xl font-bold text-center text-white sm:text-4xl montserrat">
        How It Works
      </h2>
      {/* Responsive: column on mobile, centered absolute on desktop */}
      <div className="w-full h-full flex flex-col items-center justify-start sm:justify-center sm:items-center relative sm:h-[700px] sm:w-[700px] mx-auto mt-[100px] md:mt-[300px]">
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
        <div className="flex justify-center  w-full mt-[100px] md:-mt-[230px] montserrat">
          <div
            key={active}
            className="bg-[#050c21] text-white rounded-2xl shadow-[inset_2px_3px_15px_rgba(0,0,0,0.5),0px_0px_10px_rgba(255,255,255,0.5)] px-4 py-6 text-start text-base sm:text-lg font-medium animate-fadeInDrop w-full max-w-[320px] md:max-w-[400px] sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[320px] sm:min-h-[120px]"
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
