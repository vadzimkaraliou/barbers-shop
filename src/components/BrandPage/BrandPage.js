import React, {useEffect, useState} from 'react';
import BrandPageItems from "./BrandPageItems";

function BrandPage({brand}) {

    const handleError = (err) => {
        console.error(err);
    }

    const [isLoading, setLoading] = useState(true);
    const [brandArray, setBrandArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response =  await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
            if (!response.ok) {
                throw new Error("Error...");
            }
            const data = await response.json();
            console.log(data);
            const filteredArray = data.filter((element) => {
                return element.brand === brand
            })
            setBrandArray(filteredArray);
            setLoading(false);
        }
        fetchData().catch(handleError);
    },[])

    return (
        <div>
            {isLoading ? (<div className='loadingPage'>
                    <img src={require("../assets/moustache.png")} alt="moustache" className="moustache"/>
                    <p>proszę zaczekać chwilę...</p>
            </div>) :
                <BrandPageItems items={brandArray} />
            }
        </div>
    )
}

export default BrandPage;