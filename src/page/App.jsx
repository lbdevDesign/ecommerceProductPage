import React from "react";
import { useMediaQuery } from "@mui/material";

//components
import NavBarMobile from "../components/navBarMobile";
import NavBarDesktop from "../components/navBarDesktop";

function App() {
  const mobile = useMediaQuery('(max-width:768px)');
  const desktop = useMediaQuery('(min-width:768px)');
  return (
    <div className="max-w-screen-lg mx-auto">
      {mobile && <NavBarMobile /> }
      {desktop && <NavBarDesktop /> }
    </div>
  );
}

export default App;
