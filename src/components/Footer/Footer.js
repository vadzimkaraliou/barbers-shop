import React from 'react';
import {BsFacebook, BsInstagram} from 'react-icons/bs';
import {AiOutlineMail, AiFillPhone} from 'react-icons/ai';
import {GoHome} from 'react-icons/go';
import { useTranslation, Trans } from 'react-i18next';

const Footer = () => {

    const { t, i18n } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-top">
                <p>BARBERS KB</p>
                <p>00-341 RADNA 10</p>
                <p>{t('address')}</p>
                <p>{t('openingHours')}</p>
                <a href="mailto:kostiab7@gmail.com">
                    <AiOutlineMail className="footer-icons"/>
                    info@barberkb.pl</a>
                <a href="tel:+48696296776">
                    <AiFillPhone className="footer-icons"/>
                    0048 696296776</a>
            </div>

            <div className="footer-bottom">
                <a href="https://www.facebook.com/BarbersKD" target="_blank" title="Facebook" rel="noreferrer">
                    <BsFacebook className="fa-facebook" title="Facebook"/> </a>

                <a href="https://www.instagram.com/barbers_kb/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer" title="Instagram">
                    <BsInstagram className="fa-instagram" title="Instagram"/> </a>

                <a href="https://vadzimkaraliou.github.io/barberskb-test/" title="Do strony salonu" rel="noreferrer">
                    <GoHome className="fa-salon" title={t('toSalonPage')}/> </a>

            </div>
        </footer>
    )
}

export default Footer;