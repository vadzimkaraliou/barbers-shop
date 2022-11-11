import React from 'react';
import { Link } from "react-router-dom";

export const usingBrands = ["nyx", "smashbox", "clinique", "l'oreal", "maybelline", "pacifica", "dior", "marcelle", "revlon"];

const Dashboard = () => {
    return (
        <section className="dashboard">
            {usingBrands.map((brand, index) => {
                return (
                    <div className="brand" key={index}>
                        <div className="brand-name">{brand.toUpperCase()}</div>
                        <img src={require("../../assets/"+brand+".jpg")} alt={brand} className="dashboard-pic" title={brand.toUpperCase()} />
                        <Link to={brand.toUpperCase()}><button type="button" className="select-btn">Pokaż produkty</button></Link>
                    </div>
                )
            })}
        </section>
    )
}

export default Dashboard;