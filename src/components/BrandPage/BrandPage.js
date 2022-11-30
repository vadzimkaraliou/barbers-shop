import React, {useEffect, useState} from 'react';
import BrandPageItems from "../BrandPageItems/BrandPageItems";
import { useTranslation, Trans } from 'react-i18next';

function BrandPage({brand}) {

    const { t, i18n } = useTranslation();

    const handleError = (err) => {
        console.error(err);
    }

    const [isLoading, setLoading] = useState(true);
    const [brandArray, setBrandArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response =  await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
            if (!response.ok) {
                throw new Error("Error...");
            }
            const data = await response.json();
            const filteredArray = data.filter((element) => {
                return element.brand === brand;
            })
            setBrandArray(filteredArray);
            setLoading(false);
        }
        fetchData().catch(handleError);
    },[]);

    return (
        <div>
            {isLoading ? (<div className='loadingPage'>
                    <img src={require("../../assets/moustache.png")} alt="moustache" className="moustache"/>
                    <p>{t('waitNotification')}</p>
            </div>) :
                <BrandPageItems items={brandArray} />
            }
        </div>
    )
}

export default BrandPage;