import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';

export const usingBrands = ["nyx", "smashbox", "clinique", "l'oreal", "maybelline", "pacifica", "dior", "marcelle", "revlon"];

const Dashboard = () => {

    const { t, i18n } = useTranslation();

    return (
        <section className="dashboard">
            {usingBrands.map((brand, index) => {
                return (
                    <div className="brand" key={index}>
                        <div className="brand-name">{brand.toUpperCase()}</div>
                        <img src={require("../../assets/"+brand+".jpg")} alt={brand} className="dashboard-pic" title={brand.toUpperCase()} />
                        <Link to={brand.toUpperCase()}><button type="button" className="select-btn">{t('showProducts')}</button></Link>
                    </div>
                )
            })}
        </section>
    )
}

export default Dashboard;