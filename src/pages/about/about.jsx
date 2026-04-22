import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';
import alibedri from '../../assets/images/badridigital-owners.jpeg';
import SEO from '../../components/seo/SEO';

const About = () => {
  return (
    <>
      {/* SEO */}
      <SEO
        title="About Badri Digital | Photographer & Videographer in Casablanca"
        description="Badri Digital is a photographer and videographer based in Casablanca specializing in events, weddings, conferences, media days and content creation."
        keywords="Badri Digital, photographer Casablanca, videographer Morocco, event photography Casablanca, wedding photographer Casablanca"
        url="https://www.badri.digital/about"
        image="https://www.badri.digital/badri-ali.jpeg"
      />

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${alibedri})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
          <div className="absolute inset-0 " />
        </div>
        {/* Hidden SEO Content */}
        <div className="hidden">
          <h2>Event Photographer in Casablanca</h2>
          <p>
            Professional photographer and videographer in Casablanca Morocco covering
            events, weddings, conferences, sports and brand content creation.
          </p>
        </div>
      </section>

      {/* ABOUT BADRI DIGITAL SECTION */}
      <section className="relative w-full py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - About */}
            <div className="space-y-6 animate-fadeInLeft">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                  About Us
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Badri Digital
                </h2>
              </div>

              <div className="space-y-4 pt-4 text-gray-700 leading-relaxed">
                <p>
                  is a creative visual production project started by <span className="font-semibold">Badri Ali</span>, a passionate photographer, in collaboration with his father <span className="font-semibold">Badri Khalid</span>, a professional film director with over 34 years of experience in the audiovisual field.
                </p>

                <p>
                  This combination of modern creativity and long professional experience gives the project a unique and professional vision.
                </p>

                <p>
                  We collaborate with photographers, videographers, and creative professionals to deliver high-quality visual content for:
                </p>

                <ul className="space-y-2 pl-0 pt-2">
                  <li className="flex items-center">
                    <FiArrowRight className="text-gray-900 mr-3 shrink-0" />
                    <span>Events & Conferences</span>
                  </li>
                  <li className="flex items-center">
                    <FiArrowRight className="text-gray-900 mr-3 shrink-0" />
                    <span>Brands & Businesses</span>
                  </li>
                  <li className="flex items-center">
                    <FiArrowRight className="text-gray-900 mr-3 shrink-0" />
                    <span>Sports & Media Coverage</span>
                  </li>
                  <li className="flex items-center">
                    <FiArrowRight className="text-gray-900 mr-3 shrink-0" />
                    <span>Digital Projects & Campaigns</span>
                  </li>
                </ul>

                <p className="pt-4">
                  <span className="font-semibold">Our goal</span> is not only to capture images, but to create powerful visual content that reflects identity, emotion, and professionalism.
                </p>
              </div>
            </div>

            {/* Right Column - Vision */}
            <div className="space-y-6 animate-fadeInRight">
              <div className="bg-gray-100 p-8 lg:p-10 rounded-lg border border-gray-200">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h3>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our goal is to grow Badri Digital into a <span className="font-semibold">leading visual production brand</span>, known for creativity, quality, and strong storytelling.
                  </p>

                  <p>
                    We aim to:
                  </p>

                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start">
                      <FiCheck className="w-5 h-5 text-gray-900 mr-4 shrink-0 mt-0.5" />
                      <span>Work on larger-scale projects with major brands and institutions</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="w-5 h-5 text-gray-900 mr-4 shrink-0 mt-0.5" />
                      <span>Expand our presence both nationally and internationally</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="w-5 h-5 text-gray-900 mr-4 shrink-0 mt-0.5" />
                      <span>Continue delivering exceptional visual storytelling</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">
                  Experience
                </p>
                <p className="text-5xl font-bold">34+</p>
                <p className="text-gray-300 mt-2">Years of Professional Audiovisual Production</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out 0.2s backwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out 0.2s backwards;
        }

        @media (max-width: 1024px) {
          .animate-fadeInLeft,
          .animate-fadeInRight {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        }
      `}</style>
    </>
  );
};

export default About;