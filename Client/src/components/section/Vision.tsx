import React from "react";
import VerticalGallery from "../ui/VerticalGallery";

const Vision: React.FC = () => {
  const leftGalleryItems = [
    "Seamless AI-powered shopping experiences that understand your preferences and budget",
    "Smart contract automation ensuring secure and transparent transactions",
    "Global marketplace connecting buyers and sellers across continents",
    "Instant dispute resolution through blockchain-based arbitration",
    "Personalized product recommendations based on behavioral analysis",
    "Automated escrow services protecting both buyers and sellers",
    "Real-time translation breaking down language barriers",
    "Sustainable commerce promoting eco-friendly practices",
  ];

  const rightGalleryItems = [
    "Community-driven reputation system building trust organically",
    "AI-powered fraud detection preventing malicious activities",
    "Multi-currency support with automatic conversion",
    "Mobile-first design optimized for emerging markets",
    "Decentralized identity verification protecting user privacy",
    "Smart logistics optimization reducing delivery times",
    "Interactive product visualization with AR/VR technology",
    "Carbon-neutral shipping options for conscious consumers",
  ];

  return (
    <section className="min-h-screen bg-[#0F0F1A] px-6 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white montserrat mb-8">
            Our{" "}
            <span className="text-[#4F46E5] bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Vision
            </span>
          </h2>
          <p className="text-xl text-gray-300 urbanist max-w-4xl mx-auto leading-relaxed">
            Creating a world where commerce is intelligent, inclusive, and
            infinitely accessible to everyone, everywhere.
          </p>
        </div>

        {/* Main content with galleries */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Gallery */}
          <div className="h-96">
            <VerticalGallery
              items={leftGalleryItems}
              direction="up"
              speed={30}
              className="h-full"
            />
          </div>

          {/* Center Content */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-2xl p-8 border border-purple-800/30 backdrop-blur-sm">
              <div className="w-24 h-24 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white montserrat mb-6">
                The Future of Commerce
              </h3>
              <p className="text-gray-300 urbanist leading-relaxed mb-6">
                Imagine a marketplace where artificial intelligence anticipates
                your needs, blockchain ensures trust, and global connectivity
                makes distance irrelevant.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-[#4F46E5] rounded-full"></div>
                  <span className="text-white text-sm urbanist">
                    Intelligent Automation
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-[#7C3AED] rounded-full"></div>
                  <span className="text-white text-sm urbanist">
                    Global Accessibility
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-[#3B82F6] rounded-full"></div>
                  <span className="text-white text-sm urbanist">
                    Sustainable Growth
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Gallery */}
          <div className="h-96">
            <VerticalGallery
              items={rightGalleryItems}
              direction="down"
              speed={35}
              className="h-full"
            />
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-[#4F46E5]/10 to-[#7C3AED]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-[#7C3AED]/10 to-[#3B82F6]/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Vision;
