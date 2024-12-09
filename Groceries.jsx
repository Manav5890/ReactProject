import React, { useContext, useEffect } from 'react'
import { globalVar } from '../globalcontext/GlobalContext';
import Card from '../pages/Card';

const Groceries = () => {
  let { products, fetchProducts, setProducts, card, setCard ,refreshId} = useContext(globalVar);

  console.log(products);
  useEffect(() => {
    fetchProducts("http://localhost:4500/grocery");
  }, [refreshId]);
  
  return <section className="main">
    {products.map((ele,i)=>{
       return <Card product={ele} key={i+1}/>
    })}
  </section>
}

export default Groceries
