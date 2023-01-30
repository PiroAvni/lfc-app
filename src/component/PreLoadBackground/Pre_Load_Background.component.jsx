import React from "react";
import logo from "../../Assets/Images/Logo/lfc_flag.jpeg";


function PreLoadBackground() {

  let PreLoadBackground = {
    backgroundImage:`url(${logo})`,
    height: "100vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginLeft:'-40rem',
	// filter: "blur(0.2px) hue-rotate(5deg) opacity(0.9) saturate(1.3) sepia(0.4) url('#red-sunset') grayscale(0.2)",
  };

  return (
    <>
  <div className="object-contain" style={PreLoadBackground}></div>
  
  </>
  )
}

export default PreLoadBackground;
