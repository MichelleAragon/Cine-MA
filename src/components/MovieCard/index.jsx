import React from "react";

export function MovieCard({ movie }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt=""
      />
      <span>{movie.title}</span>
      <div>
        <span>{movie.vote_average}</span>
        
      </div>
    </div>
  );
}
