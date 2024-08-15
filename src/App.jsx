import { useState } from 'react';
import './App.css'
import Layout from './components/layout';
import BasketContext from './context/context';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import MyBasket from './components/my-basket';
import MyFavorite from './components/my-favorite';
import ProductDetail from './components/card/product-detail';



function App() {

  const [allProduct, setAllProduct] = useState([])
  const [basket, setBasket] = useState([])
  const [favorite, setFavorite] = useState([])

  return (
    <>
      <BasketContext.Provider value={{ allProduct, setAllProduct, basket, setBasket, favorite, setFavorite }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/basket' element={<MyBasket />} />
              <Route path='/favorite' element={<MyFavorite />} />
              <Route path='/product/:id' element={<ProductDetail />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </BasketContext.Provider>
    </>
  )
}

export default App;
