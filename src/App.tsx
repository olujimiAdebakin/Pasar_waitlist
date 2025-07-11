import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
