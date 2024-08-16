import { footerNavLinks } from "../constants/index";
// import { assetPaths } from "../constants";

const FooterNav = () => {
  return (
    <div className="flex flex-wrap gap-12 xl:gap-[60px]">
      {footerNavLinks.map((section, index) => (
        <div key={index} className="flex flex-col">
          <ul className="flex flex-col gap-4">
            {section.links.map((link, linkIndex) => (
              <li
                key={linkIndex}
                className="font-manrope text-neutralGray text-xs xl:text-sm"
              >
                <a
                  href="#"
                  className="hover:text-deepBlack"
                  // style={{
                  //   cursor: `url(${assetPaths.cursorNew}), auto`,
                  // }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterNav;
