import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../Layout/Footer/Footer";
import circle from "../../public/assets/shared/desktop/bg-pattern-circle.svg";
import Navbar from "../Layout/Navbar/Navbar";
import Pricing from "./pricing";
import Member from "../components/About/Member";
import Vision from "../components/About/Vision";

const about = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor - PayAPI - About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/favicon-32x32.png"
        />
      </Head>
      <div className="">
        <div className="max-w-[1400px] mx-auto overflow-hidden relative ">
          <Navbar />
          <div className="w-[780px] h-[780px] bg-sanJuanBlue opacity-[.2] rounded-full absolute left-[74px] top-[-634px] sm:left-[440px] sm:top-[-550px] lg:left-[800px]"></div>
          <Member />
          <Vision />

          <main className=""></main>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default about;
