import React from "react";
import StarRatings from 'react-star-ratings';
import './index.css';


export const RatingSelector = ({onChangeRating, rating}) => {
    return (
      <div className="rating-selector"> 
        <StarRatings className="star-ratings"
          starDimension="30px"
          starHoverColor="yellow"
          rating={rating}
          starRatedColor="yellow"
          changeRating={onChangeRating}
          numberOfStars={5}
          name='rating'
        />
      </div>
   )
}

