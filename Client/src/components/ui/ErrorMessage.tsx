import { useEffect } from "react";

export default function ErrorMessage({
  message,
  onClose,
}: {
  message: string;
  onClose?: () => void;
}) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;
  return (
    <div className="fixed z-50 flex items-center gap-4 px-6 py-3 font-medium text-white rounded-lg shadow-lg bg-indigo-950 top-[70px] left-2 animate-fade-in rethink-sans">
      <div className="w-[10px] h-[35px] rounded-full -ml-2 bg-purple-700"></div>{" "}
      <span>{message}</span>
      {onClose && (
        <button
          className="ml-2 text-lg font-bold text-white focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      )}
    </div>
  );
}
