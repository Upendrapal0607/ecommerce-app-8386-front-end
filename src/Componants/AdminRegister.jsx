import React, { useState } from 'react';

import styled from "styled-components"
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios';
import { AdminUrl } from '../Url/Url';
const initialData = {
  name: '',
  age: '',
  city: '',
  email: '',
  password: '',
  gender: ''
}
function AdminRegister() {
  const navigate = useNavigate()
  const [pass, setPass] = useState("")
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name == "age" ? +value : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    if (pass != formData.password) {
      alert("Your password is not match")
    } else {
      axios.post(`${AdminUrl}/register`, formData).then(res => {
        console.log("register res", res);
        alert(res.data.message)
        navigate("/adminlogin")
      })
      setFormData(initialData)
    }
  };


  return (
    <DIV>
      <div className="registration-container">

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className='extra-suggesion'>
            <h1>Empower your e-commerce journey as an admin. Register today and take charge of your online store.</h1>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <select name="gender" value={formData.gender} onChange={handleChange} id="" placeholder='Select Gender'>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="kids">Kids</option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="pass"
            placeholder="Password"
            value={formData.pass}
            onChange={e => setPass(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
          <div className='already-account'>
            <h1>Already Account 👉<Link className="link" to="/adminlogin">Login here</Link></h1>
          </div>
        </form>

      </div>
    </DIV>
  );
}

export default AdminRegister;


const DIV = styled.div`
border: 0px solid red;

padding:2rem 0rem;

width: 90%;
margin:2rem auto;
color: #000000d6;
background-image: url("https://img.freepik.com/free-vector/online-shopping-landing-page_33099-1725.jpg");

.extra-suggesion{
font-size:18px;
font-weight: 500;
color:#6b5697;
padding: 1rem 0rem;
width: 70%;


}
.registration-container {
  display: flex;
  flex-direction: column;
  width:70%;
  margin:auto;
  border: 0px solid red;
  justify-content: center;
  align-items: center;

}

.registration-form {
  width: 70%;
display: flex;
flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc; 
  border-radius: 5px;
 
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgb(249, 249, 249);
}

input ,select{
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
