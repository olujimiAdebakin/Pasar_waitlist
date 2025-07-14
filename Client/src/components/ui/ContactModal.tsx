import React, { useState } from "react";

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      setSubmitting(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      setSubmitting(false);
      return;
    }

    // Simulate sending (replace with your API call if needed)
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-xl">
      <div className="bg-[#141416] rounded-xl p-8 w-full max-w-md shadow-lg relative">
        <button
          className="absolute text-2xl font-bold text-white top-4 right-4"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="mb-4 text-2xl font-bold text-white">Contact Us</h2>
        {success ? (
          <div className="mb-4 text-green-400">
            Thank you! We'll get back to you soon.
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#23232a] text-white p-3 rounded-lg outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={submitting}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#23232a] text-white p-3 rounded-lg outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting}
              required
            />
            <textarea
              placeholder="Your Message"
              className="bg-[#23232a] text-white p-3 rounded-lg outline-none resize-none"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={submitting}
              required
            />
            <button
              type="submit"
              className="bg-[#4F46E5] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#4338CA] active:bg-[#4F46E5] transition-all urbanist"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
        <p className="mt-6 text-sm text-center text-white">
          Or email us at{" "}
          <a
            href="mailto:pasarhq@gmail.com"
            className="text-[#4F46E5] underline"
          >
            pasarhq@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
