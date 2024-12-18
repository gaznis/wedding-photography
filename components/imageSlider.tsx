"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { HOME } from '@/constants/home';



export default function ImageSlider(): JSX.Element {

    // State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // useEffect hook to handle automatic slide transition
    useEffect(() => {
        // Start interval for automatic slide change if not hovered
            const interval = setInterval(() => {
                nextSlide();
            }, 3000);

            // Cleanup the interval on component unmount
            return () => {
                clearInterval(interval);
            };
    }, []);

    // Function to show the next slide
    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % HOME.length);
    };

    return (
        <div>
            <div
                className="relative h-[65vh] w-screen"
            >
                <Image
                    src={HOME[currentIndex].src}
                    alt={HOME[currentIndex].alt}
                    fill
                    objectFit="cover"
                    className="transition-all duration-500 ease-in-out"
                />
            </div>
            <div className="flex justify-center">
                
                {HOME.map((_, index) => (
                    <div
                        key={index}
                        className='transition-all duration-500 ease-in-out'
                    ></div>
                ))}
            </div>
        </div>
    );
}