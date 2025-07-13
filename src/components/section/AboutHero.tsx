import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#09090F] flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white montserrat mb-4">
            About{" "}
            <span className="text-[#4F46E5] bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Pasar
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] mx-auto rounded-full"></div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 urbanist max-w-4xl mx-auto leading-relaxed mb-12">
          Revolutionizing peer-to-peer commerce through intelligent automation,
          trust-building technology, and seamless user experiences.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#4F46E5] montserrat">
              Agentic
            </div>
            <div className="text-gray-400 text-sm mt-2 urbanist">Commerce</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#4F46E5] montserrat">
              Crypto
            </div>
            <div className="text-gray-400 text-sm mt-2 urbanist">Payment</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#4F46E5] montserrat">
              Escrow
            </div>
            <div className="text-gray-400 text-sm mt-2 urbanist">System</div>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#4F46E5] montserrat">
              Global
            </div>
            <div className="text-gray-400 text-sm mt-2 urbanist">
              Marketplace
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#4F46E5] montserrat">
              Secure
            </div>
            <div className="text-gray-400 text-sm mt-2 urbanist">
              Transactions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
