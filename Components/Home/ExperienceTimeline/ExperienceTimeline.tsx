import SectionHeading from '@/Components/Healper/SectionHeading';
import { experiences } from '@/Data/data';
import React from 'react';
import { FaBuilding, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const ExperienceTimeline: React.FC = () => {
    return (
        <div id='experience' className="scroll-mt-16 pt-10 md:pt-20 pb-10 md:pb-20 bg-slate-950 text-white">
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                <div className='text-center mb-8 md:mb-12'>
                    <SectionHeading data-aos="fade-down" data-aos-duration="1000">Professional Experience</SectionHeading>
                    <p className='text-center text-slate-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base font-light'>
                        4+ years building production-grade applications with focus on ownership, architecture, and technical leadership
                    </p>
                </div>

                <div className="relative mt-16 md:mt-20">
                    {/* Vertical center line - hidden on mobile and tablet */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-slate-700/50 to-slate-700/20 z-0" />

                    <div className="flex flex-col gap-10 md:gap-12 lg:gap-16 relative z-1">
                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className="relative flex flex-col lg:flex-row items-stretch lg:items-center justify-between w-full"
                                data-aos="fade-up"
                                data-aos-delay={`${index * 150}`}
                                data-aos-duration="800"
                            >
                                {/* Left side */}
                                {isLeft && (
                                    <>
                                        <div className="w-full lg:w-1/2 px-3 sm:px-4 md:px-6 flex justify-center lg:justify-end">
                                            <div className="w-full max-w-md border border-slate-800 hover:border-slate-700 rounded-lg p-5 sm:p-6 md:p-8 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300">
                                                {/* Header */}
                                                <div className="mb-3 sm:mb-4">
                                                    <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white leading-tight">{exp.role}</h3>
                                                    <div className="mt-2 text-xs md:text-sm text-slate-400 flex items-center gap-2 flex-wrap">
                                                        <div className="flex items-center gap-1.5">
                                                            <FaBuilding className="text-slate-500 w-3 h-3" />
                                                            <span>{exp.company}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-xs md:text-sm text-slate-400 flex items-center gap-2 mt-1.5">
                                                        <FaCalendarAlt className="text-slate-500 w-3 h-3" />
                                                        <span>{exp.duration}</span>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-xs sm:text-sm text-slate-300 mb-3 sm:mb-4 leading-relaxed font-light">
                                                    {exp.description}
                                                </p>

                                                {/* Achievements */}
                                                <div className="mb-3 sm:mb-4 space-y-1.5">
                                                    <p className='text-xs font-semibold text-slate-200 uppercase tracking-wide'>Achievements</p>
                                                    {exp.achievements.slice(0, 3).map((achievement, idx) => (
                                                        <div key={idx} className="flex gap-2 items-start">
                                                            <FaCheckCircle className="text-slate-500 text-xs mt-1 flex-shrink-0" />
                                                            <p className="text-xs text-slate-300 leading-tight font-light">{achievement}</p>
                                                        </div>
                                                    ))}
                                                    {exp.achievements.length > 3 && (
                                                        <p className="text-xs text-slate-400 font-semibold mt-2">
                                                            +{exp.achievements.length - 3} more achievements
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Metrics */}
                                                <div className="bg-slate-900/50 rounded-lg p-2.5 sm:p-3 mb-3 sm:mb-4 border border-slate-800">
                                                    <p className='text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wide'>Impact</p>
                                                    <div className='grid grid-cols-2 gap-2'>
                                                        {Object.entries(exp.metrics).slice(0, 4).map(([key, value]) => (
                                                            <div key={key} className='text-xs'>
                                                                <p className='text-slate-200 font-bold break-words'>{value}</p>
                                                                <p className='text-slate-500 text-xs'>{key}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Technologies */}
                                                <div>
                                                    <p className='text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wide'>Stack</p>
                                                    <div className='flex flex-wrap gap-2'>
                                                        {exp.technologies.slice(0, 4).map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className='bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded border border-slate-700'
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                        {exp.technologies.length > 4 && (
                                                            <span className='text-slate-500 text-xs px-2 py-1'>
                                                                +{exp.technologies.length - 4}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Dot in center */}
                                        <div className="hidden lg:flex flex-col items-center w-0 mx-8 relative">
                                            <div className="w-5 h-5 bg-slate-400 border-4 border-slate-950 rounded-full z-2" />
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
                                            <div className="w-5 h-5 bg-slate-400 border-4 border-slate-950 rounded-full z-2" />
                                        </div>

                                        <div className="w-full lg:w-1/2 px-3 sm:px-4 md:px-6 flex justify-center lg:justify-start">
                                            <div className="w-full max-w-md border border-slate-800 hover:border-slate-700 rounded-lg p-5 sm:p-6 md:p-8 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300">
                                                {/* Header */}
                                                <div className="mb-3 sm:mb-4">
                                                    <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white leading-tight">{exp.role}</h3>
                                                    <div className="mt-2 text-xs md:text-sm text-slate-400 flex items-center gap-2 flex-wrap">
                                                        <div className="flex items-center gap-1.5">
                                                            <FaBuilding className="text-slate-500 w-3 h-3" />
                                                            <span>{exp.company}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-xs md:text-sm text-slate-400 flex items-center gap-2 mt-1.5">
                                                        <FaCalendarAlt className="text-slate-500 w-3 h-3" />
                                                        <span>{exp.duration}</span>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-xs sm:text-sm text-slate-300 mb-3 sm:mb-4 leading-relaxed font-light">
                                                    {exp.description}
                                                </p>

                                                {/* Achievements */}
                                                <div className="mb-3 sm:mb-4 space-y-1.5">
                                                    <p className='text-xs font-semibold text-slate-200 uppercase tracking-wide'>Achievements</p>
                                                    {exp.achievements.slice(0, 3).map((achievement, idx) => (
                                                        <div key={idx} className="flex gap-2 items-start">
                                                            <FaCheckCircle className="text-slate-500 text-xs mt-1 flex-shrink-0" />
                                                            <p className="text-xs text-slate-300 leading-tight font-light">{achievement}</p>
                                                        </div>
                                                    ))}
                                                    {exp.achievements.length > 3 && (
                                                        <p className="text-xs text-slate-400 font-semibold mt-2">
                                                            +{exp.achievements.length - 3} more achievements
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Metrics */}
                                                <div className="bg-slate-900/50 rounded-lg p-2.5 sm:p-3 mb-3 sm:mb-4 border border-slate-800">
                                                    <p className='text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wide'>Impact</p>
                                                    <div className='grid grid-cols-2 gap-2'>
                                                        {Object.entries(exp.metrics).slice(0, 4).map(([key, value]) => (
                                                            <div key={key} className='text-xs'>
                                                                <p className='text-slate-200 font-bold break-words'>{value}</p>
                                                                <p className='text-slate-500 text-xs'>{key}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Technologies */}
                                                <div>
                                                    <p className='text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wide'>Stack</p>
                                                    <div className='flex flex-wrap gap-2'>
                                                        {exp.technologies.slice(0, 4).map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className='bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded border border-slate-700'
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                        {exp.technologies.length > 4 && (
                                                            <span className='text-slate-500 text-xs px-2 py-1'>
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
        </div>
    );
};

export default ExperienceTimeline;
