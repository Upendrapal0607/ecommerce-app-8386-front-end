import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import { AddToCartProduct, getAllCartProduct } from "../Redux/CartProductReducer/Type";
import Login from "./Login";
import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";
const Card = ({ item, index }) => {
  const token = Cookies.get("login_token");
  const admin = Cookies.get("login_role");

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const toast = useToast()
  const data = useSelector(state => state.CartProduct)

  const handleAddToCard = () => {
    if (!token && !admin) {
      return navigate("/login")
    }
    let CartItem = {
      name: item.name,
      category: item.category,
      details: item.details,
      gender: item.gender,
      image: item.image,
      price: item.price,
      rating: item.rating,
      productCount: 1,
      productId: item._id
    };
    let bag = true;

    if (Array.isArray(data?.data)) {

      for (let el of data?.data) {
        if (el.productId === item._id) {
          bag = false
        }
      }
    }
    if (bag) {
      dispatch(AddToCartProduct(CartItem)).then(res => {
        console.log({ CartAded: res });
        dispatch(getAllCartProduct())

        toast({
          title: `product added into the cart`,
          position: "bottom",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      })
    } else {

      toast({
        title: `product already added in cart"`,
        position: "bottom",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })

    }


  };
  return (
    <DIV key={index}>
      <div className="product-card">
        <div>
          <img
            onClick={() => {
              navigate(`/product/${item._id}`);
            }}
            src={item.image}
            alt={item.name}
          />
        </div>
        <div>
          <h1 style={{ color: "black" }}>{item.name}</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{ color: "#455A64", fontSize: "15px", fontWeight: "500" }}
            >
              Price :
            </p>
            <p>{`${item.price}.00 ₹`}</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{ color: "#455A64", fontSize: "15px", fontWeight: "500" }}
            >
              Rating :
            </p>
            <p>
              {item.rating == 5 ? "★★★★★" : item.rating == 4 ? "★★★★" : item.rating == 3 ? "★★★" : item.rating == 2 ? "★★" : item.rating == 1 ? "★" : "★★★★★★"}
            </p>
          </div>

          <div className="btn-box">
            <button
              onClick={() => {
                if (!token && !admin) {
                  return navigate("/login")
                } else {

                  navigate(`/checkout/${item.price * 80 / 100}`);
                }
              }}
              className="add-cart-btn"
            >
              Buy
            </button>
            <button onClick={handleAddToCard} className="add-cart-btn">
              CART
            </button>
          </div>
        </div>
      </div>
    </DIV>
  );
};
export default Card;

const DIV = styled.div`
  .product-card {
    border: 0px solid green;
    padding: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  
  }
  .product-card:hover {
    padding: 0rem;
    cursor: pointer;
  }
  .btn-box {
    border: 0px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.6rem;
  }
  .btn-box:hover {
    border: 0px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.6rem;
  }
  .add-cart-btn {
    border: 0px solid blue;
    font-size: 16px;
    font-weight: 500;
  
    text-align: center;
    border-radius: 5px;
    padding: 0.4rem 1rem;
    background-color: #00000092;
    color: #fff;
    /* background-color: #007bff; */
  }
  .add-cart-btn:hover {
    background-color: #000000e4;
    color: #fff;
   
  }
 
`;
