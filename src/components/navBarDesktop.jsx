import React, { useState } from "react";

//assets
import LogoImg from '../assets/logo.svg';
import CartIcon from '../assets/icon-cart.svg';
import AvatarImg from '../assets/image-avatar.png';
import deleteIcon from '../assets/icon-delete.svg';

function NavBarDesktop(props) {
    const [showCart, setShowCart] = useState(false);

    function toggleCart() {
        setShowCart(!showCart);
    }

    console.log(showCart);
   
    return(
        <div className="w-auto h-20 px-4 flex items-center justify-between bg-white border-b">
            <div className="flex items-center h-full">
                <a href="/">
                    <img src={LogoImg} alt="logo" className="h-5"/>
                </a>
                <nav className="h-full">
                    <ul className="ml-8 flex h-full">
                        <li className="mx-4 flex items-center h-full hover:border-b-2 border-orange-default group">
                            <a href="#"><h3 className="text-slate-500 tracking-wide group-hover:font-semibold group-hover:tracking-normal">Collections</h3></a>
                        </li>
                        <li className="mx-4 flex items-center h-full hover:border-b-2 border-orange-default group">
                            <a href="#"><h3 className="text-slate-500 tracking-wide group-hover:font-semibold group-hover:tracking-normal">Men</h3></a>
                        </li>
                        <li className="mx-4 flex items-center h-full hover:border-b-2 border-orange-default group">
                            <a href="#"><h3 className="text-slate-500 tracking-wide group-hover:font-semibold group-hover:tracking-normal">Women</h3></a>
                        </li>
                        <li className="mx-4 flex items-center h-full hover:border-b-2 border-orange-default group">
                            <a href="#"><h3 className="text-slate-500 tracking-wide group-hover:font-semibold group-hover:tracking-normal">About</h3></a>
                        </li>
                        <li className="mx-4 flex items-center h-full hover:border-b-2 border-orange-default group">
                            <a href="#"><h3 className="text-slate-500 tracking-wide group-hover:font-semibold group-hover:tracking-normal">Contact</h3></a>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className="flex items-center mr-2">
                <button className="h-11 w-11 flex justify-center items-center relative" onClick={toggleCart}>
                    <img src={CartIcon} alt="cart" className="h-5" />
                    {props.itemsInCart > 0 && (
                        <section className="bg-orange-default px-1 rounded-full absolute top-0 right-0">
                            <p className="text-white text-xs font-semibold">{props.itemsInCart}</p>
                        </section>
                    )}
                    {showCart && props.itemsInCart > 0 && 
                        <div className="absolute top-full pointer-events-none bg-white rounded-lg w-72 p-4 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                            <h3 className="font-semibold text-sm pb-4 mb-4 w-full border-b">Cart</h3>
                            <div className="flex justify-between items-center mb-4">
                                <img src={props.data.img[0].path} alt="product" className="h-10 rounded mr-2" />
                                <div className="mr-2">
                                    <p className="text-xs capitalize text-neutral-dark-grayish-blue">{props.data.title}</p>
                                    <p className="text-sm text-neutral-dark-grayish-blue">
                                        {"$" + props.data.promPrice.toFixed(2) + " x " + props.itemsInCart + " $ "} 
                                        <b style={{color: "black"}}>{(props.data.promPrice * props.itemsInCart).toFixed(2)}</b>
                                    </p>
                                </div>
                                <button className="pointer-events-auto" onClick={() => props.deleteCart()}>
                                    <img src={deleteIcon} alt="delete" className="h-4" />
                                </button>
                            </div>
                            <button  
                                className="pointer-events-auto w-full md:w-1/1 md:mb-0 flex justify-center items-center py-2 mb-11 rounded-lg bg-orange-default hover:shadow-[0px_5px_20px_5px_#ffd4b3]"
                            >
                                <p className="font-bold text-white">Checkout</p>
                            </button>
                        </div>
                    }
                </button>
                <a href="#" className="h-11 w-11 flex justify-center items-center rounded-full">
                    <img src={AvatarImg} alt="profile" className="h-10 ml-8" />
                </a>
            </div>
        </div>
        
    )
}

export default NavBarDesktop;