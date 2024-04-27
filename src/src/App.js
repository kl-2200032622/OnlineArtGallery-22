import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'; // Renamed to LoginSignup
import LoginPage from './Pages/Login';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/men_banner.jpg'
import women_banner from './Components/Assests/women_banner.jpg'
import kid_banner from './Components/Assests/kid_banner.jpg'
import Contact from './Pages/Contact';
import CartItems from './Components/CartItems/CartItems';
import ThankYou from './Components/CartItems/Thankyou';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/ARTIST" element={<ShopCategory banner={men_banner} category="ARTIST"/>} />
          <Route path="/ART STYLES" element={<ShopCategory banner={women_banner} category="ART STYLES"/>} />
          <Route path="/BUY" element={<ShopCategory banner={kid_banner} category="BUY"/>} />
          <Route path="/CONTACT" Component={Contact}/> 

          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<LoginSignup />}/>
          <Route exact path="/" Component={CartItems} />
          <Route path="/thank-you" Component={ThankYou} /> {/* Added a route for signup */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
