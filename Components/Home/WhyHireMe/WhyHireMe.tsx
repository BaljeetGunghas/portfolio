import React from 'react'
import SectionHeading from '@/Components/Healper/SectionHeading'
import { FaCode, FaRocket, FaUsers, FaDollarSign, FaShieldAlt, FaLightbulb } from 'react-icons/fa'

const WhyHireMe = () => {
    const reasons = [
        {
            icon: FaRocket,
            color: 'text-blue-400',
            bgColor: 'bg-blue-900',
            title: 'Ship Fast, Scale Bigger',
            description: 'Reduced time-to-market by architecting systems that handle growth. 10x scaling without infrastructure rewrites.',
            metric: '10x User Growth'
        },
        {
            icon: FaDollarSign,
            color: 'text-emerald-400',
            bgColor: 'bg-emerald-900',
            title: 'Save Money at Scale',
            description: 'Optimized infrastructure and queries cutting costs. Performance improvements reduce server load and CDN usage.',
            metric: '-$15k/month'
        },
        {
            icon: FaShieldAlt,
            color: 'text-purple-400',
            bgColor: 'bg-purple-900',
            title: 'Reliability & Uptime',
            description: '99.9% production uptime across all services. Comprehensive monitoring, alerting, and incident response.',
            metric: '99.9% Uptime'
        },
        {
            icon: FaUsers,
            color: 'text-orange-400',
            bgColor: 'bg-orange-900',
            title: 'Team Force Multiplier',
            description: 'Mentored 3+ engineers improving team velocity by 35%. Established standards that stuck and scale.',
            metric: '+35% Team Output'
        },
        {
            icon: FaCode,
            color: 'text-pink-400',
            bgColor: 'bg-pink-900',
            title: 'Production-Grade Code',
            description: 'TypeScript, proper testing, code reviews, CI/CD pipelines. Reduced bugs by 45% through standards.',
            metric: '-45% Bugs'
        },
        {
            icon: FaLightbulb,
            color: 'text-yellow-400',
            bgColor: 'bg-yellow-900',
            title: 'Technical Decision Maker',
            description: 'System design expertise with proven architectural decisions. Migrate from monolith to microservices successfully.',
            metric: 'Trusted Lead'
        }
    ]

    return (
        <div className='scroll-mt-16 pt-16 pb-16 bg-[#050709]'>
            <div className='w-[80%] mx-auto'>
                <SectionHeading data-aos="fade-down" data-aos-duration="1000">
                    Why Companies Hire Me
                </SectionHeading>

                <p className='text-center text-gray-400 max-w-3xl mx-auto mt-6 mb-16 text-base md:text-lg'>
                    I don&apos;t just code—I drive measurable business impact. Here&apos;s what you get when you hire a senior engineer who cares about outcomes.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className='group bg-[#0f0715] border border-gray-800 rounded-xl p-6 hover:border-blue-600 hover:bg-blue-950 hover:bg-opacity-20 transition-all duration-300'
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 ${reason.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <Icon className={`w-6 h-6 ${reason.color}`} />
                                </div>

                                {/* Title */}
                                <h3 className='text-xl font-bold text-white mb-2'>
                                    {reason.title}
                                </h3>

                                {/* Description */}
                                <p className='text-sm text-gray-400 mb-4 leading-relaxed'>
                                    {reason.description}
                                </p>

                                {/* Metric Badge */}
                                <div className='inline-block px-3 py-1 bg-gray-900 border border-gray-700 rounded-lg'>
                                    <span className='text-xs font-semibold text-blue-300'>
                                        {reason.metric}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <div className='mt-16 text-center'>
                    <div className='max-w-2xl mx-auto bg-gradient-to-r from-blue-900 to-purple-900 border border-blue-800 rounded-xl p-8'>
                        <h3 className='text-2xl font-bold text-white mb-3'>
                            Ready to Build Something Great?
                        </h3>
                        <p className='text-gray-300 mb-6'>
                            I&apos;m actively looking for challenging roles where I can ship fast, scale systems, and mentor teams. Let&apos;s talk about what we can build together.
                        </p>
                        <a href="/contact" className='inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors'>
                            Start a Conversation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyHireMe
