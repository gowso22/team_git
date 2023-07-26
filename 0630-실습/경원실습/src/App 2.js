import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Movies from "./page/movies";
import MovieDetails from "./page/movieDetails";
import Chat from "./Chat";


function App() {
  return (
    <div>

    <Router>
      <Routes>
        <Route path="/" element={<Movies />}></Route>
        <Route path="/moviedeails/:id" element={<MovieDetails />}></Route>
      </Routes>
    </Router>
    <Chat/>
    </div>
    
    
  );
}

export default App;
