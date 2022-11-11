import React from 'react';
import {BsFacebook, BsInstagram} from 'react-icons/bs';
import {AiOutlineMail, AiFillPhone} from 'react-icons/ai';
import {GoHome} from 'react-icons/go';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <p>BARBERS KB</p>
                <p>00-341 RADNA 10</p>
                <p>WARSZAWA, POLSKA</p>
                <p>GODZINY OTWARCIA (PN - SB) 10:00 - 20:00</p>
                <a href="mailto:kostiab7@gmail.com">
                    <AiOutlineMail className="footer-icons"/>
                    info@barberkb.pl</a>
                <a href="tel:+48696296776">
                    <AiFillPhone className="footer-icons"/>
                    0048 696296776</a>
            </div>

            <div className="footer-bottom">
                <a href="https://www.facebook.com/BarbersKD" target="_blank" title="Facebook" >
                    <BsFacebook className="fa-facebook" title="Facebook"/> </a>

                <a href="https://www.instagram.com/barbers_kb/?igshid=YmMyMTA2M2Y%3D" target="_blank" title="Instagram">
                    <BsInstagram className="fa-instagram" title="Instagram"/> </a>

                <a href="https://vadzimkaraliou.github.io/barberskb-test/" title="Do strony salonu">
                    <GoHome className="fa-salon" title="DO STRONY SALONU"/> </a>

            </div>
        </footer>
    )
}

export default Footer;