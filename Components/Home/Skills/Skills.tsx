import SectionHeading from '@/Components/Healper/SectionHeading'
import { frontendSkills, backendSkills, databaseSkills, devopsSkills } from '@/Data/data'
import React from 'react'
import { FaReact, FaServer, FaDatabase, FaCloud } from 'react-icons/fa'

const Skills = () => {
    const skillCategories = [
        { name: 'Frontend Engineering', skills: frontendSkills, icon: FaReact },
        { name: 'Backend Engineering', skills: backendSkills, icon: FaServer },
        { name: 'Databases & Caching', skills: databaseSkills, icon: FaDatabase },
        { name: 'Cloud & DevOps', skills: devopsSkills, icon: FaCloud },
    ]

    return (
        <div id='skills' className='scroll-mt-16 pt-10 md:pt-20 pb-10 md:pb-20 bg-slate-950'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                <div className='text-center mb-12'>
                    <SectionHeading data-aos="fade-down" data-aos-duration="1000">Technical Skills</SectionHeading>
                    <p className='text-center text-slate-400 mt-6 max-w-2xl mx-auto text-sm md:text-base font-light'>
                        Expertise organized by domain with real-world production experience
                    </p>
                </div>

                <div className='mt-12 space-y-12 md:space-y-16'>
                {skillCategories.map((category, categoryIndex) => {
                    const IconComponent = category.icon
                    return (
                        <div
                            key={categoryIndex}
                            data-aos="fade-up"
                            data-aos-delay={categoryIndex * 150}
                            data-aos-duration="800"
                        >
                            {/* Category Header */}
                            <div className='flex flex-col sm:flex-row sm:items-center gap-3 mb-8'>
                                <div className='w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors'>
                                    <IconComponent className='w-6 h-6 md:w-7 md:h-7 text-slate-400' />
                                </div>
                                <div>
                                    <h3 className='text-xl md:text-2xl font-bold text-white'>{category.name}</h3>
                                </div>
                            </div>

                            {/* Skills Grid */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skill.id}
                                        data-aos="fade-up"
                                        data-aos-delay={skillIndex * 50}
                                        data-aos-duration="600"
                                        className='group border border-slate-800 hover:border-slate-700 rounded-lg p-5 md:p-6 transition-all duration-300 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm'
                                    >
                                        <div className='flex items-start justify-between mb-3'>
                                            <h4 className='text-base md:text-lg font-bold text-white'>{skill.title}</h4>
                                        </div>

                                        {/* Proficiency Label */}
                                        <div className='flex flex-wrap items-center gap-2 mb-3'>
                                            <span className={`text-xs font-bold px-2 md:px-3 py-1 rounded-full ${
                                                skill.proficiency === 'Expert' ? 'bg-slate-800 text-slate-200' :
                                                skill.proficiency === 'Advanced' ? 'bg-slate-800 text-slate-200' :
                                                'bg-slate-800 text-slate-300'
                                            }`}>
                                                {skill.proficiency}
                                            </span>
                                            <span className='text-xs text-slate-500'>{skill.years}</span>
                                        </div>

                                        {/* Description */}
                                        <p className='text-xs md:text-sm text-slate-400 font-light'>
                                            {skill.proficiency === 'Expert' && 'Deep expertise with production experience'}
                                            {skill.proficiency === 'Advanced' && 'Strong proficiency with real-world implementations'}
                                            {skill.proficiency === 'Intermediate' && 'Solid understanding with practical application'}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>

                {/* Additional Notes */}
                <div className='mt-16 md:mt-20 border border-slate-800 rounded-lg p-6 md:p-8 bg-slate-900/40 backdrop-blur-sm'>
                    <p className='text-slate-300 mb-4 text-sm md:text-base'>
                        <span className='font-bold text-white'>Why no percentages?</span> Skill percentages (90%, 95%) are meaningless and indicate junior-level thinking. Instead, I organize skills by domain with proficiency levels based on years of production experience and real-world outcomes.
                    </p>
                    <p className='text-slate-400 text-xs md:text-sm font-light'>
                        Each skill is backed by actual projects, performance improvements, and architectural decisions I&apos;ve made at scale.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Skills
