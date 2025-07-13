import { useState } from "react";
const features = [
  {
    title: "Escrow-Protected Payments",
    desc: "Pasar puts your security first by locking your funds in a smart escrow until your order is confirmed. That means sellers don’t get paid until you've received your item and agreed it's exactly what was promised. It removes the risk of fraud, ghosting, or delivery issues — giving both buyers and sellers confidence in every transaction. It’s transparency you can track, powered by blockchain.",
    icon: "/icons/icons8-shield-96.png",
    color: "bg-gradient-to-tr from-[#4F46E5] to-[#6E51E0]",
  },
  {
    title: "Crypto & Fiat Flexibility",
    desc: "Whether you're using a card, local bank or stablecoins like USDT or USDC, Pasar makes payments seamless. You can shop however you prefer — even without prior crypto experience. For crypto users, we support wallet connections and auto-conversion to stable-coins for escrow. For fiat users, it's simple checkout via Naira. We bridge Web2 and Web3 to suit every user, beginner to pro.",
    icon: "/icons/icons8-ngn-96.png",
    color: "bg-gradient-to-tr from-[#6E51E0] to-[#4F46E5]",
  },
  {
    title: "Verified Sellers & Products",
    desc: "We don’t just let anyone list. Every seller is required to complete onboarding with verified details, location, payout method, and ID — giving buyers peace of mind. Products are checked for quality, and suspicious listings are automatically flagged by our system. This ensures that buyers always browse a catalog of real, accountable sellers with trackable performance data and clear terms.",
    icon: "/icons/icons8-verified-account-94.png",
    color: "bg-gradient-to-tr from-[#4F46E5] to-[#4338CA]",
  },
  {
    title: "Real Reviews, Real Buyers",
    desc: "Only people who actually made and completed a purchase can leave feedback — meaning every review on Pasar is trustworthy and transaction-based. Our AI filters out spam and fake activity, and buyers can even upload images of their received product. Reviews directly influence seller reputation, which means real accountability, not inflated ratings or paid reviews.",
    icon: "/icons/icons8-wallet.gif",
    color: "bg-gradient-to-tr from-[#4338CA] to-[#6E51E0]",
  },
  {
    title: "Dispute Resolution That Works",
    desc: "Pasar makes sure disputes don’t drag on or get ignored. Based on order value, disputes are either reviewed instantly by our in-house AI system or escalated to human admins for deeper investigation. Buyers must upload proof, and sellers’ original media is pulled from the listing. The system handles evidence, timestamps, metadata, and ensures fair outcomes — protecting both sides.",
    icon: "/icons/icons8-review-96.png",
    color: "bg-gradient-to-tr from-[#6E51E0] to-[#4F46E5]",
  },
  /*{
    /*
    title: "Mobile-First, Africa-Ready",
    desc: "We’ve built Pasar with the realities of emerging markets in mind. The platform is light, fast, responsive, and works great on both low- and high-end devices. It’s fully optimized for Android and iOS, supports local currencies and languages, and integrates with regional logistics and delivery systems. Whether you’re in Lagos, Nairobi, or Accra — Pasar is built for you.",
    icon: "/icons/icons8-globe-showing-europe-africa-96.png",
    color: "bg-gradient-to-tr from-[#4F46E5] to-[#6E51E0]",
  },*/
  {
    title: "Agentic AI Shopping Assistant",
    desc: "Skip the search bar. Pasar’s AI agent, Xiara, acts as your personal commerce guide. Just tell Xiara what you're looking for — in text or voice — and it will instantly recommend verified sellers, compare prices, and even negotiate better deals on your behalf. You don’t scroll endlessly or compare listings manually — the agent does the work, and you just choose and checkout.",
    icon: "/icons/icons8-ai.svg",
    color: "bg-gradient-to-tr from-[#6E51E0] to-[#4F46E5]",
  },
  {
    title: "Smart Wallets for Sellers",
    desc: "When sellers choose crypto payouts, Pasar automatically creates a secure, AI-enabled wallet inside their dashboard. From here, they can send and receive crypto, schedule transfers, view history, or even bridge assets across chains. Sellers can also use the wallet to pay bills directly via AirBillsPay. It’s all protected by the same password they use to log in — no extra steps.",
    icon: "/icons/icons8-wallet.gif",
    color: "bg-gradient-to-tr from-[#4338CA] to-[#6E51E0]",
  },
  {
    title: "PasarScan Transaction Explorer",
    desc: "Every transaction on Pasar — fiat or crypto — is visible in our custom-built PasarScan explorer. Users get a Pasar Transaction ID and on-chain hash, allowing them to track escrow status, delivery updates, refunds, and more. It gives buyers and sellers complete visibility without needing to leave the platform. Think of it like Etherscan — but made for everyday shoppers.",
    icon: "/icons/icons8-iris-scan-100.png",
    color: "bg-gradient-to-tr from-[#4F46E5] to-[#4338CA]",
  },
];

export default function FeaturesTabPanel() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-[#09090F] flex flex-col items-center justify-start pt-[120px] pb-10 px-4 sm:px-8">
      {/* Main heading */}
      <div className="mb-8">
        <h1 className="text-6xl md:text-7xl font-bold text-white montserrat mb-4">
          Pasar{" "}
          <span className="text-[#4F46E5] bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
            Features
          </span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] mx-auto rounded-full ml-[170px]"></div>
      </div>
      <p className="text-xl md:text-2xl text-gray-300 montserrat text-center max-w-4xl mx-auto leading-relaxed mb-12">
        Smarter shopping. Safer selling. Built for trust, powered by technology
        — Pasar brings buyers and sellers together with AI assistance,
        escrow-backed payments, and real-time transparency. Whether you’re using
        crypto or cash, every transaction is secure and seamless.
      </p>
      <div className="flex flex-col md:flex-row w-full min-h-[60vh] items-start justify-center gap-8 pt-12">
        <div className="flex flex-col gap-6 md:flex-col ">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className="flex flex-col gap-4 md:flex-row md:items-start"
            >
              {/* Tab Button */}
              <button
                className={`flex items-center gap-3 px-5 py-10 rounded-tr-2xl rounded-br-2xl relative font-bold text-lg transition-all duration-200 shadow-md ${
                  activeTab === idx
                    ? "bg-gradient-to-tr from-[#4F46E5] to-[#6E51E0] text-white scale-105"
                    : "bg-[#18181b00] text-[#E6E8EC] hover:border-[#6E51E0] hover:scale-105"
                }`}
                onClick={() => setActiveTab(activeTab === idx ? null : idx)}
              >
                <img src={f.icon} alt={f.title} className="w-8 h-8" />
                {f.title}
                <div className="absolute left-0 rounded-full border-l-[10px] border-[#6E51E0] w-[10px] h-full"></div>
              </button>

              {/* Content Panel */}
              {activeTab === idx && (
                <div
                  className={`w-full md:w-[420px] md:ml-10 transition-transform duration-300 z-[2] p-8 rounded-2xl`}
                  style={{
                    background: f.color.replace("bg-gradient-to-tr", ""),
                    boxShadow: "0 4px 24px rgba(99,102,241,0.9)",
                  }}
                >
                  <div className="flex flex-col items-center justify-center text-center md:h-auto">
                    <img
                      src={f.icon}
                      alt={f.title}
                      className="mb-4 w-14 h-14 drop-shadow-lg"
                    />
                    <h2 className="mb-2 text-2xl font-bold text-white montserrat">
                      {f.title}
                    </h2>
                    <p className="mb-2 text-base text-white/90 urbanist">
                      {f.desc}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
