import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import PersistentDrawerLeft from "./MUI/js/drawerEx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/drawer" element={<PersistentDrawerLeft />} />
    </Routes>
  );
}

export default Router;
