import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="http://localhost:8080/images/slider-photos/OIP.jpg" />
          <button>
            <Link className="link" to="/products/1">
              Phone
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="http://localhost:8080/images/slider-photos/OIP.jpg" />
          <button>
            <Link className="link" to="/products/1">
              Laptop
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="http://localhost:8080/images/slider-photos/OIP.jpg" />
          <button>
            <Link className="link" to="/products/1">
              Tablet
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="http://localhost:8080/images/slider-photos/OIP.jpg" />
              <button>
            <Link className="link" to="/products/1">
              MSI
            </Link>
          </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="http://localhost:8080/images/slider-photos/OIP.jpg" />
              <button>
            <Link className="link" to="/products/1">
              Samsung
            </Link>
          </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="http://localhost:8080/images/slider-photos/OIP.jpg" />
          <button>
            <Link className="link" to="/products/1">
              Apple
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
