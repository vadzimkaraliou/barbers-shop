import React from "react";
import {MdDoneOutline} from "react-icons/md";
import {Link} from "react-router-dom";
import {GoHome} from "react-icons/go";

const Done = () => {

    return (
        <section className="done-form">
            <section className="done-top">
                <MdDoneOutline className="done-logo"/>
                <div className="grate-text">DZIĘKUJEMY ZA ZAKUPY W NASZYM SKLEPIE</div>
            </section>

            <section className="done-bottom">

                <Link to="/" className="cart-links">
                    <div className="bottom-part">
                        <GoHome className="done-bottom-logo"/>
                        <div className="bottom-part-text">DO STRONY GŁÓWNEJ</div>
                    </div>
                </Link>

                <a href="https://vadzimkaraliou.github.io/barberskb-test/" className="cart-links">
                    <div className="bottom-part">
                        <img src={require("../../assets/KB.png")} alt="logo" className="done-salon-logo"/>
                        <div className="bottom-part-text">DO STRONY SALONU</div>
                    </div>
                </a>

            </section>
        </section>


    )
}

export default Done;
