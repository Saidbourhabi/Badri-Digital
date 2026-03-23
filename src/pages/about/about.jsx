import React from 'react';
import sketshing from '../../assets/images/sketsh-bg.png';

const About = () => {
return (
    <section className="relative w-full h-screen  overflow-hidden">
      {/* Sticky Background Image with Black Overlay */}
        <div className="absolute inset-0">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                backgroundImage: `url(${sketshing})`,
                backgroundAttachment: 'sticky  ',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
                }}
            />
            {/* Black Overlay */}
            <div className="absolute inset-0  bg-black/50 backdrop-blur-sm " />
        </div>
      {/* Content - Title */}
    <div className="relative h-full flex items-center justify-center z-10">
        <h1 className="text-white p-15 text-center text-7xl md:text-8xl lg:text-8xl font-bold tracking-tight animate-fadeInUp">
            SOON
        </h1>
    </div>
      {/* Add custom animations */}
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
            .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
            }
            /* Optional: Add a subtle gradient overlay for better text readability */
            .bg-black:/60 {
            background-color: rgba(0, 0, 0, 0.6);
            }
            
            /* Responsive adjustments */
            @media (max-width: 768px) {
            .animate-fadeInUp h1 {
            font-size: 3rem;
            }
            }
            @media (max-width: 480px) {
            .animate-fadeInUp h1 {
            font-size: 2.5rem;
            }
            }`}
            </style>
    </section>
);
};

export default About;