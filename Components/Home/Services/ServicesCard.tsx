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
        <Tilt className='p-6 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300 h-full' >
            <Image src={service.icon} alt={service.title} width={50} height={50} />
            <h3 className='mt-4 text-lg font-bold text-white'>{service.title}</h3>
            <p className='mt-3 text-sm text-slate-400 font-light'>{service.description}</p>
        </Tilt>
    )
}

export default ServicesCard
