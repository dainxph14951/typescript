import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
type Props = {}
type ProductType = {
    _id: number,
    name: string,
    product: number
}

const ProductDetail = (props: Props) => {
    const { id } = useParams(); 
    const [product, setProduct] = useState<ProductType>(); // b1 : khai báo ra 1 biến 
    
    useEffect(() => {// b3: chạy hàm
        const getProduct =  async () => { //CallAPi
            const response = await fetch('http://localhost:8000/api/products'+id);
            const data = await response.json();
            console.log(data);
            setProduct(data);
        }
        getProduct();
    },[]);
  return ( //b2: chạy return
     <div>{product?.name}</div>
  )
}

export default ProductDetail