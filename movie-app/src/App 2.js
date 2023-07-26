import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Movies from "./page/movies";
import MovieDetails from "./page/movieDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movies />}></Route>
        <Route path="/moviedeails/:id" element={<MovieDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
