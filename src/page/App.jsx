import React from "react";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

//data
import productData from "../data/productData";

//components
import NavBarMobile from "../components/navBarMobile";
import NavBarDesktop from "../components/navBarDesktop";
import Caroussel from "../components/caroussel";
import ProductInfo from "../components/productInfo";
import AmountSelect from "../components/amountSelect";
import Lightbox from "../components/lightbox";

function App() {
  const mobile = useMediaQuery('(max-width:768px)');
  const desktop = useMediaQuery('(min-width:768px)');
  const [showLightbox, setShowLightbox] = useState(false);
  const [itemsInCart, setItemsInCart] = useState(0)

  function toggleLightbox() {
    setShowLightbox(!showLightbox);
  }

  function updateCartItems(amount) {
    setItemsInCart(itemsInCart + amount)
  }

  console.log(itemsInCart);

  return (
    <div className="max-w-screen-lg mx-auto">
      {mobile && <NavBarMobile itemsInCart={itemsInCart}/> }
      {desktop && <NavBarDesktop itemsInCart={itemsInCart}/> }
      <div className="md:flex md:items-center md:justify-center">
        <Caroussel data={productData} showLightbox={toggleLightbox}/>
        <div className="py-8 px-6 md:max-w-md md:p-12">
          <ProductInfo data={productData} />
          <AmountSelect updateCartItems={updateCartItems}/>
        </div>
      </div>
      <div className="absolute top-0 left-0">
        {showLightbox && <Lightbox data={productData} showLightbox={toggleLightbox}/>}
      </div>
    </div>
  );
}

export default App;
