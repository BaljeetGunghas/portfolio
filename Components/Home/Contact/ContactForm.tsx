import React from 'react'

const ContactForm = () => {
    return (
        <div className=' bg-[#140c1c] rounded-lg p-4 sm:p-4 '>
            <h2 className=' text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold '>Lets Work Together!</h2>
            <p className=' text-gray-200 mt-3 lg:text-base text-xs md:text-sm '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam sit error quas magnam accusamus impedit dolore tempore quibusdam ea modi.</p>

            <form className='mt-8 block w-full overflow-hidden'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                    <input placeholder='First Name' type='text' className='flex bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 w-full outline-none ' required />

                    <input placeholder='Last Name' type='text' className='flex bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 w-full outline-none ' required />
                </div>

                <div className='flex flex-col mt-5 md:flex-row items-center justify-between gap-4'>
                    <input placeholder='Email address' type='email' className='flex bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 w-full outline-none ' required />

                    <input placeholder='Phone number' type='tel' className='flex bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 w-full outline-none ' required />
                </div>


                <div>
                    <select className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none '>
                        <option value={''} disabled selected >
                            Select an option
                        </option>

                        <option value={'frontend'}>Frontend Developer</option>
                        <option value={'backend'}>Backend Developer</option>
                        <option value={'full_stack'}>Full Stack Developer</option>
                    </select>

                    <textarea placeholder='Message' rows={7} required minLength={10} className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none '></textarea>

                    <div className='mt-4'>
                        <button className='px-8 py-3.5 bg-[#7947df] cursor-pointer text-white hover:bg-[#5c2fb7] transition-all duration-200 rounded-full '>Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
