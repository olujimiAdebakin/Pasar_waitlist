import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Team from "./pages/Team";
import { openWhatsAppChat } from "./utils/lib";
import Layout from "./components/layout/Layout";
function App() {
  const phone = import.meta.env.VITE_PHONE;
  const message = import.meta.env.VITE_MESSAGE;
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 700); // duration matches animation
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          <div className="fixed z-50 bottom-5 right-5">
            <button
              className={`flex items-center gap-2 px-4 py-3 font-bold text-white transition bg-green-500 rounded-full shadow-lg hover:bg-green-600 ${
                shake ? "animate-shake" : ""
              }`}
              onClick={() => openWhatsAppChat(phone, message)}
            >
              <img
                src="/icons/whatsapp-icon.svg"
                alt="Chat with us"
                className="w-6 h-6"
              />
            </button>
          </div>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
