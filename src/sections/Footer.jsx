import { assetPaths } from "../constants";

const Footer = () => {
  return (
    <footer className="container padding-left pb-11">
      <div className="flex items-start mb-[18px]">
        <img src={assetPaths.footerLogo} className="mr-36" />
        <div className="flex gap-[60px]">
          <div className="">
            <p>Home</p>
            <p>About</p>
            <p>Our Blog</p>
            <p>FAQ</p>
          </div>
          <div className="">
            <p>Home</p>
            <p>About</p>
            <p>Our Blog</p>
            <p>FAQ</p>
          </div>
          <div className="">
            <p>Home</p>
            <p>About</p>
            <p>Our Blog</p>
            <p>FAQ</p>
          </div>
          <div className="">
            <p>Home</p>
            <p>About</p>
            <p>Our Blog</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
      <div className="text-center py-6 border-t border-milkWhite">© 2024</div>
    </footer>
  );
};

export default Footer;
