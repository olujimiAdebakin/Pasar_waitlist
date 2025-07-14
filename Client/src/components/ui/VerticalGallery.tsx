import React from "react";

interface VerticalGalleryProps {
  items: string[];
  direction: "up" | "down";
  speed?: number;
  className?: string;
}

const VerticalGallery: React.FC<VerticalGalleryProps> = ({
  items,
  direction,
  speed = 50,
  className = "",
}) => {
  const animationDirection = direction === "up" ? "scroll-up" : "scroll-down";
  const animationDuration = `${speed}s`;

  return (
    <div className={`overflow-hidden h-full ${className}`}>
      <div
        className={`flex flex-col gap-4 animate-${animationDirection}`}
        style={{
          animationDuration,
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-lg p-6 border border-purple-800/30 backdrop-blur-sm"
          >
            <div className="text-white text-sm urbanist leading-relaxed">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalGallery;
