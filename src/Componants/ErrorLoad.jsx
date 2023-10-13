import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ErrorLoad = () => {
    const navigate = useNavigate()
    const NavigateHomePage = () => {
        navigate("/")
    }
    return (
        <DIV>
            <div className="error-message">
                <h1>There is something wrong please try again letar</h1>
                <img src="https://www.thoughtco.com/thmb/RyA4XYHdLAqrgpPvf9qWPuoeRRw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/images-not-loading-4072206-7a285a9f474f4f2896c33b7f8efda969.png" alt="Error" />
                <button onClick={NavigateHomePage} className='ok-btn'>OK</button>
            </div>
        </DIV>
    )
}

export default ErrorLoad

const DIV = styled.div`
.error-message{
    width:100%;
    margin: auto;
    padding:4rem;
    text-align: center;
    border:0px solid red;
    display: flex;
    flex-direction: column;
    gap:1rem;
}
.error-message>h1{
   
    font-size: 25px;
    font-weight: 600;
    color:red;
}
.error-message>img{
width: 40%;
margin:auto;
}
.ok-btn{
    width: 5rem;
    margin:auto;
    padding: .5rem 1rem;
    border-radius:4rem;
    border:2px solid red;
}
.ok-btn:hover{
    background-color: #e40f0f;
    border: 0px solid red;
    color:#fff;
}
@media only screen and (min-width: 280px) and (max-width: 667px) {
    .error-message{
        padding: 1rem;
    }
    .error-message>img{
width: 100%;
margin:auto;
}
}

`