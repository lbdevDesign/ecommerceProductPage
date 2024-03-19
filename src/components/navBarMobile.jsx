import React, { useState } from "react";

//assets
import BurgerIcon from '../assets/icon-menu.svg';
import LogoImg from '../assets/logo.svg';
import CartIcon from '../assets/icon-cart.svg';
import AvatarImg from '../assets/image-avatar.png';
import CloseIcon from '../assets/icon-close.svg';
import deleteIcon from '../assets/icon-delete.svg';
import img1 from "../assets/productAssets/image-product-1.jpg";

function NavBarMobile(props) {
    const [showMenu, setShowMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);

    function openMenu() {
        setShowMenu(!showMenu);
        console.log(showMenu);
    }

    function toggleCart() {
        setShowCart(!showCart);
    }

    return(
        <div className="w-screen py-2 flex items-center justify-between bg-white">
            <div className="flex items-center">
                <button onClick={() => openMenu()} className="h-11 w-11 flex justify-center items-center">
                    <img src={BurgerIcon} alt="menu" className="h-4"/>
                </button>
                <a href="/">
                    <img src={LogoImg} alt="logo" className="h-5"/>
                </a>
            </div>
            <div className="flex items-center mr-2">
                <button className="h-11 w-11 flex justify-center items-center relative" onClick={toggleCart}>
                    <img src={CartIcon} alt="cart" className="h-5" />
                    {props.itemsInCart > 0 && (
                        <section className="bg-orange-default px-1 rounded-full absolute top-0 right-0">
                            <p className="text-white text-xs font-semibold">{props.itemsInCart}</p>
                        </section>
                    )}
                </button>
                <a href="#" className="h-11 w-11 flex justify-center items-center">
                    <img src={AvatarImg} alt="profile" className="h-8" />
                </a>
            </div>
            {showMenu && (
                <div className="absolute top-0 h-screen w-screen z-50">
                    <div className="absolute top-0 h-screen w-screen bg-black opacity-75"></div>
                    <div className="absolute top-0 bottom-0 w-2/3 bg-white p-8 text flex flex-col items-start">
                        <button onClick={() => openMenu()} className="h-11 w-11 flex justify-start items-center">
                            <img src={CloseIcon} alt="close" />
                        </button>
                        <nav>
                            <ul className="mt-4">
                                <li className="my-4"><a href="#"><h3 className="font-semibold">Collections</h3></a></li>
                                <li className="my-4"><a href="#"><h3 className="font-semibold">Men</h3></a></li>
                                <li className="my-4"><a href="#"><h3 className="font-semibold">Women</h3></a></li>
                                <li className="my-4"><a href="#"><h3 className="font-semibold">About</h3></a></li>
                                <li className="my-4"><a href="#"><h3 className="font-semibold">Contact</h3></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
            {showCart && props.itemsInCart > 0 && 
                        <div className="absolute z-10 top-16 left-1/2 -translate-x-1/2 pointer-events-none bg-white rounded-lg w-11/12 p-4 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ">
                            <h3 className="font-semibold text-sm pb-4 mb-4 w-full border-b">Cart</h3>
                            <div className="flex items-center mb-4">
                                <img src={img1} alt="product" className="h-10 rounded mr-2" />
                                <div className="mr-auto">
                                    <p className="text-xs capitalize text-neutral-dark-grayish-blue">{props.data.title}</p>
                                    <p className="text-sm text-neutral-dark-grayish-blue">
                                        {"$" + props.data.promPrice.toFixed(2) + " x " + props.itemsInCart + " $ "} 
                                        <b style={{color: "black"}}>{(props.data.promPrice * props.itemsInCart).toFixed(2)}</b>
                                    </p>
                                </div>
                                <button className="pointer-events-auto mr-4" onClick={() => props.deleteCart()}>
                                    <img src={deleteIcon} alt="delete" className="h-4" />
                                </button>
                            </div>
                            <button  
                                className="pointer-events-auto w-full md:w-1/1 md:mb-0 flex justify-center items-center py-2 mb-2 rounded-lg bg-orange-default hover:shadow-[0px_5px_20px_5px_#ffd4b3]"
                            >
                                <p className="font-bold text-white">Checkout</p>
                            </button>
                        </div>
                    }
        </div>
        
    )
}

export default NavBarMobile;