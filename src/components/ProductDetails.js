import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  return <Card product={product} showButton={false} />;
}
export default ProductDetails;
