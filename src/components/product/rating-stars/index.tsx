import React from 'react';

export const RatingStars = (props: { rating: number; noOfRatings?: number }) => {
  const { rating, noOfRatings = '' } = props;
  const starRating = isNaN(rating) ? 0 : rating;
  const stars = Math.round(starRating * 2) / 2;

  return (
    <div className='product_ratting'>
      <ul className='d-flex justify-content-center'>
        {[...Array.from({ length: 5 }, (_, i) => i)]?.map((index) => {
          let className = '';
          if (index < stars) {
            if (stars - 0.5 === index) {
              className = '-half';
            } else {
              className = '';
            }
          } else {
            className = '-outline';
          }

          return (
            <li key={index}>
              <a style={{ color: '#ff9806' }}>
                <i className={`ion-android-star${className}`} />
              </a>
            </li>
          );
        })}
        {noOfRatings && (
          <li>
            <span>({noOfRatings})</span>
          </li>
        )}
      </ul>
    </div>
  );
};
