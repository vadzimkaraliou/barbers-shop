import React, { useContext } from "react";
import { Context } from "../../context/AppContext";
import {Link} from "react-router-dom";
import { BsBasket2Fill } from 'react-icons/bs';
import { MdPayment } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const Cart = () => {
    const {state} = useContext(Context);

    const { t } = useTranslation();

    if (state.addedItems.length > 0) {

        const middleResult = state.addedItems.map((item) => {
            return item.item.price * item.quantity;
        })

        const result = middleResult.reduce((total, item) => {
            return total + item;
        })

        return (
            <section className='cart-container'>
            <div className='cart-header'>{t('yourCart')}</div>
            <div className="cart">
                {state.addedItems.map(item => (
                    <div key={item.id}>
                        <div className="cart-item" key={item.id}>
                            <img src={item.item.image_link} alt={item.brand} className="cart-img"/>
                            <div >{item.item.name}</div>
                            <div>x {item.quantity}</div>
                            <div className="cart-price"> {t('price')} {item.item.price * item.quantity} EUR</div>
                        </div>
                    </div>
                ))}
                <div className="cart-price-total"> {t('totalPrice')} {result.toFixed(2)} EUR</div>
            </div>

                <section className="order-decision">
                <Link to="/" className="order-icons">
                    <BsBasket2Fill className="order-icon" />
                    <div className="order-text">{t('comeBackShopping')}</div>
                </Link>

                <Link to="/ORDER" className="order-icons">
                    <MdPayment className="order-icon"/>
                    <div className="order-text">{t('order')}</div>
                </Link>
                </section>

            </section>
        )
    }
}

export default Cart;

