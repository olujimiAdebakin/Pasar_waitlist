import React from "react";

const Advisors: React.FC = () => {
  const advisors = [
    {
      name: "Dr. Michael Chang",
      role: "AI & Blockchain Advisor",
      company: "Former VP Engineering at Meta",
      bio: "Leading expert in AI applications for financial technology and blockchain scalability.",
      gradient: "from-[#4F46E5] to-[#7C3AED]",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Lisa Rodriguez",
      role: "Global Commerce Advisor",
      company: "Former Head of International at Shopify",
      bio: "Pioneer in cross-border e-commerce with deep expertise in emerging markets.",
      gradient: "from-[#7C3AED] to-[#3B82F6]",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "James Wilson",
      role: "Financial Technology Advisor",
      company: "Former Chief Risk Officer at Square",
      bio: "Fintech veteran specializing in payment systems and regulatory compliance.",
      gradient: "from-[#3B82F6] to-[#10B981]",
      social: {
        linkedin: "#",
      },
    },
    {
      name: "Dr. Aisha Okonkwo",
      role: "Africa Markets Advisor",
      company: "Co-founder of Flutterwave",
      bio: "Expert in African financial infrastructure and mobile commerce solutions.",
      gradient: "from-[#10B981] to-[#F59E0B]",
      social: {
        linkedin: "#",
        twitter: "#",
      },
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
              <p className="text-gray-300 urbanist leading-relaxed mb-6">
                {advisor.bio}
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                {advisor.social.linkedin && (
                  <a
                    href={advisor.social.linkedin}
                    className="w-8 h-8 bg-[#0A66C2] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
                {advisor.social.twitter && (
                  <a
                    href={advisor.social.twitter}
                    className="w-8 h-8 bg-[#1DA1F2] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                )}
              </div>

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
