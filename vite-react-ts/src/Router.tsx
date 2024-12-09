import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./routes/Main";
import TailwindLib from "./routes/TailwindLib";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tailwindLib" element={<TailwindLib />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;