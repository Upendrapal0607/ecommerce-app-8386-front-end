import React, { useEffect, useState } from 'react'
import SideNavbar from '../Componants/Headers/SideNavbar'
import AllProduct from '../Componants/AllProduct'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { getAllProduct } from '../Redux/UserProductReducer/Action'
import ErrorLoad from '../Componants/ErrorLoad'
import Loader from '../Componants/Loader'
import ProductNotFound from '../Componants/ProductNotFound'
import { getAllCartProduct } from '../Redux/CartProductReducer/Type'

const Product = () => {
  const dispatch = useDispatch()
  const { Products, isLoading, isError } = useSelector(state => state.UserProductReducer)
  const location = useLocation()
  const [page, setPage] = useState(1)
  const [SearchPrarams, setSeachParams] = useSearchParams();
  const [SearchPrarams2, setSeachParams2] = useSearchParams();

  useEffect(() => {
    dispatch(getAllCartProduct())
  }, [])
  useEffect(() => {
    let paramObj = {
      params: {
        page: page,
        limit: 8,
        gender: SearchPrarams.getAll("gender"),
        category: SearchPrarams.get("category"),
        rating: SearchPrarams.get("rating"),
        sort: SearchPrarams.get("sortBy") && "price",
        order: SearchPrarams.get("sortBy"),
        q: SearchPrarams2.get("q")
      },
    };

    dispatch(getAllProduct(paramObj)).then(res => {

    })
  }, [page, location])

  return (
    <DIV>
      {isError ? < ErrorLoad /> : <div className='produc-main-box'>
        <SideNavbar />
        {isLoading ? < Loader /> : <div className='product-page'>
          {(Products?.data?.length <= 0) ? <ProductNotFound /> : <AllProduct data={Products.data} />}
          <div className='btn-box'>
            <button className='page-btn' disabled={page == 1} onClick={() => setPage(prev => prev - 1)}>{"<"}</button>
            <button className='page-btn'>{page}</button>
            <button className='page-btn' disabled={page == Products.totalPages} onClick={() => setPage(prev => prev + 1)}>{">"}</button>
          </div>
        </div>}

      </div>}
    </DIV>
  )
}

export default Product

const DIV = styled.div`

.product-page{
    border: 0px solid blue;
    width: 100%;
    padding:1rem 0rem;
/* overscroll-behavior-y: -2; */
/* width: 30%; */
margin:2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
.produc-main-box{
  display: flex;
width: 95%;
border: 0px solid red;
margin: 1rem auto;
gap:1rem;
}

.btn-box{
    border:0px solid blue;
    display:flex;
    gap:1rem;
    margin-top:1rem;
    }
  .page-btn{
    border:0px solid blue;
    font-size: 25px;
    font-weight: 600;
    width:6rem;
    text-align: center;
    border-radius: 5px;
    background-color: #00000092;
color:#fff;
    
  }
  .page-btn:hover{
    background-color: #000000e4;
    color: #fff;
    
  }
  .page-btn:nth-child(2){
    width:4rem;
    font-size: 20px;
    font-weight: 500;
    text-align: center;

  }
@media only screen and (min-width: 280px) and (max-width: 667px) {
  .produc-main-box{
   flex-direction: column;

}
}


`