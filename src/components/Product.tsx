import { useParams } from 'react-router-dom'
import { ProductList } from './ProductList'
import useProducts from '../hooks/useProducts'
import { ProductType } from '../context/productProvider'
import { AddToCart } from './AddToCart'
import useCart from '../hooks/useCart'
import { Link } from 'react-router-dom'



type IdType = {
  id : string
}

const Product = () => {

  const {id} = useParams<IdType>()

  const {products} = useProducts()
  const {dispatch, REDUCER_ACTIONS, cart} = useCart()

  const product: ProductType = products.find((product)=> product.sku === id)
  const inCart: boolean = cart.some((item)=> item.sku === product?.sku)

  
  const img: string = new URL('../images/'+product.sku+`${'.png'}`, import.meta.url).href
  
 if (!product) {
    <h2>No Product Found</h2>
 }

  console.log(product);
  

  return (
    <div className='single-product'>
      <div className="title"> PRODUCT DETAILS </div>
         <div className="details">
           <div className="image">
             <img src={img} alt={product.sku} />
           </div>
           <div className="content">
             <h1 className="name">{product.name}</h1>
             <div className="price">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</div>
            <div className="buttons">
                <button>Check Out</button>
                <AddToCart product={product} 
                  dispatch={dispatch}
                  REDUCER_ACTIONS={REDUCER_ACTIONS}
                  inCart={inCart}/>
            </div>
            <div className="description">
              {product.description}
            </div> 
          </div>
      </div>
      {/* <div className="title"> SIMILAR PRODUCT</div> */}
      <div className="listProduct">
      </div>
      {/* <ProductList products={products}/> */}
    </div>
  )
}

export default Product