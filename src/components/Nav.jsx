import { assetPaths, navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="pl-28 py-5 border border-cyan-300">
      <nav className="flex justify-between items-center max-container ml-0 border border-purple-300 bg-slate-600">
        <a href="/">
          <img src={assetPaths.headerLogo} alt="Logo" width={98} height={32} />
        </a>

        <ul>
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

        {/* hamburger menu */}
      </nav>
    </header>
  );
};

export default Nav;
