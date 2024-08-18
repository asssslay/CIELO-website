import { useState, useEffect } from "react";
import { assetPaths, navLinks, menuAboutLinks } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false); // Control text appearance

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setMenuVisible(true);
      setTimeout(() => setMenuOpen(true), 10);
      // Delay for the text appearance after the menu is open
      setTimeout(() => setTextVisible(true), 300); // Text will appear 300ms after the menu
    } else {
      setMenuOpen(false);
      setTextVisible(false); // Hide the text immediately when closing
      setTimeout(() => setMenuVisible(false), 700);
    }
  };

  // Use effect to add or remove scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  // Close the menu automatically when screen size becomes larger than md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setMenuOpen(false);
        setTextVisible(false); // Ensure the text is hidden when the menu closes
        setTimeout(() => setMenuVisible(false), 700);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="w-full z-50 px-8 py-5 md:pl-28 md:pr-36 lg:pr-[188px] md:py-5 2xl:pl-32 2xl:pr-60 absolute top-0 left-0">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="/">
            <img
              src={assetPaths.headerLogo}
              alt="Logo"
              width={98}
              height={32}
            />
          </a>

          {!isMenuOpen && (
            <ul className="hidden md:flex md:space-x-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="font-manrope leading-normal text-lg 2xl:text-xl text-white hover:text-milkWhite"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Menu and Cross Button */}
          <button
            onClick={toggleMenu}
            className="relative z-50 text-white hidden max-md:block"
            style={{ zIndex: 100 }}
          >
            {isMenuOpen ? (
              <span className="text-4xl">&times;</span>
            ) : (
              <img src={assetPaths.menu} alt="Menu" className="w-8 h-8" />
            )}
          </button>
        </nav>
      </header>

      {/* Full Screen Menu */}
      {menuVisible && (
        <div
          className={`fixed inset-0 z-40 bg-gradient-to-t text-white flex flex-col justify-center items-start transition-transform duration-700 ease-[cubic-bezier(0.65, 0, 0.35, 1)] ${
            isMenuOpen
              ? "transform translate-y-0"
              : "transform -translate-y-full"
          }`}
          style={{
            background: "linear-gradient(-40deg, #743E11 -12%, #CAB4A5 100%)",
          }}
        >
          {/* Only show the text after the menu appears */}
          <AnimatePresence>
            {textVisible && (
              <motion.div
                className="flex flex-col gap-1 pl-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }} // Increased duration for smoother text appearance
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-3xl xs:text-4xl font-cabinet hover:underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }} // Longer duration for staggered text
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {textVisible && (
              <motion.div
                className="flex gap-20 xs:gap-32 sm:gap-40 mt-28 w-full text-lg pl-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }} // Increased duration for smoother text appearance
              >
                <div className="text-milkWhite opacity-90">
                  <p className="text-lg xs:text-xl font-darker">
                    {menuAboutLinks.title}
                  </p>
                </div>
                <div className="flex flex-col">
                  {menuAboutLinks.links.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="text-milkWhite text-lg xs:text-xl font-darker"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }} // Longer duration for smoother text appearance
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default Nav;
