import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./component/Home.jsx";
import Series from "./component/Series.jsx";
import Movie from "./component/Movie.jsx";
import More from "./component/More.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="movie" element={<Movie />} />
      <Route path="series" element={<Series />} />
      <Route path="more/:useId" element={<More />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
