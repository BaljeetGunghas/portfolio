import SectionHeading from '@/Components/Healper/SectionHeading';
import { experiences } from '@/Data/data';
import React from 'react';
import { FaBuilding, FaCalendarAlt, FaAward, FaCheckCircle } from 'react-icons/fa';

const ExperienceTimeline: React.FC = () => {
    return (
        <div id='experience' className="scroll-mt-16 pt-16 pb-20 bg-[#050709] text-white">
            <div className='text-center mb-8'>
                <SectionHeading data-aos="fade-down" data-aos-duration="1000">Professional Experience</SectionHeading>
                <p className='text-center text-gray-400 mt-6 max-w-2xl mx-auto'>
                    4+ years building production-grade applications with focus on ownership, architecture, and technical leadership
                </p>
            </div>

            <div className="relative w-[95%] max-w-6xl mx-auto mt-20">
                {/* Vertical center line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-emerald-600 opacity-30 z-0" />

                <div className="flex flex-col gap-16 relative z-1">
                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className="relative flex flex-col lg:flex-row items-center justify-between"
                                data-aos="fade-up"
                                data-aos-delay={`${index * 150}`}
                            >
                                {/* Left side */}
                                {isLeft && (
                                    <>
                                        <div className="w-full lg:w-1/2 px-4 flex justify-end">
                                            <div className="max-w-md bg-[#191226] border border-emerald-800 hover:border-emerald-500 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                                {/* Header */}
                                                <div className="mb-4">
                                                    <h3 className="text-2xl font-bold text-emerald-300">{exp.role}</h3>
                                                    <div className="mt-2 text-sm text-gray-400 flex items-center gap-2">
                                                        <FaBuilding className="text-emerald-400" />
                                                        {exp.company}
                                                    </div>
                                                    <div className="text-sm text-gray-400 flex items-center gap-2 mt-1">
                                                        <FaCalendarAlt className="text-emerald-400" />
                                                        {exp.duration}
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                                    {exp.description}
                                                </p>

                                                {/* Achievements */}
                                                <div className="mb-4 space-y-2">
                                                    <p className='text-xs font-semibold text-emerald-300 uppercase tracking-wide'>Key Achievements</p>
                                                    {exp.achievements.slice(0, 3).map((achievement, idx) => (
                                                        <div key={idx} className="flex gap-2 items-start">
                                                            <FaCheckCircle className="text-emerald-400 text-xs mt-1 flex-shrink-0" />
                                                            <p className="text-xs text-gray-300 leading-tight">{achievement}</p>
                                                        </div>
                                                    ))}
                                                    {exp.achievements.length > 3 && (
                                                        <p className="text-xs text-emerald-400 font-semibold mt-2">
                                                            +{exp.achievements.length - 3} more achievements
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Metrics */}
                                                <div className="bg-[#0f0a15] rounded-lg p-3 mb-4 border border-emerald-900">
                                                    <p className='text-xs font-semibold text-emerald-300 mb-2 uppercase tracking-wide'>Impact Metrics</p>
                                                    <div className='grid grid-cols-2 gap-2'>
                                                        {Object.entries(exp.metrics).slice(0, 4).map(([key, value]) => (
                                                            <div key={key} className='text-xs'>
                                                                <p className='text-emerald-300 font-bold break-words'>{value}</p>
                                                                <p className='text-gray-500 text-xs'>{key}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Technologies */}
                                                <div>
                                                    <p className='text-xs font-semibold text-emerald-300 mb-2 uppercase tracking-wide'>Tech Stack</p>
                                                    <div className='flex flex-wrap gap-2'>
                                                        {exp.technologies.slice(0, 4).map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className='bg-emerald-900 bg-opacity-30 text-emerald-300 text-xs px-2 py-1 rounded border border-emerald-700'
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                        {exp.technologies.length > 4 && (
                                                            <span className='text-gray-500 text-xs px-2 py-1'>
                                                                +{exp.technologies.length - 4}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Dot in center */}
                                        <div className="hidden lg:flex flex-col items-center w-0 mx-8 relative">
                                            <div className="w-5 h-5 bg-emerald-500 border-4 border-[#050709] rounded-full z-2" />
                                        </div>

                                        {/* Right blank */}
                                        <div className="w-full lg:w-1/2" />
                                    </>
                                )}

                                {/* Right side */}
                                {!isLeft && (
                                    <>
                                        {/* Left blank */}
                                        <div className="w-full lg:w-1/2" />

                                        {/* Dot in center */}
                                        <div className="hidden lg:flex flex-col items-center w-0 mx-8 relative">
                                            <div className="w-5 h-5 bg-emerald-500 border-4 border-[#050709] rounded-full z-2" />
                                        </div>

                                        <div className="w-full lg:w-1/2 px-4 flex justify-start">
                                            <div className="max-w-md bg-[#191226] border border-emerald-800 hover:border-emerald-500 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                                {/* Header */}
                                                <div className="mb-4">
                                                    <h3 className="text-2xl font-bold text-emerald-300">{exp.role}</h3>
                                                    <div className="mt-2 text-sm text-gray-400 flex items-center gap-2">
                                                        <FaBuilding className="text-emerald-400" />
                                                        {exp.company}
                                                    </div>
                                                    <div className="text-sm text-gray-400 flex items-center gap-2 mt-1">
                                                        <FaCalendarAlt className="text-emerald-400" />
                                                        {exp.duration}
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                                    {exp.description}
                                                </p>

                                                {/* Achievements */}
                                                <div className="mb-4 space-y-2">
                                                    <p className='text-xs font-semibold text-emerald-300 uppercase tracking-wide'>Key Achievements</p>
                                                    {exp.achievements.slice(0, 3).map((achievement, idx) => (
                                                        <div key={idx} className="flex gap-2 items-start">
                                                            <FaCheckCircle className="text-emerald-400 text-xs mt-1 flex-shrink-0" />
                                                            <p className="text-xs text-gray-300 leading-tight">{achievement}</p>
                                                        </div>
                                                    ))}
                                                    {exp.achievements.length > 3 && (
                                                        <p className="text-xs text-emerald-400 font-semibold mt-2">
                                                            +{exp.achievements.length - 3} more achievements
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Metrics */}
                                                <div className="bg-[#0f0a15] rounded-lg p-3 mb-4 border border-emerald-900">
                                                    <p className='text-xs font-semibold text-emerald-300 mb-2 uppercase tracking-wide'>Impact Metrics</p>
                                                    <div className='grid grid-cols-2 gap-2'>
                                                        {Object.entries(exp.metrics).slice(0, 4).map(([key, value]) => (
                                                            <div key={key} className='text-xs'>
                                                                <p className='text-emerald-300 font-bold break-words'>{value}</p>
                                                                <p className='text-gray-500 text-xs'>{key}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Technologies */}
                                                <div>
                                                    <p className='text-xs font-semibold text-emerald-300 mb-2 uppercase tracking-wide'>Tech Stack</p>
                                                    <div className='flex flex-wrap gap-2'>
                                                        {exp.technologies.slice(0, 4).map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className='bg-emerald-900 bg-opacity-30 text-emerald-300 text-xs px-2 py-1 rounded border border-emerald-700'
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                        {exp.technologies.length > 4 && (
                                                            <span className='text-gray-500 text-xs px-2 py-1'>
                                                                +{exp.technologies.length - 4}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ExperienceTimeline;
