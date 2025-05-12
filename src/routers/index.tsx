import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Home } from "../pages/home";
import { AboutPomodoro } from "../pages/AboutPomodoro";
import { NotFound } from "../pages/NotFound";
import { useEffect } from "react";
import { History } from "../pages/history";
import { Settings } from "../pages/settings";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-pomodoro" element={<AboutPomodoro />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
