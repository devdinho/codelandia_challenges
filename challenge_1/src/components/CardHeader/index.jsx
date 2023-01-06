import Heart from "../Heart";
import "./style.css";

const CardHeader = () => {
  return (
    <div className="card-header">
      <span>02 de jul, 2021</span>
      <Heart />
    </div>
  );
};

export default CardHeader;