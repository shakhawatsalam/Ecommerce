import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from "../context/StateContext";


const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();
    
    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill/>
                </p>
                <h2>Thank You for your order!</h2>
                <p className="email-msg">
                    Check your email inbox for the receipt.
                </p>
                <p className="description">If you have any question, please email </p>
                <a className="email" href="mailto:skshawon726@gmail.com">
                    skshawon726@gmail.com
                </a>
            </div>
        </div>
    );
};

export default Success;
