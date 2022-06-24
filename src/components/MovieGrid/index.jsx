import React, { useState } from "react";
import { CardGroup, Row, Col } from "react-bootstrap";
import { MovieModal } from "../Modal";
import { MovieCard } from "../MovieCard";
import { RatingSelector } from "../RatingSelector";
import "./index.css";

const ratingToVoteAverage = (selectedRating) => {
  switch (selectedRating) {
    case 1:
      return [0, 2];
    case 2:
      return [2, 4];
    case 3:
      return [4, 6];
    case 4:
      return [6, 8];
    case 5:
      return [8, 10];
    default:
      return null;
  }
};

export function MoviesGrid({ movies }) {
  const [selectedRating, setSelectedRating] = useState(0);
  const [show, setShow] = useState(false);
  const [movieToShow, setMovieToShow] = useState(null)

  const handleShowMovieModal = (movieId) => {
    setMovieToShow(movies.find((movie) => movie.id === movieId))
    setShow(true)
  }
  const handleModalClose = () => {
    setShow(false)
    setMovieToShow(null)
  }

  const handleChangeRating = (value) => {
    if (value === selectedRating) {
      setSelectedRating(0);
    } else {
      setSelectedRating(value);
    }
  };

  const filterMovies = () =>
    movies.filter((movie) => {
      const selectedVoteAverage = ratingToVoteAverage(selectedRating);
      if (selectedVoteAverage) {
        return (
          movie.vote_average > selectedVoteAverage[0] &&
          movie.vote_average < selectedVoteAverage[1]
        );
      } else {
        return true;
      }
    });

  return (
    <>
      <RatingSelector
        onChangeRating={handleChangeRating}
        rating={selectedRating}
      />
      {movieToShow && <MovieModal show={show} movie={movieToShow} handleClose={handleModalClose} />}
      <CardGroup className="cards-container">
        {/* {movies.length === 0 && <span>Loading...</span>} */}
        <Row xs={2} md={6} className="g-3 movies-container">
          {movies.length > 0 &&
            filterMovies().map((movie) => (
              <Col className="movie-container">
                <MovieCard key={movie.id} movie={movie} setMovieToShow={handleShowMovieModal} />
              </Col>
            ))}
        </Row>
      </CardGroup>
    </>
  );
}


