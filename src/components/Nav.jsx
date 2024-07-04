import { assetPaths, navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 pl-28 pr-[188px] py-5">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img src={assetPaths.headerLogo} alt="Logo" width={98} height={32} />
        </a>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="font-manrope leading-normal text-lg text-white"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
