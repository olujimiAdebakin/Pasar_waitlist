import React from "react";

const TeamMembers: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Co-Founder & CEO",
      bio: "Former blockchain architect at Google, leading Pasar's vision for decentralized commerce.",
      image: "/team/alex-chen.jpg", // Placeholder path
      gradient: "from-[#4F46E5] to-[#7C3AED]",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Johnson",
      role: "Co-Founder & CTO",
      bio: "AI researcher with 10+ years at Microsoft, architecting Pasar's intelligent systems.",
      image: "/team/sarah-johnson.jpg", // Placeholder path
      gradient: "from-[#7C3AED] to-[#3B82F6]",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Sherif Sani",
      role: "Frontend Engineer",
      bio: "Former software engineer at KPMG, designing seamless payment experiences for global markets.",
      image: "/team/marcus-rodriguez.jpg", // Placeholder path
      gradient: "from-[#3B82F6] to-[#10B981]",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Priya Patel",
      role: "Head of Engineering",
      bio: "Full-stack architect from Amazon, building scalable infrastructure for millions of users.",
      image: "/team/priya-patel.jpg", // Placeholder path
      gradient: "from-[#10B981] to-[#F59E0B]",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "David Kim",
      role: "Head of Security",
      bio: "Cybersecurity expert from Tesla, ensuring bulletproof protection for all transactions.",
      image: "/team/david-kim.jpg", // Placeholder path
      gradient: "from-[#F59E0B] to-[#EF4444]",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Emma Thompson",
      role: "Head of Design",
      bio: "Design director from Airbnb, crafting beautiful and intuitive user experiences.",
      image: "/team/emma-thompson.jpg", // Placeholder path
      gradient: "from-[#EF4444] to-[#EC4899]",
      social: {
        linkedin: "#",
        twitter: "#",
      },
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
                <p className="text-gray-300 text-sm urbanist leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="flex justify-center gap-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
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
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
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
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="w-8 h-8 bg-[#333] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
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
