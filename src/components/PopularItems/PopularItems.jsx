import { useState, useRef } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import './PopularItems.css';

const items = [
  { id: 1, image: `${import.meta.env.BASE_URL}images/gamburgerimagephoto.png`, name: 'Cheese Burger', restaurant: 'Burger Arena', price: '$3.88' },
  { id: 2, image: `${import.meta.env.BASE_URL}images/toffescakeimage.png`, name: "Toffe's Cake", restaurant: 'Top Sticks', price: '$4.00' },
  { id: 3, image: `${import.meta.env.BASE_URL}images/dancake.png`, name: 'Dancake', restaurant: 'Cake World', price: '$1.99' },
  { id: 4, image: `${import.meta.env.BASE_URL}images/crispysandwich.png`, name: 'Crispy Sandwich', restaurant: 'Fastfood Dine', price: '$3.00' },
  { id: 5, image: `${import.meta.env.BASE_URL}images/Thaisoup.png`, name: 'Thai Soup', restaurant: 'Foody Man', price: '$2.79' },
  { id: 6, image: `${import.meta.env.BASE_URL}images/gamburgerimagephoto.png`, name: 'Double Burger', restaurant: 'Burger King', price: '$5.49' },
  { id: 7, image: `${import.meta.env.BASE_URL}images/toffescakeimage.png`, name: 'Chocolate Cake', restaurant: 'Sweet Spot', price: '$3.50' },
];

export default function PopularItems() {
  const [offset, setOffset] = useState(0);
  const sliderRef = useRef(null);

  const cardWidth = 280 + 24; // card width + gap

  const handlePrev = () => {
    setOffset(prev => Math.min(prev + cardWidth, 0));
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    const maxScroll = -(sliderRef.current.scrollWidth - sliderRef.current.parentElement.offsetWidth);
    setOffset(prev => Math.max(prev - cardWidth, maxScroll));
  };

  return (
    <section className="popular">
      <div className="container">
        <div className="popular__header">
          <h2 className="popular__title">Popular Items</h2>
          <div className="popular__controls">
            <button className="popular__arrow" onClick={handlePrev} aria-label="Previous">
              ←
            </button>
            <button className="popular__arrow" onClick={handleNext} aria-label="Next">
              →
            </button>
          </div>
        </div>

        <div className="popular__slider-wrapper">
          <div
            className="popular__slider"
            ref={sliderRef}
            style={{ transform: `translateX(${offset}px)` }}
          >
            {items.map(item => (
              <FoodCard
                key={item.id}
                image={item.image}
                name={item.name}
                restaurant={item.restaurant}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
