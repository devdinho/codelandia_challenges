import "./style.css";

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <img src={ `${item}.png` } alt="jordan shoes" />
    </div>
  )
};

export default ProductCard;