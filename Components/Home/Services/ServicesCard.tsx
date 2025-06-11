"use client";
import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt';

type Props = {
    service: {
        id: number;
        title: string;
        description: string;
        icon: string;
    }
}

const ServicesCard = ({ service }: Props) => {
    return (
        <Tilt className=' shadow-2xl p-6 rounded-lg bg-[#814ced] h-[100%]' >
            <Image src={service.icon} alt={service.title} width={50} height={50} />
            <h3 className=' mt-4 text-lg font-bold text-gray-100 '>{service.title}</h3>
            <p className='mt-3 text-sm text-white text-opacity-80 '>{service.description}</p>
        </Tilt>
    )
}

export default ServicesCard
