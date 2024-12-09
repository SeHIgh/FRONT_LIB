import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import PersistentDrawerLeft from "./MUI/js/drawerEx";
import ProfileModal from "./MUI/js/ProfileModal";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/drawer" element={<PersistentDrawerLeft />} />
      <Route path="/profile_modal" element={<ProfileModal />} />
    </Routes>
  );
}

export default Router;
