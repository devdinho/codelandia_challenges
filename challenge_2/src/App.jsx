import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import ProductCard from './components/ProductCard';
import Title from './components/Title';

const products = "12345678".split("");

function App() {

  return (
    <div className="App">
      <Header />
      <Title />
      <Hero />
      <InfoSection />
      {
        products.map((product, idx) => <ProductCard key={ idx } item={ product }/>)
      }
    </div>
  )
}

export default App
