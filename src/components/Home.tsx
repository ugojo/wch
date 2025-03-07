import { Cart } from "./Cart"
import Hero from "./Hero"
import { Products } from "./Products"
import { CartProps } from "./types"


const Home = ({viewCart}: CartProps) => {

  const pageContent = viewCart  ?  <Cart /> : <Products /> 

  const content = (
    <>
      <Hero />
       {pageContent}
    </>
  )
  return (
    content
  )
}

export default Home