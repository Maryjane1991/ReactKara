import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Secondpage from "./pages/Secondpage";
import Navbar from "./components/Navbar";
import { DataProvider } from "./components/context/DataContext";
import { ColorProvider } from "./components/context/ColorContext";
import Footer from "./components/Footer";
import Services from "./components/Services";
import sampleData from "./components/mockData/sampleData";

const App = () => {
  return (
    <div className="overflow-x-hidden font-mont scroll-smooth">
      <DataProvider>
        <ColorProvider>
          <Router>
            <Routes>
              <Route>
              </Route>
            </Routes>
            <sampleData />
            <Navbar />
            <Footer />
            <Services />
          </Router>
        </ColorProvider>
      </DataProvider>
    </div>
  );
};

export default App;
