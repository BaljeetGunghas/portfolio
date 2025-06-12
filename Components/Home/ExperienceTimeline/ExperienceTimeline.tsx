import SectionHeading from '@/Components/Healper/SectionHeading';
import { experiences } from '@/Data/data';
import React from 'react';
import { FaBuilding, FaCalendarAlt } from 'react-icons/fa';

const ExperienceTimeline: React.FC = () => {
    return (
        <div id='experience' className="scroll-mt-16 pt-16 pb-20 bg-[#050709] text-white relative">
            <SectionHeading data-aos="fade-down" data-aos-duration="1000">My Experience</SectionHeading>

            <div className="relative w-[95%] max-w-6xl mx-auto mt-20">
                {/* Vertical center line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-emerald-600 opacity-30 z-0" />

                <div className="flex flex-col gap-20 relative z-1">
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
                                            <div className="max-w-md bg-[#191226] border border-emerald-800 hover:border-emerald-500 rounded-xl p-6 shadow-md">
                                                <h3 className="text-xl font-bold text-emerald-300">{exp.role}</h3>
                                                <div className="mt-2 text-sm text-gray-400 flex items-center gap-2">
                                                    <FaBuilding className="text-emerald-400" />
                                                    {exp.company}
                                                </div>
                                                <div className="text-sm text-gray-400 flex items-center gap-2 mt-1">
                                                    <FaCalendarAlt className="text-emerald-400" />
                                                    {exp.duration}
                                                </div>
                                                <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                                                    {exp.description}
                                                </p>
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
                                            <div className="max-w-md bg-[#191226] border border-emerald-800 hover:border-emerald-500 rounded-xl p-6 shadow-md">
                                                <h3 className="text-xl font-bold text-emerald-300">{exp.role}</h3>
                                                <div className="mt-2 text-sm text-gray-400 flex items-center gap-2">
                                                    <FaBuilding className="text-emerald-400" />
                                                    {exp.company}
                                                </div>
                                                <div className="text-sm text-gray-400 flex items-center gap-2 mt-1">
                                                    <FaCalendarAlt className="text-emerald-400" />
                                                    {exp.duration}
                                                </div>
                                                <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                                                    {exp.description}
                                                </p>
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
