import Image from 'next/image';
import React from 'react'


type Props = {
    skill: {
        id: number;
        title: string;
        image: string;
        percent: string;
    }
}

const SkillCard = ({ skill }: Props) => {
    const { id, image, title, percent } = skill;

    return (
        <div key={id} className=' p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900 '>
            <Image src={image} alt={title} width={80} height={80} className='object-cover mx-auto ' />
            <h4 className='text-white text-center text-[18px] mt-4 font-[600] '>{title}</h4>
            <p className='m-0 bg-black mt-4 rounded-lg p-2 text-white opacity-40 '>{percent}</p>
        </div>
    )
}

export default SkillCard
