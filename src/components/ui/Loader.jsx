import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ duration = 5000 }) {
const loaderRef = useRef(null);
const percentRef = useRef(null);
const counter = useRef({ value: 0 });

const [visible, setVisible] = useState(true);

useEffect(() => {
    document.body.classList.add("overflow-hidden");
    const tl = gsap.timeline({
        onComplete: () => {
        document.body.classList.remove("overflow-hidden");
        setVisible(false);
    },
    });
    // *counter animation
    tl.to(counter.current, {
        value: 100,
        duration: duration / 1000,
        ease: "none",
        onUpdate: () => {
        percentRef.current.textContent =
        Math.round(counter.current.value) + "%";
    },
    });
    // *exit animation
    tl.to(loaderRef.current, {
        autoAlpha: 0,
        duration: 0.7,
        ease: "power2.inOut",
    });
    return () => tl.kill();}, [duration]);
    if (!visible) return null;

return (
    <div
        ref={loaderRef}
        className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
    >
        <div className="text-center">
            <div
                ref={percentRef}
                className="text-5xl font-semibold text-white tabular-nums">
                0%
            </div>
        </div>
    </div>
);
}