import { useEffect, useState } from "react";
import "./Product.scss";
import { AddShoppingCart, Balance, FavoriteBorder } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {useDispatch} from "react-redux";
import { addToCart } from "../../redux/cartReducer";
const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const productId = parseInt(useParams()["id"]);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${productId}`);

  useEffect(() => {
    if(!loading && data !=null){
      setImages(data['imagesDetail'])
    }
    
  }, [data]);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          {loading
            ? "loading"
            : images.length <= 0
            ? "loading images"
            : images.map((item,index) => (
                <img src={`${process.env.REACT_APP_RESOURCE}${item["url"]}`} onClick={() => setSelectedImg(index)} />
              ))}
        </div>
        <div className="mainImg">
          <img src={process.env.REACT_APP_RESOURCE+images?.[selectedImg]?.['url']} />
        </div>
      </div>
      <div className="right">
        <h1>{!loading && data?.name}</h1>
        <span className="price">{!loading && data?.price}</span>
        <p>
          {!loading && data?.description}
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add" onClick={()=>dispatch(addToCart({
          id:data.id,
          title: data.name,
          desc:data.description,
         img: data.imgUrl,
         quantity: quantity,
         price: data.price
        }))}>
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
