import React, { useState } from "react";

//assets
import nextIcon from "../assets/icon-next.svg";
import previousIcon from "../assets/icon-previous.svg";

function Caroussel(props) {
    const [imgIndex, setImgIndex] = useState(0);
    let imgShownPath = props.data.img[imgIndex].path

    function nextIndex() {
            if (imgIndex === props.data.img.length - 1) {
                setImgIndex(0);
            } else {
                setImgIndex(imgIndex + 1)
            }
    }

    function prevIndex() {
            if (imgIndex === 0) {
                setImgIndex(props.data.img.length - 1);
            } else {
                setImgIndex(imgIndex - 1)
            }
    }
    
    return(
        <div className="w-screen relative z-0">
            <img src={imgShownPath} alt={`Product ${imgIndex + 1}`}/>
            <button onClick={prevIndex} className="absolute top-1/2 left-4 w-12 h-12 text-center bg-white rounded-full" >
                <img src={previousIcon} className="m-auto" alt="Previous"/>
            </button>
            <button onClick={nextIndex} className="absolute top-1/2 right-4 w-12 h-12 text-center bg-white rounded-full" >
                <img src={nextIcon}  className="m-auto" alt="Next"/>
            </button>
        </div>
    )
}

export default Caroussel;