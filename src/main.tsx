import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'));
// const myName: string = "Nguyễn Xuân Đại";
// const myStatus: boolean = true;
// const myAge: number = 20;
// const product: {id: number, name: string} = {id:1, name: "Đại"}

// type Product = {
//   id: number, 
//   name: string
// } 

// function show(props: {data: Product}): any{
//   console.log(props.data.name);
// }

// function Show(props: {data: Product}): any{
//   console.log(props.data.name);
//   return null;
// }

// ReactDOM.render(<div>
//   <h1>Hello {myName}</h1>
//   <div>{myStatus ? "Đúng" : "Sai" }</div>
//   <div>{myAge}</div>
//   <div>Hello {product.name}</div>
//   <div>{show({data: product})}</div>
//   <div><Show data={product}/></div>
//   </div>,
//   document.querySelector('#root'));
