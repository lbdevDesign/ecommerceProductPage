import React from "react";

//assets
import BurgerIcon from '../assets/icon-menu.svg';
import LogoImg from '../assets/logo.svg';
import CartIcon from '../assets/icon-cart.svg';
import AvatarImg from '../assets/image-avatar.png';

function NavBar() {
    return(
        <div className="w-screen py-2 flex items-center justify-between">
            <div className="flex items-center">
                <button className="h-11 w-11 flex justify-center items-center">
                    <img src={BurgerIcon} alt="menu" className="h-4"/>
                </button>
                <a href="/">
                    <img src={LogoImg} alt="logo" className="h-5"/>
                </a>
            </div>
            <div className="flex items-center mr-2">
                <a href="" className="h-11 w-11 flex justify-center items-center">
                    <img src={CartIcon} alt="cart" className="h-5" />
                </a>
                <a href="" className="h-11 w-11 flex justify-center items-center">
                    <img src={AvatarImg} alt="profile" className="h-8" />
                </a>
            </div>
        </div>
        
    )
}

export default NavBar;