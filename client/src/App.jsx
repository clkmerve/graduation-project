import './App.css'
import {Route, Routes} from "react-router-dom"
import Anasayfa from './pages/Anasayfa';
import Menu from './pages/MenuPage/Menu';
import Hakkimizda from './pages/Hakkimizda';
import Contact from './pages/Contact/Contact';
import Kayit from './Components/auth/Kayit';
import Giris from './Components/auth/Giris';
import Cart from './pages/Sepet/CartPage';
import UserPage from './pages/Admin/UserPage'
import CategoryPage from './pages/Admin/Categories/CategoryPage';
import UpdateCategoryPage from './pages/Admin/Categories/UpdateCategoryPage';
import CreateCategoryPage from './pages/Admin/Categories/CreateCategoryPage';
import CreateProductPage from "./pages/Admin/Products/CreateProductPage";
import ProductPage from './pages/Admin/Products/ProductPage';
import UpdateProductPage from './pages/Admin/Products/UpdateProductPage';
import CouponPage from './pages/Admin/Coupons/CouponPage';
import CreateCouponPage from "./pages/Admin/Coupons/CreateCouponPage";
import UpdateCouponPage from './pages/Admin/Coupons/UpdateCouponPage';
import OrderPage from './pages/Admin/OrderPage';
import Success from './pages/Success';
import Dashboard from './pages/Admin/Dashboard';
import Sıcak from './pages/Products/Sıcak';
import Soğuk from './pages/Products/Soğuk';
import Tatlı from './pages/Products/Tatlı';
import Tum from './pages/Products/Tum';
import SifreSifirla from './Components/auth/SifreSifirla';
import SifremiUnuttum from './Components/auth/SifremiUnuttum';


function App() {
  return (
   
    <Routes>
     <Route path="/" element={<Anasayfa/>}/>
      <Route path="/menu" element={<Menu/>}/> 
      <Route path="/sepet" element={<Cart/>}/> 
      <Route path="/hakkimizda" element={<Hakkimizda/>}/>
      <Route path="/iletisim" element={<Contact/>}/>  
      <Route path="/kayit" element={<Kayit/>}/>
      <Route path="/giris" element={<Giris/>}/>
      <Route path="/sifremiunuttum" element={<SifremiUnuttum/>}/>
      <Route path="/reset-password/:token" element={<SifreSifirla/>} />
      <Route path="/succes" element={<Success/>}/>
      <Route path="/admin/*">
      <Route path="orders" element={<OrderPage/>}/>
      <Route path="users" element={<UserPage/>}/>
      <Route path="dashboard"  element={<Dashboard/>}/>
      <Route path="categories" element={<CategoryPage/>}/>
      <Route path="categories/update/:id" element={<UpdateCategoryPage/>}/>
      <Route path="categories/create" element={<CreateCategoryPage/>}/>
      <Route path="products" element={<ProductPage />} />
      <Route path="products/create" element={<CreateProductPage />} />
      <Route path="products/update/:id" element={<UpdateProductPage />} />
      <Route path="coupons" element={<CouponPage />} />
      <Route path="coupons/create" element={<CreateCouponPage/>} />
      <Route path="coupons/update/:id" element={<UpdateCouponPage/>} />     
      </Route>   
      <Route path="/sıcak/:id" element={<Sıcak/>}/>
      <Route path="/soğuk/:id" element={<Soğuk/>}/>
      <Route path="/tatli/:id" element={<Tatlı />} />
      <Route path="/tum/:id" element={<Tum />} />
    </Routes>
  );
}

export default App;


