import './Discounts.css';

const discountItems = [
  { id: 1, image: './images/FoodPhoto1.png', name: 'Greys Vage', days: 6, discount: '-30%' },
  { id: 2, image: './images/FoodPhoto2.png', name: 'Burger King', days: 6, discount: '-25%' },
  { id: 3, image: './images/FoodPhoto3.png', name: 'Pizza Hub', days: 7, discount: '-40%' },
  { id: 4, image: './images/FoodPhoto4.png', name: 'Taco Bell', days: 8, discount: '-20%' },
];

export default function Discounts() {
  return (
    <section className="discounts">
      <div className="container">
        <div className="discounts__header">
          <h2 className="discounts__title">
            Up to <span>-40%</span> 🎊 Discounts
          </h2>
          <a href="#" className="discounts__see-all">See All →</a>
        </div>

        <div className="discounts__grid">
          {discountItems.map((item, index) => (
            <div
              key={item.id}
              className="discount-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="discount-card__image">
                <img src={item.image} alt={item.name} />
                <span className="discount-card__badge">{item.discount}</span>
              </div>
              <div className="discount-card__body">
                <h3 className="discount-card__name">{item.name}</h3>
                <span className="discount-card__countdown">
                  🕐 {item.days} Days Remaining
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
