import Header2 from "@/components/Header2";
import Header1 from "../components/Header1";
import Header3 from "@/components/Header3";
import Image from "next/image";
import Head from "next/head";
import Header4 from "@/components/Header4";
import Header5 from "@/components/Header5";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <div>
      <Head>
        <title>
          OYO : India's Best Online Hotel Booking Site For Sanitized Stay.
        </title>
       
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-20">
        <div className=" my-14">
          <Image
            src={"/banner11.avif"}
            alt="banner1"
            width={200}
            height={200}
            className="w-full h-60"
          />
        </div>
        <div className="mb-14">
          <Image
            src={"/banner2.avif"}
            alt="banner1"
            width={200}
            height={200}
            className="w-full h-30"
          />
        </div>
      </div>
      <Header4/>
      <Header5/>
      <Footer/>
    </div>
  );
};

export default Home;
