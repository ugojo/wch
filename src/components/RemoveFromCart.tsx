import { CartListType } from "./types";
import useCart from "../hooks/useCart"


const RemoveFromCart = ({item}: CartListType) => {
  const {dispatch, REDUCER_ACTIONS} = useCart()

  const RemoveFromCart = ()=> dispatch({type: REDUCER_ACTIONS.REMOVE, payload : item})
  return (
       <button className="cart_item_btn" onClick ={RemoveFromCart}>X</button>
  )
}

export default RemoveFromCart