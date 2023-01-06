import Card from "../Card";
import Heart from "../Heart";
import "./style.css";

const Main = () => {
  return (
    <main>
      <Card>
        <div className="card-header">
          <span>02 de jul, 2021</span>
          <Heart />
        </div>
        <div className="news-container">
          <h3>Agora é oficial: o Windows 11 está vindo</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum vestibulum auctor est. Nam vitae finibus ante.
            Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
          </p>
        </div>
      </Card>
      <Card>
        <div className="card-header">
          <span>02 de jul, 2021</span>
          <Heart />
        </div>
        <div className="news-container">
          <h3>Tim Berners-Lee vai leiloar código-fonte da web</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum vestibulum auctor est. Nam vitae finibus ante.
            Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
            Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet,
            pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.
          </p>
        </div>
      </Card>
      <Card>
        <div className="card-header">
          <span>02 de jul, 2021</span>
          <Heart />
        </div>
        <div className="news-container">
          <h3>Tem Firefox novo no pedaço e você vai querer migrar</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.
          </p>
        </div>
      </Card>
      <Card>
        <div className="card-header">
          <span>02 de jul, 2021</span>
          <Heart />
        </div>
        <div className="news-container">
          <h3>John MCAfee, criador do antivírus McAfee, morre</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum vestibulum auctor est. Nam vitae finibus ante.
            Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
            Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet,
            pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.
          </p>
        </div>
      </Card>
    </main>
  );
};

export default Main;