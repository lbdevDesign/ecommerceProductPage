import React from "react";

//component

function ProductInfo(props) {
    return(
        <div>
            <h2 className="text-orange-default uppercase text-sm font-semibold mb-4">{props.data.brand}</h2>
            <h1 className="text-neutral-very-dark-blue capitalize font-bold text-3xl mb-4">{props.data.title}</h1>
            <p className="text-neutral-dark-grayish-blue text-sm mb-6">{props.data.description}</p>
            <section className="flex items-center mb-8">
                <p className="text-neutral-very-dark-blue capitalize font-bold text-3xl mr-4">${props.data.promPrice.toFixed(2)}</p>
                <section className="bg-orange-pale px-2 py-1.5 rounded-lg h-fit mr-auto">
                    <p className="text-orange-default font-semibold leading-none">{props.data.promotion}%</p>
                </section> 
                <p className="text-neutral-grayish-blue text-lg font-bold line-through">${props.data.price.toFixed(2)}</p>
            </section>
        </div>
    )
}

export default ProductInfo;