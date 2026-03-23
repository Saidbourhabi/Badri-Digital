import React, { useState, useLayoutEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const bgRef = useRef(null);
  const linksRef = useRef(null);
  const flipState = useRef(null);

  const toggleMenu = () => {
    if (!bgRef.current) return;
    flipState.current = Flip.getState(bgRef.current);
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    if (flipState.current && bgRef.current) {
      Flip.from(flipState.current, { 
        duration: 0.8, 
        ease: "expo.inOut",
        absolute: true,
      });
      
      if (linksRef.current) {
        const links = linksRef.current.querySelectorAll('li');
        if (isOpen) {
          gsap.to(links, { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            stagger: 0.1, 
            delay: 0.5, 
            ease: "power3.out" 
          });
        } else {
          gsap.to(links, { 
            opacity: 0, 
            y: 10, 
            duration: 0.2, 
            stagger: 0.05, 
            ease: "power2.in" 
          });
        }
      }
      flipState.current = null;
    }
  }, [isOpen]);

  return (
    <>
      <header 
        className="fixed top-0 left-0 w-full p-6 z-1010 flex items-center bg-transparent justify-between pointer-events-none"
      >
        <div className="pointer-events-auto mix-blend-difference z-1010">
          <NavLink to="/" className="block w-auto h-auto relative cursor-pointer">  
            <img 
              src="/badri-digital-web-logo.png" 
              alt="Badri Digital" 
              className="h-20 w-auto object-contain"
            />
          </NavLink>
        </div>
      </header>

      <div 
        ref={bgRef}
        className={`bg-black pointer-events-none ${isOpen ? 'fixed inset-0 w-screen h-screen rounded-none z-990' : 'fixed top-0 right-0 z-990'}`}
      />

      <div className="pointer-events-auto z-1010 fixed top-6 right-6">
        <button 
          onClick={toggleMenu}
          className="relative w-20 h-20 flex items-center justify-center border-none cursor-pointer group bg-transparent"
        >
          <span className="relative z-10 uppercase tracking-widest text-sm transition-colors duration-300 text-white mix-blend-difference">
            {isOpen ? 'Close' 
            : 'Menu'}
          </span>
        </button>
      </div>

      <div 
        className={`fixed inset-0 z-1000 flex items-center justify-center ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <ul ref={linksRef} className="list-none flex flex-col items-center gap-4 p-0 m-0">
          {[ 'Home','Portfolio','About','Blog','Contact'].map((item) => (
            <li key={item} className="opacity-0 translate-y-8">
              <NavLink 
                onClick={toggleMenu}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) => 
                  `text-5xl md:text-7xl font-bold uppercase tracking-tighter transition-all duration-300 ${
                    isActive 
                      ? 'text-white ' 
                      : 'text-white '
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;