import React, {useContext, useState} from 'react';
import {Context} from "../../context/AppContext";
import {Link} from "react-router-dom";
import {GoHome} from 'react-icons/go';
import Image from "../Image/Image";
import { useTranslation, Trans } from 'react-i18next';

const BrandPageItems = ({items}) => {

    const { t, i18n } = useTranslation();

    const {dispatch} = useContext(Context);
    const [clicked, setClicked] = useState(false);

    const handleAddItem = (item) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        });
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 1000);
    };

    return (
        <section className="all-items-page">
            {/*<h1 className="brandPageItemHeader">{items[0].brand.toUpperCase()}</h1>*/}
            <div className="itemsList">
                {items.map((item) => (
                        <div key={item.id} className="brandInfo">
                            <div className="brandDescription">
                                <h4>{item.brand.toUpperCase()}</h4>
                                <h5>{item.name}</h5>
                                <Image className="brandImg" src={item.image_link} alt={item.brand}
                                       item={item} />
                                <h6>{item.price} EUR</h6>
                            </div>

                            <div className="addBtn">
                                <button type="button" className="select-btn add" onClick={() => handleAddItem(item)}>{t('addToCart')}</button>
                            </div>
                        </div>
                    ))}
            </div>
            <Link to="/" className="mainBack">
                <GoHome className="home"/>
                <div>{t('goHome')}</div>
            </Link>

            {clicked === true &&
                (
                    <>
                        <div className="addNotification">
                            <div className="notification-text">{t('added')}</div>
                        </div>

                    </>
                )}

        </section>
    )
}

export default BrandPageItems;
