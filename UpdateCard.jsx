import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const UpdateCard = () => {
    let data=useLocation();
    let {id}=useParams();
    console.log("id : ",id)
    let navigate=useNavigate()
   console.log(data)

     let [updateCard,setUpdateCard]=useState({
        item:data.state.product.item,
        warranty:data.state.product.warranty,
        warranty_Id:data.state.product.warranty_id,
        image:data.state.product.image
     });


    const handleChange=(e)=>{
            let {name,value}=e.target;
            setUpdateCard({...updateCard, [name]:value})
    }

let handleSubmit=async (e)=>{
   e.preventDefault();
       let response=await axios.put(`http://localhost:4500/${data.state.product_Type}/${id}`,updateCard);
       console.log(response);
       navigate("/homePage")

}

  return (
    <section className='updateCard'>
      
        <h1>Update Product</h1>
        <form action="" onSubmit={handleSubmit}>
            <div class="form-content">
                <label for="item">item:</label>
                <input type="text" id="item" name="item"  placeholder="Enter your item" onChange={handleChange} value={updateCard.item}/>
                
            </div>

            <div class="form-content">
                <label for="warranty" >warranty:</label>
                <input  type="warranty" id="warranty" name="warranty"  placeholder="Enter your warranty" onChange={handleChange}  value={updateCard.warranty}/>
               
            </div>
            <div class="form-content">
                <label for="warranty" >warranty id:</label>
                <input  type="warranty" id="warranty" name="warrantyagain" className='warrantyId' readOnly placeholder="Enter your warranty"  value={updateCard.warranty_Id}/>
               
            </div>
            <div class="form-content">
                <label for="image" >Image:</label>
                <input  type="file" id="image" name="image" className='image' readOnly placeholder="Enter your warranty"  />
               
            </div>
       

            <div class="form-content">
                <button >update product</button>
            </div>


        </form>
    </section>
  )
}

export default UpdateCard
