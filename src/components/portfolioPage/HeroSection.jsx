const CLOUDINARY_NAME = import.meta.env.VITE_CLOUDINARY_NAME;
const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUDINARY_NAME}/image/upload`;
const buildCloudinaryUrl = (publicId, width, height) => {
    const parts = [];
    if (width) parts.push(`w_${width}`);
    if (height) parts.push(`h_${height}`);
    parts.push('c_fill', 'f_auto', 'q_auto'); 
    return `${CLOUDINARY_BASE}/${parts.join(',')}/${publicId}`;
};

const HERO_IMAGE_PUBLIC_ID = 'badri-ali_o5bmwg.jpg'; 
const heroImageUrl = buildCloudinaryUrl(HERO_IMAGE_PUBLIC_ID, 1920, 1080);

export default function HeroSection() {
    return (
    <section
      className="relative w-full h-screen md:h-150 bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
    </section>
  );
}