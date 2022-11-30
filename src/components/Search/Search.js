import React, {useState} from 'react';
import BrandPageItems from "../BrandPageItems/BrandPageItems";
import { FaSadTear } from 'react-icons/fa';
import { useTranslation, Trans } from 'react-i18next';

const Search = () => {

    const { t, i18n } = useTranslation();

    const handleError = (err) => {
        console.error(err);
    }

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [wait, setWait] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoaded(false);
        setNotFound(false);
        setWait(true);

        const fetchData = async () => {
            const response =  await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
            if (!response.ok) {
                throw new Error("Error...");
            }

            setWait(false);
            setLoaded(true);
            const data = await response.json();
            console.log(data);

            const filteredArray = data.filter((element) => {
                return element.brand === search.toLowerCase();
            });

            if (filteredArray.length > 0) {
                setResult(filteredArray);
                setNotFound(false);
            } else {
                setNotFound(true);
                setLoaded(false);
            }
        }
        fetchData().catch(handleError);
        setSearch("");
    }

    return (
        <section className="search">
            {/*<h1>ZNAJDŹ SWÓJ ULUBIONY BRAND</h1>*/}
            {/*<form onSubmit={handleSubmit} className="search-form">*/}
            {/*    <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="WPISZ MARKĘ PRODUKTU"/>*/}
            {/*    <button type="submit" className="select-btn search-btn">SZUKAJ</button>*/}
            {/*</form>*/}

            {/*{ notFound === false ? null : <h1>NOT FOUND</h1> }*/}
            {/*{ loaded === true ? <BrandPageItems items={result} /> : null }*/}

            { wait === true ? (<div className='loadingPage loading-search'>
            <img src={require("../../assets/moustache.png")} alt="moustache" className="moustache"/>
            <p>{t('waitNotification')}</p>
        </div>)  : ( <>
                <h1>{t('search')}</h1>
                <form onSubmit={handleSubmit} className="search-form">
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder={t('typeBrand')}/>
                    <button type="submit" className="select-btn search-btn">{t('searchSubmit')}</button>
                </form>

                { notFound === false ? null : (
                    <>
                        <FaSadTear className="notFoundIcon"/>
                        <h1>{t('noResults')}</h1>
                    </>
                ) }
                { loaded === true ? <BrandPageItems items={result} /> : null }
            </> ) }

        </section>
    )
}

export default Search;
