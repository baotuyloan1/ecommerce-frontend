import {
  FavoriteBorderOutlined,
  KeyboardArrowDown,
  PersonOutlineOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { data, loading, error } = useFetch(`/categories/root-categories`);

  const products = useSelector((state)=> state.cart.products);

  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" />
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDown />
          </div>
          {loading
            ? console.log("loading")
            : data?._embedded["categories"]?.map((category) => {
                return (
                  <div className="item" key={category.id}>
                    <Link className="link" to={`/products/${category.id}`}>
                      {category.name}
                    </Link>
                  </div>
                );
              })}
        </div>

        <div className="center">
          <Link className="link" to="/">
            BaoStore
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <Search />
            <PersonOutlineOutlined />
            <FavoriteBorderOutlined />
            <div className="cartIcon" onClick={() => setOpen((prev) => !prev)}>
              <ShoppingCartOutlined />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
