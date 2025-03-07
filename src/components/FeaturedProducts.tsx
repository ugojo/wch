// import { ReactElement } from "react"
import { FeaturedProps } from "./types"


const FeaturedProducts = ({product} : FeaturedProps) => {
  
  const img: string = new URL('../images/'+product.sku+`${'.png'}`, import.meta.url).href

 
  const content = (
    product.featured ? 
    <div key={product.sku} className={`box box${product.sku}`}>
      {product.featured? <img src={img} alt={product.name} className="product__img" /> : null}
      {product.sku === 'product002'? <>
        <div className="product-s-box">
           <h3 className="product-name ">{product.featured? product.name : null}.</h3> 
           {/* {product.featured? <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}{}</p>: <></>} */}
           {product.featured? <p className="box-s-txt">{product.description}</p>: <></>}
          {product.featured? <p className="product-price">Sales Start from : 
               {product.featured? <>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}{}</>: <></>}
           </p>: <></>} 
           <button className="product-s-btn">  discover more </button>
        </div>
       </>: 
      <>
        <h3 className="product-name ">{product.featured? product.name : null}.</h3> 
        {/* {product.featured? <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}{}</p>: <></>} */}
        {product.featured? <p className="feature-txt">{product.description}</p>: <></>}
      </>}
    </div> : <></>
  )
  return (
    content
  )
}

export default FeaturedProducts