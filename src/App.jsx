import React, { useState, useEffect } from "react";

import { discoverMoviesService, searchMoviesService } from "./services";
import { MoviesGrid } from "./components/MovieGrid";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length === 0) {
      discoverMoviesService().then(({ results }) => {
        setMovies(results);
      });
    }
  }, [movies]);

  const onSubmitQuery = (value) => {
    if (typeof value === "string" && !value) {
      setMovies([]);
    } else {
      searchMoviesService(value).then(({ results }) => {
        setMovies(results);
      });
    }
  };

  return (
    <div className="App-container">
      <Header onSubmitQuery={onSubmitQuery} />
      <MoviesGrid movies={movies} />
    </div>
  );
}

export default App;
