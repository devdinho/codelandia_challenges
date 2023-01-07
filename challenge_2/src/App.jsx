import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import ProductCard from './components/ProductCard';
import ProductSection from './components/ProductSection';
import Title from './components/Title';

const products = "12345678".split("");

function App() {

  return (
    <div className="App">
      <Header />
      <Title />
      <Hero />
      <main>
        <InfoSection />
        <ProductSection>
          {
            products.map((product, idx) => <ProductCard key={ idx } item={ product }/>)
          }
        </ProductSection>
      </main>
    </div>
  )
}

export default App
