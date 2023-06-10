import axios from "axios";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ categoryId, category }) => {

    const{data, loading, error} = useFetch(`/products/filters?categories=${categoryId}`)

    if(!loading){
        console.log(loading)
        console.log('featured products',data)
    }

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{category} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="bottom">
        {error? "Something went wrong" :loading ? "loading" : data?.map((item) => (
          <Card item={item} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
