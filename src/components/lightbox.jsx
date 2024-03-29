import React, { useState } from "react";

//assets
import nextIcon from "../assets/icon-next.svg";
import previousIcon from "../assets/icon-previous.svg";
import closeIcon from "../assets/icon-close.svg";
import img1 from "../assets/productAssets/image-product-1.jpg";
import img2 from "../assets/productAssets/image-product-2.jpg";
import img3 from "../assets/productAssets/image-product-3.jpg";
import img4 from "../assets/productAssets/image-product-4.jpg";
import thumb1 from "../assets/productAssets/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/productAssets/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/productAssets/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/productAssets/image-product-4-thumbnail.jpg";

function Lightbox(props) {
    const [lightIndex, setLightIndex] = useState(0);
    const images = [img1, img2, img3, img4]
    const thumbnails = [thumb1, thumb2, thumb3, thumb4]
    let lightShown = images[lightIndex]

    function nextIndex() {
            if (lightIndex === props.data.img.length - 1) {
                setLightIndex(0);
            } else {
                setLightIndex(lightIndex + 1)
            }
    }

    function prevIndex() {
            if (lightIndex === 0) {
                setLightIndex(props.data.img.length - 1);
            } else {
                setLightIndex(lightIndex - 1)
            }
    }

    function clickIndex(index) {
        setLightIndex(index)
    }


    return(
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="absolute h-screen w-screen bg-black opacity-75 z-0"></div>
            <div className="flex flex-col w-1/3">
                <div className="relative z-10">
                    <button className="absolute right-0 -top-11" onClick={props.showLightbox}>
                        <img src={closeIcon} alt="close" />
                    </button>
                    <img src={lightShown} alt={`Product ${lightIndex + 1}`} className="rounded-xl"/>
                    <button onClick={prevIndex} className="absolute top-1/2 -left-6 w-12 h-12 text-center bg-white rounded-full" >
                        <img src={previousIcon} className="m-auto" alt="Previous"/>
                    </button>
                    <button onClick={nextIndex} className="absolute top-1/2 -right-6 w-12 h-12 text-center bg-white rounded-full" >
                        <img src={nextIcon}  className="m-auto" alt="Next"/>
                    </button>
                </div>
                <div className="mt-3 flex z-10">
                    {thumbnails.map((button, index) => {
                        if (index === lightIndex) {
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
            
        </div>
    )
}

export default Lightbox;