import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NewPage from "./Components/NewPage";
import ShowPage from "./Components/ShowPage";
import BlogFirst from "./Components/Blog1";
import BlogSecond from "./Components/Blog2";
import BlogThird from "./Components/Blog3";
import BlogFourth from "./Components/Blog4";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="NewPage" element={<NewPage />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="ShowPage" element={<ShowPage />} />
        <Route path="Blog1" element={<BlogFirst />} />
        <Route path="Blog2" element={<BlogSecond />} />
        <Route path="Blog3" element={<BlogThird />} />
        <Route path="Blog4" element={<BlogFourth />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
