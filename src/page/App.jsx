import React from "react";
import { useMediaQuery } from "@mui/material";

//data
import productData from "../data/productData";


//components
import NavBarMobile from "../components/navBarMobile";
import NavBarDesktop from "../components/navBarDesktop";
import Caroussel from "../components/caroussel";
import ProductInfo from "../components/productInfo";

function App() {
  const mobile = useMediaQuery('(max-width:768px)');
  const desktop = useMediaQuery('(min-width:768px)');
  return (
    <div className="max-w-screen-lg mx-auto">
      {mobile && <NavBarMobile /> }
      {desktop && <NavBarDesktop /> }
      <div className="md:flex md:items-center md:justify-center">
        <Caroussel data={productData} />
        <ProductInfo data={productData} />
      </div>
    </div>
  );
}

export default App;
