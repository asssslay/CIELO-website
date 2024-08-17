import { assetPaths } from "../constants";
import FooterNav from "../components/FooterNav";
import FooterButton from "../components/FooterButton";

const Footer = () => {
  return (
    <footer className="pt-[60px] pb-5 bg-softGray">
      <div className="relative z-10 container mx-auto">
        <div className="flex items-start max-lg:items-center padding-left mb-[18px]">
          <div className="flex items-start max-lg:flex-col   max-lg:gap-12">
            <img
              src={assetPaths.footerLogo}
              className="max-xs:h-9 w-auto h-auto mr-24 xl:mr-36"
            />
            <FooterNav />
          </div>
          <div className="ml-9 xs:ml-16 md:ml-28 xl:ml-[202px]">
            <p className="font-darker text-sm md:text-base mb-4 font-medium">
              Stay up-to-date on our latest listings and{" "}
              <br className="hidden sm:block" />
              market trends.
            </p>
            <div className="flex gap-2 xs:gap-4 items-center">
              <input
                type="email"
                id="email"
                autoComplete="on"
                placeholder="Enter your email"
                className="w-full pb-4 bg-transparent font-darker border-0 border-b border-neutralGray focus:outline-none focus:border-black placeholder:font-darker  placeholder:text-black placeholder:font-medium placeholder:text-sm md:placeholder:text-base"
              />
              <FooterButton />
            </div>
            <div className="flex justify-end mt-[50px] gap-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] lg:text-xs font-manrope"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] lg:text-xs font-manrope"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] lg:text-xs font-manrope"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="text-center py-6 border-t border-milkWhite">
          <p className="font-manrope text-xs xl:text-sm">© 2024 CIELO</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
