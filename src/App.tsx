import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { Coding } from "./pages/Coding";
import { Contact } from "./pages/Contact";
import { Design } from "./pages/Design";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
