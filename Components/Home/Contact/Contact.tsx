import SectionHeading from '@/Components/Healper/SectionHeading'
import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => {
    return (
        <div className=' pt-16 pb-16 bg-[#050709] '>
            <SectionHeading data-aos="fade-down" data-aos-duration="1000">Contact Me</SectionHeading>
            <div className=' w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 items-center mt-20 '>
                <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    <ContactForm />
                </div>
                <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000" className='mx-auto space-y-5'>
                    <ContactInfo />
                </div>
            </div>
        </div>
    )

}

export default Contact
