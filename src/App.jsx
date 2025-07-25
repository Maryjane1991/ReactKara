import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Secondpage from "./pages/Secondpage";

const App = () => {
  return (
    <div className="overflow-x-hidden font-mont scroll-smooth">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Secondpage" element={<Secondpage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
