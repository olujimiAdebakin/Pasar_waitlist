import React from "react";

const TeamHero: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#09090F] flex items-center justify-center px-6 py-20 pt-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-[#7C3AED]/15 to-[#3B82F6]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,15,0.8)_100%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main heading */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white montserrat mb-6 leading-tight">
            Meet Our{" "}
            <span className="relative inline-block">
              <span className="text-[#4F46E5] bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent animate-gradient-x">
                Team
              </span>
              {/* Underline animation */}
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#3B82F6] rounded-full animate-gradient-x"></div>
            </span>
          </h1>

          {/* Subtitle */}
          <div className="relative">
            <p className="text-xl md:text-2xl text-gray-300 urbanist max-w-5xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              The brilliant minds behind{" "}
              <span className="text-[#4F46E5] font-semibold">
                Pasar's innovation
              </span>
              , building the future of{" "}
              <span className="text-[#7C3AED] font-semibold">
                global commerce
              </span>{" "}
              with{" "}
              <span className="text-[#3B82F6] font-semibold">
                cutting-edge technology
              </span>
              .
            </p>
          </div>
        </div>

        {/* Team stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up delay-500">
          <div className="group text-center">
            <div className="bg-gradient-to-br from-[#4F46E5]/10 to-[#7C3AED]/10 rounded-2xl p-6 border border-[#4F46E5]/20 backdrop-blur-sm hover:border-[#4F46E5]/40 transition-all duration-300 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-[#4F46E5] montserrat mb-2 group-hover:scale-110 transition-transform duration-300">
                Diverse
              </div>
              <div className="text-gray-400 text-sm urbanist font-medium">
                 Team
              </div>
            </div>
          </div>
          <div className="group text-center">
            <div className="bg-gradient-to-br from-[#7C3AED]/10 to-[#3B82F6]/10 rounded-2xl p-6 border border-[#7C3AED]/20 backdrop-blur-sm hover:border-[#7C3AED]/40 transition-all duration-300 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-[#7C3AED] montserrat mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-gray-400 text-sm urbanist font-medium">
                Remote
              </div>
            </div>
          </div>
          <div className="group text-center">
            <div className="bg-gradient-to-br from-[#3B82F6]/10 to-[#4F46E5]/10 rounded-2xl p-6 border border-[#3B82F6]/20 backdrop-blur-sm hover:border-[#3B82F6]/40 transition-all duration-300 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-[#3B82F6] montserrat mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-400 text-sm urbanist font-medium">
                Years Experience
              </div>
            </div>
          </div>
          <div className="group text-center">
            <div className="bg-gradient-to-br from-[#10B981]/10 to-[#059669]/10 rounded-2xl p-6 border border-[#10B981]/20 backdrop-blur-sm hover:border-[#10B981]/40 transition-all duration-300 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-[#10B981] montserrat mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-400 text-sm urbanist font-medium">
                Innovation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
