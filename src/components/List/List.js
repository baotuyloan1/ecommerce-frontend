import "./List.scss"
import Card from "../Card/Card";
const List = ({products}) => {

  return (
    <div className="list">
      {products?.map((item) => (
        <Card item={item} key={item.id} className="card"/>
      ))}{" "}
    </div>
  );
};


export default List;