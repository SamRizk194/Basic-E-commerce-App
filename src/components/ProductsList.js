import { useState, useEffect } from "react";
import Card from "./Card";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const api_url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductsList;
