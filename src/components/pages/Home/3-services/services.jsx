import "./services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="services">
      <div id="text-services">
        <span className="h1">
          <h1>Faça sua encomenda</h1>
        </span>
        <span className="p">
          <p>Escolha o estilo de desenho</p>
        </span>
      </div>

      <div id="services-box">
        <div className="container-box">
          <div>
            <Link to="/">
              <div id="dm-image"></div>
              <span>
                <h2>DM Style</h2>
              </span>
            </Link>
          </div>
          <div>
            <Link to="/desenhos/realista">
              <div id="realist-image"></div>
              <span>
                <h2>Realista</h2>
              </span>
            </Link>
          </div>
          <div>
            <Link to="/">
              <div id="kawai-image"></div>
              <span>
                <h2>Kawai</h2>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
