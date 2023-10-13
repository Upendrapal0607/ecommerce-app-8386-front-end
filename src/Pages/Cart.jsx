import React, { useEffect } from 'react'

import { CartList } from '../Componants/CartAllProduct'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCartProduct } from '../Redux/CartProductReducer/Type';
import EmtyCart from '../Componants/EmtyCart';


const Cart = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(store => store.CartProduct)

  useEffect(() => {
    dispatch(getAllCartProduct())
  }, [])
  return (
    <div>
      {data.length < 1 ? < EmtyCart /> : <CartList />}
    </div>
  )
}

export default Cart
