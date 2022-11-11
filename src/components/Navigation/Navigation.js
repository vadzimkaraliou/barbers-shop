import React, {useContext, useState} from 'react';
import {Context} from "../../context/AppContext";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import {MdOutlineShoppingCart} from 'react-icons/md';
import {RiAddFill, RiSearchLine} from 'react-icons/ri';
import {Link} from "react-router-dom";
import {AiOutlineDelete} from "react-icons/ai";


const Navigation = () => {
    const {state, dispatch} = useContext(Context);
    const [isShoppingCartVisible, setIsShoppingCartVisible] = useState(false);

    const handleToggleShoppingCart = () => {
        setIsShoppingCartVisible(!isShoppingCartVisible);
    }

    return (
        <nav className="nav">
            <Link to="/"><img src={require("../../assets/KB.png")} alt="logo" className="navLogo"
                              title="Powrót do strony głównej"/></Link>

            <div className="nav-icons">
                <Link to="/SEARCH"><RiSearchLine className="navBasket" title="Wyszukaj produkt"/></Link>

                {state.addedItems.length > 0 ? <div className="quantity"> { state.addedItems.map(item => item.quantity).reduce((total, item) => total + item) } </div> : null }
                <MdOutlineShoppingCart className="navBasket" title="Zobacz koszyk"
                                       onClick={handleToggleShoppingCart}/>

                {isShoppingCartVisible ? <ShoppingCart/> : null}
            </div>
        </nav>
    )

}

export default Navigation;

