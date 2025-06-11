"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
// import emailjs from 'emailjs-com';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        role: '',
        message: '',
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [loading, setLoading] = useState(false);

    const validate = (): boolean => {
        const newErrors: Partial<FormData> = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Valid phone is required';
        if (!formData.role) newErrors.role = 'Please select a role';
        if (!formData.message || formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            message: formData.message,
        };

        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
            alert(`Failed: ${result.message}`);
        } else {
            alert('Email sent successfully!');
        }
    };


    return (
        <div className='bg-[#140c1c] rounded-lg p-4 sm:p-4'>
            <h2 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>Let's Work Together!</h2>
            <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>
                I'm always excited to collaborate on meaningful and impactful projects. Let's build something great together — drop me a message and I'll get back to you soon!
            </p>

            <form className='mt-8 block w-full overflow-hidden' onSubmit={sendEmail}>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                    <input
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder='First Name'
                        type='text'
                        className='flex bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 w-full outline-none'
                        required
                    />
                    <input
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder='Last Name'
                        type='text'
                        className='flex bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 w-full outline-none'
                        required
                    />
                </div>

                <div className='flex flex-col mt-5 md:flex-row items-center justify-between gap-4'>
                    <input
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email address'
                        type='email'
                        className='flex bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 w-full outline-none'
                        required
                    />
                    <input
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder='Phone number'
                        type='tel'
                        className='flex bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 w-full outline-none'
                        required
                    />
                </div>

                <div>
                    <select
                        name='role'
                        value={formData.role}
                        onChange={handleChange}
                        className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'
                        required
                    >
                        <option value={''} disabled>Select an option</option>
                        <option value='frontend'>Frontend Developer</option>
                        <option value='backend'>Backend Developer</option>
                        <option value='full_stack'>Full Stack Developer</option>
                    </select>

                    <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Message'
                        rows={7}
                        required
                        minLength={10}
                        className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'
                    />

                    <div className='mt-4'>
                        <button
                            type='submit'
                            disabled={loading}
                            className='px-8 py-3.5 bg-[#7947df] cursor-pointer text-white hover:bg-[#5c2fb7] transition-all duration-200 rounded-full'
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
