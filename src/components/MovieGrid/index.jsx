import React, {useState} from "react";
import { MovieCard } from "../MovieCard";
import { RatingSelector } from "../RatingSelector";

const ratingToVoteAverage = (selectedRating) => {
  switch(selectedRating) {
    case 1:
      return [0,2]
    case 2:
      return [2,4]
    case 3:
      return [4,6]
    case 4: 
      return [6,8]
    case 5:
      return [8, 10]
    default:
      return null 
  }
}

export function MoviesGrid({ movies }) {
  const [selectedRating, setSelectedRating] = useState(0)
  const handleChangeRating = (value) => {
    if (value === selectedRating) {
      setSelectedRating(0)
    } else {
      setSelectedRating(value);
    }
  }

  const filterMovies = () => movies.filter(movie => {
    const selectedVoteAverage = ratingToVoteAverage(selectedRating)
    if(selectedVoteAverage) {
      return movie.vote_average > selectedVoteAverage[0] && movie.vote_average < selectedVoteAverage[1]
    } else {
      return true
    }
  })

  return (
    <div className="list-popular-movies">
      <RatingSelector onChangeRating={handleChangeRating} rating={selectedRating}/>
      <p className="App-body-popular-movies">Popular Movies</p>
      <p>View all</p>
      <ul>
        {movies.length === 0 && <span>Loading...</span>}
        {movies.length > 0 &&
         filterMovies().map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </ul>
    </div>
  );
}
