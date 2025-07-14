import React, { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "What is Pasar?",
    answer:
      "Pasar is a secure online marketplace where you can buy and sell products using fiat (cash, card, bank) or crypto (like USDT) — all protected by smart escrow technology. It’s built for both everyday users and crypto-savvy sellers.",
  },
  {
    question: "Do I need crypto to use Pasar?",
    answer:
      "No! You can shop using card or bank transfer. Crypto is just one of the payment options.",
  },
  {
    question: "What makes Pasar different?",
    answer:
      "Escrow-first protection, support for both fiat and crypto, AI dispute resolution, smart wallets for sellers, and full transparency via PasarScan.",
  },
  {
    question: "Is it safe?",
    answer:
      "Absolutely. Your money is locked in escrow and only released when you confirm delivery. If something’s wrong, you can open a dispute and we’ll resolve it fairly.",
  },
  {
    question: "Who can join?",
    answer:
      "Both buyers and sellers can join Pasar. If you’re selling, you’ll complete a short onboarding form. If you’re buying, just sign up and start browsing.",
  },
  {
    question: "What happens after I join the waitlist?",
    answer:
      "You’ll be first in line for early access, product updates, and maybe even exclusive rewards. We’ll notify you by email when it’s your turn to onboard.",
  },
  {
    question: "Does it cost anything to join?",
    answer:
      "Nope. Joining the waitlist is 100% free. No hidden fees, no commitments.",
  },
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="max-w-3xl px-4 py-16 mx-auto">
      <h2 className="mb-10 text-3xl font-bold text-center text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div key={index} className="pb-4 border-b">
            <button
              className="flex items-center justify-between w-full text-lg font-medium text-left text-gray-400 hover:text-indigo-600 focus:outline-none"
              onClick={() => toggle(index)}
            >
              {item.question}
              <span className="ml-4 text-xl transition-all duration-500 ease-in-out">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeIndex === index
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0 mt-0"
              }`}
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px",
                opacity: activeIndex === index ? 1 : 0,
              }}
            >
              <div className="text-base text-gray-600">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
