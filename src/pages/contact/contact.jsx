import SEO from "../../components/seo/SEO"
import alibedri from "../../assets/images/badri-ali.jpeg"
import logo2m from "../../assets/logos/2m.svg"
import logoClient2 from "../../assets/logos/Mawazine.svg"
import logoClient3 from "../../assets/logos/nas-el-ghiwane.svg"

import {
  FaWhatsapp,
  FaBehance,
  FaInstagram,
  FaVimeo,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa6"

// ─── Add more clients here as you collect logos ───────────────────────────────
const CLIENTS = [
  { id: "2m", src: logo2m, alt: "2M TV" },
  { id: "client2", src: logoClient2, alt: "Mawazine" },
  { id: "client3", src: logoClient3, alt: "Nass El Ghiwane" },
]

const SOCIALS = [
  {
    id:    "whatsapp",
    href:  "https://wa.me/212665436093",
    icon:  <FaWhatsapp size={22} />,
    label: "WhatsApp",
  },
  {
    id:    "instagram",
    href:  "https://instagram.com/badri.digital",
    icon:  <FaInstagram size={22} />,
    label: "Instagram",
  },
  {
    id:    "behance",
    href:  "https://behance.net/badri.digital",
    icon:  <FaBehance size={22} />,
    label: "Behance",
  },
  {
    id:    "vimeo",
    href:  "https://vimeo.com/badri.digital",
    icon:  <FaVimeo size={22} />,
    label: "Vimeo",
  },
  {
    id:    "Linkedin",
    href:  "https://Linkedin.com/badri.digital",
    icon:  <FaLinkedin size={22} />,
    label: "Linkedin",
  },
]

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact | Badri Digital - Photographer & Videographer Casablanca"
        description="Get in touch with Badri Digital for event, wedding, conference or brand photography and videography in Casablanca, Morocco."
        keywords="contact Badri Digital, book photographer Casablanca, photographe Casablanca contact, videographer Morocco"
        url="https://www.badri.digital/contact"
        image="https://www.badri.digital/og-contact.jpg"
      />

      <section className="relative w-full h-screen overflow-hidden text-white">

        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <img
            src={alibedri}
            alt="Badri Digital Photographer Casablanca"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Page content — centered vertically and horizontally */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-16 max-w-7xl mx-auto w-full">

          <div className="text-center">

            <p className="text-xs tracking-[0.3em] uppercase text-white mb-4">
              Get In Touch
            </p>

            <h1 className="text-4xl md:text-6xl font-light tracking-widest mb-10">
              CONTACT
            </h1>

            {/* Email */}
            <a
              href="mailto:contact@badri.digital"
              className="flex items-center justify-center gap-3 text-lg md:text-xl tracking-wide text-white/90 hover:text-white transition-colors duration-200 mb-5"
            >
              <FaEnvelope size={18} className="text-white/50" />
              contact@badri.digital
            </a>

            {/* Phone */}
            <a
              href="tel:+212665436093"
              className="flex items-center justify-center gap-3 text-lg md:text-xl tracking-wide text-white/90 hover:text-white transition-colors duration-200"
            >
              <FaPhone size={18} className="text-white/50" />
              +212 665-436093
            </a>

            {/* Social icons */}
            <div className="flex items-center justify-center gap-7 mt-10">
              {SOCIALS.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Selected Clients */}
            <div className="mt-15">
              <p className="text-xs tracking-[0.3em] uppercase text-white mb-6">
                Selected Clients
              </p>

              <div className="flex flex-wrap items-center justify-center gap-10">
                {CLIENTS.map((client) => (
                  <img
                    key={client.id}
                    src={client.src}
                    alt={client.alt}
                    className="h-7 w-auto object-contain  opacity-50 hover:opacity-100 transition-opacity duration-300 "
                  />
                ))}
                {/* Add more logos by adding entries to the CLIENTS array above */}
              </div>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}