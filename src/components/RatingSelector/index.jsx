import React from "react";
import StarRatings from 'react-star-ratings';


export const RatingSelector = ({onChangeRating, rating}) => {
    return <StarRatings
    rating={rating}
    starRatedColor="yellow"
    changeRating={onChangeRating}
    numberOfStars={5}
    name='rating'
  />
}