import React, { useEffect, useState } from "react";
import { message } from "antd";
import TatlıItem from "./TatlıItem";
import './Products.css'
import { useParams } from "react-router-dom";



const Tatlı = () => {
    const { id: categoryId } = useParams();
    console.log(categoryId);
  const [tatlı, setTatlı] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/category/${categoryId}`);
        if (response.ok) {
          const data = await response.json();
          setTatlı(data);
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
          <h2>Tatlılar</h2>
        </div>
        <div className="product-wrapper ">
          {tatlı.map((tatlı) => (
            <TatlıItem tatlıItem={tatlı} key={tatlı._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tatlı;
