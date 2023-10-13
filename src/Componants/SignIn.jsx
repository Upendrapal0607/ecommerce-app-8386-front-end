import React, { useState } from 'react';
import styled from "styled-components"
import { useNavigate, Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { RgisterRequest } from '../Redux/UserReducer/Type';
import { useToast } from '@chakra-ui/react';
function RegistrationForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [pass, setPass] = useState("")
  const toast = useToast()
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    email: '',
    password: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass != formData.password) {
      toast({
        title: `wrong password`,
        position: "bottom",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } else {
      dispatch(RgisterRequest(formData)).then(res => {
        console.log({ res })

        toast({
          title: `${res.message}`,
          position: "bottom",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        setTimeout(() => {
          navigate("/login")
        }, 3000)
      })
    }

  };


  return (
    <DIV>
      <div className="registration-container">

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className='extra-suggesion'>
            <h1>Your gateway to exclusive offers and personalized shopping awaits. Register now!</h1>
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

            placeholder="Password"
            value={pass}
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
            <h1>Already account 👉<Link className="link" to="/login">Login here</Link></h1>
          </div>
        </form>
      </div>
    </DIV>
  );
}

export default RegistrationForm;


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

input {


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
