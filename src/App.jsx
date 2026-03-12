import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Discounts from './components/Discounts/Discounts';
import HowItWorks from './components/HowItWorks/HowItWorks';
import PopularItems from './components/PopularItems/PopularItems';
import Footer from './components/Footer/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Discounts />
      <HowItWorks />
      <PopularItems />
      <Footer />
    </div>
  );
}

export default App;
