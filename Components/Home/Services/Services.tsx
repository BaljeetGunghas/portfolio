import SectionHeading from '@/Components/Healper/SectionHeading'
import { servicesData } from '@/Data/data'
import React from 'react'
import ServicesCard from './ServicesCard'



const Services = () => {
    return (
        <div id='services' className='scroll-mt-16 pt-16 pb-16 bg-[#050715] '>
            <SectionHeading data-aos="fade-down" data-aos-duration="1000">Services</SectionHeading>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20 '>
                {
                    servicesData.map((Service, index) => {
                        return (
                            <div
                                key={Service.id}
                                data-aos="zoom-in-up"
                                data-aos-delay={index * 100} // Stagger effect
                                data-aos-duration="800"
                                className='h-[100%]'
                            >
                                <ServicesCard service={Service} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Services
