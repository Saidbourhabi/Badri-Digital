import { useEffect, useState } from "react"
import PhotoSwipeLightbox from "photoswipe/lightbox"
import "photoswipe/style.css"
import SEO from "../../components/seo/SEO"

import img1 from "../../assets/images/events-conferences/event-energy.webp"
import img2  from "../../assets/images/events-conferences/event-energy-one.webp"
import img4  from "../../assets/images/badridigital-owners.jpeg"
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
import concert4  from "../../assets/images/concerts-festivals/festival-mawazine-tiskat.webp"
import concert5  from "../../assets/images/concerts-festivals/mawazine-nass-el-ghiwane.webp"
import concert6  from "../../assets/images/concerts-festivals/festival-mawazine.webp"


const IMAGES = [
  { id: "sports-1",     src: img4,  w: 7008, h: 4672, category: "sports",     alt: "Wydad AC football match" },
  { id: "conference-1", src: img1,   w: 6000, h: 3726, category: "events & conferences", alt: "Conference photography" },
  { id: "conference-2", src: img2,   w: 4000, h: 5333, category: "events & conferences", alt: "Conference panel" },
  { id: "brand-1", src: img7,   w: 2160, h: 2880, category: "fashion", alt: "fashion photography" },
  { id: "fashion-1", src: outfit1,   w: 2016, h: 2689, category: "fashion", alt: "Fashion photography - blue outfit" },
  { id: "fashion-2", src: outfit2,   w: 2160, h: 2880, category: "fashion", alt: "Fashion photography - second blue outfit" },
  { id: "fashion-3", src: outfit3,   w: 2160, h: 2880, category: "fashion", alt: "Fashion photography - pink outfit" },
  { id: "fashion-4", src: outfit4,   w: 2160, h: 3183, category: "fashion", alt: "Fashion photography - white outfit" },
  { id: "fashion-5", src: outfit5,   w: 2160, h: 2880, category: "fashion", alt: "Fashion photography - sky outfit" },
  { id: "fashion-6", src: outfit6,   w: 1670, h: 2226, category: "fashion", alt: "Fashion photography - smile portrait" },
  { id: "concert-1", src: concert1,   w: 3503, h: 2335, category: "Concerts & Festivals", alt: "Concert photography - Omar Sayed" },
  { id: "concert-2", src: concert2,   w: 3459, h: 4613, category: "Concerts & Festivals", alt: "Concert photography - Ibtissam Tiskat" },
  { id: "concert-3", src: concert3,   w: 4884, h: 3256, category: "Concerts & Festivals", alt: "Concert photography - Larbi Batma" },
  { id: "concert-4", src: concert4,   w: 5672, h: 3781, category: "Concerts & Festivals", alt: "Concert photography - Mawazine Festival" },
  { id: "concert-5", src: concert5,   w: 3368, h: 4491, category: "Concerts & Festivals", alt: "Concert photography - Omar Sayed" },
  { id: "concert-6", src: concert6,   w: 4000, h: 5333, category: "Concerts & Festivals", alt: "Concert photography - Mawazine Festival" },
]

const CATEGORIES = ["all","events & conferences", "sports", "Concerts & Festivals","fashion"]

const SEO_META = {
  all: {
    title:       "Portfolio | Badri Digital - Photographer & Videographer Casablanca",
    description: "Explore the full photography portfolio of Badri Digital — sports, events, conferences and food photography based in Casablanca, Morocco.",
    keywords:    "portfolio photographe Casablanca, Badri Digital portfolio, event photography Morocco, food photography Casablanca",
  },
  sports: {
    title:       "Sports Photography Portfolio | Badri Digital Casablanca",
    description: "High-energy sports photography capturing the intensity of live matches and athletic moments. Badri Digital, Casablanca.",
    keywords:    "sports photography Casablanca, football photographer Morocco, sports photographer Badri Digital",
  },
  "events & conferences": {
    title:       "Event & Conference Photography Portfolio | Badri Digital Casablanca",
    description: "Professional event and conference photography telling the story of your special moments. Badri Digital covers events across Casablanca and Morocco.",
    keywords:    "event photography Casablanca, conference photography Morocco, soirée photography Badri Digital",
  },
  fashion: {
    title:       "Fashion Photography Portfolio | Badri Digital Casablanca",
    description: "Stylish fashion photography capturing the latest trends and designs. Badri Digital, Casablanca.",
    keywords:    "fashion photography Casablanca, fashion photographer Morocco, fashion photographer Badri Digital",
  },
  "Concerts & Festivals": {
    title:       "Concert & Festival Photography Portfolio | Badri Digital Casablanca",
    description: "Capturing the energy and excitement of live concerts and festivals. Badri Digital, Casablanca.",
    keywords:    "concert photography Casablanca, festival photographer Morocco, live music photographer Badri Digital",
  },
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
    
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
      Portfolio
    </h1>

    <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
      Capturing powerful moments across sports, events, conferences, and food photography in Casablanca.
    </p>

    {/* CTA (optional but strong for UX) */}
    <div className="flex justify-center gap-4 flex-wrap">
      <button
        onClick={() => document.getElementById("portfolio-gallery")?.scrollIntoView({ behavior: "smooth" })}
        className="px-6 py-3 bg-white text-black text-sm uppercase tracking-widest hover:bg-white/80 transition"
      >
        Explore Work
      </button>

      <a
        href="/contact"
        className="px-6 py-3 border border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition"
      >
        Contact
      </a>
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