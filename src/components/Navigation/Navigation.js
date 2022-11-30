import React, {useContext, useState} from 'react';
import {Context} from "../../context/AppContext";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import {MdOutlineShoppingCart} from 'react-icons/md';
import {RiSearchLine} from 'react-icons/ri';
import {Link} from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
    pl: { nativeName: 'PL' },
    en: { nativeName: 'EN' }
  };

const Navigation = () => {
    const { state } = useContext(Context);
    const [isShoppingCartVisible, setIsShoppingCartVisible] = useState(false);

    const { t, i18n } = useTranslation();

    const handleToggleShoppingCart = () => {
        setIsShoppingCartVisible(!isShoppingCartVisible);
    }

    return (
        <nav className="nav">
            <Link to="/"><img src={require("../../assets/KB.png")} alt="logo" className="navLogo"
                              title={t('goHome')}/></Link>

            <div className="nav-icons">
                <Link to="/SEARCH"><RiSearchLine className="navBasket" title={t('searchProducts')}/></Link>

                {state.addedItems.length > 0 ? <div className="quantity"> { state.addedItems.map(item => item.quantity).reduce((total, item) => total + item) } </div> : null }
                <MdOutlineShoppingCart className="navBasket" title={t('showCart')}
                                       onClick={handleToggleShoppingCart}/>

                {isShoppingCartVisible ? <ShoppingCart/> : null}
              
                {Object.keys(lngs).map((lng) => (
                <button key={lng} className="languageBtn" type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
                </button>
          ))}


            </div>
        </nav>
    )

}

export default Navigation;

