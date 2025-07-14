import React from "react";

const Advisors: React.FC = () => {
  const advisors = [
    {
      name: "Dr. Michael Chang",
      role: "AI & Blockchain Advisor",
      company: "Former VP Engineering at Meta",
      bio: "Leading expert in AI applications for financial technology and blockchain scalability.",
      gradient: "from-[#4F46E5] to-[#7C3AED]",
    },
    {
      name: "Lisa Rodriguez",
      role: "Global Commerce Advisor",
      company: "Former Head of International at Shopify",
      bio: "Pioneer in cross-border e-commerce with deep expertise in emerging markets.",
      gradient: "from-[#7C3AED] to-[#3B82F6]",
    },
    {
      name: "James Wilson",
      role: "Financial Technology Advisor",
      company: "Former Chief Risk Officer at Square",
      bio: "Fintech veteran specializing in payment systems and regulatory compliance.",
      gradient: "from-[#3B82F6] to-[#10B981]",
    },
    {
      name: "Dr. Aisha Okonkwo",
      role: "Africa Markets Advisor",
      company: "Co-founder of Flutterwave",
      bio: "Expert in African financial infrastructure and mobile commerce solutions.",
      gradient: "from-[#10B981] to-[#F59E0B]",
    },
  ];

  return (
    <section className="min-h-screen bg-[#09090F] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white montserrat mb-8">
            Advisory{" "}
            <span className="text-[#4F46E5] bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Board
            </span>
          </h2>
          <p className="text-xl text-gray-300 urbanist max-w-4xl mx-auto leading-relaxed">
            Industry leaders and domain experts guiding Pasar's strategic
            direction and growth.
          </p>
        </div>

        {/* Advisors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-2xl p-8 border border-purple-800/30 backdrop-blur-sm hover:border-[#4F46E5]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4F46E5]/20"
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-6">
                {/* Avatar */}
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${advisor.gradient} p-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                >
                  <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center text-white text-lg font-bold montserrat">
                    {advisor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white montserrat mb-1">
                    {advisor.name}
                  </h3>
                  <p
                    className={`text-sm font-semibold bg-gradient-to-r ${advisor.gradient} bg-clip-text text-transparent mb-2 urbanist`}
                  >
                    {advisor.role}
                  </p>
                  <p className="text-gray-400 text-sm urbanist">
                    {advisor.company}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-300 urbanist leading-relaxed">
                {advisor.bio}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/5 to-[#7C3AED]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisors;
