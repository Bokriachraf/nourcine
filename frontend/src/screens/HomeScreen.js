import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  
 
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
       {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
} 
// import React from 'react';
// import Product from '../components/Product';
// import data from '../data';

// export default function HomeScreen() {
//   return (
//     <div>
//       <div className="row center">
//         {data.products.map((product) => (
//           <Product key={product._id} product={product}></Product>
//         ))}
//       </div>
//       </div>
//       );
//     }

// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import Product from "../components/Product";

// export default function 
// HomeScreen() {
//   const [products,setProducts] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const {result} = await axios.get('/api/products');
//       setProducts(result.data);
//     };
//     fetchData();
//   },[]);
//   return (
//     <div>
//     <div className="row center">
//       {products.map((product) => (
//         <Product key={product._id} product={product}></Product>
//       ))}
//     </div>
//     </div>
  
//   );
// }
