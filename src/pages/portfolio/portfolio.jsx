import { useEffect, useState } from "react"
import PhotoSwipeLightbox from "photoswipe/lightbox"
import "photoswipe/style.css"
import SEO from "../../components/seo/SEO"

import img1 from "../../assets/images/badridigital-owners.jpeg"
import img2  from "../../assets/images/badridigital-owners.jpeg"
import img3  from "../../assets/images/badridigital-owners.jpeg"
import img4  from "../../assets/images/badridigital-owners.jpeg"
import img5  from "../../assets/images/badridigital-owners.jpeg"
import img6  from "../../assets/images/badridigital-owners.jpeg"
import img7  from "../../assets/images/brand-shooting.webp"
import alibedri  from "../../assets/images/badri-ali.jpeg"
// fashion img imports
import outfit1  from "../../assets/images/fashion/outfit-blue.webp"
import outfit2  from "../../assets/images/fashion/outfit-secend-blue.webp"
import outfit3  from "../../assets/images/fashion/outfit-pink.webp"
import outfit4  from "../../assets/images/fashion/outfit-white.webp"
import outfit5  from "../../assets/images/fashion/outfit-sky.webp"
import outfit6  from "../../assets/images/fashion/smile-portrait.webp"


const IMAGES = [
  { id: "sports-1",     src: img1,  w: 7008, h: 4672, category: "sports",     alt: "Wydad AC football match" },
  { id: "events-1",     src: img2,   w: 7008, h: 4672, category: "events",     alt: "Event photography" },
  { id: "conference-1", src: img3,   w: 7008, h: 4672, category: "conference", alt: "Conference photography" },
  { id: "conference-2", src: img4,   w: 7008, h: 4672, category: "conference", alt: "Conference panel" },
  { id: "food-1", src: img5,   w: 7008, h: 4672, category: "food", alt: "Food photography" },
  { id: "food-2", src: img6,   w: 7008, h: 4672, category: "food", alt: "Food photography" },
  { id: "brand-1", src: img7,   w: 2160, h: 2880, category: "portrait", alt: "Portrait photography" },
  { id: "fashion-1", src: outfit1,   w: 2016, h: 2689, category: "fashion", alt: "Fashion photography - blue outfit" },
  { id: "fashion-2", src: outfit2,   w: 2160, h: 2880, category: "fashion", alt: "Fashion photography - second blue outfit" },
  { id: "fashion-3", src: outfit3,   w: 2160, h: 2880, category: "fashion", alt: "Fashion photography - pink outfit" },
  { id: "fashion-4", src: outfit4,   w: 2160, h: 3183, category: "fashion", alt: "Fashion photography - white outfit" },
  { id: "fashion-5", src: outfit5,   w: 2160, h: 2880, category: "fashion", alt: "Fashion photography - sky outfit" },
  { id: "fashion-6", src: outfit6,   w: 1670, h: 2226, category: "fashion", alt: "Fashion photography - smile portrait" },
]

const CATEGORIES = ["all", "events", "conference", "sports", "food","portrait","fashion"]

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
  events: {
    title:       "Event Photography Portfolio | Badri Digital Casablanca",
    description: "Professional event photography telling the story of your special moments. Badri Digital covers events across Casablanca and Morocco.",
    keywords:    "event photography Casablanca, event photographer Morocco, soirée photography Badri Digital",
  },
  conference: {
    title:       "Conference Photography Portfolio | Badri Digital Casablanca",
    description: "Corporate and conference photography delivering polished professional images for your business events in Casablanca and Morocco.",
    keywords:    "conference photography Casablanca, corporate photographer Morocco, media day photography Badri Digital",
  },
  food: {
    title:       "Food & Restaurant Photography Portfolio | Badri Digital Casablanca",
    description: "Appetising food and restaurant photography to elevate your menu, social media and brand identity. Badri Digital, Casablanca.",
    keywords:    "food photography Casablanca, restaurant photographer Morocco, food photographer Badri Digital",
  },
  portrait: {
    title:       "Portrait Photography Portfolio | Badri Digital Casablanca",
    description: "Capturing the essence of everyday life with artistic flair. Badri Digital, Casablanca.",
    keywords:    "portrait photography Casablanca, portrait photographer Morocco, portrait photographer Badri Digital",
  },
  fashion: {
    title:       "Fashion Photography Portfolio | Badri Digital Casablanca",
    description: "Stylish fashion photography capturing the latest trends and designs. Badri Digital, Casablanca.",
    keywords:    "fashion photography Casablanca, fashion photographer Morocco, fashion photographer Badri Digital",
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