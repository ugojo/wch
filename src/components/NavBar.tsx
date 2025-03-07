import { ReactElement } from "react"
import CartList from "./CartList"
import useCart from "../hooks/useCart"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const NavBar = () => {

  const {totalPrice, cart} = useCart()

  let pageContent: ReactElement | ReactElement[] = <p className="cart_view">Happy Shopping</p>

  if (cart.length) {

    pageContent = cart.map((item)=>{
       return (
        <CartList 
         key={item.sku}
         item={item} />
       )
    })
  }
  const content = (
    <div className="navbar">
      <h2 className="mobile-logo">.WCH</h2> 
      {/* <span className="cart-icon-mobile"> 🛒</span> */}
      <input type="checkbox" id="menu-checkbox" hidden />
      <label htmlFor="menu-checkbox" className="menu-toggle">&#9776;</label>
      <ul className="nav-list">
        <li>
           HOME
        </li>
        <li> PRODUCTS</li>
        <li className="logo-text desktop-logo">.WCH </li>
        <li>WHAT'S NEW</li>
        <li className="carts">CART
          <span className="cart-icon"> 🛒</span>
          <div className="cart">
            <ul className="cart_item">
             {pageContent}
             <div className="cart_view">
                  <span className="cart_span">
                    <p className="cart_item_txt">Total : {totalPrice}</p>
                  </span>
                  <button className="view_cart_btn" disabled={!cart.length}>
                    View Cart
                  </button>
            </div>
            </ul>
          </div>
        </li>
      </ul> 
    </div>
  )
  return (
    content
  )
}

export default NavBar