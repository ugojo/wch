import { useContext } from "react"
import { productContext, UseProductContextType } from "../context/productProvider"



const useProducts = (): UseProductContextType => {
  return (
    useContext(productContext)
  )
}

export default useProducts