import { footerNavLinks } from "../constants/index";

const FooterNav = () => {
  return (
    <div className="flex flex-wrap gap-[60px]">
      {footerNavLinks.map((section, index) => (
        <div key={index} className="flex flex-col">
          <ul className="flex flex-col gap-4">
            {section.links.map((link, linkIndex) => (
              <li
                key={linkIndex}
                className="font-manrope text-neutralGray text-sm"
              >
                <a href="#" className="hover:text-deepBlack">
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
