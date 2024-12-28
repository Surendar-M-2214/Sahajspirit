import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => {
  return (
    <section className="section my-5 pb-[50px]">
      <div className="container">
        <div className="row text-center">
          <div className="mx-auto lg:col-12">
            <h1 className="font-primary my-16 font-bold">{banner.title}</h1>
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
            <div className="lg:w-[800px] mt-12 mx-auto ">
            <Image
              className="mx-auto  rounded-lg shadow-lg shadow-black"
              src={banner.image}
              width={1920}
              height={300}
              alt="banner image"
              priority
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
