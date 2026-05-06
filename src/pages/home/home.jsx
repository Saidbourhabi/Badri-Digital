import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoCaretDownOutline } from "react-icons/io5";
import { FiEdit3, FiFilm, FiTrendingUp } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaBehance } from "react-icons/fa";
import alibadri from "../../assets/images/badriali-banner.webp";
import SEO from "../../components/seo/SEO";
import { blogPosts } from "../../data/blogData";
import logo2m from "../../assets/logos/2m.svg";
import logondh from "../../assets/logos/indh.png";
import logoNasElGhiwane from "../../assets/logos/nas-el-ghiwane.svg";
import logoPolicyCenter from "../../assets/logos/Logopolicy.png";
import logoipss from "../../assets/logos/ipss.png"
import logopps from "../../assets/logos/logopps_top.gif"
import wydadaclogo from "../../assets/logos/wac.png"
import escalogo from "../../assets/logos/esca.png"
import mawazine from "../../assets/logos/mawazine.png"
import LatestWorks from "../../components/home/LatestWorks";

const STATS = [
  { label: "Projects Delivered", value: 30},
  { label: "Years In Business", value: 34},
  { label: "Photographs Delivered", value: 10000},
];

const CLIENT_LOGOS = [
  { id: "2m", name: "2M", src: logo2m },
  { id: "ndh", name: "National Initiative for Human Development", src: logondh },
  { id: "nas-el-ghiwane", name: "Nas El Ghiwane", src: logoNasElGhiwane },
  {id: "policy-center" , name: "Policy Center", src: logoPolicyCenter},
  {id: "ipss" , name: "IPSS", src: logoipss},
  {id: "pps", name:"PPS", src: logopps},
  {id: "wydad-ac", name:"Wydad AC", src: wydadaclogo},
  {id: "esca", name:"ESCA", src: escalogo}
  ,{id: "mawazine", name:"Mawazine", src: mawazine}
];

const SERVICES = [
  {
    title: "Content Creation",
    description:
      "We assist you to create creative stories from scratch about your business.",
    Icon: FiEdit3,
  },
  {
    title: "Multimedia Production",
    description:
      "Creating creative films, animations and photos about your events, products, services.",
    Icon: FiFilm,
  },
  {
    title: "Media Promotion",
    description:
      "Planning and strategies to promote your productions over the web.",
    Icon: FiTrendingUp,
  },
];

const SOCIAL_LINKS = [
  {
    id: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/badri.digital/",
    Icon: FaInstagram,
  },
  {
    id: "behance",
    name: "Behance",
    href: "https://www.behance.net/badriali",
    Icon: FaBehance,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/badri-digital/",
    Icon: FaLinkedinIn ,
  },
];

const Home = () => {
  const statsRef = useRef(null);
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);


  useEffect(() => {
    if (!statsRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) return;

        const duration = 1300;
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          setCounts(
            STATS.map((item) => Math.floor(item.value * progress))
          );

          if (progress < 1) {
            window.requestAnimationFrame(updateCount);
          }
        };

        window.requestAnimationFrame(updateCount);
        setHasAnimated(true);
        observer.disconnect();
      },
      { threshold: 0.3 }
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <>
      <SEO
        title="Badri Digital | Photographer & Videographer in Casablanca"
        description="Badri Digital creates cinematic photography and video for events, brands, conferences, and festivals in Casablanca and across Morocco."
        keywords="Badri Digital, photographer Casablanca, videographer Morocco, event photography, conference coverage, brand photography"
        url="https://www.badri.digital/home"
        image="https://www.badri.digital/og-home.jpg"
      />

      <main className="bg-black text-white">
<section 
  className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center"
  style={{
  backgroundImage: `url(${alibadri})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  backgroundColor: '#000' // Fallback color while image loads
  }}
>
  
  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-full">
    <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.45em] text-white/80">
      Visual Storytelling Studio
    </p>
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
      BADRI DIGITAL
    </h1>
    <p className="mt-5 max-w-2xl uppercase text-sm md:text-base text-white/75 leading-relaxed">
      We create timeless images and films for people, brands, and
      events that deserve to be remembered.
    </p>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce z-10">
    <span className="text-white text-xs tracking-[3px]">SCROLL DOWN</span>
    <IoCaretDownOutline className="w-5 h-5 text-white" />
  </div>
</section>
        {/* ----------------------------------------------- */}

        <section className="w-full py-20 md:py-24 ">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-10">
              <p className="text-xs text-center md:text-sm uppercase tracking-[0.35em] text-white/60 mb-4">
                Our Services
              </p>
              <h2 className="text-3xl text-center uppercase md:text-4xl font-bold tracking-tight mb-3">
                We help brands and creators bring their vision to life through high-quality visual content.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {SERVICES.map((service) => (
                <article key={service.title} className="border border-white/10 bg-white/2 hover:border-white transition-all duration-300 cursor-pointer p-7">
                  <service.Icon className="w-7 h-7 text-white mb-5" />
                  <h3 className="text-xl uppercase font-semibold tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* ----------------------------------------------- */}

        <section ref={statsRef} className="w-full py-20 md:py-10 bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 text-center">
            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/60 mb-4">
              Badri Digital In Numbers
            </p>
            <h2 className="text-3xl uppercase md:text-4xl font-bold tracking-tight">
              Results We Delivered Over The Years
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {STATS.map((item, index) => (
              <article key={item.label} className="text-center sm:text-center">
                <p className="text-4xl md:text-5xl font-bold tracking-tight">
                  {counts[index].toLocaleString()}+
                </p>
                <p className="mt-3 text-xs md:text-sm uppercase tracking-[0.24em] text-white/60">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------- */}

        <section className="w-full py-20 md:py-15 bg-black ">
          <div className="max-w-7xl mx-auto px-5 lg:px-10 grid  gap-5 items-start">
            <div className="felx flex-col justify-center align-center text-center" >
              <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/60 mb-4">
                Social Media
              </p>
              <h2 className="text-3xl md:text-4xl uppercase font-bold tracking-tight mb-4">
                Follow Our Latest Work
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/30 bg-white/2 h-24 px-5 flex items-center justify-between hover:bg-white hover:text-black transition"
                >
                  <span className="text-xs font-black uppercase tracking-[0.2em]">{social.name}</span>
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------- */}
        <LatestWorks />
        {/* ----------------------------------------------- */}

        <section className="w-full py-20 md:py-15 bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/60 mb-4">
                  Blog
                </p>
                <h2 className="text-3xl md:text-4xl uppercase font-bold tracking-tight">
                  Insights from Recent Productions
                </h2>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center text-xs uppercase tracking-[0.25em] text-white/80 hover:text-white"
              >
                View All Articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {blogPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group border border-white/10 bg-white/2 overflow-hidden"
                >
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-64 object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/50">
                      {post.date} · {post.production}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/65 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* ----------------------------------------------- */}
        <section className="w-full py-20 md:py-15 bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-10">
              <p className="text-xs md:text-sm text-center uppercase tracking-[0.35em] text-white/60 mb-4">
                Clients
              </p>
              <h2 className="text-3xl md:text-4xl text-center uppercase font-bold tracking-tight">
                Trusted by Visionary Brands
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CLIENT_LOGOS.map((logo) => (
                <div
                  key={logo.id}
                  className="h-28 border border-white/10 bg-white/5 flex items-center justify-center p-6"
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    loading="lazy"
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ----------------------------------------------- */}

        <section className="w-full md:py-5 py-3.5 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12  p-8 md:p-12 text-center">
            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-black mb-4">
              Contact & Booking
            </p>
            <h2 className="text-3xl uppercase text-black md:text-4xl font-bold tracking-tight mb-5">
              Book your next production with us
            </h2>
            <p className="text-black/70 max-w-2xl mx-auto mb-7 leading-relaxed">
              For bookings, collaborations, and project discussions, reach us by
              email and we will get back to you quickly.
            </p>
            <a
              href="mailto:contact@badri.digital"
              className="inline-flex items-center justify-center border border-black text-black px-6 py-3 text-xs md:text-sm uppercase tracking-[0.28em] transition hover:bg-black hover:text-white"
            >
              contact@badri.digital
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;