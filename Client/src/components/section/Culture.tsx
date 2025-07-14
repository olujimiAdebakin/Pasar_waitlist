import React from "react";

const Culture: React.FC = () => {
  const cultureValues = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Innovation First",
      description:
        "We push boundaries and challenge conventions to create breakthrough solutions.",
      color: "from-[#4F46E5] to-[#7C3AED]",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Diverse Perspectives",
      description:
        "Our global team brings unique insights that drive creative problem-solving.",
      color: "from-[#7C3AED] to-[#3B82F6]",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      title: "Growth Mindset",
      description:
        "We invest in continuous learning and professional development for everyone.",
      color: "from-[#3B82F6] to-[#10B981]",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Work-Life Balance",
      description:
        "We believe great work comes from happy, fulfilled team members.",
      color: "from-[#10B981] to-[#F59E0B]",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0F0F1A] to-[#09090F] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white montserrat mb-8">
            Our{" "}
            <span className="text-[#4F46E5] bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Culture
            </span>
          </h2>
          <p className="text-xl text-gray-300 urbanist max-w-4xl mx-auto leading-relaxed">
            The values and principles that define how we work, collaborate, and
            innovate together.
          </p>
        </div>

        {/* Culture values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cultureValues.map((value, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-2xl p-8 border border-purple-800/30 backdrop-blur-sm hover:border-[#4F46E5]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {value.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white montserrat mb-4">
                {value.title}
              </h3>
              <p className="text-gray-300 urbanist leading-relaxed text-lg">
                {value.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/5 to-[#7C3AED]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Join our team CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-2xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white montserrat mb-6">
                Ready to Join Our Mission?
              </h3>
              <p className="text-xl text-white/90 urbanist mb-8 max-w-2xl mx-auto">
                We're always looking for passionate individuals who want to
                shape the future of global commerce. Join us and make an impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#4F46E5] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 urbanist">
                  View Open Positions
                </button>
                <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#4F46E5] transition-colors duration-300 urbanist">
                  Learn More
                </button>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
