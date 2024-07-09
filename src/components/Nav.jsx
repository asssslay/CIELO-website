import { assetPaths, navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="w-full z-20 p-5 md:pl-28 md:pr-36 lg:pr-[188px] md:py-5 2xl:pl-32 2xl:pr-60 absolute top-0 left-0">
      <nav className="max-w-container mx-auto flex justify-between items-center">
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
