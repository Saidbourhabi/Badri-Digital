import React from 'react';
import alibedri from '../../assets/images/badri-ali.jpeg';
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

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
</div>

{/* Content */}
<div className="relative z-10 min-h-screen flex items-center justify-center px-6">

<div className="max-w-5xl text-center text-white">

<h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
Badri Digital
</h1>

<h2 className="text-xl md:text-2xl text-gray-200 mb-8 animate-fadeInUp">
Photographer & Videographer Based in Casablanca
</h2>

<p className="max-w-3xl mx-auto text-gray-300 leading-relaxed animate-fadeInUp">
Badri Digital specializes in capturing powerful visual stories through photography
and videography. Based in Casablanca, we cover events, conferences, weddings,
corporate media days, and content creation for brands and professionals.
</p>

</div>

</div>

{/* Hidden SEO Content */}
<div className="hidden">
<h2>Event Photographer in Casablanca</h2>
<p>
Professional photographer and videographer in Casablanca Morocco covering
events, weddings, conferences, sports and brand content creation.
</p>
</div>

{/* Animation */}
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
`}
</style>

</section>
</>
);
};

export default About;