import Head from "next/head";
import React from "react";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
import Pricing from "../components/Pricing/Pricing";

type pricingProps = {};

const pricing: React.FC<pricingProps> = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor - PayAPI - Pricing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/favicon-32x32.png"
        />
      </Head>
      <div>
        <div className="overflow-hidden relative max-w-[1440px] mx-auto">
          <div className="w-[780px] h-[780px] bg-sanJuanBlue opacity-[.2] rounded-full absolute left-[74px] top-[-634px] sm:left-[440px] sm:top-[-550px] lg:left-[800px]"></div>
          <Navbar />
          <main>
            <Pricing />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default pricing;
