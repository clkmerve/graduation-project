import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {Layout} from './layouts/Layout.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartProvider.jsx';
import ScrollToTop from "./Components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ScrollToTop />
   <CartProvider>
  <Layout>
   
      
    <App/>
    
  </Layout>
  </CartProvider>
  </BrowserRouter>
);
