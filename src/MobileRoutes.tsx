import { Route, Routes } from "react-router-dom";
import { MobileAboutMe } from "./pages/mobile/MobileAboutMe";
import { MobileCoding } from "./pages/mobile/MobileCoding";
import { MobileContact } from "./pages/mobile/MobileContact";
import { MobileDesign } from "./pages/mobile/MobileDesign";
import { MobileHome } from "./pages/mobile/MobileHome";

export function MobileRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MobileHome />} />
      <Route path="/design" element={<MobileDesign />} />
      <Route path="/coding" element={<MobileCoding />} />
      <Route path="/about-me" element={<MobileAboutMe />} />
      <Route path="/contact" element={<MobileContact />} />
    </Routes>
  );
}
