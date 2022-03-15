import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import News from './pages/News'
import Contact from './pages/Contact'

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
        <ul>
          <li><NavLink to="/">Trang Chủ</NavLink></li>
          <li><NavLink to="/product">Sản Phẩm </NavLink></li>
          <li><NavLink to="/news">Tin Tức</NavLink></li>
          <li><NavLink to="/contact">Hỗ Trợ</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="product" element={< Product />} />
          <Route path="news" element={< News />} />
          <Route path="contact" element={< Contact />} />
        </Routes>
      </main>
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
