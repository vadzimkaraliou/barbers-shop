import React, {useState} from 'react';

const Image = ({src, item}) => {

    const [imageLoaded, setImageLoaded] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleLoading = () => {
        setImageLoaded(true);
    }

    const handleDescription = () => {
        setClicked(true);
    }

    return (
        <>
            <img className="brandImg" style={{display: imageLoaded ? 'none' : 'block' }} src={require("../../assets/l\'oreal.jpg")} alt=''></img>
            <img className="brandImg" style={{display: imageLoaded ? 'block' : 'none' }} onLoad={handleLoading} src={src} alt='' onClick={handleDescription}/>

            {clicked === true &&
                (
                    <>
                        <div className="addDescription">
                            <div className="description-text">{item.description}</div>
                            <button className="description-button" onClick={() => setClicked(false)}>OK</button>
                        </div>
                    </>
                )}

        </>

    )
}

export default Image;