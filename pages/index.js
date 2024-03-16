import Header2 from "@/components/Header2";
import Header1 from "../components/Header1";
import Header3 from "@/components/Header3";
import Image from "next/image";
import Head from "next/head";
import Header4 from "@/components/Header4";
const Home = () => {
  return (
    <div>
      <Head>
        <title>
          OYO : India's Best Online Hotel Booking Site For Sanitized Stay.
        </title>
        <link rel="icon" href="/icon.png"></link>
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
            className="h-60 w-full"
          />
        </div>
        <div className="mb-14">
          <Image
            src={"/banner2.avif"}
            alt="banner1"
            width={200}
            height={200}
            className="h-30 w-full"
          />
        </div>
      </div>
      <Header4/>
    </div>
  );
};

export default Home;
