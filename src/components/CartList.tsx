
import RemoveFromCart from "./RemoveFromCart";
import { CartListType } from "./types";

const CartList = ({item}: CartListType) => {

    const img: string = new URL('../images/'+item.sku+`${'.png'}`, import.meta.url).href
   console.log('item', item);
   
 const content = (
       <>
           <li className="cart_item_details">
                  <img src={img} alt={item.sku} />
                  <p>{item.name}</p>
                 <RemoveFromCart 
                  item={item }
                  />
           </li>
       </>
 )
  return (
    content
  )
}

export default CartList