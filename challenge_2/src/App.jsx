import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import ProductCard from './components/ProductCard';
import ProductSection from './components/ProductSection';
import Title from './components/Title';
import Main from './components/Main';

const products = "12345678".split("");

function App() {

  return (
    <div className="App">
      <Header />
      <Title />
      <Hero />
      <Main>
        <InfoSection />
        <ProductSection>
          {
            products.map((product, idx) => <ProductCard key={ idx } item={ product }/>)
          }
        </ProductSection>
      </Main>
      <Footer />
    </div>
  )
}

export default App
