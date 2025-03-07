import { useContext } from "react"
import { cartsContext, UseCartContextType } from "../context/cartProvider"


const useCart = () : UseCartContextType => {
  return useContext(cartsContext)
}

export default useCart