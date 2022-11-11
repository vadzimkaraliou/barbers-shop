import React, { useState } from 'react';
import ShoppingCart from "./ShoppingCart";
import { BsBasket2Fill } from 'react-icons/bs';
import { MdOutlineShoppingCart } from 'react-icons/md';

import {Link} from "react-router-dom";

const Navigation = () => {

    const [isShoppingCartVisible, setIsShoppingCartVisible] = useState(false);

    const handleToggleShoppingCart = () => {
        setIsShoppingCartVisible(!isShoppingCartVisible);
    }

    return (
        <nav className="nav">
            <Link to="/"><img src={require("../assets/KB.png")} alt="logo" className="navLogo" title="Powrót do strony głównej"/></Link>
            <MdOutlineShoppingCart className="navBasket" title="Zobacz koszyk" onClick={handleToggleShoppingCart} />
            { isShoppingCartVisible ? <ShoppingCart /> : null }
        </nav>
    )
}

export default Navigation;
