import React from "react";

//assets
import plusIcon from "../assets/icon-plus.svg";
import minusIcon from "../assets/icon-minus.svg";
import cartIcon from "../assets/icon-cart-white.svg";

function AmountSelect() {
    return(
        <div>
            <div className="flex justify-between items-center p-4 mb-4 bg-neutral-light-grayish-blue rounded-lg">
                <img 
                    src={minusIcon}
                    alt="Remove one" />
                <p className="font-bold text-lg">0</p>
                <img 
                    src={plusIcon} 
                    alt="Add one" />
            </div>
            <button className="w-full flex justify-center items-center py-4 rounded-lg bg-orange-default">
                <img 
                src={cartIcon} 
                className="h-4 mr-4"
                alt="Cart" />
                <p className="font-bold text-lg text-white">Add to cart</p>
            </button>
        </div>
    )
}

export default AmountSelect;