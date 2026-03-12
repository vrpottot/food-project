import './HowItWorks.css';

const steps = [
  {
    id: 1,
    icon: `${import.meta.env.BASE_URL}images/gpsicon.png`,
    title: 'Select location',
    description: 'Choose the location where your food will be delivered.',
  },
  {
    id: 2,
    icon: `${import.meta.env.BASE_URL}images/bellicon.png`,
    title: 'Choose order',
    description: 'Check over hundreds of menus to pick your favorite food',
  },
  {
    id: 3,
    icon: `${import.meta.env.BASE_URL}images/moneyicon.png`,
    title: 'Pay advanced',
    description: 'Its quick, safe, and simple. Select several methods of payment',
  },
  {
    id: 4,
    icon: `${import.meta.env.BASE_URL}images/donuticon.png`,
    title: 'Enjoy meals',
    description: 'Food is made and delivered directly to your home.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="how-it-works__title">How does it work</h2>
        <div className="how-it-works__grid">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="step-card animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="step-card__icon">
                <img src={step.icon} alt={step.title} />
                <span className="step-card__number">{step.id}</span>
              </div>
              <h3 className="step-card__title">{step.title}</h3>
              <p className="step-card__description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
