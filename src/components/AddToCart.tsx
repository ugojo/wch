import { AddToCartType } from "./types"

export const AddToCart = ( {product, dispatch, REDUCER_ACTIONS, inCart} : AddToCartType) => {

 const AddToCart = ()=> dispatch({type: REDUCER_ACTIONS.ADD , payload: {...product, quantity: 1}})
 const itemInCart = inCart ? ' → Item In Cart: ✔️' : null
  const content = (
     <button className="addToCart" onClick={AddToCart}>
       Add To Cart 🛒 {itemInCart}
     </button>
  )
  return (
    content
  )
}
