import React from 'react'
import ContactForm from './ContactForm';
import { CgClose } from 'react-icons/cg';


type Props = {
    onClose: (val: boolean) => void;
}

const ContactFormModel = ({ onClose }: Props) => {
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-lg relative">
                <CgClose onClick={e => onClose(false)} className='absolute top-[1rem] bg-white right-[1rem] sm:w-8 sm:h-8 w-6 h-6 text-black rounded-full cursor-pointer' />
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactFormModel
