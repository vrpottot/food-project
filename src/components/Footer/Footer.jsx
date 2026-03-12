import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <img src="images/burger.png" alt="FoodWagon" />
              <div>
                <span className="footer__brand-logo-food">food</span>
                <span className="footer__brand-logo-wagon">wagon</span>
              </div>
            </div>
            <p className="footer__brand-description">
              Our job is to fill your tummy with delicious food and fast delivery. We deliver fresh food at your doorstep within minutes.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Facebook">📘</a>
              <a href="#" className="footer__social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="footer__social-link" aria-label="Instagram">📸</a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          {/* About */}
          <div className="footer__column">
            <h3 className="footer__column-title">About</h3>
            <div className="footer__links">
              <a href="#" className="footer__link">About Us</a>
              <a href="#" className="footer__link">Features</a>
              <a href="#" className="footer__link">News</a>
              <a href="#" className="footer__link">Careers</a>
            </div>
          </div>

          {/* Support */}
          <div className="footer__column">
            <h3 className="footer__column-title">Support</h3>
            <div className="footer__links">
              <a href="#" className="footer__link">Account</a>
              <a href="#" className="footer__link">Support Center</a>
              <a href="#" className="footer__link">Feedback</a>
              <a href="#" className="footer__link">Contact Us</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer__column">
            <h3 className="footer__column-title">Get Updates</h3>
            <p className="footer__newsletter-text">
              Subscribe for the latest offers and food delivery updates right in your inbox.
            </p>
            <form className="footer__newsletter-form" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                className="footer__newsletter-input"
                placeholder="Your email"
              />
              <button type="submit" className="footer__newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">
            © 2026 FoodWagon. All rights reserved.
          </span>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Privacy Policy</a>
            <a href="#" className="footer__bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
