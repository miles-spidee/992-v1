import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Featured() {
    const textRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.set(textRef.current, { opacity: 0, y: 50 }); // Ensure initial opacity and position are set

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top 20%', // Trigger when the top of the section is 20% from the top of the screen
            end: 'bottom top',
            toggleActions: 'play none none none',
            invalidateOnRefresh: true, // Recalculate positions on layout changes
            onEnter: () => {
                console.log('Trigger activated: Fading in text'); // Debug log
                gsap.to(textRef.current, { opacity: 1, y: 0, duration: 0.7 });
            },
            onLeaveBack: () => {
                console.log('Trigger deactivated: Fading out text'); // Debug log
                gsap.to(textRef.current, { opacity: 0, y: 50, duration: 0.7 });
            },
        });

        console.log('ScrollTrigger created:', ScrollTrigger.getAll()); // Debug log
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-screen bg-black overflow-hidden">
            {/* Background 911 text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h1
                    ref={textRef}
                    className="font-marker text-[22rem] md:text-[18rem] lg:text-[22rem] text-white leading-none"
                >
                    GT3RS
                </h1>
            </div>

            {/* Foreground image */}
            <div className="absolute bottom-[-10%] w-full flex items-center justify-center">
                <img
                    src="/img/cropped-side-look.png"
                    alt="Porsche 911 GT3 RS"
                    className="w-[80%] h-auto drop-shadow-2xl"
                />
            </div>

            {/* Explore button */}
            <div className="absolute bottom-[5%] w-full flex items-center justify-center">
                <button
                    className="px-6 py-3 text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                >
                    EXPLORE
                </button>
            </div>
        </section>
    );
}

export default Featured;
