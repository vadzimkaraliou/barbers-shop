import React, {useContext, useState } from "react";
import { Context } from "../../context/AppContext";
import { MdOutlinePayments } from 'react-icons/md';
import {Link} from "react-router-dom";

const Payment = () => {
    const {state, dispatch } = useContext(Context);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true)
    }

    const handleDeleteAll = () => {
        dispatch({
            type: 'DELETE_ALL',
        });
    }

    const middleResult = state.addedItems.map((item) => {
        return item.item.price * item.quantity;
    })
    const result = middleResult.reduce((total, item) => {
        return total + item;
    })

    return (
        <section className="payment">
            <div className="paymentTotal">
                <MdOutlinePayments className="payment-icon"/>
                <div>KWOTA DO ZAPŁATY:</div>
                <div>{result.toFixed(2)} EUR</div>
            </div>

            <div className="methods">
                <div className="methods-header">METODY PŁATNOŚCI</div>
                <div className="methods-options">
                    <div className="methods-option" onClick={handleClick}>
                        <img src={require("../../assets/card.png")} alt="paymentByCard"/>
                        <div>KARTA PŁATNICZA</div>
                    </div>
                    <div className="methods-option" onClick={handleClick}>
                        <img src={require("../../assets/gpay.png")} alt="googlePay"/>
                        <div>GOOGLE PAY</div>
                    </div>
                    <div className="methods-option" onClick={handleClick}>
                        <img src={require("../../assets/apay.png")} alt="applePay"/>
                        <div>APPLE PAY</div>
                    </div>
                    <div className="methods-option" onClick={handleClick}>
                        <img src={require("../../assets/blik.png")} alt="blik"/>
                        <div>BLIK</div>
                    </div>
                    <div className="methods-option" onClick={handleClick}>
                        <img src={require("../../assets/transfer.png")} alt="transfer"/>
                        <div>PRZELEW</div>
                    </div>
                    <div className="methods-option" onClick={handleClick}>
                        <img src={require("../../assets/dpd.png")} alt="paymentToCourier"/>
                        <div>PŁATNOŚĆ ZA POBRANIEM</div>
                    </div>
                </div>
            </div>

            {clicked === true &&
            <Link to="/DONE" className="done">
                <button type="submit" className="doneBtn" onClick={handleDeleteAll}>ZAPŁAĆ</button>
            </Link>
            }

        </section>
    )
}

export default Payment;
