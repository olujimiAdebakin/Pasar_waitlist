import { useEffect } from "react";
export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when component mounts
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-4xl font-bold">Team</h1>
      <p className="max-w-2xl text-lg text-center">
        This page introduces our team members. It highlights their roles,
        expertise, and contributions to the project, showcasing the diverse
        skills and backgrounds that make up our team.
      </p>
    </div>
  );
}
