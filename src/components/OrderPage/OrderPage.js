import React, { useState } from "react";
import { BsFillPersonFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { BiDetail } from 'react-icons/bi';
import { RiErrorWarningFill } from 'react-icons/ri';
import {Link} from "react-router-dom";
import { TbFileInvoice } from 'react-icons/tb';

const OrderPage = () => {

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
                <p className="form-block-title">WPROWADŹ SWOJE DANE</p>
                <input type="text" placeholder="IMIĘ I NAZWISKO" name="fullName" value={form.fullName} onChange={handleChange}/>
                <input type="email" placeholder="E-MAIL" name="email" value={form.email} onChange={handleChange}/>

                <TbTruckDelivery className="form-block-icon"/>
                <p className="form-block-title">DANE DO WYSYŁKI</p>
                <input type="text" placeholder="ADRES" name="address" value={form.address} onChange={handleChange}/>
                <input type="text" placeholder="KOD POCZTOWY" name="postcode" value={form.postcode} onChange={handleChange}/>
                <input type="text" placeholder="MIASTO" name="city" value={form.city} onChange={handleChange}/>
                <input type="text" placeholder="KRAJ" name="country" value={form.country} onChange={handleChange}/>

                <button type="button" className="submitBtn" onClick={handleInvoice}>POTRZEBUJĘ FAKTURY</button>

                {invoice === true &&
                    (<form className="form">
                            <TbFileInvoice className="summary-form-icon invoice"/>
                            <input type="text" placeholder="NAZWA FIRMY" name="company" value={form.company} onChange={handleChange}/>
                            <input type="text" placeholder="NIP" name="nip" value={form.nip} onChange={handleChange}/>
                            <input type="text" placeholder="ADRES" name="companyAddress" value={form.companyAddress} onChange={handleChange}/>
                    </form>
                )}

                <button type="submit" className="submitBtn">ZATWIERDŹ</button>
            </form>

            {checked === true &&
                ( <section className="summary-form">
                        <RiErrorWarningFill className="summary-form-icon"/>
                        <p className="summary-form-title"> WYPEŁNIJ WSZYSTKIE POLA </p>
                    </section>
                )}
            {clicked === true &&
                ( <section className="summary-form">
                    <BiDetail className="summary-form-icon"/>
                    <p className="summary-form-title"> PODSUMOWANIE </p>
                    <p className="summary-form-text"> IMIĘ I NAZWISKO: {summary.select} {summary.fullName} </p>
                    <p className="summary-form-text"> E-MAIL: {summary.email} </p>
                    <p className="summary-form-text"> DANE DO WYSYŁKI: {summary.postcode} {summary.city} {summary.address} {summary.country}
                    </p>

                        {invoice === true &&
                            (
                                <section className="summary-form">
                                <p className="summary-form-text"> NAZWA FIRMY: {summary.company} </p>
                                <p className="summary-form-text"> NIP: {summary.nip} </p>
                                <p className="summary-form-text"> ADRES FIRMY: {summary.companyAddress} </p>
                                </section>
                            )}

                    <Link to="/PAYMENT"> <button type="submit" className="submitBtn2">PRZEJDŹ DO PŁATNOŚCI</button></Link>
                </section>
            )}
        </section>
    )
}

export default OrderPage;

