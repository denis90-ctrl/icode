import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { initTelegram } from "./lib/telegram";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Tariffs from "./pages/Tariffs";
import About from "./pages/About";
import Parents from "./pages/Parents";
import Children from "./pages/Children";
import BottomNavigation from "./components/BottomNavigation";

export default function App() {
  useEffect(() => { initTelegram(); }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/tariffs" element={<Tariffs />} />
        <Route path="/about" element={<About />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/children" element={<Children />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BottomNavigation />
    </div>
  );
}
