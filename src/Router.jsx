import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { News } from "./pages/News";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detailedNews" element={<News />} />
    </Routes>
  );
}
