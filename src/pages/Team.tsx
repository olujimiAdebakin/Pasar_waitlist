export default function Team() {
  return (
    <div className="min-h-screen bg-[#09090F] flex flex-col items-center justify-center px-6 py-20 pt-32">
      <h1 className="mb-8 text-6xl md:text-7xl font-bold text-white montserrat text-center">
        Our Team
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-full mb-8"></div>
      <p className="max-w-4xl text-xl text-gray-300 urbanist text-center leading-relaxed">
        This page introduces our team members. It highlights their roles,
        expertise, and contributions to the project, showcasing the diverse
        skills and backgrounds that make up our team.
      </p>

      <div className="mt-16 text-center">
        <p className="text-gray-400 urbanist">
          👥 Coming Soon - Team member profiles will be added here
        </p>
      </div>
    </div>
  );
}
