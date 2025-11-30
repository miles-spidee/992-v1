import React, { useState, useEffect } from 'react';
import './LatestProducts.css';

const carModels = [
    {
        image: '/img/car1.png',
        name: 'Porsche 911 GT3 RS',
        details: 'Color Variants: Red, Blue, Black',
    },
    {
        image: '/img/car2.png',
        name: 'Porsche Taycan Turbo S',
        details: 'Color Variants: White, Green, Silver',
    },
    {
        image: '/img/car3.png',
        name: 'Porsche Panamera GTS',
        details: 'Color Variants: Black, Yellow, Grey',
    },
];

function LatestProducts() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carModels.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carModels.length) % carModels.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carModels.length);
    };

    return (
        <section className="latest-products relative w-full h-screen bg-gray-900 text-white">
            {/* Title */}
            <div className="absolute top-10 left-10">
                <h2 className="text-4xl font-bold">Our Latest Launch</h2>
            </div>

            {/* Slideshow */}
            <div className="flex items-center justify-center h-full">
                <button
                    className="absolute left-5 text-2xl bg-gray-700 p-3 rounded-full hover:bg-gray-600"
                    onClick={handlePrev}
                >
                    &#8249;
                </button>

                <div className="text-center">
                    <img
                        src={carModels[currentIndex].image}
                        alt={carModels[currentIndex].name}
                        className="w-[80%] h-auto mx-auto drop-shadow-2xl"
                    />
                    <h3 className="text-3xl font-semibold mt-4">
                        {carModels[currentIndex].name}
                    </h3>
                    <p className="text-lg mt-2">
                        {carModels[currentIndex].details}
                    </p>
                </div>

                <button
                    className="absolute right-5 text-2xl bg-gray-700 p-3 rounded-full hover:bg-gray-600"
                    onClick={handleNext}
                >
                    &#8250;
                </button>
            </div>
        </section>
    );
}

export default LatestProducts;
