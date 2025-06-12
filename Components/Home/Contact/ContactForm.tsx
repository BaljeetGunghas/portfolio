"use client";

import ErrorMessage from '@/Components/ErrorMessage/ErrorMessage';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { MdOutlineError } from 'react-icons/md';
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

        // First Name: required, min length 3, no numbers or special chars
        if (!formData.firstName) {
            newErrors.firstName = 'First name is required';
        } else if (formData.firstName.length < 3) {
            newErrors.firstName = 'First name must be at least 3 characters';
        } else if (!/^[A-Za-z\s]+$/.test(formData.firstName)) {
            newErrors.firstName = 'First name can only contain letters and spaces';
        }

        // Last Name: required, min length 3, no numbers or special chars
        if (!formData.lastName) {
            newErrors.lastName = 'Last name is required';
        } else if (formData.lastName.length < 3) {
            newErrors.lastName = 'Last name must be at least 3 characters';
        } else if (!/^[A-Za-z\s]+$/.test(formData.lastName)) {
            newErrors.lastName = 'Last name can only contain letters and spaces';
        }

        // Email: required and valid email format
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Valid email is required';
        }

        // Phone: required, exactly 10 digits, only numbers allowed
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be exactly 10 digits';
        }

        // Role: required
        if (!formData.role) {
            newErrors.role = 'Please select a role';
        }

        // Message: required, min length 10, no special chars allowed (optional)
        if (!formData.message) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        // Optional: check message doesn't have disallowed characters
        // else if (!/^[A-Za-z0-9.,'"\s!?-]+$/.test(formData.message)) {
        //   newErrors.message = 'Message contains invalid characters';
        // }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === "phone") {
            // Allow only digits, remove non-digit characters
            const onlyNums = value.replace(/\D/g, "");
            setFormData((prev) => ({
                ...prev,
                [name]: onlyNums,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validate()) return; // if validation fails, stop submit

        setLoading(true);

        const data = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,      // if you want to send phone as well
            role: formData.role,        // if you want to send role as well
            message: formData.message,
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                alert(`Failed: ${result.message || 'Unknown error'}`);
            } else {
                alert('Email sent successfully!');
                // optionally reset form here
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    role: '',
                    message: '',
                });
                setErrors({});
            }
        } catch (error) {
            alert(`Failed to send email: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className='bg-[#140c1c] rounded-lg p-4 sm:p-4'>
            <h2 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>Let's Work Together!</h2>
            <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>
                I'm always excited to collaborate on meaningful and impactful projects. Let's build something great together — drop me a message and I'll get back to you soon!
            </p>

            <form className="mt-8 block w-full overflow-hidden" onSubmit={sendEmail}>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="w-full">
                        <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            type="text"
                            className="flex bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 w-full outline-none"
                            required
                        />
                        <ErrorMessage message={errors.firstName} />
                    </div>
                    <div className="w-full">
                        <input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            type="text"
                            className="flex bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 w-full outline-none"
                            required
                        />
                        <ErrorMessage message={errors.lastName} />
                    </div>
                </div>

                <div className="flex flex-col mt-5 md:flex-row items-center justify-between gap-4">
                    <div className="w-full">
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            type="email"
                            className="flex bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 w-full outline-none"
                            required
                        />
                        <ErrorMessage message={errors.email} />
                    </div>
                    <div className="w-full">
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone number"
                            type="tel"
                            className="flex bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 w-full outline-none"
                            required
                        />

                        <ErrorMessage message={errors.phone} />
                    </div>
                </div>

                <div className="w-full mt-5">
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
                        required
                    >
                        <option value="" disabled>
                            Select an option
                        </option>
                        <option value="frontend">Frontend Developer</option>
                        <option value="backend">Backend Developer</option>
                        <option value="full_stack">Full Stack Developer</option>
                        <option value="other">Other</option>
                    </select>
                    <ErrorMessage message={errors.role} />

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows={7}
                        required
                        minLength={10}
                        className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
                    />
                    <ErrorMessage message={errors.message} />
                </div>

                <div className="mt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-3.5 bg-[#7947df] cursor-pointer text-white hover:bg-[#5c2fb7] transition-all duration-200 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </form>

        </div>
    );
};

export default ContactForm;
