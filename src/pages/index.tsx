import Head from "next/head";
import Image from "next/image";
import circle from "../../public/assets/shared/desktop/bg-pattern-circle.svg";
import bigCircle from "../../public/assets/shared/desktop/bg-pattern-circle-big.svg";
import Hero from "../components/Home/Hero";
import Implement from "../components/Home/Implement";
import Work from "../components/Home/Work";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
import { useState, useEffect } from "react";
import CircleBackground from "../Layout/CircleBackground/CircleBackground";

export default function Home() {
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
  return (
    <>
      <Head>
        <title>Frontend Mentor - PayAPI - Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/favicon-32x32.png"
        />
      </Head>
      <div className="overflow-hidden relative lg:px-20 max-w-[1400px] mx-auto">
        <Navbar />
        <CircleBackground
          cssClasses="-z-[1] w-[780px] h-[780px] top-[-525px]
           sm:w-[949px] sm:h-[949px] sm:top-[-700px] lg:top-[-320px] lg:left-[700px]"
          circleSection="home"
        />
        {/* <Image
          src={windowWidth > 692 && windowWidth < 1200 ? bigCircle : circle}
          alt=""
          className="object-none absolute -z-[1] w-[780px] h-[780px] top-[-525px]
           sm:w-[949px] sm:h-[949px] sm:top-[-700px] lg:top-[-320px] lg:left-[700px]"
        /> */}
        <Hero />
      </div>
      <main className="">
        <Work />
        <Implement />
        <Footer />
      </main>
    </>
  );
}
