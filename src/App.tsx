import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "@pages/HomePage/HomePage.page";
import SolutionPage from "@pages/Solutions.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/demowebsite" element={<HomePage/>} />
      <Route path="demowebsite/solutions" element={<SolutionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
