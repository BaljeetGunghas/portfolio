"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import 'aos/dist/aos.css';
import Aos from 'aos'
import ExperienceTimeline from './ExperienceTimeline/ExperienceTimeline'


const Home = () => {

    useEffect(() => {
        const initAOS = async () => {
            await import('aos');
            Aos.init({
                duration: 1000,
                easing: 'ease',
                once: true,
                anchorPlacement: 'top-bottom'
            })
        }

        initAOS()
    }, [])

    return (
        <div className='overflow-hidden  '>
            <Hero />
            <About />
            <Services />
            <Project />
            <ExperienceTimeline />
            <Skills />
            <Contact />
        </div>
    )
}

export default Home
