import { useEffect, useState } from "react";
import "./Products.scss";
import "../../components/List/List";
import List from "../../components/List/List";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Categories from "../../components/Catrgories/Categories";

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [page, setPage] = useState(1);
  const [filterCategories, setFilterCategories] = useState([
    parseInt(useParams()["id"]),
  ]);

  const params = useParams();

  const [brands, setBrand] = useState([]);

  useEffect(() => {
    const newCategories = [parseInt(params["id"])];
    setFilterCategories(newCategories);
    console.log("Bao bao");
  }, [params]);

  const { data, loading, error } = useFetch(
    `/products/filters/${page}?categories=${filterCategories}&brands=${brands}`
  );

  const [resultProducts, setResultProducts] = useState([]);
  useEffect(() => {
    setResultProducts(data?.content);
  }, [data]);

  const handleCheckboxCategories = (cat) => {
    setPage((prev) => 1);

    setFilterCategories((prev) => {
      if (prev.includes(cat.id)) {
        return prev.filter((item) => item !== cat.id);
      } else {
        return [...prev, cat.id];
      }
    });

    setFilterCategories((prev) => {
      if (prev.includes(parseInt(params["id"])) && prev.length > 1) {
        console.log("a");
        return prev.filter((item) => item !== parseInt(params["id"]));
      }
      if (prev.length == 0) return [parseInt(params["id"])];
      return [...prev];
    });
  };

  const numPage = () => {
    if (!loading && data?.totalPages > 0) {
      let totalPages = data?.totalPages;
      let htmlButtons = [];
      for (let i = 1; i <= totalPages; i++) {
        htmlButtons.push(
          <Link className="link" onClick={() => setPage((prev) => i)}>
            {i}
          </Link>
        );
      }
      return htmlButtons;
    }
  };

  const category = useFetch(
    `/categories/sub-categories?categoryId=${parseInt(useParams()["id"])}`
  );

  const brand = useFetch(`/brands`);
  const handleCheckboxBrands = (brand) => {
    setPage((prev) => 1);
    setFilterCategories((prev) => {
      if (prev.includes(brand.id))
        return prev.filter((item) => item !== brand.id);
      else {
        return [...prev, brand.id];
      }
    });
  };

  useEffect(() => {
    console.log("change price", maxPrice);
    setResultProducts(() => {
      return data?.content.filter((item) => item.price >= maxPrice);
    });
  }, [maxPrice, data]);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {category.loading
            ? "loading"
            : category.data?.map((cat) => (
                <div className="inputItem" key={cat.id}>
                  <input
                    type="checkbox"
                    id={cat.id}
                    name={cat.name}
                    onChange={() => handleCheckboxCategories(cat)}
                  />
                  <label htmlFor="1">{cat.name}</label>
                </div>
              ))}
        </div>
        <div className="filterItem">
          <h2>Brands</h2>

          {brands.loading
            ? "loading"
            : brands.data?.map((brand) => {
                return (
                  <div className="inputItem" key={brand.id}>
                    <input
                      type="checkbox"
                      id={brand.id}
                      name={brand.name}
                      onChange={() => handleCheckboxBrands(brand)}
                    />
                    <label htmlFor={brand.name}>{brand.name}</label>
                  </div>
                );
              })}
        </div>

        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              className="range"
              type="range"
              min={0}
              max={2000}
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
        <List
          // catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          products={resultProducts}
        />

        <div className="page">
          {/* {page > 1 && <Link className="link" onClick={setPage(1)}>First</Link>} */}
          {loading ? "loading" : numPage()}

          {/* {page < data?.totalPages &&<Link className="link" onClick={()=> setPage(data?.totalPages)}>Last</Link>} */}
        </div>
      </div>
    </div>
  );
};

export default Products;
