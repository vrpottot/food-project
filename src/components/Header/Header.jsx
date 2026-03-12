import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          {/* Logo */}
          <div className="header__logo">
            <img src="images/burger.png" alt="FoodWagon" />
            <div className="header__logo-text">
              <span className="header__logo-food">food</span>
              <span className="header__logo-wagon">wagon</span>
            </div>
          </div>

          {/* Address */}
          <div className="header__address">
            <span className="header__address-label">Deliver to:</span>
            <div className="header__address-info">
              <span className="header__address-pin">📍</span>
              <div className="header__address-details">
                <span className="header__address-current">Current Location</span>
                <span className="header__address-location">Mohammadpur Bus Stand, Dhaka</span>
              </div>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="header__mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          {/* Actions */}
          <div className={`header__actions ${menuOpen ? 'open' : ''}`}>
            <button className="header__search-btn">
              <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.75 15.82L14.24 12.31C14.06 12.17 13.85 12.06 13.64 12.06H13.08C14.03 10.83 14.63 9.29 14.63 7.56C14.63 3.55 11.32 0.25 7.31 0.25C3.27 0.25 0 3.55 0 7.56C0 11.61 3.27 14.88 7.31 14.88C9 14.88 10.55 14.31 11.81 13.33V13.93C11.81 14.14 11.88 14.35 12.06 14.52L15.54 18C15.89 18.36 16.42 18.36 16.73 18L17.72 17.02C18.07 16.7 18.07 16.18 17.75 15.82ZM7.31 12.06C4.82 12.06 2.81 10.06 2.81 7.56C2.81 5.1 4.82 3.06 7.31 3.06C9.77 3.06 11.81 5.1 11.81 7.56C11.81 10.06 9.77 12.06 7.31 12.06Z" fill="currentColor"/>
              </svg>
              Search Food
            </button>
            <button className="header__login-btn">
              <svg viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 9.25C10.46 9.25 12.5 7.25 12.5 4.75C12.5 2.29 10.46 0.25 8 0.25C5.5 0.25 3.5 2.29 3.5 4.75C3.5 7.25 5.5 9.25 8 9.25ZM11.13 10.38H10.53C9.76 10.76 8.91 10.94 8 10.94C7.09 10.94 6.21 10.76 5.43 10.38H4.84C2.23 10.38 0.13 12.52 0.13 15.12V16.56C0.13 17.51 0.86 18.25 1.81 18.25H14.19C15.1 18.25 15.88 17.51 15.88 16.56V15.12C15.88 12.52 13.73 10.38 11.13 10.38Z" fill="currentColor"/>
              </svg>
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
