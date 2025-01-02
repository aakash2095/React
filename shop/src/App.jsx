import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes , Route , Link} from "react-router-dom"
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails'

function App() {
  

  return (
    <>
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/Products'>Products</Link>
          <Link to='/Cart'>Cart</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Products' element={<Products/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          <Route path='/PRoducts/:id' element={<ProductDetails/>}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
