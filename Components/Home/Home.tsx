'use client'
import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import SystemDesign from './SystemDesign/SystemDesign'
import EngineringImpact from './Impact/EngineringImpact'
import TechnicalLeadership from './Leadership/TechnicalLeadership'
import ExperienceTimeline from './ExperienceTimeline/ExperienceTimeline'

const Home = () => {

    return (
        <div className='overflow-hidden'>
            <Hero />
            <About />
            <Services />
            <Project />
            <SystemDesign />
            <EngineringImpact />
            <ExperienceTimeline />
            <TechnicalLeadership />
            <Skills />
            <Contact />
        </div>
    )
}

export default Home
