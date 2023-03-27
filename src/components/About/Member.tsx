import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import mobileMemberImage from "../../../public/assets/about/mobile/image-team-members.jpg";
import tabletMemberImage from "../../../public/assets/about/tablet/image-team-members.jpg";
import desktopMemberImage from "../../../public/assets/about/desktop/image-team-members.jpg";
type MemberProps = {};

const Member: React.FC<MemberProps> = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [currentImage, setCurrentImage] =
    useState<StaticImageData>(desktopMemberImage);
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
    console.log(windowWidth);
    // setWindowWidth(1000);
    const image =
      windowWidth < 640
        ? mobileMemberImage
        : windowWidth < 1025
        ? tabletMemberImage
        : desktopMemberImage;

    const test =
      windowWidth > 1024
        ? desktopMemberImage
        : windowWidth > 640
        ? tabletMemberImage
        : mobileMemberImage;
    setCurrentImage(test);
  }, [windowWidth]);

  return (
    <div className="">
      <div className="text-center lg:text-start mb-20 max-w-[1400px] mx-auto z-10 px-6 lg:w-[85%]">
        <h1 className="text-600 leading-9 font-bold mt-12 mb-10 tracking-[-0.196154px] sm:text-700 lg:text-800 sm:mt-[4.6875rem] max-w-[550px] lg:max-w-[630px] mx-auto lg:mx-0 ">
          We empower innovators by delivering access to the financial system
        </h1>
        <div>
          <div className="mb-12 sm:flex sm:text-start sm:gap-12">
            <h2 className="text-500 font-bold tracking-[-0.196154px] mb-4 sm:text-600 min-w-[180px]">
              Our Vision
            </h2>
            <p className="text-200 font-publicSans text-lightSanJuanBlue max-w-[635px]">
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.{" "}
            </p>
          </div>
          <div className="mb-12 sm:flex sm:text-start sm:gap-12 ">
            <h2 className="text-500 font-bold tracking-[-0.196154px] mb-4 sm:text-600 min-w-[180px]">
              Our Business
            </h2>
            <p className="text-200 font-publicSans text-lightSanJuanBlue max-w-[635px]">
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </div>
        </div>
      </div>
      <Image
        src={currentImage}
        alt="three pepole siting in the restaurant"
        className="pt-5 w-full"
      />
    </div>
  );
};
export default Member;
