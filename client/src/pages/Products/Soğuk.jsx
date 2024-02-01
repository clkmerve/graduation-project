import React, { useEffect, useState } from "react";
import { message } from "antd";
import SoğukItem from "./SoğukItem";
import './Products.css'
import { useParams } from "react-router-dom";



const Soğuk = () => {
    const { id: categoryId } = useParams();
    console.log(categoryId);
  const [soğuk, setSoğuk] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/category/${categoryId}`);
        if (response.ok) {
          const data = await response.json();
          setSoğuk(data);
        } else {
          message.error("Veri Getirme Başarısız");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };

    fetchProducts();
  },[`http://localhost:5000` , categoryId]);

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Soğuk İçecekler</h2>
        </div>
        <div className="product-wrapper ">
          {soğuk.map((soğuk) => (
            <SoğukItem soğukItem={soğuk} key={soğuk._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Soğuk;
