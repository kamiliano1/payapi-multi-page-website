import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../Layout/Navbar/Navbar";
import Hero from "../components/Home/Hero";
import Work from "../components/Home/Work";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="">
        <Hero />
        <Work />
        {/* <h1>INDEX</h1>
          <p>Test</p> */}
        {/* <p>
            {`Pricing About Contact Schedule a Demo Start building with our APIs
            for absolutely free. Enter email address Schedule a Demo Have any
            questions? Contact Us Who we work with Today, millions of people
            around the world have successfully connected their accounts to apps
            they love using our API. We provide developers with the tools they
            need to create easy and accessible experiences for their users.
            About Us Easy to implement Our API comes with just a few lines of
            code. You'll be up and running in no time. We built our
            documentation page to integrate payments functionality with ease.
            Simple UI & UX Our pre-built form is easy to integrate in your app
            or website's checkout flow and designed to optimize conversion.
            Personal Finances Consolidate financial data from multiple sources
            and categorize transactions up to 2 years of history. Analyze
            reports to reconcile activities in your account. Banking & Coverage
            With our platform, you can speed up account onboarding and support
            ongoing payments for checking, savings, credit card, and brokerage
            accounts. Consumer Payments It's easier to set up secure bank
            payments with us through a flow designed with the user experience in
            mind. Customers could instantly authenticate their account. Ready to
            start? Enter email address Schedule a Demo Pricing About Contact`}
          </p> */}
      </main>
    </>
  );
}
