import Head from "next/head";
import React from "react";
import Hero from "../components/Home/Hero";
import Implement from "../components/Home/Implement";
import Work from "../components/Home/Work";
import Pricing from "../components/Pricing/Pricing";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";

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
      <div className="max-w-[1400px] mx-auto overflow-hidden bg">
        {/* <Navbar />
        <Hero /> */}
        <Pricing />
      </div>
      <main className="">
        {/* <Work />
        <Implement />
        <Footer /> */}
      </main>
    </>
  );
};
export default pricing;