import React, {useContext, useState} from 'react';
import {Context} from "../context/AppContext";

import {Link} from "react-router-dom";
import {GoHome} from 'react-icons/go';

import ShoppingCart from "./ShoppingCart";
import Image from "./Image";
const BrandPageItems = ({items}) => {

    const {state, dispatch} = useContext(Context);
    const [clicked, setClicked] = useState(false);

    const handleAddItem = (item) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        });
        // alert("Produkt został dodany do koszyka");
        setClicked(true);
    };

    const handleAlert = (item) => {
        alert(item.description);
    }

    return (
        <section className="all-items-page">
            <h1 className="brandPageItemHeader">{items[0].brand.toUpperCase()}</h1>
            <div className="itemsList">
                {
                    items.map((item) => (
                        <div key={item.id} className="brandInfo">
                            <div className="brandDescription">
                                <h4>{item.brand.toUpperCase()}</h4>
                                <h5>{item.name}</h5>
                                {/*<img src={item.image_link} alt={item.brand} className="brandImg"*/}
                                {/*     title={item.description} onClick={() => handleAlert(item)}/>*/}
                                <Image className="brandImg" src={item.image_link} alt={item.brand}
                                       item = {item} />
                                <h6>{item.price} EUR</h6>
                            </div>

                            <div className="addBtn">
                                <button type="button" className="select-btn add" onClick={() => handleAddItem(item)}>DO KOSZYKA</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Link to="/" className="mainBack">
                <GoHome className="home"/>
                <div>POWRÓT DO GŁÓWNEJ STRONY</div>
            </Link>

            {clicked === true &&
                (
                    <>
                        <div className="addNotification">
                            <div className="notification-text">DODANE DO KOSZYKA</div>
                            <button className="notification-button" onClick={() => setClicked(false)}>OK</button>
                        </div>

                    </>
                )}

        </section>
    )
}

export default BrandPageItems;
