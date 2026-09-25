import SectionHeading from '@/Components/Healper/SectionHeading'
import { frontendSkills, backendSkills, databaseSkills, devopsSkills } from '@/Data/data'
import React from 'react'
import { FaReact, FaServer, FaDatabase, FaCloud } from 'react-icons/fa'

const Skills = () => {
    const skillCategories = [
        { name: 'Frontend Engineering', skills: frontendSkills, icon: FaReact, color: 'from-blue-900 to-blue-950', iconColor: 'text-blue-400' },
        { name: 'Backend Engineering', skills: backendSkills, icon: FaServer, color: 'from-purple-900 to-purple-950', iconColor: 'text-purple-400' },
        { name: 'Databases & Caching', skills: databaseSkills, icon: FaDatabase, color: 'from-emerald-900 to-emerald-950', iconColor: 'text-emerald-400' },
        { name: 'Cloud & DevOps', skills: devopsSkills, icon: FaCloud, color: 'from-orange-900 to-orange-950', iconColor: 'text-orange-400' },
    ]

    return (
        <div id='skills' className='scroll-mt-16 pt-16 pb-16 bg-[#050715]'>
            <div className='text-center mb-8'>
                <SectionHeading data-aos="fade-down" data-aos-duration="1000">Technical Skills</SectionHeading>
                <p className='text-center text-gray-400 mt-6 max-w-2xl mx-auto'>
                    Expertise organized by domain with real-world production experience
                </p>
            </div>

            <div className='w-[80%] mx-auto mt-12 space-y-12'>
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
                            <div className='flex items-center gap-3 mb-8'>
                                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                                    <IconComponent className={`w-6 h-6 ${category.iconColor}`} />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-bold text-white'>{category.name}</h3>
                                </div>
                            </div>

                            {/* Skills Grid */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skill.id}
                                        data-aos="fade-up"
                                        data-aos-delay={skillIndex * 50}
                                        data-aos-duration="600"
                                        className='bg-[#0f0715] border border-gray-700 hover:border-gray-600 rounded-lg p-5 transition-all duration-300 hover:shadow-lg'
                                    >
                                        <div className='flex items-start justify-between mb-3'>
                                            <h4 className='text-lg font-bold text-white'>{skill.title}</h4>
                                        </div>

                                        {/* Proficiency Label */}
                                        <div className='flex items-center gap-2 mb-3'>
                                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                                                skill.proficiency === 'Expert' ? 'bg-blue-900 text-blue-200' :
                                                skill.proficiency === 'Advanced' ? 'bg-purple-900 text-purple-200' :
                                                'bg-gray-800 text-gray-300'
                                            }`}>
                                                {skill.proficiency}
                                            </span>
                                            <span className='text-xs text-gray-400'>{skill.years}</span>
                                        </div>

                                        {/* Description */}
                                        <p className='text-sm text-gray-400'>
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
            <div className='w-[80%] mx-auto mt-16 bg-[#1a0f26] border border-blue-900 rounded-xl p-8'>
                <p className='text-gray-300 mb-4'>
                    <span className='font-bold text-white'>Why no percentages?</span> Skill percentages (90%, 95%) are meaningless and indicate junior-level thinking. Instead, I organize skills by domain with proficiency levels based on years of production experience and real-world outcomes.
                </p>
                <p className='text-gray-400 text-sm'>
                    Each skill is backed by actual projects, performance improvements, and architectural decisions I&apos;ve made at scale.
                </p>
            </div>
        </div>
    )
}

export default Skills
