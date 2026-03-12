import { useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('delivery');

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          {/* Left Content */}
          <div className="hero__content">
            <div className="hero__badge">
              🔥 #1 Food Delivery Platform
            </div>
            <h1 className="hero__title">
              Are you starving?
            </h1>
            <p className="hero__subtitle">
              Within a few clicks, find meals that are accessible near you. Fresh food delivered to your doorstep in minutes.
            </p>

            {/* Search Box */}
            <div className="hero__search-box">
              <div className="hero__tabs">
                <button
                  className={`hero__tab ${activeTab === 'delivery' ? 'active' : ''}`}
                  onClick={() => setActiveTab('delivery')}
                >
                  <img src="./images/motorcycleicon.png" alt="Delivery" />
                  Delivery
                </button>
                <button
                  className={`hero__tab ${activeTab === 'pickup' ? 'active' : ''}`}
                  onClick={() => setActiveTab('pickup')}
                >
                  <img src="./images/magazineicon.png" alt="Pickup" />
                  Pickup
                </button>
              </div>

              <div className="hero__search-divider" />

              <div className="hero__search-row">
                <div className="hero__input-wrapper">
                  <img src="./images/locationicon.png" alt="Location" />
                  <input
                    className="hero__input"
                    type="text"
                    placeholder="Enter Your Address"
                  />
                </div>
                <button className="hero__search-btn">
                  <img src="./images/findicon.png" alt="Search" />
                  Find Food
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero__image">
            <img src="./images/imagefood.png" alt="Delicious food" />
          </div>
        </div>
      </div>
    </section>
  );
}
