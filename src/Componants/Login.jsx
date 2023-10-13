import React, { useState } from 'react';
// import './RegistrationForm.css';
import styled from "styled-components"
import { useNavigate, Link, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { LoginRequest } from '../Redux/UserReducer/Type';
import { getAllCartProduct } from '../Redux/CartProductReducer/Type';
import Cookies from "js-cookie";
import { useToast } from '@chakra-ui/react';
function Login() {

  const [formData, setFormData] = useState({

    email: '',
    password: '',

  });
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();
  const token = Cookies.get("login_token");
  const name = Cookies.get("login_name");

  const dispatch = useDispatch();

  const location = useLocation();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    dispatch(LoginRequest(formData)).then((res) => {
      console.log(res.data, "data")

      if (res.data.message === "login successful") {

        setFormData({ email: "", password: "" })
        Cookies.set("login_token", `${res.data.token}`, { expires: 7 })
        Cookies.set("login_name", `${res.data.user.name}`, { expires: 7 })
        Cookies.set("login_email", `${res.data.user.email}`, { expires: 7 })
        res.data.login_role === "admin" ? Cookies.set("login_role", "admin", { expires: 7 }) : Cookies.set("login_role", "user", { expires: 7 });
        toast({
          title: `Welcome ${res.data.user.name}`,
          position: "bottom",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })

        window.location.reload()
        navigate("/product")

      } else if (res.data.message === "wrong password or email") {
        toast({
          title: `wrong password`,
          position: "bottom",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      } else if (res.data.message === "please provid email and password") {
        toast({
          title: `${res.data.message}`,
          position: "bottom",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      } else {
        toast({
          title: `Something Went Wrong, Try again!!`,
          status: 'error',
          position: "bottom",
          duration: 3000,
          isClosable: true,
        })
      }

    }).catch((err) => {

      toast({
        title: `Something Went Wrong, Try again!!`,
        status: 'error',
        position: "bottom",
        duration: 3000,
        isClosable: true,
      })
    })
  };

  return (
    <DIV>
      <div className="registration-container">

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className='extra-suggesion'>
            <h1>Your cart is waiting! Log in to your account and bring your e-commerce dreams to life!</h1>
          </div>
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
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">USER LOGIN</button>
          <div className='already-account'>
            <h1>Create Account 👉<Link className="link" to="/signIn">signup here</Link></h1>
          </div>
        </form>
      </div>
    </DIV>
  );
}

export default Login;


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
