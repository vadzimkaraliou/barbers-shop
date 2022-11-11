import React, {useState} from 'react';

const Image = ({src, item}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleLoading = () => {
        setImageLoaded(true);
    }

    const handleAlert = (item) => {
        alert(item.description);
    }

    return (
        <>
            <img className="brandImg" style={{display: imageLoaded ? 'none' : 'block' }} src={require("../assets/l'oreal.jpg")} alt=''></img>
            <img className="brandImg" style={{display: imageLoaded ? 'block' : 'none' }} onLoad={handleLoading} src={src} alt='' onClick={() => handleAlert(item)}/>
        </>

    )
}

export default Image;