import useCart from "../hooks/useCart"
import { AddToCart } from "./AddToCart"
import { ProductType } from "../context/productProvider"
import { Link } from "react-router-dom"


const List = ({product}: ProductType) => {

  const {dispatch, REDUCER_ACTIONS, cart } = useCart()
 
    const img: string = new URL('../images/'+product?.sku+`${'.png'}`, import.meta.url).href
    const inCart: boolean = cart.some((item)=> item.sku === product?.sku)
    

    console.log(cart);
    
  return (
        <div key={product.sku} className="product-card">
            <div className="list-img-box">
              <Link to={`/product/${product.sku}`}>
                <img src={img} alt={product?.sku} />
              </Link> 
            </div>
              <h2 className="product-name">{product?.name}</h2>
             {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product?.price)}
             <div className="addTocartBox">
             <AddToCart
              key={product.sku} 
              product={product}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS} 
              inCart={inCart} />
             </div>
        </div>
  )
}

export default List