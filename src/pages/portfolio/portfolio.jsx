import { useEffect, useState } from "react"
import PhotoSwipeLightbox from "photoswipe/lightbox"
import "photoswipe/style.css"
import SEO from "../../components/seo/SEO"

import img1 from "../../assets/images/events-conferences/event-energy.webp"
import img2  from "../../assets/images/events-conferences/event-energy-one.webp"
import img7  from "../../assets/images/brand-shooting.webp"
import alibedri  from "../../assets/images/badri-ali.jpeg"
// fashion img imports
import outfit1  from "../../assets/images/fashion/outfit-blue.webp"
import outfit2  from "../../assets/images/fashion/outfit-secend-blue.webp"
import outfit3  from "../../assets/images/fashion/outfit-pink.webp"
import outfit4  from "../../assets/images/fashion/outfit-white.webp"
import outfit5  from "../../assets/images/fashion/outfit-sky.webp"
import outfit6  from "../../assets/images/fashion/smile-portrait.webp"
// Concerts & Festivals 
import concert1  from "../../assets/images/concerts-festivals/omar-sayed.webp"
import concert2  from "../../assets/images/concerts-festivals/festival-mawazine-ibtissam-tiskat.webp"
import concert3  from "../../assets/images/concerts-festivals/larbi-batma.webp"
import concert5  from "../../assets/images/concerts-festivals/mawazine-nass-el-ghiwane.webp"
import hassam from "../../assets/images/concerts-festivals/7assam.webp"
import hassam1 from "../../assets/images/concerts-festivals/7assam1.webp"
import hassam2 from "../../assets/images/concerts-festivals/7assam2.webp"
// conferences img imports
import ipss from "../../assets/images/events-conferences/ipss-event1.webp"
import ipss2 from "../../assets/images/events-conferences/ipss-event2.webp"
import ipss3 from "../../assets/images/events-conferences/ipss-event3.webp"
import ipss4 from "../../assets/images/events-conferences/ipss-event4.webp"
import ipss5 from "../../assets/images/events-conferences/ipss-event5.webp"
import ipss6 from "../../assets/images/events-conferences/ipss-event6.webp"
import cms from "../../assets/images/events-conferences/cms.webp"
import cms2 from "../../assets/images/events-conferences/cms2.webp"
import cms3 from "../../assets/images/events-conferences/cms3.webp"
import cms4 from "../../assets/images/events-conferences/cms4.webp"
import cms5 from "../../assets/images/events-conferences/cms5.webp"
import cms6 from "../../assets/images/events-conferences/cms6.webp"
import cms7 from "../../assets/images/events-conferences/cms7.webp"
import cms8 from "../../assets/images/events-conferences/cms8.webp"
import cms9 from "../../assets/images/events-conferences/cms9.webp"
import cms10 from "../../assets/images/events-conferences/cms10.webp"
import cms11 from "../../assets/images/events-conferences/cms11.webp"



const IMAGES = [
  { id: "conference-1", src: img1,   w: 6000, h: 3726, category: "conferences", alt: "Conference photography" },
  { id: "conference-2", src: img2,   w: 4000, h: 5333, category: "conferences", alt: "Conference panel" },
  { id: "brand-1", src: img7,   w: 2160, h: 2880, category: "fashion", alt: "fashion photography" },
  { id: "fashion-1", src: outfit1,   w: 2016, h: 2689, category: "fashion", alt: "Fashion photography - blue outfit" },
  { id: "fashion-2", src: outfit2,   w: 2160, h: 2880, category: "fashion", alt: "Fashion photography - second blue outfit" },
  { id: "fashion-3", src: outfit3,   w: 2160, h: 2880, category: "fashion", alt: "Fashion photography - pink outfit" },
  { id: "fashion-4", src: outfit4,   w: 2160, h: 3183, category: "fashion", alt: "Fashion photography - white outfit" },
  { id: "fashion-5", src: outfit5,   w: 2160, h: 2880, category: "fashion", alt: "Fashion photography - sky outfit" },
  { id: "fashion-6", src: outfit6,   w: 1670, h: 2226, category: "fashion", alt: "Fashion photography - smile portrait" },
  { id: "concert-1", src: concert1,   w: 3503, h: 2335, category: "festivals", alt: "Concert photography - Omar Sayed" },
  { id: "concert-2", src: concert2,   w: 3459, h: 4613, category: "festivals", alt: "Concert photography - Ibtissam Tiskat" },
  { id: "concert-3", src: concert3,   w: 4884, h: 3256, category: "festivals", alt: "Concert photography - Larbi Batma" },
  { id: "concert-5", src: concert5,   w: 3368, h: 4491, category: "festivals", alt: "Concert photography - Omar Sayed" },
  { id: "mawazine-1", src: hassam,   w: 4000, h: 6000, category: "festivals", alt: "Mawazine 7ssam tiskat" },
  { id: "mawazine-2", src: hassam1,   w: 4000, h: 5000, category: "festivals", alt: "Mawazine 7ssam tiskat" },
  { id: "mawazine-3", src: hassam2,   w: 3713, h: 5570, category: "festivals", alt: "Mawazine 7ssam tiskat" },
  { id: "ipss-event-1", src: ipss,   w: 4000, h: 5333, category: "conferences", alt: "IPSS Conference photography" },
  { id: "ipss-event-2", src: ipss2,   w: 5414, h: 3609, category: "conferences", alt: "IPSS Conference photography" },
  { id: "ipss-event-3", src: ipss3,   w: 4835, h: 3223, category: "conferences", alt: "IPSS Conference photography" },
  { id: "ipss-event-4", src: ipss4,   w: 6000, h: 4000, category: "conferences", alt: "IPSS Conference photography" },
  { id: "ipss-event-5", src: ipss5,   w: 5209, h: 3472, category: "conferences", alt: "IPSS Conference photography" },
  { id: "ipss-event-6", src: ipss6,   w: 3666, h: 4881, category: "conferences", alt: "IPSS Conference photography" },
    { id: "cms-event-1", src: cms,   w: 4210, h: 2807, category: "events", alt: "Concours Musical Stars Event" },
  { id: "cms-event-2", src: cms2,   w: 3093, h: 4124, category: "events", alt: "Concours Musical Stars Event" },
  { id: "cms-event-3", src: cms3,   w: 4154, h: 2769, category: "events", alt: "Concours Musical Stars Event" },
  { id: "cms-event-4", src: cms4,   w: 1391, h: 1855, category: "events", alt: "Concours Musical Stars Event" },
  { id: "cms-event-5", src: cms5,   w: 3343, h: 2229, category: "events", alt: "Concours Musical Stars Event" },
  { id: "cms-event-6", src: cms6,   w: 2057 , h: 2742, category: "events", alt: "Concours Musical Stars Event" },
  { id: "cms-event-7", src: cms7,   w: 3503, h: 2335, category: "events", alt: "Concours Musical Stars Event" },
  { id: "cms-event-8", src: cms8,   w: 3427, h: 2742, category: "events", alt: "Concours Musical Stars Event" },
  { id: "cms-event-9", src: cms9,   w: 2380, h: 1904, category: "events", alt: "Concours Musical Stars Event" },
  { id: "cms-event-10", src: cms10,   w: 3582, h: 2866, category: "events", alt: "Concours Musical Stars Event" },
  { id: "cms-event-11", src: cms11,   w: 4000, h: 6000, category: "events", alt: "Concours Musical Stars Event" },


]

const CATEGORIES = ["all","conferences", "festivals","fashion","events"]

const SEO_META = {
  all: {
    title:       "Portfolio | Badri Digital - Photographer & Videographer Casablanca",
    description: "Explore the full photography portfolio of Badri Digital — sports, events, conferences and food photography based in Casablanca, Morocco.",
    keywords:    "portfolio photographe Casablanca, Badri Digital portfolio, event photography Morocco, food photography Casablanca",
  },
  conferences: {
    title:       "Conferences Photography Portfolio | Badri Digital Casablanca",
    description: "Professional event and conference photography telling the story of your special moments. Badri Digital covers events across Casablanca and Morocco.",
    keywords:    "event photography Casablanca, conference photography Morocco, soirée photography Badri Digital",
  },
  fashion: {
    title:       "Fashion Photography Portfolio | Badri Digital Casablanca",
    description: "Stylish fashion photography capturing the latest trends and designs. Badri Digital, Casablanca.",
    keywords:    "fashion photography Casablanca, fashion photographer Morocco, fashion photographer Badri Digital",
  },
  festivals: {
    title:       "Festivals Photography Portfolio | Badri Digital Casablanca",
    description: "Capturing the energy and excitement of live concerts and festivals. Badri Digital, Casablanca.",
    keywords:    "concert photography Casablanca, festival photographer Morocco, live music photographer Badri Digital",
  },
  events : {
    title:       "Events Photography Portfolio | Badri Digital Casablanca",
    description: "Capturing the energy and excitement of live Events. Badri Digital, Casablanca.",
    keywords:    "Events photography Casablanca, festival photographer Morocco, live music photographer Badri Digital",

  }
}

export default function Portfolio() {
  const [category, setCategory] = useState("all")
  const [fading, setFading]     = useState(false)

  const meta = SEO_META[category]

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#portfolio-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
      bgOpacity: 0.95,
      padding: { top: 20, bottom: 20, left: 10, right: 10 },
    })
    lightbox.init()
    return () => lightbox.destroy()
  }, [category])

  const filtered =
    category === "all"
      ? IMAGES
      : IMAGES.filter((img) => img.category === category)

  const handleCategory = (cat) => {
    if (cat === category) return
    setFading(true)
    setTimeout(() => {
      setCategory(cat)
      setFading(false)
    }, 180)
  }

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        url="https://www.badri.digital/portfolio"
        image="https://www.badri.digital/og-portfolio.jpg"
      />
<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0">
    <img
      src={alibedri}
      alt="Badri Digital Photographer Casablanca"
      className="w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-black/70" />
  </div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-6 max-w-4xl">
    
    <h1 className="text-5xl uppercase md:text-7xl font-bold tracking-tight mb-6">
      Portfolio
    </h1>

    <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
      Turning moments into timeless stories. Explore the diverse portfolio of Badri Digital.
    </p>

    {/* CTA (optional but strong for UX) */}
    <div className="flex justify-center">
      <button
        onClick={() => document.getElementById("portfolio-gallery")?.scrollIntoView({ behavior: "smooth" })}
        className="cursor-pointer px-6 py-3 bg-white text-black text-sm uppercase tracking-widest hover:bg-white/80 transition"
      >
        Explore Work
      </button>
    </div>

  </div>

</section>

      <section className="w-full min-h-screen bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-10">
            GALLERY
          </h1>

          {/* Category filter */}
          <div className="flex flex-wrap gap-4 mb-10 text-sm tracking-widest">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`uppercase transition-colors duration-150 cursor-pointer px-1 py-0.5 ${
                  category === cat
                    ? "text-black bg-white"
                    : "text-white hover:bg-white hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}

            <span className="ml-auto text-white/40 self-center tabular-nums">
              {filtered.length} {filtered.length === 1 ? "photo" : "photos"}
            </span>
          </div>

          {/* Masonry gallery */}
          <div
            id="portfolio-gallery"
            className="columns-1 sm:columns-2 md:columns-3 gap-6"
            style={{
              opacity: fading ? 0 : 1,
              transition: "opacity 0.18s ease",
            }}
          >
            {filtered.map((img) => (
              <a
                key={img.id}
                href={img.src}
                data-pswp-width={img.w}
                data-pswp-height={img.h}
                className="group mb-6 block break-inside-avoid overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={img.w}
                  height={img.h}
                  style={{ width: "100%", height: "auto" }}
                  className="transition duration-500 group-hover:scale-105"
                />
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}