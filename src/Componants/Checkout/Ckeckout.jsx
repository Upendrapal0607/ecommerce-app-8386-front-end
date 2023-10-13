import React, { useState } from 'react'
import Style from './Checkout.module.css'
import payment_optionImage from '../../Images/CheckoutStrip.png'
import payment_assurance from '../../Images/all-assurance-offering.png'
import CreditCard from './CreditCard'
import NetBanking from './NetBanking'
import BhimUpi from './BhimUpi'
import QRcode from './QRcode'
import BankList from './BankList'
import { useParams } from 'react-router-dom'

const initialOptions = {
  Credit: true,
  BHIM: false,
  Banking: false,
  UPI: false
}
const Ckeckout = () => {
  const [checkOptinTrue, setcheckOptinTrue] = useState(initialOptions)
  const [bankName, setBankName] = useState({})
  const { amount } = useParams() || 0

  const { Credit, BHIM, Banking, UPI } = checkOptinTrue
  return (
    <div className={Style.checkout_main} style={{ border: "0px solid red", margin: "auto" }}>
      <div className={Style.manege}>

        <div className={Style.payment_option}>
          <h4>PAYMENT OPTIONS</h4>
        </div>


        <div className={Style.secure}>

          <div className={Style.left}>
            <button onClick={() => setcheckOptinTrue({
              Credit: true,
              BHIM: false,
              Banking: false,
              UPI: false
            })} className={Credit ? Style.Payment_option_btn_Active : Style.Payment_option_btn}>Credit/Debit Card</button>
            <button onClick={() => setcheckOptinTrue({
              Credit: false,
              BHIM: true,
              Banking: false,
              UPI: false
            })} className={BHIM ? Style.Payment_option_btn_Active : Style.Payment_option_btn}>BHIM UPI / PhonePe</button>
            <button onClick={() => setcheckOptinTrue({
              Credit: false,
              BHIM: false,
              Banking: true,
              UPI: false
            })} className={Banking ? Style.Payment_option_btn_Active : Style.Payment_option_btn}>Net Banking</button>
            <button onClick={() => setcheckOptinTrue({
              Credit: false,
              BHIM: false,
              Banking: false,
              UPI: true
            })} className={UPI ? Style.Payment_option_btn_Active : Style.Payment_option_btn}>UPI QR Code</button>

          </div>
          <div className={Style.right}>
            <div className={Style.secure_photo}>
              <p className={Style.secure_100}>100% Secure</p>
              <img src={payment_optionImage} alt="" />
            </div>
            {Credit && <CreditCard amount={amount} />}
            {Banking && ((bankName.name && bankName.image) ? <NetBanking bankName={bankName} setBankName={setBankName} amount={amount} /> : <BankList setBankName={setBankName} />)}
            {BHIM && <BhimUpi amount={amount} />}
            {UPI && <QRcode amount={amount} />}
          </div>
        </div>

        <div className={Style.t_and_c}>
          {/* <h1>Hello,</h1> */}
          <p className={Style.tagline}>Shop at the Speed of Clicks!. Your Style, Your Store and Your Website. Because Style Never Sleeps.</p>

        </div>
        <div className={Style.Cancellation}>
          <h1>Lenskart Assurance </h1>
          <p>Cancellation Policy {">"}</p>
        </div>
        <div>
          <img className={Style.payment_assurance} src={payment_assurance} alt="" />
        </div>


      </div>
    </div>
  )
}

export default Ckeckout
