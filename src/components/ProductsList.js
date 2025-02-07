import { useState, useEffect } from "react";
import Card from "./Card";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getProductInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <button
          className="btn btn-info"
          onClick={() => {
            getProducts();
          }}
        >
          All
        </button>

        {categories.map((cat) => {
          return (
            <button
              className="btn btn-info"
              key={cat}
              onClick={() => {
                getProductInCategory(cat);
              }}
            >
              {cat}
            </button>
          );
        })}

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                <Card product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductsList;
