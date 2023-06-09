import { DeleteOutline } from "@mui/icons-material";
import "./Cart.scss";
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "http://localhost:8080/images/laptop-photos/20005/Screenshot 2023-03-29 125259.png",
      img2: "http://localhost:8080/images/phone-photos/20003/Screenshot 2023-03-27 224626.png",
      title: "Laptop sieu cap",
      oldPrice: 19,
      price: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.description?.substring(0, 30)}</p>
            <div className="price">1*${item.price}</div>
          </div>
          <DeleteOutline className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${123}</span>
      </div>
      <button>PROCEE TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
