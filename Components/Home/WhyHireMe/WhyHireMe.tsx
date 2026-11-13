import React from 'react'
import SectionHeading from '@/Components/Healper/SectionHeading'
import { FaCode, FaRocket, FaUsers, FaDollarSign, FaShieldAlt, FaLightbulb } from 'react-icons/fa'

const WhyHireMe = () => {
    const reasons = [
        {
            icon: FaRocket,
            title: 'Ship Fast, Scale Bigger',
            description: 'Reduced time-to-market by architecting systems that handle growth. 10x scaling without infrastructure rewrites.',
            metric: '10x User Growth'
        },
        {
            icon: FaDollarSign,
            title: 'Save Money at Scale',
            description: 'Optimized infrastructure and queries cutting costs. Performance improvements reduce server load and CDN usage.',
            metric: '-$15k/month'
        },
        {
            icon: FaShieldAlt,
            title: 'Reliability & Uptime',
            description: '99.9% production uptime across all services. Comprehensive monitoring, alerting, and incident response.',
            metric: '99.9% Uptime'
        },
        {
            icon: FaUsers,
            title: 'Team Force Multiplier',
            description: 'Mentored 3+ engineers improving team velocity by 35%. Established standards that stuck and scale.',
            metric: '+35% Team Output'
        },
        {
            icon: FaCode,
            title: 'Production-Grade Code',
            description: 'TypeScript, proper testing, code reviews, CI/CD pipelines. Reduced bugs by 45% through standards.',
            metric: '-45% Bugs'
        },
        {
            icon: FaLightbulb,
            title: 'Technical Decision Maker',
            description: 'System design expertise with proven architectural decisions. Migrate from monolith to microservices successfully.',
            metric: 'Trusted Lead'
        }
    ]

    return (
        <div className='scroll-mt-16 pt-12 md:pt-20 pb-12 md:pb-20 bg-slate-950'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                <SectionHeading data-aos="fade-down" data-aos-duration="1000">
                    Why Companies Hire Me
                </SectionHeading>

                <p className='text-center text-slate-400 max-w-3xl mx-auto mt-4 md:mt-6 mb-10 md:mb-16 text-sm md:text-base font-light'>
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
                                className='group p-6 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'
                            >
                                {/* Icon */}
                                <div className='w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
                                    <Icon className='w-6 h-6 text-slate-300 group-hover:text-white transition-colors' />
                                </div>

                                {/* Title */}
                                <h3 className='text-lg font-bold text-white mb-2'>
                                    {reason.title}
                                </h3>

                                {/* Description */}
                                <p className='text-sm text-slate-400 mb-4 leading-relaxed font-light'>
                                    {reason.description}
                                </p>

                                {/* Metric Badge */}
                                <div className='inline-block px-3 py-1.5 bg-slate-900/50 border border-slate-700 rounded-lg'>
                                    <span className='text-xs font-semibold text-slate-300'>
                                        {reason.metric}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <div className='mt-16 text-center'>
                    <div className='max-w-2xl mx-auto border border-slate-800 rounded-lg p-8 bg-slate-900/40 backdrop-blur-sm hover:border-slate-700 transition-all duration-300'>
                        <h3 className='text-2xl font-bold text-white mb-3'>
                            Ready to Build Something Great?
                        </h3>
                        <p className='text-slate-400 mb-6 font-light'>
                            I&apos;m actively looking for challenging roles where I can ship fast, scale systems, and mentor teams. Let&apos;s talk about what we can build together.
                        </p>
                        <a href="/contact" className='inline-block px-8 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-100 transition-colors'>
                            Start a Conversation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyHireMe
