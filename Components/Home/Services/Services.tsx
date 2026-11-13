import SectionHeading from '@/Components/Healper/SectionHeading'
import { expertiseData } from '@/Data/data'
import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
    return (
        <div id='services' className='scroll-mt-16 pt-10 md:pt-20 pb-10 md:pb-20 bg-slate-950'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                <div className='text-center mb-6 md:mb-8'>
                    <SectionHeading data-aos="fade-down" data-aos-duration="1000">Engineering Expertise</SectionHeading>
                    <p className='text-center text-slate-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base font-light'>
                        Core technical areas where I deliver value through deep expertise and proven results
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center'>
                    {
                        expertiseData.map((expertise, index) => {
                            return (
                                <div
                                    key={expertise.id}
                                    data-aos="zoom-in-up"
                                    data-aos-delay={index * 100}
                                    data-aos-duration="800"
                                    className='h-full'
                                >
                                    <ServicesCard service={expertise} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default Services
