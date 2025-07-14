import React from "react";
import VerticalGallery from "../ui/VerticalGallery";
import ImageSlider from "../ui/ImageSlider";

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

  // Images from slider-img8 to slider-img1, with slider-img8 first
  const sliderImages = [
    "/slider/slider-img8.jpeg",
    "/slider/slider-img7.jpeg",
    "/slider/slider-img6.jpeg",
    "/slider/slider-img5.jpeg",
    "/slider/slider-img4.jpeg",
    "/slider/slider-img3.jpeg",
    "/slider/slider-img2.jpeg",
    "/slider/slider-img1.jpeg",
  ];

  return (
    <section className="min-h-screen bg-[#0F0F1A] px-6 py-20 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-widest text-[#4F46E5] font-medium urbanist">
              Where We're Heading
            </span>
          </div>
          <h2 className="mb-6 text-5xl font-bold text-white md:text-7xl montserrat">
            Our{" "}
            <span className="text-[#4F46E5] bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent">
              Vision
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#3B82F6] mx-auto rounded-full mb-8"></div>
          <p className="max-w-5xl mx-auto text-xl leading-relaxed text-gray-300 md:text-2xl urbanist">
            Creating a world where commerce is intelligent, inclusive, and
            infinitely accessible to everyone, everywhere.
          </p>
        </div>

        {/* Main content with galleries */}
        <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Left Gallery */}
          <div className="h-[600px] group">
            <div className="relative h-full">
              <VerticalGallery
                items={leftGalleryItems}
                direction="up"
                speed={30}
                className="h-full"
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/20 via-transparent to-[#0F0F1A]/20 pointer-events-none rounded-2xl"></div>
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center h-[600px] flex items-center">
            <div className="bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-3xl p-10 border border-purple-800/30 backdrop-blur-sm w-full relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4F46E5] to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#7C3AED] to-transparent rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10">
                <div className="w-28 h-28 bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-500">
                  <svg
                    className="text-white w-14 h-14"
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
                <h3 className="mb-8 text-4xl font-bold leading-tight text-white montserrat">
                  The Future of Commerce
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-gray-300 urbanist">
                  Imagine a marketplace where artificial intelligence
                  anticipates your needs, blockchain ensures trust, and global
                  connectivity makes distance irrelevant.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4 transition-transform duration-300 group/item hover:scale-105">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-full shadow-lg shadow-purple-500/30"></div>
                    <span className="font-medium text-white urbanist">
                      Intelligent Automation
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-4 transition-transform duration-300 group/item hover:scale-105">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] rounded-full shadow-lg shadow-purple-500/30"></div>
                    <span className="font-medium text-white urbanist">
                      Global Accessibility
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-4 transition-transform duration-300 group/item hover:scale-105">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#3B82F6] to-[#4F46E5] rounded-full shadow-lg shadow-blue-500/30"></div>
                    <span className="font-medium text-white urbanist">
                      Sustainable Growth
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Slider */}
          <div className="h-[600px] group">
            <div className="relative h-full overflow-hidden rounded-3xl">
              <ImageSlider
                images={sliderImages}
                autoSlide={true}
                slideInterval={4000}
                className="h-full"
              />
              {/* Enhanced border effect */}
              <div className="absolute inset-0 border-2 border-gradient-to-r from-[#4F46E5]/20 via-[#7C3AED]/20 to-[#3B82F6]/20 rounded-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background decorations */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-[#4F46E5]/10 to-[#7C3AED]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-br from-[#7C3AED]/10 to-[#3B82F6]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#3B82F6]/5 to-[#4F46E5]/5 rounded-full blur-3xl"></div>

      {/* Floating particles */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-[#4F46E5] rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#7C3AED] rounded-full animate-bounce delay-700"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-bounce delay-1000"></div>
    </section>
  );
};

export default Vision;
