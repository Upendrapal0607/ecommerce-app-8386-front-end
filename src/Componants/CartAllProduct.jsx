import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllCartProduct } from "../Redux/CartProductReducer/Type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShield } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components";
import CartCard from "./CartCard";
export const CartList = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.CartProduct)

  const navigate = useNavigate()
  console.log({ data })
  useEffect(() => {
    dispatch(getAllCartProduct()).then(res => {
      console.log({ cartDatafromB: res });
    })
  }, [])
  let sum = 0
  if (data?.data) {
    for (let el of data?.data) {
      sum += el.price * el.productCount
    }

  }

  let discount = (sum * 20) / 100

  return (
    <DIV>

      <div className="every-card-box">
        {data?.data?.map((el, index) => <CartCard key={index} item={el} index={index} />)}
      </div>
      <div className="payment-details">
        <div className="payment price">
          <h1>PRICE DETAILS</h1>
        </div>
        <div className="payment">
          <p>{`Price (${data?.data?.length} items)`}</p>
          <p>{`₹${sum}`}</p>
        </div>
        <div className="payment">
          <p>Discount</p>
          <span>{`− ₹${discount}`}</span>
        </div>
        <div className="payment">
          <p>Delivery Charges</p>
          <div style={{ display: 'flex', gap: "4px" }}>
            <p className="line-trought">₹80</p>
            <span>Free</span>
          </div>
        </div>
        <div className="payment total-amount">
          <h2>Total Amount</h2>
          <h2>{`₹${sum - discount}`}</h2>

        </div>
        <div className="payment">
          <span>{`You will save ₹${discount + 80} on this order`}</span>
          <p></p>
        </div>
        <div className="security">
          <FontAwesomeIcon icon={faShield} className="secure-icon" />
          <p> Safe and Secure Payments.Easy returns.100% Authentic products.</p>

        </div>
        <div className="buttom">
          <button onClick={() => navigate(`/checkout/${sum - discount}`)}>PLACE ORDER</button>
        </div>
      </div>
    </DIV>
  )


}

const DIV = styled.div`
border:0px solid blue;
margin:1rem auto;
width: 98%;
display: flex;
font-family: Roboto,Arial,sans-serif;
justify-content: space-around;
.every-card-box{
  display: flex;
  flex-direction: column;
  width: 50%;
  /* gap: 1rem; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.payment{
  padding: .5rem 1rem;
  font-size:17px;
font-weight: 550;
color: #000000ce;
  display: flex;
  justify-content: space-between;

}
.price{
padding: .5rem 1rem;
border-bottom: 1px solid gray;
}
.price>h1{
font-size:20px;
font-weight: 600;

color: #0000009b;
}
span{
  color: #17a817;
  font-weight: 400;
}
.total-amount{
  font-size:22px;
font-weight: 700;
color: #000000ef;
border-top: 1px dashed gray;
  border-bottom: 1px dashed gray;
  padding: 1rem;
}
.payment-details{
  border: 0px solid blue;
  display: flex;
  flex-direction: column;
  gap:10px;
  height: 500px;
  width: 40%;
  position: sticky;
  top: 0px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
 
}
.security{
  width: 85%;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:6px;
}
.secure-icon{
  font-size: 40px;
  font-weight: 700;
  color:#000000b7;
}
.line-trought{
  text-decoration: line-through;
  color:#0000007b;
}

.buttom{
  
  width: 200px;
  margin:auto;
  text-align: center;
}
.buttom>button{
  padding:.5rem 1rem;
  background: #fb641b;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    border: none;
    color: #fff;
    border-radius: 4px;

}
@media only screen and (min-width: 280px) and (max-width:450px) {
  flex-direction: column;
 gap: 2rem;
 .every-card-box{
  width: 100%;
  margin: auto;
 }
 .payment-details{
  width: 100%;
  margin: auto;
 }
}

@media only screen and (min-width: 450px) and (max-width: 667px) {
 flex-direction: column;
 gap: 2rem;
 .every-card-box{
  width: 80%;
  margin: auto;
 }
 .payment-details{
  width: 80%;
  margin: auto;
 }
}

`