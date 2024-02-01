import React from "react";
import ProductDetails from "./ProductDetails/ProductDetails";
// import Navbar2 from "./Navbar2/Navbar2";
import Footer from "../Components/Layout/Footer/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${productId}`);

        if (!response.ok) {
          throw new Error("Verileri getirme hatası");
        }

        const data = await response.json();
        setSingleProduct(data);
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchSingleProduct();
  }, [`http://localhost:5000`, productId]);

  console.log(singleProduct);
  return singleProduct ? (
    <ProductDetails singleProduct={singleProduct} />
  ) : (
    <p>Ürün Yükleniyor</p>
    
  );
};
export default ProductDetailsPage;