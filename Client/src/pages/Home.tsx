import CTA from "../components/section/CTA";
import Hero from "../components/section/Hero";
import FaqSection from "../components/section/FAQ";
import HowItWorks from "../components/section/HowItWorks";

import { createContext, useEffect, useState, useRef } from "react";
import axios from "axios";

export const FocusInputContext = createContext<(() => void) | undefined>(
  undefined
);

export default function Home() {
  const [emailCount, setEmailCount] = useState<number | null>(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const BackendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(BackendUrl);
        setEmailCount(response.data.data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [BackendUrl]);
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when component mounts
  });
  return (
    <FocusInputContext.Provider value={focusInput}>
      <div className="w-full">
        <Hero inputRef={inputRef} emailCount={emailCount} />
        <HowItWorks />
        <FaqSection />
        <CTA />
      </div>
    </FocusInputContext.Provider>
  );
}
