import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import MovieSearch from "./customHooks/movieSearch";

function App() {
  return(
    <>
      <h1>영화 앱</h1>

      <Router>
        <Routes>
          <Route path="/searchMovie" element={<MovieSearch />}></Route>
          <Route path="/paginationFull" element={<MovieApp />}></Route>
          <Route path="/movie" element={<Movies />}></Route>
        </Routes>
      </Router>
    </>
  )
  
}

export default App;
