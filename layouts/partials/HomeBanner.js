import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => {
  return (
    <section className="section my-8 pb-[50px]">
      
      <div className="container">
      
        <div className="row text-center">
          <div className="mx-auto lg:col-12">
          
            <span className="font-primary my-20 text-2xl md:text-5xl text-gray-900 font-bold">{banner.title} <span className=" text-gray-900 font-primary text-xl md:text-4xl">AN EVENT BY SAHAJ SPIRIT</span></span>
            <p className="font-semibold py-3">{banner.desc}</p>
            <div className=" lg:w-[800px] mx-auto my-5 ">
            <Image
              className=" rounded-lg shadow-lg shadow-black"
              src={banner.image}
              width={1920}
              height={300}
              alt="banner image"
              priority
            />
            </div>
            <p className="mt-4">{markdownify(banner.content)}</p>
            {banner.button.enable && (
              <Link
                className="btn btn-primary mt-4"
                href={banner.button.link}
                rel={banner.button.rel}
              >
                {banner.button.label}
              </Link>
            )}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
