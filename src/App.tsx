import { useState, useEffect } from 'react'
import './App.css'
import ShowInfo from './components/ShowInfo'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import News from './pages/News'
import Contact from './pages/Contact'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import WebLayout from './pages/layouts/WebLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import ProductDetail from './pages/ProductDetail'
import { ProductType } from './types/Product'
import { list , remove } from './api/products'
import ProductManager from './pages/ProductManager'

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);
  const removeItem = (id) => {
    remove(id);
    setProducts(products.filter(item => item.id !==id));
  }
  //<div>
  // const [count, setCount] = useState(0);
  // const [myName, setMyName] = useState("Nguyễn Xuân Đại");
  // const [status, setStatus] = useState(false);
  // const [info, setInfo] = useState({ name: "Đại", age: 27});
  // const [products, setProducts] = useState([
  //   {id: 1, name: "Product A"},
  //   {id: 2, name: "Product B"},
  //   {id: 3, name: "Product C"}
  // ])
  //</div>
  return (

    <div className="container">

      <header>
        <div className='text-center bg-light'>
          <img src="https://caodang.fpt.edu.vn/wp-content/uploads/logo-3.png" alt="" />
        </div>
        <Header />
      </header>
      <div className=''>
        <Banner />
      </div>
      <main>
        <Routes>
          <Route path='/' element={<WebLayout />} >
            <Route index element={<HomePage />} />
            <Route path='product'>
              <Route element={<h1>Product Page</h1>} />
              <Route path='/product/:id' element={<ProductDetail />} />
            </ Route>
            </ Route >
            <Route path='admin' element={<AdminLayout />} >
              <Route index element={<Navigate to="Dashboart" />} />
              <Route path='Dashboart' element={<h1>Dashboart Page</h1>} />
              <Route path='product' element={<ProductManager products={products} onRemove={removeItem}/>} />
            </ Route>

        </ Routes>
      </main >
      <footer>
        <Footer />
      </footer>
    </div >
    //<div>
    //   Count : {count}
    //   <hr />
    //   Nmae: {myName}
    //   <h1 className='App'>
    //   <hr />
    //   Status: {status}
    //   <hr />
    //   Info: {info.name} - {info.age}
    //   <hr />
    //   Products: { products.map(item => <div>{item.name}</div>)}
    //   <hr />
    //   Component: ShowInfo
    //     <ShowInfo name="Đại"/>

    //   </h1>
    // </div>

  )
}

export default App
