import React from 'react'
import styled from 'styled-components'

const ProductNotFound = () => {
  return (
    <DIV>
      <div className='error-message'>
        <h1>Product not found</h1>
      </div>
    </DIV>
  )
}

export default ProductNotFound

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