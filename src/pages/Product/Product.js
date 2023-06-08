import { useState } from "react";
import "./Product.scss";
import { AddShoppingCart, Balance, FavoriteBorder } from "@mui/icons-material";
const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "http://localhost:8080/images/slider-photos/OIP (1).jpg",
    "http://localhost:8080/images/slider-photos/OIP.jpg",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} onClick={() => setSelectedImg(0)} />
          <img src={images[1]} onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev - 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCart />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorder /> ADD TO WISH
          </div>
          <div className="item">
            <Balance /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor Polo</span>
          <span>Product Type: Laptop</span>
          <span>Tag: Laptop, Latop gaming, Laptop gaming Luxury</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
