import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
const phoneNumber = "212665436093"; 
  //  Replace with your WhatsApp number 

const message = "Hello!, Badri digital I would like to get in touch with you.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
)}`;

return (
    <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      {/* Button */}
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black group-hover:animate-pulse">
        <FaWhatsapp className="text-2xl" />
    </div>
    </a>
);
};

export default WhatsAppButton;
