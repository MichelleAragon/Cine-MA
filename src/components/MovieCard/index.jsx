import React from "react";
import { Card } from "react-bootstrap";
import "./index.css";

export function MovieCard({ movie }) {
  return (
    <Card className="movie-card" bg="dark" text="white" >
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
      />
      <Card.Body className="card-content">
        <Card.Subtitle classclassName="card-title" >
          {movie.title}
          </Card.Subtitle>
        <Card.Text>
            {/* {movie.overview} */}
          </Card.Text>
      </Card.Body>
    </Card>
  );
}
