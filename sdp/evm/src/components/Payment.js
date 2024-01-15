import React from "react";
import NavBar from "../pages/Navbar";
import masterCard from "../pages/img/master-card.jpg";
import paypal from "../pages/img/paypal.jpg";
import "../images/payment-method.css";
import { Button } from "@mui/material";
const Payment= () => {
  return (
    <>
    <NavBar/><br/><br/><br/><center>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Paypal
        </label>

        <img src={paypal} alt="" />
      </div>
      <div className="payment text-end mt-5">
        <Button variant="contained" href="/QR">Reserve Now</Button>
      </div>
      </center>
    </>
  );
};

export default Payment;