import SectionHeading from '@/Components/Healper/SectionHeading'
import { leadershipHighlights } from '@/Data/data'
import React from 'react'
import { FaHandshake, FaClipboardList, FaUsers, FaBook } from 'react-icons/fa'

const TechnicalLeadership = () => {
    const icons = [FaHandshake, FaClipboardList, FaUsers, FaBook]

    return (
        <div id='leadership' className='scroll-mt-16 pt-16 pb-16 bg-[#050715]'>
            <div className='text-center mb-8'>
                <SectionHeading data-aos="fade-down" data-aos-duration="1000">Technical Leadership</SectionHeading>
                <p className='text-center text-gray-400 mt-6 max-w-2xl mx-auto'>
                    Growing teams, establishing standards, and raising engineering excellence
                </p>
            </div>

            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
                {leadershipHighlights.map((highlight, index) => {
                    const IconComponent = icons[index % icons.length]
                    return (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            data-aos-duration="800"
                            className='bg-[#0f0715] border border-emerald-900 hover:border-emerald-600 rounded-lg p-8 transition-all duration-300 hover:shadow-lg'
                        >
                            <div className='flex items-start gap-4 mb-4'>
                                <div className='w-14 h-14 bg-emerald-900 rounded-lg flex items-center justify-center flex-shrink-0'>
                                    <IconComponent className='text-emerald-400 w-7 h-7' />
                                </div>
                                <h3 className='text-xl font-bold text-white'>{highlight.title}</h3>
                            </div>
                            <p className='text-gray-400 mb-4 leading-relaxed'>{highlight.description}</p>
                            <div className='bg-[#1a0f26] rounded p-4 border border-emerald-900'>
                                <p className='text-sm text-emerald-300 font-semibold'>Impact:</p>
                                <p className='text-sm text-gray-300 mt-1'>{highlight.impact}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Leadership Qualities */}
            <div className='w-[80%] mx-auto mt-16'>
                <h3 className='text-2xl font-bold text-white mb-8 text-center'>What Makes a Great Senior Engineer</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className='bg-[#1a0f26] border border-blue-900 rounded-lg p-6'
                    >
                        <h4 className='text-lg font-bold text-blue-300 mb-3'>✓ Ownership</h4>
                        <p className='text-sm text-gray-400'>Takes full responsibility for outcomes, not just outputs. Cares deeply about the problem end-to-end.</p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className='bg-[#1a0f26] border border-purple-900 rounded-lg p-6'
                    >
                        <h4 className='text-lg font-bold text-purple-300 mb-3'>✓ Impact Focus</h4>
                        <p className='text-sm text-gray-400'>Prioritizes business outcomes and user value. Measures success through metrics, not features shipped.</p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className='bg-[#1a0f26] border border-emerald-900 rounded-lg p-6'
                    >
                        <h4 className='text-lg font-bold text-emerald-300 mb-3'>✓ Systems Thinking</h4>
                        <p className='text-sm text-gray-400'>Thinks about architecture, scalability, and long-term implications. Considers trade-offs carefully.</p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="250"
                        className='bg-[#1a0f26] border border-orange-900 rounded-lg p-6'
                    >
                        <h4 className='text-lg font-bold text-orange-300 mb-3'>✓ Mentorship</h4>
                        <p className='text-sm text-gray-400'>Grows others through intentional mentorship, code reviews, and knowledge sharing. Raises team standards.</p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className='bg-[#1a0f26] border border-pink-900 rounded-lg p-6'
                    >
                        <h4 className='text-lg font-bold text-pink-300 mb-3'>✓ Communication</h4>
                        <p className='text-sm text-gray-400'>Explains complex technical concepts clearly. Documents decisions. Collaborates effectively across teams.</p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="350"
                        className='bg-[#1a0f26] border border-cyan-900 rounded-lg p-6'
                    >
                        <h4 className='text-lg font-bold text-cyan-300 mb-3'>✓ Continuous Learning</h4>
                        <p className='text-sm text-gray-400'>Stays current with technologies and best practices. Learns from failures. Shares knowledge generously.</p>
                    </div>
                </div>
            </div>

            {/* My Approach */}
            <div className='w-[80%] mx-auto mt-12 bg-gradient-to-r from-emerald-900 to-emerald-950 border border-emerald-800 rounded-lg p-8'>
                <h3 className='text-xl font-bold text-white mb-6'>My Leadership Philosophy</h3>
                <div className='space-y-4'>
                    <p className='text-gray-300'>
                        <span className='font-bold text-emerald-300'>1. Lead by Example</span> - I code daily, participate in code reviews, and ship features. I don&apos;t ask my team to do anything I wouldn&apos;t do.
                    </p>
                    <p className='text-gray-300'>
                        <span className='font-bold text-emerald-300'>2. Create Psychological Safety</span> - My team feels safe to ask questions, experiment, and even fail. Learning is encouraged.
                    </p>
                    <p className='text-gray-300'>
                        <span className='font-bold text-emerald-300'>3. Focus on Growth</span> - I invest in my team&apos;s growth through mentorship, challenging projects, and career guidance.
                    </p>
                    <p className='text-gray-300'>
                        <span className='font-bold text-emerald-300'>4. Own Outcomes</span> - I take responsibility for team outcomes while holding myself and others accountable.
                    </p>
                    <p className='text-gray-300'>
                        <span className='font-bold text-emerald-300'>5. Communicate Clearly</span> - I explain the &quot;why&quot; behind decisions and keep everyone aligned on goals.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TechnicalLeadership
