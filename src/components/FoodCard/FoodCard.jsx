import { useState } from 'react';
import './FoodCard.css';

export default function FoodCard({ image, name, restaurant, price }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="food-card">
      <div className="food-card__image">
        <img src={image} alt={name} />
        <button
          className="food-card__favorite"
          onClick={() => setLiked(!liked)}
          aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="food-card__body">
        <h3 className="food-card__name">{name}</h3>
        <div className="food-card__restaurant">
          <img src="images/icongps.svg" alt="Location" />
          <span>{restaurant}</span>
        </div>
        <div className="food-card__footer">
          <span className="food-card__price">{price}</span>
          <button className="food-card__order-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
}
