import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { Footer } from './components/Footer'
import Product from './components/Product'
import { useState } from 'react'
import Home from './components/Home'


function App() {
 
  const [viewCart, setViewCart] = useState(false)

  const content = (
    <div className='warpper'> 
      <Header  />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home viewCart={viewCart} />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
      <Footer  viewCart={viewCart} />
    </div>
  )

  return content
}

export default App
