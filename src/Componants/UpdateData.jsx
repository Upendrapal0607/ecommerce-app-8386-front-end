import React, { useEffect, useState } from 'react';

import styled from "styled-components"
import { useNavigate, Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
function UpdateData({ id, handleUpdata }) {

  const navigate = useNavigate()
  const Data = useSelector(state => state.ProductReducer.Product.data)
  const [formData, setFormData] = useState({});
  useEffect(() => {

    let EditebleData = Data?.filter(el => el._id == id)
    EditebleData && setFormData(EditebleData[0])
  }, [id])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: (name == "price" || name == "rating") ? +value : value,
    });
  };

  return (
    <DIV>
      <div className="registration-container">

        <form className="registration-form" onSubmit={(e) => handleUpdata(e, formData)}>

          <input
            type="text"
            name="name"
            placeholder="Title"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <select name="category" value={formData.category} onChange={handleChange} id="" placeholder='Select Category' required>
            <option value={formData.category}>{formData.category}</option>
            <option value="cloth">Cloth</option>
            <option value="dress-cloth">Dress Related Cloth</option>
            <option value="wedding-cloth">Wedding Cloth</option>
            <option value="grocery">Grocery Product</option>
            <option value="shoes">Shoes</option>
            <option value="gift">Gift</option>
            <option value="jewelary">Jewelary</option>
            <option value="belt">Belt</option>
            <option value="other">Other</option>
          </select>


          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />
          <select name="rating" value={formData.rating} onChange={handleChange} id="" placeholder='Select Rating'>
            <option value={formData.rating}>{formData.rating}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <select name="gender" onChange={handleChange} value={formData.gender} id="" placeholder='Select Gender'>
            <option value={formData.gender}>{formData.gender}</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="kids">Kids</option>
          </select>
          <textarea
            type="text"
            name="details"
            placeholder="Description"
            value={formData.details}
            onChange={handleChange}
            required
          />
          <button type="submit">UPDATE</button>

        </form>

      </div>
    </DIV>
  );
}

export default UpdateData;


const DIV = styled.div`
border: 0px solid red;

width: 30%;
margin:2rem auto;
color: #000000d6;


.extra-suggesion{
font-size:18px;
font-weight: 500;
color:#6b5697;
padding: 1rem 0rem;

border:2px solid green;


}
.registration-container {
  border:2px solid green;
  display: flex;
  flex-direction: column;
  width:100%;
  margin:auto;
  border: 0px solid red;
  justify-content: center;
  align-items: center;
 
}

.registration-form {
  width: 100%;
display: flex;
flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc; 
  border-radius: 5px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgb(249, 249, 249);
}

input ,textarea,select{
    

  margin-bottom: 10px;
  padding: 10px 20px;
  width: 100%;
 
  border:.1rem solid rgba(0, 0, 0, 0.24);
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}

button:hover {
  background-color: #0056b3;
}
.already-account{
    text-align:center;
    padding:1rem;
    border:0px solid red;
    color: #0000006a;
    font-size:14px;
    
}
.link:hover{
    color:#007bff; 
    font-weight:500;
}

@media only screen and (min-width: 668px) and (max-width: 920px) {
    .registration-form{
        width: 100%;
    }
}
@media only screen and (min-width: 280px) and (max-width: 667px) {
  width: 100%;
    .registration-container{
        width: 100%;
    }
    .registration-form{
        width: 100%;
       
    }
    .extra-suggesion{
        width: 100%;
    }
}

`
