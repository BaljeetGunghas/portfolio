import SectionHeading from '@/Components/Healper/SectionHeading'
import { aboutInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const About = () => {
  return (
    <div className=' pt-16 pb-16 bg-[#050709] '>
        <SectionHeading data-aos="fade-down" data-aos-duration="1000">About Me</SectionHeading>
        <div className=' w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20 '>
            {/* Left Content */}
            <div data-aos="fade-right" data-aos-duration="1000">
                <h2 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 '>{aboutInfo.title}</h2>
                <p className=' mt-6 text-base text-gray-500 '>{aboutInfo.description}</p>
                <div className='mt-8'>
                    <div className='flex items-center space-x-2 mb-6' data-aos="fade-up" data-aos-delay="100">
                        <div className='w-7 h-7 bg-green-800 flex flex-col items-center  justify-center '>
                            <FaCheck className='text-white' />
                        </div>
                        <p className=' text-sm sm:text-base md:text-lg font-bold text-gray-200'>Frontend Developement</p>
                    </div>
                    <div className='flex items-center space-x-2 mb-6' data-aos="fade-up" data-aos-delay="200">
                        <div className='w-7 h-7 bg-blue-800 flex flex-col items-center  justify-center '>
                            <FaCheck className='text-white' />
                        </div>
                        <p className=' text-sm sm:text-base md:text-lg font-bold text-gray-200'>Backend Developement</p>
                    </div>
                    <div className='flex items-center space-x-2 mb-6' data-aos="fade-up" data-aos-delay="300">
                        <div className='w-7 h-7 bg-yellow-800 flex flex-col items-center  justify-center '>
                            <FaCheck className='text-white' />
                        </div>
                        <p className=' text-sm sm:text-base md:text-lg font-bold text-gray-200'>Full Stack Developement</p>
                    </div>
                </div>
            </div>

            {/* Right Grid Stats */}
            <div className=' grid grid-cols-2 gap-16 items-center lg:mx-auto  '>
                <div data-aos="zoom-in" data-aos-delay="100">
                    <Image src={'/images/customer.png'} alt='image' width={80} height={80} className='mx-auto' />
                    <p className='mt-3 font-bold text-lg text-white text-center '>{aboutInfo.client}</p>
                    <p className='text-base sm:text-lg text-gray-400 text-center '>Satisfied Customer</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="200">
                    <Image src={'/images/experience.png'} alt='image' width={80} height={80} className='mx-auto' />
                    <p className='mt-3 font-bold text-lg text-white text-center '>{aboutInfo.experience}</p>
                    <p className='text-base sm:text-lg text-gray-400 text-center '>Years Exprience</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="300">
                    <Image src={'/images/completed.png'} alt='image' width={80} height={80} className='mx-auto' />
                    <p className='mt-3 font-bold text-lg text-white text-center '>{aboutInfo.project}</p>
                    <p className='text-base sm:text-lg text-gray-400 text-center '>Completed Project</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="400">
                    <Image src={'/images/rocket.png'} alt='image' width={80} height={80} className='mx-auto' />
                    <p className='mt-3 font-bold text-lg text-white text-center '>{aboutInfo.website}</p>
                    <p className='text-base sm:text-lg text-gray-400 text-center '>Website launched</p>
                </div>
            </div>
        </div>
    </div>
)

}

export default About
