import "./style.css";
import MagGlass from "../MagGlass";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="labels">
          <p>Codelândia</p>
          <p>blog</p>
        </div>
        <div className="input-wrapper">
          <MagGlass />
          <input type="text" placeholder="Pesquisar no blog"/>
        </div>
      </div>
    </header>
  );
};

export default Header;