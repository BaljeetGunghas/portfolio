import React from 'react'
import ContactForm from './ContactForm';
import { CgClose } from 'react-icons/cg';

type Props = {
    onClose: (val: boolean) => void;
}

const ContactFormModel = ({ onClose }: Props) => {
    return (
        <div
            className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center p-4 overflow-y-auto"
            onClick={() => onClose(false)}
        >
            <div
                className="bg-gradient-to-br from-[#1a0f26] to-[#0f0715] rounded-2xl w-full max-w-2xl shadow-2xl border border-blue-900 my-8 flex flex-col max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header - Fixed */}
                <div className='bg-gradient-to-r from-blue-900 to-purple-900 px-6 md:px-8 py-5 md:py-6 rounded-t-2xl border-b border-blue-800 flex items-center justify-between flex-shrink-0'>
                    <div>
                        <h2 className='text-xl md:text-2xl font-bold text-white'>Let's Talk</h2>
                        <p className='text-blue-200 text-xs md:text-sm mt-1'>Tell me about your opportunity</p>
                    </div>
                    <button
                        onClick={() => onClose(false)}
                        className='flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-white hover:bg-gray-200 rounded-full transition-all duration-200 flex-shrink-0'
                        aria-label="Close modal"
                    >
                        <CgClose className='w-5 h-5 md:w-6 md:h-6 text-black' />
                    </button>
                </div>

                {/* Form Content - Scrollable */}
                <div className='overflow-y-auto flex-1 px-6 md:px-8 py-6 md:py-8'>
                    <ContactForm isModal={true} />
                </div>

                {/* Footer - Fixed */}
                <div className='px-6 md:px-8 py-3 md:py-4 bg-[#0f0715] rounded-b-2xl border-t border-blue-900 text-center flex-shrink-0'>
                    <p className='text-xs md:text-sm text-gray-500'>
                        Response within 24 hours • Timezone: IST (UTC +5:30)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactFormModel
