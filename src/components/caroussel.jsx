import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";

//assets
import nextIcon from "../assets/icon-next.svg";
import previousIcon from "../assets/icon-previous.svg";
import img1 from "../assets/productAssets/image-product-1.jpg";
import img2 from "../assets/productAssets/image-product-2.jpg";
import img3 from "../assets/productAssets/image-product-3.jpg";
import img4 from "../assets/productAssets/image-product-4.jpg";
import thumb1 from "../assets/productAssets/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/productAssets/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/productAssets/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/productAssets/image-product-4-thumbnail.jpg";

function Caroussel(props) {
    const mobile = useMediaQuery('(max-width:768px)');
    const desktop = useMediaQuery('(min-width:768px)');
    const images = [img1, img2, img3, img4]
    const thumbnails = [thumb1, thumb2, thumb3, thumb4]

    const [imgIndex, setImgIndex] = useState(0);
    let imgShownPath = images[imgIndex];

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

    function clickIndex(index) {
        setImgIndex(index)
    }
    
    return(
        <div className="md:mt-8 md:max-w-md md:p-8">
            {mobile && (
                <div className="w-screen relative z-0 max-h-96 overflow-hidden">
                    <img src={imgShownPath} alt={`Product ${imgIndex + 1}`} className="object-cover"/>
                    <button onClick={prevIndex} className="absolute top-1/2 left-4 w-12 h-12 text-center bg-white rounded-full" >
                        <img src={previousIcon} className="m-auto" alt="Previous"/>
                    </button>
                    <button onClick={nextIndex} className="absolute top-1/2 right-4 w-12 h-12 text-center bg-white rounded-full" >
                        <img src={nextIcon}  className="m-auto" alt="Next"/>
                    </button>
                </div>
            )}
            {desktop && (
                <div className="w-full">
                    <button onClick={props.showLightbox}>
                        <img src={imgShownPath} alt={`Product ${imgIndex + 1}`} className="rounded-2xl" />
                    </button>
                    <div className="mt-3 flex">
                        {thumbnails.map((button, index) => {
                            if (index === imgIndex) {
                                return (
                                    <button 
                                        key={thumbnails.index} 
                                        className="w-full rounded-lg m-3 border-2 border-orange-default" 
                                        onClick={() => clickIndex(index)}>
                                            <img src={thumbnails[index]} className="opacity-50"/>
                                    </button>
                                )
                            } else {
                                return (
                                    <button 
                                        key={thumbnails.index} 
                                        className="w-full m-3 rounded-lg" 
                                        onClick={() => clickIndex(index)}>
                                            <img src={thumbnails[index]} className="rounded-lg"/>
                                    </button>
                                )
                            }

                        })}
                    </div>
                </div>
            )}
        </div>
        
    )
}


export default Caroussel;