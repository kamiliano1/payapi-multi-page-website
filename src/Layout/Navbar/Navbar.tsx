import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import webLogo from "../../../public/assets/shared/desktop/logo.svg";
import hamburgerIcon from "../../../public/assets/shared/mobile/menu.svg";
import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth > 695) setIsOpen(false);
  }, [windowWidth]);
  return (
    <nav className="flex relative max-w-[1110px] mx-auto px-6 sm:px-[2.4375rem] lg:px-0">
      <div className="mt-10 bg flex items-center justify-between md:justify-start w-full ">
        <Link className="text-400 opacity-70 mr-16 hover:opacity-100" href="/">
          <Image src={webLogo} alt="page logo" className="sm:mr-10" />
        </Link>
        <HorizontalNav />
        <button className="z-[100]">
          {!isOpen && (
            <Image
              src={hamburgerIcon}
              alt="hamburger icon"
              className="sm:hidden "
              onClick={() => setIsOpen((prev) => !prev)}
            />
          )}
          <span className="sr-only">Hamburger Icon</span>
        </button>
      </div>
      <VerticalNav
        isOpen={isOpen}
        closeNav={() => setIsOpen((prev) => !prev)}
      />
    </nav>
  );
};
export default Navbar;
