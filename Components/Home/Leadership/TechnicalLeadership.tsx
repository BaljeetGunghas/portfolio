import SectionHeading from '@/Components/Healper/SectionHeading'
import { leadershipHighlights } from '@/Data/data'
import React from 'react'
import { FaHandshake, FaClipboardList, FaUsers, FaBook } from 'react-icons/fa'

const TechnicalLeadership = () => {
    const icons = [FaHandshake, FaClipboardList, FaUsers, FaBook]

    return (
        <div id='leadership' className='scroll-mt-16 pt-10 md:pt-20 pb-10 md:pb-20 bg-slate-950'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                <div className='text-center mb-8 md:mb-12'>
                    <SectionHeading data-aos="fade-down" data-aos-duration="1000">Technical Leadership</SectionHeading>
                    <p className='text-center text-slate-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base font-light'>
                        Growing teams, establishing standards, and raising engineering excellence
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12'>
                {leadershipHighlights.map((highlight, index) => {
                    const IconComponent = icons[index % icons.length]
                    return (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            data-aos-duration="800"
                            className='group border border-slate-800 hover:border-slate-700 rounded-lg p-6 md:p-8 transition-all duration-300 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm'
                        >
                            <div className='flex items-start gap-4 mb-4'>
                                <div className='w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors'>
                                    <IconComponent className='text-slate-400 w-6 h-6 md:w-7 md:h-7' />
                                </div>
                                <h3 className='text-lg md:text-xl font-bold text-white'>{highlight.title}</h3>
                            </div>
                            <p className='text-slate-400 mb-4 leading-relaxed text-sm md:text-base font-light'>{highlight.description}</p>
                            <div className='bg-slate-900/50 rounded p-4 border border-slate-800'>
                                <p className='text-sm text-slate-200 font-semibold'>Impact:</p>
                                <p className='text-sm text-slate-300 mt-1 font-light'>{highlight.impact}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

                {/* Leadership Qualities */}
                <div className='mt-16 md:mt-20'>
                    <h3 className='text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center'>What Makes a Great Senior Engineer</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className='border border-slate-800 hover:border-slate-700 rounded-lg p-5 md:p-6 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'
                        >
                            <h4 className='text-base md:text-lg font-bold text-slate-200 mb-2 md:mb-3'>✓ Ownership</h4>
                            <p className='text-xs md:text-sm text-slate-400 font-light'>Takes full responsibility for outcomes, not just outputs. Cares deeply about the problem end-to-end.</p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="150"
                            className='border border-slate-800 hover:border-slate-700 rounded-lg p-5 md:p-6 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'
                        >
                            <h4 className='text-base md:text-lg font-bold text-slate-200 mb-2 md:mb-3'>✓ Impact Focus</h4>
                            <p className='text-xs md:text-sm text-slate-400 font-light'>Prioritizes business outcomes and user value. Measures success through metrics, not features shipped.</p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className='border border-slate-800 hover:border-slate-700 rounded-lg p-5 md:p-6 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'
                        >
                            <h4 className='text-base md:text-lg font-bold text-slate-200 mb-2 md:mb-3'>✓ Systems Thinking</h4>
                            <p className='text-xs md:text-sm text-slate-400 font-light'>Thinks about architecture, scalability, and long-term implications. Considers trade-offs carefully.</p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="250"
                            className='border border-slate-800 hover:border-slate-700 rounded-lg p-5 md:p-6 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'
                        >
                            <h4 className='text-base md:text-lg font-bold text-slate-200 mb-2 md:mb-3'>✓ Mentorship</h4>
                            <p className='text-xs md:text-sm text-slate-400 font-light'>Grows others through intentional mentorship, code reviews, and knowledge sharing. Raises team standards.</p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className='border border-slate-800 hover:border-slate-700 rounded-lg p-5 md:p-6 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'
                        >
                            <h4 className='text-base md:text-lg font-bold text-slate-200 mb-2 md:mb-3'>✓ Communication</h4>
                            <p className='text-xs md:text-sm text-slate-400 font-light'>Explains complex technical concepts clearly. Documents decisions. Collaborates effectively across teams.</p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="350"
                            className='border border-slate-800 hover:border-slate-700 rounded-lg p-5 md:p-6 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'
                        >
                            <h4 className='text-base md:text-lg font-bold text-slate-200 mb-2 md:mb-3'>✓ Continuous Learning</h4>
                            <p className='text-xs md:text-sm text-slate-400 font-light'>Stays current with technologies and best practices. Learns from failures. Shares knowledge generously.</p>
                        </div>
                    </div>
                </div>

                {/* My Approach */}
                <div className='mt-16 md:mt-20 border border-slate-800 rounded-lg p-6 md:p-8 bg-slate-900/40 backdrop-blur-sm'>
                    <h3 className='text-xl md:text-2xl font-bold text-white mb-6 md:mb-8'>My Leadership Philosophy</h3>
                    <div className='space-y-3 md:space-y-4'>
                        <p className='text-slate-300 text-sm md:text-base'>
                            <span className='font-bold text-slate-200'>1. Lead by Example</span> - I code daily, participate in code reviews, and ship features. I don&apos;t ask my team to do anything I wouldn&apos;t do.
                        </p>
                        <p className='text-slate-300 text-sm md:text-base'>
                            <span className='font-bold text-slate-200'>2. Create Psychological Safety</span> - My team feels safe to ask questions, experiment, and even fail. Learning is encouraged.
                        </p>
                        <p className='text-slate-300 text-sm md:text-base'>
                            <span className='font-bold text-slate-200'>3. Focus on Growth</span> - I invest in my team&apos;s growth through mentorship, challenging projects, and career guidance.
                        </p>
                        <p className='text-slate-300 text-sm md:text-base'>
                            <span className='font-bold text-slate-200'>4. Own Outcomes</span> - I take responsibility for team outcomes while holding myself and others accountable.
                        </p>
                        <p className='text-slate-300 text-sm md:text-base'>
                            <span className='font-bold text-slate-200'>5. Communicate Clearly</span> - I explain the &quot;why&quot; behind decisions and keep everyone aligned on goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnicalLeadership
