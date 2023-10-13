import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { Box, Input, InputGroup, InputRightAddon, useToast } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGlobe,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import Mylogo from "../../Images/dream-park.png"
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';
import { LogoutRequest } from "../../Redux/UserReducer/Type";
import { UpdateCartEmpty } from "../../Redux/CartProductReducer/Type";

const Header = () => {
  const navigate = useNavigate();
  const authData = useSelector(state => state.UserReducer)
  const { data } = useSelector(state => state.CartProduct)
  console.log({ HeaderData: data })
  // const token = Cookies.get("login_token");
  const token = Cookies.get("login_token");
  const name = Cookies.get("login_name");
  const Admin_name = Cookies.get("login_name");
  const admin = Cookies.get("login_role");

  const toast = useToast();
  const dispatch = useDispatch();
  // console.log({ authData });
  // const dispatch = useDispatch()
  const [SearchPrarams2, setSeachParams2] = useSearchParams();
  let initialSearch = SearchPrarams2.get("q")
  const [q, setQuery] = useState(initialSearch || "")
  const handleSearch = () => {
    let QueryParam2 = {}
    q && (QueryParam2.q = q)
    setSeachParams2(QueryParam2)

  }


  const handleSearchParams = (e) => {
    const { value } = e.target;
    setQuery(value)
  }
  const handleLogOut = () => {

    dispatch(LogoutRequest()).then(res => {
      if (res.message === "loguot successful") {
        toast({
          title: `Logged Out Successfully!!`,
          position: "bottom",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        Cookies.remove("login_token")
        Cookies.remove("login_email")
        Cookies.remove("login_name")
        Cookies.remove("login_role")
        // Cookies.remove("login_avatar");
        // window.location.reload();
        dispatch(UpdateCartEmpty())
        navigate("/")
      } else {
        toast({
          title: `Something Went Wrong, Try again!!`,
          position: "bottom",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }

    })

      .catch((err) => {

        toast({
          title: `Something Went Wrong, Try again!!`,
          position: "bottom",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      })

  }

  return (
    <DIV>
      <div className="nav-top-box">
        <div className="namage-1"></div>

        <div className="nav-top-box-1">
          <div className="Lunguage-Icon">
            <FontAwesomeIcon icon={faGlobe} />
            <select
              style={{
                padding: "2px",
                outline: "none",
                border: "1px solid gray",
              }}
            >
              <option>English($)</option>
              <option>French(F)</option>
              <option>Arabic(A)</option>
              <option>Russian(R)</option>
              <option>Spanish(S)</option>
            </select>
          </div>
          <div
            className="login-box"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div style={{ fontSize: "20px" }}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            {token ? <div style={{ display: "flex", gap: "10px" }}>

              <p className="SignUp" > {admin == "user" ? name : Admin_name}</p>
              <p color="gray.500" className="SignUp" onClick={handleLogOut} >
                LOGOUT
              </p>
            </div> : <div style={{ display: "flex", gap: "10px" }}>

              <p className="SignUp" onClick={() => navigate("/signIn")} >New Register</p>

              <p color="gray.500" className="SignUp" onClick={() => navigate("/login-path")} >
                Log In
              </p>
            </div>}
          </div>
        </div>
      </div>


      {/* first nav end */}

      {/* second nav start */}
      <div className="fixing-nav">

        <div className="second-nav-box position">

          <div className="second-nav-item search">
            <img onClick={() => navigate("/")} src={Mylogo} alt="logo" />
            <p className="dream-park" onClick={() => navigate("/")} >DREAM PARK</p>
          </div>

          <div className="cart-symbole" style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <InputGroup size="sm" alignItems="center">
              <Input className="search-input" value={q} onChange={handleSearchParams} placeholder="Search your product" pt={4} pb={4} />
              <InputRightAddon onClick={handleSearch}
                padding={4}
                fontSize={20}
                cursor={"pointer"}
                children={<FontAwesomeIcon icon={faMagnifyingGlass} />}
              />
            </InputGroup>
            <Box

              onClick={() => navigate("/cart")}
              className="cart-icon"
              p={6}
              fontSize={25}
            >
              <h1 style={{ fontWeight: "600", fontSize: "25px", zIndex: "2", marginBottom: "-17px", marginTop: "0px", marginLeft: "20px", color: "red" }}>{data?.length == 0 ? "" : data?.length}</h1>
              <FontAwesomeIcon icon={faCartShopping} />
            </Box>
          </div>
        </div>

        {/* Second navbar End  */}

        {/* Thired nav bar start */}

        <div
          className="third-nav"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <Link to="Product" className="third-nav-box" smooth={true}
            offset={-100}
            duration={500}>
            New!
          </Link>
          <Link to="Product?sortBy=desc" className="third-nav-box" smooth={true}
            offset={-100}
            duration={500}>
            Top-Rared
          </Link>
          <Link to="Product?category=dress-cloth" className="third-nav-box" smooth={true}
            offset={-100}
            duration={500}>
            Dresses
          </Link>
          <Link className="third-nav-box" to="Product?category=cloth" smooth={true}
            offset={-100}
            duration={500}>
            Clothing
          </Link>
          <Link className="third-nav-box" to="Product?category=wedding-cloth" smooth={true}
            offset={-100}
            duration={500}>
            Wedding
          </Link>
          <Link to="Product?category=grocery" className="third-nav-box" smooth={true}
            offset={-100}
            duration={500}>Home & Furniture</Link>
          <Link className="third-nav-box" to="Product?category=shoes" smooth={true}
            offset={-100}
            duration={500}>
            Shoese
          </Link>
          <Link className="third-nav-box" to="Product?category=gift" smooth={true}
            offset={-100}
            duration={500}>
            Gift
          </Link>
          <Link className="third-nav-box" to="Product?category=other" smooth={true}
            offset={-100}
            duration={500}>
            Other
          </Link>
        </div>
      </div>
    </DIV>
  );
};

export default Header;

const DIV = styled.div`
  width: 100%;
  margin: auto;
  border: 0px solid red;
  display: flex;
  flex-direction:column;
  gap:.5rem;

  .SignUp:hover {
    cursor: pointer;
  
  
    border: 1px solid #78909C;
    background-color: white;
    color: #78909C;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  }
  .nav-bar {
    width: 100%;
  }
  .nav-top-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 5px 5px;
    background-color: #cfd8dc;
    margin: auto;
  }
  .namage-1{
    border: 0px solid red;
    
  }
  .dream-park{
    font-size:18px;
    font-weight: 500;

padding:.5rem;
cursor: pointer;
border-radius: .8rem;
background-color: #000000a6;
color:#ffffffb5;
letter-spacing: .5rem;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  }
  .nav-top-box-1 {
 
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border: 0px solid blue;
  }
  .SignUp {
    align-items: center;
    
    padding:.3rem .6rem;
    border-radius: .6rem;
    font-weight: 500;
  
  }
  .Lunguage-Icon {
   
    font-size: 15px;
  }

  .fixing-nav{
    border:0px solid green;

  }
  .cart-symbole{
    border:0px solid blue;
    align-items: center;
  }
  .second-nav-box {
    width: 90%;
    margin: auto;
    display: flex;
    padding: 0px 7px;
    border: 0px solid red;
    justify-content: space-between;
  }
  .second-nav-item>img{
width: 14%;
  }

  .logo-name {
    border-top: 3px solid #4db6ac;
    border-bottom: 1px solid lightgray;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    padding: 10px;
    letter-spacing: 4px;
  }
  .logo-style{
    border-right: 1px solid lightgray;
    border-left: 1px solid lightgray;
    padding: 10px;
  }
  .cart-icon {
    cursor: pointer;
    padding: 0px;
  }
  .search {
    display: flex;
    align-items: center;
    padding: 0px 5px;
    gap: 10px;
    justify-content: space-between;
border:0px solid blue;
    width: 50%;
  }
  .search>img{
    cursor: pointer;
  }

  .third-nav {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 100%;
    padding: 1%;
  }

  .third-nav-box {
    line-height: 100%;
    padding: 1%;
    align-items: center;
    margin: auto;
    cursor: pointer;
  }
 
  .fixing-nav {
    position: sticky;
  }

  .Modalbox1 {
    height: 10px;
  }
 

  @media only screen and (min-width: 280px) and (max-width: 667px) {
    .nav-top-box-1 {
        width: 100%;
    }
    .namage-1{
    display: none;
  }
  .second-nav-box{
flex-direction: column;
gap: .5rem;
border-bottom: 1px solid gray;

  }
  
.second-nav-item>img{
width: 22%;
height:50px;
  }
  .dream-park{
    visibility: visible;
    font-size:18px;
    font-weight: 500;

padding:.5rem;
cursor: pointer;
border-radius: .8rem;
background-color: #000000a6;
letter-spacing: .3rem;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  .search{
    width: 100%;
   
  }
  .third-nav{
display:none;
border: 0px solid blue;
visibility: hidden;
height: 0px;

  }
  }

  @media only screen and (min-width: 668px) and (max-width: 920px) {
    .second-nav-item>img{
width: 20%;

  }
  }
`;
