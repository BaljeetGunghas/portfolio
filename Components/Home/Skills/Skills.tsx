import SectionHeading from '@/Components/Healper/SectionHeading'
import { skillsData } from '@/Data/data'
import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
    return (
        <div id='skills' className='scroll-mt-16 pt-16 pb-16 bg-[#050715] '>
            <SectionHeading data-aos="fade-down" data-aos-duration="1000">My skills</SectionHeading>
            <div className=' w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center mt-20 '>
                {
                    skillsData.map((skill, index) => {
                        return (
                            <div
                                key={skill.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                data-aos-duration="800"
                            >
                                <SkillCard skill={skill} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Skills
