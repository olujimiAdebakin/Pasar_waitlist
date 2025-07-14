import { useState } from "react";

const WEBSITE_LINK = "https://pasarhq.com";

export default function CongratsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(WEBSITE_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const shareTo = (platform: string) => {
    const encoded = encodeURIComponent(WEBSITE_LINK);
    let url = "";
    if (platform === "whatsapp") url = `https://wa.me/?text=${encoded}`;
    if (platform === "facebook")
      url = `https://www.facebook.com/sharer/sharer.php?u=${encoded}`;
    if (platform === "instagram")
      url = `https://www.instagram.com/?url=${encoded}`;
    if (platform === "twitter")
      url = `https://twitter.com/intent/tweet?url=${encoded}`;
    window.open(url, "_blank");
  };
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-xl">
      <div className="relative w-full  md:h-[400px] md:w-[750px] flex justify-center items-center p-8 text-center bg-[#030314] shadow-[0px_0px_10px_rgba(255,255,255,0.8)] rounded-2xl">
        <div>
          <button
            className="absolute text-2xl font-bold text-gray-500 top-4 right-4"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
          <h2 className="text-2xl font-bold text-[#eeedf9] mb-4">
            🎉 Congratulations
          </h2>
          <p className="mb-6 text-[#f2f2f2]">
            Thanks for signing up for Pasar — you're officially on the waitlist.
            We're thrilled to have you onboard as we build the next generation
            of decentralized commerce.
          </p>
          <div className="flex flex-col items-center justify-center w-full">
            <p className=" text-[#f2f2f2]  text-start">
              📬 Check your inbox for confirmation and updates
            </p>
            <p className="mb-6 text-[#f2f2f2] text-start">
              🗣️ Spread the word — refer friends and earn rewards (coming soon!)
            </p>
          </div>
          <div className="relative flex flex-col items-center gap-2 mb-4 overflow-hidden">
            <span className="w-full px-3 py-2 font-mono text-sm break-all bg-gray-100 border border-gray-300 rounded-lg">
              {WEBSITE_LINK}
            </span>
            <button
              className="bg-[#d7d6d6] flex justify-center items-center text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#e8e8e8] transition absolute right-0 top-0"
              onClick={handleCopy}
            >
              <img
                src={
                  copied
                    ? "/icons/icons8-checked-50.png"
                    : "/icons/icons8-copy-24.png"
                }
                alt={copied ? "copy" : "Copied"}
                onClick={handleCopy}
                className="inline-block w-6 h-6 mr-2"
              />
            </button>
          </div>
          <div className="flex justify-center gap-4 mb-2">
            <button
              className="px-3 py-2 font-semibold text-white transition bg-green-500 rounded-lg hover:bg-green-600"
              onClick={() => shareTo("whatsapp")}
            >
              <img src="/icons/whatsapp-icon.svg" alt="whatsapp" />
            </button>
            <button
              className="px-3 py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
              onClick={() => shareTo("facebook")}
            >
              <img src="/icons/facebook-icon.svg" alt="facebook" />
            </button>
            <button
              className="px-3 py-2 font-semibold text-white transition bg-pink-500 rounded-lg hover:bg-pink-600"
              onClick={() => shareTo("instagram")}
            >
              <img src="/icons/instagram-icon.svg" alt="instagram" />
            </button>
            <button
              className="px-3 py-2 font-semibold text-white transition bg-[#2a2a2a] rounded-lg hover:bg-pink-600"
              onClick={() => shareTo("twitter")}
            >
              <img src="/icons/twitter.svg" alt="twitter" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
