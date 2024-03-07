import React, { useState } from "react";

//assets
import BurgerIcon from '../assets/icon-menu.svg';
import LogoImg from '../assets/logo.svg';
import CartIcon from '../assets/icon-cart.svg';
import AvatarImg from '../assets/image-avatar.png';
import CloseIcon from '../assets/icon-close.svg';

function NavBarMobile() {
    const [showMenu, setShowMenu] = useState(false);

    function openMenu() {
        setShowMenu(!showMenu);
        console.log(showMenu);
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
                <a href="#" className="h-11 w-11 flex justify-center items-center">
                    <img src={CartIcon} alt="cart" className="h-5" />
                </a>
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
        </div>
        
    )
}

export default NavBarMobile;