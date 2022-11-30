import React, { useState } from "react";
import { BsFillPersonFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { BiDetail } from 'react-icons/bi';
import { RiErrorWarningFill } from 'react-icons/ri';
import {Link} from "react-router-dom";
import { TbFileInvoice } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

const OrderPage = () => {

    const { t } = useTranslation();

    const [form, setForm] = useState(
        {
            fullName: "",
            email: "",
            address: "",
            postcode: "",
            city: "",
            country: "",
            company: "",
            nip: "",
            companyAddress: ""
        });

    const [summary, setSummary] = useState(
        {
            fullName: "",
            email: "",
            address: "",
            postcode: "",
            city: "",
            country: "",
            company: "",
            nip: "",
            companyAddress: ""
        });

    const [clicked, setClicked] = useState(false);
    const [checked, setChecked] = useState(false);
    const [invoice, setInvoice] = useState(false);

    const handleInvoice = () => {
        setInvoice(!invoice);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prevState) => {
            return {
                ...prevState, [name]: value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.fullName.length <= 0 || form.email.length <= 0 || form.address.length <= 0 || form.postcode.length <= 0 || form.city.length <= 0 || form.country.length <= 0) {
            setChecked(true)
            setClicked(false)
        } else {
            setChecked(false)
            setClicked(true)
            setSummary(form);
        }
    }

    return (
        <section className="form-section">
            <form onSubmit={handleSubmit} className="form">
                <BsFillPersonFill className="form-block-icon"/>
                <p className="form-block-title">{t('personalData')}</p>
                <input type="text" placeholder={t('fullName')} name="fullName" value={form.fullName} onChange={handleChange}/>
                <input type="email" placeholder={t('email')} name="email" value={form.email} onChange={handleChange}/>

                <TbTruckDelivery className="form-block-icon"/>
                <p className="form-block-title">{t('deliveryInfo')}</p>
                <input type="text" placeholder={t('personalAddress')} name="address" value={form.address} onChange={handleChange}/>
                <input type="text" placeholder={t('postCode')} name="postcode" value={form.postcode} onChange={handleChange}/>
                <input type="text" placeholder={t('city')} name="city" value={form.city} onChange={handleChange}/>
                <input type="text" placeholder={t('country')} name="country" value={form.country} onChange={handleChange}/>

                <button type="button" className="submitBtn" onClick={handleInvoice}>{t('invoice')}</button>

                {invoice === true &&
                    (<form className="form">
                            <TbFileInvoice className="summary-form-icon invoice"/>
                            <input type="text" placeholder={t('companyName')} name="company" value={form.company} onChange={handleChange}/>
                            <input type="text" placeholder={t('companyPost')} name="nip" value={form.nip} onChange={handleChange}/>
                            <input type="text" placeholder={t('companyAddress')} name="companyAddress" value={form.companyAddress} onChange={handleChange}/>
                    </form>
                )}

                <button type="submit" className="submitBtn">{t('confirm')}</button>
            </form>

            {checked === true &&
                ( <section className="summary-form">
                        <RiErrorWarningFill className="summary-form-icon"/>
                        <p className="summary-form-title"> {t('alertForm')} </p>
                    </section>
                )}
            {clicked === true &&
                ( <section className="summary-form">
                    <BiDetail className="summary-form-icon"/>
                    <p className="summary-form-title"> {t('summary')} </p>
                    <p className="summary-form-text"> {t('fullName').toUpperCase()}: {summary.select} {summary.fullName} </p>
                    <p className="summary-form-text"> {t('email').toUpperCase()}: {summary.email} </p>
                    <p className="summary-form-text"> {t('deliveryInfo')}: {summary.postcode} {summary.city} {summary.address} {summary.country}
                    </p>

                        {invoice === true &&
                            (
                                <section className="summary-form">
                                <p className="summary-form-text"> {t('companyName').toUpperCase()}: {summary.company} </p>
                                <p className="summary-form-text"> {t('VAT')}: {summary.nip} </p>
                                <p className="summary-form-text"> {t('companyAddress').toUpperCase()}: {summary.companyAddress} </p>
                                </section>
                            )}

                    <Link to="/PAYMENT"> <button type="submit" className="submitBtn2">{t('goPayment')}</button></Link>
                </section>
            )}
        </section>
    )
}

export default OrderPage;

