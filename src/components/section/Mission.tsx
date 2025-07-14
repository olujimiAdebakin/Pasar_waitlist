import React from "react";

const Mission: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#09090F] to-[#0F0F1A] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white montserrat mb-8">
              Our{" "}
              <span className="text-[#4F46E5] bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-lg text-gray-300 urbanist leading-relaxed mb-8">
              To democratize commerce by creating an intelligent platform where
              trust is built through technology, transactions are seamless, and
              every participant thrives in a fair marketplace ecosystem.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#4F46E5] rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white montserrat mb-2">
                    AI-Powered Intelligence
                  </h3>
                  <p className="text-gray-400 urbanist">
                    Advanced algorithms that understand your needs and provide
                    personalized shopping experiences.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#4F46E5] rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white montserrat mb-2">
                    Trust-First Approach
                  </h3>
                  <p className="text-gray-400 urbanist">
                    Built-in reputation systems and secure escrow services that
                    protect every transaction.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#4F46E5] rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white montserrat mb-2">
                    Global Accessibility
                  </h3>
                  <p className="text-gray-400 urbanist">
                    Breaking down barriers to enable commerce across borders and
                    communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Visual element */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-2xl p-8 border border-purple-800/30 backdrop-blur-sm h-[500px] flex items-center">
              <div className="text-center w-full">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-white"
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
                </div>
                <h3 className="text-2xl font-bold text-white montserrat mb-4">
                  Innovation at Core
                </h3>
                <p className="text-gray-300 urbanist leading-relaxed">
                  We're not just building another marketplace. We're crafting
                  the future of how people discover, trust, and trade with each
                  other in the digital age.
                </p>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
