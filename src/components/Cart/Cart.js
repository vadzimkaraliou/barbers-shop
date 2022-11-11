import React, { useContext } from "react";
import { Context } from "../../context/AppContext";
import {Link} from "react-router-dom";
import { BsBasket2Fill } from 'react-icons/bs';
import { MdPayment } from 'react-icons/md';

const Cart = () => {
    const {state} = useContext(Context);

    if (state.addedItems.length > 0) {

        const middleResult = state.addedItems.map((item) => {
            return item.item.price * item.quantity;
        })

        const result = middleResult.reduce((total, item) => {
            return total + item;
        })

        return (
            <section className='cart-container'>
            <div className='cart-header'>TWÓJ KOSZYK</div>
            <div className="cart">
                {state.addedItems.map(item => (
                    <div key={item.id}>
                        <div className="cart-item">
                            <img src={item.item.image_link} alt={item.brand} className="cart-img"/>
                            <div >{item.item.name}</div>
                            <div>x {item.quantity}</div>
                            <div className="cart-price"> PRICE: {item.item.price * item.quantity} EUR</div>
                        </div>
                    </div>
                ))}
                <div className="cart-price-total"> SUMA ZAMÓWIENIA: {result.toFixed(2)} EUR</div>
            </div>

                <section className="order-decision">
                <Link to="/" className="order-icons">
                    <BsBasket2Fill className="order-icon" />
                    <div className="order-text">POWRÓĆ DO ZAKUPÓW</div>
                </Link>

                <Link to="/ORDER" className="order-icons">
                    <MdPayment className="order-icon"/>
                    <div className="order-text">ZAMAWIAM</div>
                </Link>
                </section>

            </section>
        )
    }
}

export default Cart;

