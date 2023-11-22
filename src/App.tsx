import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Design } from "./pages/Design";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
