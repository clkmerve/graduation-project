
import "./Search.css";
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { message } from "antd";
import { useState } from "react";
const Search = ({ isSearchShow, setIsSearchShow }) => {
  const [searchResults, setSearchResults] = useState(null);  
  const handleSearch= async (e) =>{
    e.preventDefault();
    const productName = e.target[0].value;
    try {
      const res = await fetch(`http://localhost:5000/api/products/search/${productName}`)
      if (!res.ok) {
        message.warning("Ürün getirme hatası!");
        return;
      }
      const data = await res.json();
      setSearchResults(data)
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <div className={`modal-search ${isSearchShow ? "show" : ""} `}>
      <div className="modal-wrapper">
        <h3 className="modal-title">Ürünleri Ara</h3>
        <p className="modal-text">
          Aradığınız ürünleri görmek için yazmaya başlayın.
        </p>
        <form className="search-form" onSubmit={handleSearch}>
          <input type="text" placeholder="Arayınız" />
          <button>
            <i className="bi bi-search"><SearchIcon/></i>
          </button>
        </form>
        <div className="search-results" >
          <div className="search-heading">
            <h3>Ürün Sonucu</h3>
          </div>
          <div className="results"
           style={{
            display: `${
              searchResults?.length === 0 || !searchResults ? "flex" : "grid"
            }`,
          }}>
            {!searchResults && (
              <b
                className="result-item"
                style={{
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                Ürün Ara...
              </b>
            )}
            {searchResults?.length ===0  && (
              <a
              href="#"
              className="result-item"
              style={{
                justifyContent: "center",
                width: "100%",
              }}
            >
              😔Aradığınız Ürün Bulunamadı😔
            </a>
            )}
            {searchResults?.length >0 && searchResults?.map((resultItem)=>(
            <a href="#" className="result-item" key={resultItem._id}>
              <img
              src={resultItem.img[0]}
              className="search-thumb"
              alt=""
              />
              <div className="search-info">
                <h4>{resultItem.name}</h4>
                <span className="search-price">{resultItem.price.current.toFixed(2)}₺</span>
              </div>
              </a>
            ))}
           
            
          </div>
        </div>
        <i className="bi bi-x-circle" id="close-search" onClick={()=> setIsSearchShow(false)}><ClearIcon/></i>
      </div>
    </div>
  );
};

export default Search;