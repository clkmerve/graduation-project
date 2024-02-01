import React, { useEffect, useState } from "react";
import { message } from "antd";
import SıcakItem from "./SıcakItem";
import './Products.css'

const Sıcak = ({ id }) => {
  const [sıcak, setSıcak] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products`);
        if (response.ok) {
          const data = await response.json();
          setSıcak(data);
        } else {
          message.error("Veri Getirme Başarısız");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Sıcak İçecekler</h2>
        </div>
        <div className="product-wrapper ">
          {sıcak.map((sıcak) => (
            <SıcakItem sıcakItem={sıcak} key={sıcak._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sıcak;
