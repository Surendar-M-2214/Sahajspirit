"use client"

import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
function Cta({ cta }) {
  return (
    <section className="section px-4">
      <div className="section container rounded-xl shadow">
        <div className="row  mx-auto items-center justify-center">
          <div className="md:col-5 lg:col-4">
            
               <div className={`service-carousel w-auto `}>
                          <Swiper
                            modules={[Autoplay, Pagination]}
                            pagination={
                              cta?.images > 1 ? { clickable: true } : false
                            }
                            autoplay={{
                              delay: 5000,
                              disableOnInteraction: false,
                            }}
                            
                          >
                            {/* Slides */}
                            {cta?.images.map((slide, index) => (
                              <SwiperSlide key={index} >
                                <Image className="rounded-xl mb-5" src={slide} alt="" width={550} height={50} />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
          </div>
          <div className="mt-5 text-center md:col-6 lg:col-5 md:mt-0 md:text-left">
            <h2>{cta?.title}</h2>
            {/* <p className="mt-6">{markdownify(cta?.content)}</p> */}
            {cta.button.enable && (
              <Link
                className="btn btn-primary mt-4"
                href={cta.button.link}
                rel={cta.button.rel}
              >
                {cta.button.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
