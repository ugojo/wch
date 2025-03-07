import { ReactElement } from 'react'
import useProducts from '../hooks/useProducts'
import FeaturedProducts from './FeaturedProducts'
import { ProductList } from './ProductList'

export const Products = () => {
  

  const {products} = useProducts()

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

 if (products.length) {
    
  pageContent =  products.map((product)=>{

    return (
    <>
      <FeaturedProducts 
       key={product.sku}
       product={product}
      />
    </>
    )
  })
 }

 const content = (
   <>
    <div className='container'>
      <div className={'flex'}>
        { pageContent}
      </div>
      <ProductList  
        products={products}
      />
    </div>
   </>
  )

  return content 
}
