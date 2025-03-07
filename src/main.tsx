import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ProductProvider } from './context/productProvider.tsx'
import { CartProvider } from './context/cartProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ProductProvider>
     <CartProvider>
      <App />
     </CartProvider>
   </ProductProvider>
  </StrictMode>,
)
