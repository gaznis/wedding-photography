"use client";
import Image from "next/image";
import { SERVICES } from '@/constants/services';


export default function Cards() {

    return (
        <div className="max-w-[1640px] mx-8 p-4 py-12 grid md:grid-cols-5 gap-6">
            {/* Card */}

            {SERVICES.map(({ title, price, src }, index) => {
                return (
                    <div key={index} className="rounded-xl relative ">
                        {/* Overlay */}
                        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                            <p className="font-bold text-2xl px-2 pt-4">{title} </p>
                            <p className="px-2">&#8377; {price}</p>
                            <button className="border rounded-xl px-5 py-1 border-white bg-white text-black hover:bg-black/50 hover:text-white border-none mx-2 absolute bottom-4">
                                Book
                            </button>
                        </div>
                        <Image
                            className="max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl"
                            src={src}
                            alt={title}
                            width={500}
                            height={500}
                        />
                    </div>
                );
            })}
        </div>
    );
}