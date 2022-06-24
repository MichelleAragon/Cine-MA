import React from "react";
import { Card } from "react-bootstrap";
import "./index.css";

export function MovieCard({ movie, setMovieToShow }) {
  const handleImageClick = () => {
    setMovieToShow(movie.id)
  }

  return (
    <Card className="movie-card" bg="dark" text="white" border="dark" >
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        onClick= {handleImageClick}
      />
      <Card.Body className="card-content">
        <Card.Subtitle className="card-subtitle" >
          {movie.title}
          </Card.Subtitle>
        <Card.Text hidden>
            {movie.overview}
          </Card.Text>
      </Card.Body>
    </Card>
  );
}


