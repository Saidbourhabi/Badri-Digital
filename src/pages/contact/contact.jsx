import SEO from "../../components/seo/SEO"
import camerabg from "../../assets/images/oldcamera.webp"

import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6"



const SOCIALS = [
  {
    id:    "whatsapp",
    href:  "https://wa.me/212665436093",
    icon:  <FaWhatsapp size={22} />,
    label: "WhatsApp",
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
            src={camerabg}
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
              className="flex items-center justify-center text-lg md:text-xl tracking-wide text-white/90 hover:text-white transition-colors duration-200 mb-5"
            >
              contact@badri.digital
            </a>

            {/* Phone */}
            <a
              href="tel:+212665436093"
              className="flex items-center justify-center text-lg md:text-xl tracking-wide text-white/90 hover:text-white transition-colors duration-200"
            >
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
          </div>
        </div>

      </section>
    </>
  )
}