"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay } from "swiper/modules"
import { Link } from 'react-router-dom'

import img1 from "../../assets/images/fashion/outfit-pink.webp"
import img2 from "../../assets/images/concerts-festivals/festival-mawazine-ibtissam-tiskat.webp"
import img3 from "../../assets/images/fashion/outfit-white.webp"
import img4 from "../../assets/images/concerts-festivals/larbi-batma.webp"
import img5 from "../../assets/images/events-conferences/cms2.webp"
import img6 from "../../assets/images/concerts-festivals/7assam2.webp"

export default function LatestWorks() {

  const works = [
    { src: img1, title: "lorem ipsum" },
    { src: img2, title: "lorem ipsum" },
    { src: img3, title: "lorem ipsum" },
    { src: img4, title: "lorem ipsum" },
    { src: img5, title: "lorem ipsum" },
    { src: img6, title: "lorem ipsum" }
  ]

  return (

    <section className="w-full bg-black py-10">

      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
            <div className="felx flex-col justify-center align-center text-center" >
              <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/60 mb-4">
                featured works
              </p>
              <h2 className="text-3xl md:text-4xl uppercase font-bold tracking-tight mb-4">
                Admire the featured photography categories 
              </h2>
            </div>
        {/* SWIPER */}
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
          modules={[Autoplay]}
        >

          {works.map((work, index) => (
            <SwiperSlide key={index}>
                <div className="group overflow-hidden">
                <img
                    src={work.src}
                    alt={work.title}
                    loading="lazy"
                    className="w-full aspect-9/16 object-cover transition duration-500 group-hover:scale-105"
                />
                </div>
            </SwiperSlide>
    ))}
    </Swiper>
        {/* VIEW PORTFOLIO BUTTON */}
        <div className="text-center mt-8">
          <Link to="/portfolio">
            <button className="bg-white cursor-pointer text-black px-6 py-3 uppercase tracking-wide font-semibold hover:bg-gray-200 transition duration-300">
              View Full Portfolio
            </button>
          </Link>
        </div>
    </div>
    </section>
)
}