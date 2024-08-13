import { assetPaths } from "../constants";
import FooterNav from "../components/FooterNav";
import FooterButton from "../components/FooterButton";

const Footer = () => {
  return (
    <footer className="container pt-[60px] pb-5 bg-softGray">
      <div className="flex items-start padding-left mb-[18px]">
        <img src={assetPaths.footerLogo} className="mr-36" />
        <FooterNav />
        <div className="ml-[202px]">
          <p className="font-darker text-base mb-4 font-medium">
            Stay up-to-date on our latest listings and <br />
            market trends.
          </p>
          <div className="flex gap-4 items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pb-4 bg-transparent border-0 border-b border-neutralGray focus:outline-none focus:border-black placeholder:font-darker placeholder:text-base placeholder:text-black placeholder:font-medium"
            />
            <FooterButton />
          </div>
          <div className="flex justify-end mt-[50px] gap-2">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-manrope"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-manrope"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-6 border-t border-milkWhite">
        <p className="font-manrope text-sm">© 2024 CIELO</p>
      </div>
    </footer>
  );
};

export default Footer;
