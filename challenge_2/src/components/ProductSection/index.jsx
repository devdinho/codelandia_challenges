import "./style.css";

const ProductSection = ({ children }) => {
  return (
    <section className="product-section">
      { children }
    </section>
  )
};

export default ProductSection;