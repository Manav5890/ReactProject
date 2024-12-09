import React, { useContext, useEffect } from 'react'
import { globalVar } from '../globalcontext/GlobalContext';
import Card from '../pages/Card';
import { useLoaderData } from 'react-router-dom';

const Medical = () => {
  let { products, fetchProducts, setProducts, card, setCard ,refreshId} = useContext(globalVar);
  let data=useLoaderData();

  console.log(data)
  console.log(products);
  useEffect(() => {
    fetchProducts("http://localhost:4500/Medical");
  }, [refreshId]);
  
  return <section className="main">
    {products.map((ele,i)=>{
       return <Card product={ele} key={i+1}/>
    })}
  </section>
  
}

export default Medical
