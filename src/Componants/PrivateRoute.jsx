import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Login from './Login'
import Cookies from 'js-cookie'
import Cart from '../Pages/Cart'
import AdminProductPage from '../Pages/AdminProductPage'
import AdminLogin from './AdminLogin'
const PrivateRoute = ({ children }) => {
    const token = Cookies.get("login_token");
    const name = Cookies.get("login_name");
    const Admin_name = Cookies.get("login_name");
    const login_role = Cookies.get("login_role");
    const { adminlogin } = useParams()
    console.log({ adminlogin })

    const navigate = useNavigate()
    if (token && (login_role === "user")) {
        return <Cart />

    }
    else if (token && (login_role === "admin")) {
        return <AdminProductPage />
    } else {

        return <Login />

    }

}

export default PrivateRoute
