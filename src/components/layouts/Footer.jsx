import React from "react";

const Footer = () => {

return (
    <footer 
        className=" bg-black bottom-0 left-0 w-full px-6 py-6 z-999 flex justify-between items-center pointer-events-none">
        <div className=" text-left pointer-events-auto">
            <p className="block no-underline text-white text-xs items-center justify-center  tracking-wide">
            © Badri Digital. All rights reserved. By <a className='' href="https://www.behance.net/saidbourhabi" target='_blank'>Said Bourhabi</a>
            </p>
        </div>
        <div className="text-right pointer-events-auto">
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="relative cursor-pointer text-white no-underline text-xs  tracking-wide inline-block z-10 transition-colors duration-300 hover:text-black hover:mix-blend-difference after:content-[''] after:absolute after:top-0 after:left-0 after:w-0 after:h-full after:bg-white after:z-[-1] after:transition-all after:duration-300 after:ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:after:w-full">
                Back to Top
            </button>
        </div>
    </footer>
);
};

export default Footer;