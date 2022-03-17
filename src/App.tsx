import { useState } from 'react'
import './App.css'
import ShowInfo from './components/ShowInfo'
import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import News from './pages/News'
import Contact from './pages/Contact'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0);
  // const [myName, setMyName] = useState("Nguyễn Xuân Đại");
  // const [status, setStatus] = useState(false);
  // const [info, setInfo] = useState({ name: "Đại", age: 27});
  // const [products, setProducts] = useState([
  //   {id: 1, name: "Product A"},
  //   {id: 2, name: "Product B"},
  //   {id: 3, name: "Product C"}
  // ])
  return (

    <div className="container">

      <header>
        <div className=' text-center'>
        <img src="https://caodang.fpt.edu.vn/wp-content/uploads/SvqIUpD.png" alt="" />
        </div>
    <Header />
      </header>
      <div className=''>
    <Banner />
      </div>
      <main>
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="product" element={< Product />} />
          <Route path="news" element={< News />} />
          <Route path="contact" element={< Contact />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    
    // <div>
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
