import SectionHeading from '@/Components/Healper/SectionHeading'
import { expertiseData } from '@/Data/data'
import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
    return (
        <div id='services' className='scroll-mt-16 pt-16 pb-16 bg-[#050715] '>
            <div className='text-center mb-8'>
                <SectionHeading data-aos="fade-down" data-aos-duration="1000">Engineering Expertise</SectionHeading>
                <p className='text-center text-gray-400 mt-6 max-w-2xl mx-auto'>
                    Core technical areas where I deliver value through deep expertise and proven results
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-[80%] mx-auto items-center mt-12'>
                {
                    expertiseData.map((expertise, index) => {
                        return (
                            <div
                                key={expertise.id}
                                data-aos="zoom-in-up"
                                data-aos-delay={index * 100}
                                data-aos-duration="800"
                                className='h-[100%]'
                            >
                                <ServicesCard service={expertise} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Services
