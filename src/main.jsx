import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./jsx/MainPage.jsx";
import PostWritePage from "./jsx/PostWritePage.jsx";
import PostViewPage from "./jsx/PostViewPage.jsx";
import "./global.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="write" element={<PostWritePage />} />
      <Route path="post/:id" element={<PostViewPage />} />
    </Routes>
  </BrowserRouter>
);
