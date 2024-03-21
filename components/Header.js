import React from "react";
import ImageSlider from "./ImageSlider";
const images = [
  "/imgs/Asset-1.png",
  "/imgs/Asset-2.png",

  // Add more images as needed

  ,
];
function Header() {
  return (
    <div className="w-full">
      <ImageSlider />
    </div>
  );
}

export default Header;
