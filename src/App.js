// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Canvas from "./Canvas"; //
import Navigation from "./Navigation"; // 네비게이션 컴포넌트

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solve" element={<Canvas />} />
        <Route path="*" element={<NotFound />} /> {/* 404 페이지 */}
      </Routes>
    </Router>
  );
}

export default App;
