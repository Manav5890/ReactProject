import React, { useContext } from 'react'
import { globalVar } from '../globalcontext/GlobalContext'
import { useNavigate } from 'react-router-dom'

const Card = ({product}) => {
   let {handleProductDelete}= useContext(globalVar)
   let navigate=useNavigate()

   let handleUpdate=()=>{
       navigate(`/updateCard/${product.id}`,{state:{product,product_Type:"Electronics"}})
   }
  return (
   
    <div className="card">
    <div className="image">
      <img src={product.image} alt="" />
    </div>
    <h1>{product.item}</h1>
    <p>{product.warranty}</p>
    <p>{product.id}</p>
    <button className="update" onClick={handleUpdate}>Update</button>
    <button className="delete" onClick={()=>{handleProductDelete("Electronics",product.id)}}>Delete</button>
   </div>

  )
}

export default Card
