import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const cursorX = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power2.out" });
    const cursorY = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power2.out" });

  const handleMouseMove = (e) => {
  cursorX(e.clientX);
  cursorY(e.clientY);
};

    const handleEnter = () => {
      gsap.to(cursor, {
        scale: 1.8,
        backgroundColor: "ffffff",
        duration: 0.3,
        ease: "power3.out"
      });
    };

    const handleLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#ffffff",
        duration: 0.3,
        ease: "power3.out"
      });
    };

    const selector = 'a, button, .project-item, [data-cursor="hover"]';
    let interactiveElements = document.querySelectorAll(selector);

    const attachListeners = () => {
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleEnter);
        el.addEventListener('mouseleave', handleLeave);
      });
    };

    attachListeners();

    const observer = new MutationObserver(() => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
      interactiveElements = document.querySelectorAll(selector);
      attachListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;