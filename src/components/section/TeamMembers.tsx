import React from "react";

const TeamMembers: React.FC = () => {
  const teamMembers = [
    {
      name: "Olayiwola Nurudeen",
      role: "Backend Engineer",
      bio: "Experienced backend developer building robust and scalable server-side solutions for complex applications.",
      image: "/team/olayiwola-nurudeen.jpg", // Placeholder path
      gradient: "from-[#7C3AED] to-[#3B82F6]",
    },
    {
      name: "Sherif Sani",
      role: "Frontend Engineer",
      bio: "Former software engineer at KPMG, designing seamless payment experiences for global markets.",
      image: "/team/marcus-rodriguez.jpg", // Placeholder path
      gradient: "from-[#3B82F6] to-[#10B981]",
    },
    {
      name: "Olujimi Adebakin",
      role: "Blockchain Developer",
      bio: "Frontend developer skilled in React, Next.js, and TypeScript. Blockchain dev proficient in Solidity, Cairo, and Rust. Builds on chain.",
      image: "/team/olujimi-adebakin.jpg", // Placeholder path
      gradient: "from-[#10B981] to-[#F59E0B]",
    },
    {
      name: "Ayodeji",
      role: "Backend Developer",
      bio: "I'm Ayodeji, a fullstack engineer. I will be working as a backend dev on Pasar.",
      image: "/team/ayodeji.jpg", // Placeholder path
      gradient: "from-[#F59E0B] to-[#EF4444]",
    },
    {
      name: "David Kim",
      role: "Head of Security",
      bio: "Cybersecurity expert from Tesla, ensuring bulletproof protection for all transactions.",
      image: "/team/david-kim.jpg", // Placeholder path
      gradient: "from-[#EF4444] to-[#EC4899]",
    },
    {
      name: "Lynda Obitolo",
      role: "Product Designer",
      bio: "I'm passionate about creating intuitive and accessible experiences that enhance user interactions.",
      image: "/team/lynda-obitolo.jpg", // Placeholder path
      gradient: "from-[#EC4899] to-[#8B5CF6]",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#09090F] to-[#0F0F1A] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white montserrat mb-8">
            The{" "}
            <span className="text-[#4F46E5] bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 urbanist max-w-4xl mx-auto leading-relaxed">
            Meet the visionaries and innovators driving Pasar's mission to
            revolutionize global commerce.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-2xl p-8 border border-purple-800/30 backdrop-blur-sm hover:border-[#4F46E5]/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#4F46E5]/20"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div
                  className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${member.gradient} p-1 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center text-white text-2xl font-bold montserrat">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                {/* Status indicator */}
                {/* <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-[#1E1B4B] flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                </div> */}
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white montserrat mb-2">
                  {member.name}
                </h3>
                <p
                  className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-4 urbanist`}
                >
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm urbanist leading-relaxed">
                  {member.bio}
                </p>
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

export default TeamMembers;
