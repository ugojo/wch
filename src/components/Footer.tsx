import { Link } from "react-router-dom"
import { CartProps } from "./types"


export const Footer = ({viewCart}: CartProps) => {

  const year: number = new Date().getFullYear()
  const content = (
      <div className="footer">
       <p>Shopping Cart &copy; {year}</p> :  
      </div>
  )
  return (
    content
  )
}
