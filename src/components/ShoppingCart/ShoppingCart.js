import React, {useContext, useState} from "react";
import {Context} from "../../context/AppContext";
import {Link} from "react-router-dom";
import {AiOutlineDelete} from 'react-icons/ai';
import {MdOutlineNextPlan} from 'react-icons/md';
import {RiAddFill} from 'react-icons/ri';
import { useTranslation, Trans } from 'react-i18next';

const ShoppingCart = () => {

    const { t, i18n } = useTranslation();

    const {state, dispatch} = useContext(Context);
    const [isVisible, setIsVisible] = useState(true);

    const handleAddCartItem = (item) => {
        dispatch({
            type: 'ADD_CART_ITEM',
            payload: item
        });
    }

    const handleDeleteItem = (item) => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: item
        });
    };

    const handleDeleteAll = () => {
        dispatch({
            type: 'DELETE_ALL',
        });
    }

    const handleCartVisible = () => {
        setIsVisible(false);
    }

    if (isVisible === true) {
        if (state.addedItems.length > 0) {

            const middleResult = state.addedItems.map((item) => {
                return item.item.price * item.quantity;
            })

            const result = middleResult.reduce((total, item) => {
                return total + item;
            })

            return (
                <div className='shopping-cart'>
                    {state.addedItems.map(item => (
                        <div key={item.id}>
                            <div className="item" key={item.id}>
                                <img src={item.item.image_link} alt={item.brand} className="smallBrandImg"/>
                                <p className="buyName">{item.item.name}</p>
                                <p>x {item.quantity}</p>

                                <p className="buyName"> {t('price')} {item.item.price} EUR</p>
                                <RiAddFill className="deleteItem" title={t('addProduct')}
                                           onClick={() => handleAddCartItem(item)}/>
                                <AiOutlineDelete className="deleteItem" title={t('removeProduct')}
                                                 onClick={() => handleDeleteItem(item)}/>
                            </div>
                        </div>
                    ))}
                    <div className="totalAmount"> {t('totalPrice')} {result.toFixed(2)} EUR</div>
                    <div className="chooseBtnContainer">
                        <Link to="/CART" className="cart-link">
                            <button type="button" className="cart-btn" onClick={handleCartVisible}>
                                <MdOutlineNextPlan className="btn-additional"/>
                                <p>{t('summary')}</p>
                            </button>
                        </Link>

                        <button type="button" className="cart-btn" onClick={handleDeleteAll}>
                            <AiOutlineDelete className="btn-additional" onClick={handleDeleteAll}/>
                            <p onClick={handleDeleteAll}>{t('deleteAll')}</p>
                        </button>
                    </div>
                </div>
            )
        } else {
            return <div className='shopping-cart empty'>{t('empty')}</div>
        }
    } else {
        return null;
    }
}

export default ShoppingCart;
