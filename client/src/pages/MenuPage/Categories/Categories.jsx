import CategoryItem from "./CategoryItem";
import "./Categories.css";
import { useEffect, useState } from "react";
import { message } from "antd";

const Categories = () => {
  const [categories,setCategories]=useState([]);
 
  useEffect(()=>{
    const fetchCategories = async () => {
      try {
        const response = await fetch (`http://localhost:5000/api/categories`)
          if (response.ok) {
              const data = await response.json();  
              setCategories(data);
            }else{
            message.error("Veri Getirme Başarısız")
          }            
      } catch (error) {
        console.log("Veri hatası:",error);
      }
      
    };
    fetchCategories ()
    
  },[`http://localhost:5000`])

  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>Tüm Kategoriler</h2>
          <p>Yeni ürünlerimizle Birlikte..</p>
        </div>
        <ul className="category-list">
        {categories.map((category) => (
            <CategoryItem key={category._id} category={category} categories={categories} />
          ))}
          
        </ul>
      </div>
    </section>
  );
};

export default Categories;