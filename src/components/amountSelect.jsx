import React, { useState } from "react";

//assets
import plusIcon from "../assets/icon-plus.svg";
import minusIcon from "../assets/icon-minus.svg";
import cartIcon from "../assets/icon-cart-white.svg";

function AmountSelect() {
    const [amount, setAmount] = useState(1);

    function addProduct() {
        setAmount(prevAmount => prevAmount + 1)
    }

    function subProduct() {
        setAmount(prevAmount => {
            if (amount > 1) {
                return prevAmount - 1
            } else {
                return amount
            }
        })
    }


    return(
        <div className="md:flex">
            <div className="md:w-2/3 md:mr-4 md:mb-0 flex justify-between items-center py-3 px-4 mb-4 bg-neutral-light-grayish-blue rounded-lg">
                <img 
                    src={minusIcon}
                    onClick={subProduct}
                    alt="Remove one" />
                <p className="font-bold text-lg">{amount}</p>
                <img 
                    src={plusIcon} 
                    onClick={addProduct}
                    alt="Add one" />
            </div>
            <button className="w-full md:w-1/1 md:mb-0 flex justify-center items-center py-3 mb-11 rounded-lg bg-orange-default shadow-[0px_5px_20px_5px_#ffd4b3]">
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