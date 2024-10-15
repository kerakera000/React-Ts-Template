import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;


