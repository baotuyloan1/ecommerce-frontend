import { useState } from "react";
import "./Products.scss";
import "../../components/List/List";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const catId = parseInt(useParams()["id"]);

  const {data, loading, error} = useFetch(`/products/filters?categories=${catId}`)

console.log(`Catid = ${catId}`,data)
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id={1} name="1" />
            <label htmlFor="1">Mobile</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id={2} name="2" />
            <label htmlFor="2">Tablet</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id={3} name="3" />
            <label htmlFor="3">Laptop</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Brands</h2>
          <div className="inputItem">
            <input type="checkbox" id={4} name="4" />
            <label htmlFor="4">MSI</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id={5} name="5" />
            <label htmlFor="5">Apple</label>
          </div>
        </div>

        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
            className="range"
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
              defaultValue={1000}
            />
            <span>{maxPrice}</span>
          </div>
        </div>

        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setSort("decs")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="http://localhost:8080/images/slider-photos/Slider-Laptop.jpg"
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  );
};

export default Products;
