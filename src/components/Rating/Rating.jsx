import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "/src/assets/css/rating/rating.css";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className='rating__container'>
      {[...Array(5)].map((_, i) => {
        let currentRating = i + 1;
        return (
          <label key={i}>
            <input
              type='radio'
              name='rating'
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              size={20}
              className='rating__star'
              color={currentRating <= (hover || rating) ? "#ffc107" : "#aaaaaa"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <span className='visually-hidden'>({rating}) Calificar</span>
    </div>
  );
};

export default Rating;
