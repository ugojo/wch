import { ReactElement } from "react"
import { ProductListType } from "./types"
import List from "./List"
import { Link } from "react-router-dom"

export const ProductList = ({products}: ProductListType) => {
  
    let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

    if (products?.length) {
       
     pageContent =  products.slice(3,11).map((product)=>{

       return (
       <>
         <List
          key={product.sku}
          product={product}
         />
       </>
       )
     })
    }

 const content = (
    <>
      <h2 className="listTxt"> NEW PRODUCT </h2>
      <div className="grid" >
        {pageContent}
        <Link to={'/'} />
      </div>
    </>
 )
  return (
    content
  )
}
