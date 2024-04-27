import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Assests/lo (1).png'
import cart_icon from '../Assests/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';
export const Navbar = () => {

    const [menu,setMenu] = useState("HOME");
    const {getTotalCartItems}= useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("HOME")}}><Link style={{ textDecoration: 'none'}}to ='/'>HOME</Link>{menu==="HOME"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("ARTIST")}}><Link style={{ textDecoration: 'none'}}to ='/ARTIST'>ARTIST</Link>{menu==="ARTIST"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("ART STYLES")}}><Link style={{ textDecoration: 'none'}}to ='/ART STYLES'>ART STYLES</Link>{menu==="ART STYLES"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("BUY")}}><Link style={{ textDecoration: 'none'}}to ='/BUY'>BUY</Link>{menu==="BUY"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("CONTACT")}}><Link style={{ textDecoration: 'none'}}to ='/CONTACT'>CONTACT</Link>{menu==="CONTACT"? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}