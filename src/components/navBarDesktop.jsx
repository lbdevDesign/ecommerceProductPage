import React from "react";

//assets
import LogoImg from '../assets/logo.svg';
import CartIcon from '../assets/icon-cart.svg';
import AvatarImg from '../assets/image-avatar.png';

function NavBarDesktop() {
    
    return(
        <div className="w-auto py-6 px-4 flex items-center justify-between bg-white border-b">
            <div className="flex items-center">
                <a href="/">
                    <img src={LogoImg} alt="logo" className="h-5"/>
                </a>
                <nav>
                    <ul className="ml-8 flex">
                        <li className="mx-4"><a href="#"><h3 className="text-slate-500">Collections</h3></a></li>
                        <li className="mx-4"><a href="#"><h3 className="text-slate-500">Men</h3></a></li>
                        <li className="mx-4"><a href="#"><h3 className="text-slate-500">Women</h3></a></li>
                        <li className="mx-4"><a href="#"><h3 className="text-slate-500">About</h3></a></li>
                        <li className="mx-4"><a href="#"><h3 className="text-slate-500">Contact</h3></a></li>
                    </ul>
                </nav>

            </div>
            <div className="flex items-center mr-2">
                <a href="#" className="h-11 w-11 flex justify-center items-center">
                    <img src={CartIcon} alt="cart" className="h-5" />
                </a>
                <a href="#" className="h-11 w-11 flex justify-center items-center">
                    <img src={AvatarImg} alt="profile" className="h-10 ml-8" />
                </a>
            </div>
        </div>
        
    )
}

export default NavBarDesktop;