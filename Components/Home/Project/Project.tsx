import SectionHeading from '@/Components/Healper/SectionHeading'
import { projectData } from '@/Data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
    return (
        <div id='project' className='scroll-mt-16 pt-16 pb-16 bg-[#050709] '>
            <SectionHeading data-aos="fade-down" data-aos-duration="1000">my Projects</SectionHeading>
            <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center '>
                {projectData.map((project, index) => {
                    return (
                        <div
                            key={project.id}
                            className=' bg-blue-950 p-6 rounded-lg  '
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="800"
                        >
                            <Link href={project.url} target='_blank'>
                                <Image src={project.image} alt='project' width={350} height={200} className='hover:scale-110 transition-all duration-300 object-cover rounded-md' />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Project
