import { useState } from "react";
import { assetPaths } from "../constants";

const NavButton = ({ toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="flex md:hidden font-manrope leading-normal text-lg 2xl:text-xl text-white uppercase"
    >
      <img src={assetPaths.menu} alt="Menu" />
    </button>
  );
};

export default NavButton;
