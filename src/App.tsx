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

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
        const response = await fetch('http://localhost:8000/api/products/');
        const data = await response.json();
        setProducts(data);
    }   
    getProducts();
}, []);
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
            <Route path='product' element={<h1>Product Page</h1>}/>
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route />
          </ Route>

          <Route path='admin' element={<AdminLayout />} >
            <Route index element={<Navigate to="Dashboart" />} />
            <Route path='Dashboart' element={<h1>Dashboart Page</h1>} />
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
