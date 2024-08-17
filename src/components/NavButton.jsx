import { assetPaths } from "../constants";

const NavButton = () => {
  return (
    <button className="font-manrope leading-normal text-lg 2xl:text-xl text-white uppercase">
      <img src={assetPaths.menu} alt="Menu" />
    </button>
  );
};

export default NavButton;
