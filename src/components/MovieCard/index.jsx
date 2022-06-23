import React from "react";
import { Card } from "react-bootstrap";
import "./index.css";

export function MovieCard({ movie }) {
  return (
    <Card className="movie-card" >
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
            {/* {movie.overview} */}
          </Card.Text>
      </Card.Body>
    </Card>
  );
}
