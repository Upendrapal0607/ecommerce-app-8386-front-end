import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
const SelectLogin = () => {
    return (
        <DIV>
            <div className="select-login-option">
                <div className="option">
                    <Link className='login' to="/login">
                        User Login
                    </Link>
                </div>
                <div className="option">
                    <Link className='login' to="/adminlogin">
                        Admin Login
                    </Link>
                </div>
            </div>
        </DIV>
    )
}

export default SelectLogin

const DIV = styled.div`
border: 0px solid red;

padding: 2rem;
width: 90%;
margin:2rem auto;
color: #000000d6;
background-image: url("https://img.freepik.com/free-vector/online-shopping-landing-page_33099-1725.jpg");

.select-login-option{
    width:90%;
    margin: auto;
    border:0px solid red;
   display:flex;
   align-items: center;
   justify-content: space-around;
   gap:1rem;
   
}

.option{
    background-color: rgb(249, 249, 249);
    width: 40%;
    height:400px;
    border:0px solid red;
    display :flex;
   align-items: center;
    justify-content:center;
    cursor: pointer;
    font-size: large;
    font-weight: 550;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
 
}
.option:hover{
    border:4px solid #4c00ff;
    padding: .4rem 1rem;
    color:#4c00ff;
}
.option>.login:hover{
    border:2px solid #4c00ff;
    padding: .4rem 1rem;
    border-radius:.4rem;
}

@media only screen and (min-width: 668px) and (max-width: 920px) {
    .select-login-option{
        width: 100%;
    }
    .option{
        height:300px;
    }
}
@media only screen and (min-width: 280px) and (max-width: 667px) {
    .select-login-option{
        width: 100%;
        flex-direction: column;
    }
    .option{
        height:200px;
        width:100%;
    }
}
`