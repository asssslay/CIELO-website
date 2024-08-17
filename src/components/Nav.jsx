import { assetPaths, navLinks } from "../constants";
import NavButton from "./NavButton";

const Nav = () => {
  return (
    <header className="w-full z-20 px-8 py-5 md:pl-28 md:pr-36 lg:pr-[188px] md:py-5 2xl:pl-32 2xl:pr-60 absolute top-0 left-0">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img src={assetPaths.headerLogo} alt="Logo" width={98} height={32} />
        </a>
        <ul className="hidden md:flex md:space-x-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="font-manrope leading-normal text-lg 2xl:text-xl text-white"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <NavButton />
      </nav>
    </header>
  );
};

export default Nav;
