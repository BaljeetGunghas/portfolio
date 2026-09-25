"use client";

import ErrorMessage from '@/Components/ErrorMessage/ErrorMessage';
import React, { useState, ChangeEvent } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    message: string;
}

interface ContactFormProps {
    isModal?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isModal = false }) => {
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
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validate = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.firstName) {
            newErrors.firstName = 'First name is required';
        } else if (formData.firstName.length < 3) {
            newErrors.firstName = 'First name must be at least 3 characters';
        } else if (!/^[A-Za-z\s]+$/.test(formData.firstName)) {
            newErrors.firstName = 'First name can only contain letters and spaces';
        }

        if (!formData.lastName) {
            newErrors.lastName = 'Last name is required';
        } else if (formData.lastName.length < 3) {
            newErrors.lastName = 'Last name must be at least 3 characters';
        } else if (!/^[A-Za-z\s]+$/.test(formData.lastName)) {
            newErrors.lastName = 'Last name can only contain letters and spaces';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Valid email is required';
        }

        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be exactly 10 digits';
        }

        if (!formData.role) {
            newErrors.role = 'Please select a role';
        }

        if (!formData.message) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === "phone") {
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

        if (!validate()) return;

        setLoading(true);

        const data = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            role: formData.role,
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
                setSubmitSuccess(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    role: '',
                    message: '',
                });
                setErrors({});

                setTimeout(() => {
                    setSubmitSuccess(false);
                }, 3000);
            }
        } catch (error) {
            alert(`Failed to send email: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    if (submitSuccess) {
        return (
            <div className='text-center py-16'>
                <div className='w-20 h-20 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <FaCheckCircle className='text-emerald-400 w-10 h-10' />
                </div>
                <h3 className='text-3xl font-bold text-white mb-3'>Message Sent!</h3>
                <p className='text-gray-300 mb-6 text-lg'>Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <div className='text-base text-gray-400 space-y-2'>
                    <p>📧 {formData.email}</p>
                    <p>📱 {formData.phone}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={isModal ? '' : 'bg-[#140c1c] rounded-lg p-8 md:p-10'}>
            {!isModal && (
                <>
                    <h2 className='text-bg text-4xl md:text-5xl font-bold mb-4'>Let&apos;s Work Together!</h2>
                    <p className='text-gray-300 mb-10 text-base md:text-lg leading-relaxed'>
                        I&apos;m always excited to collaborate on meaningful and impactful projects. Let&apos;s build something great together — drop me a message and I&apos;ll get back to you soon!
                    </p>
                </>
            )}

            <form className="w-full space-y-8" onSubmit={sendEmail}>
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className='text-base font-semibold text-gray-300 block mb-3'>First Name *</label>
                        <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            type="text"
                            className="w-full bg-black text-white text-base placeholder:text-gray-600 px-5 py-4 rounded-lg border-2 border-gray-700 hover:border-gray-600 focus:border-blue-600 focus:outline-none transition-colors"
                            required
                        />
                        <ErrorMessage message={errors.firstName} />
                    </div>
                    <div>
                        <label className='text-base font-semibold text-gray-300 block mb-3'>Last Name *</label>
                        <input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            type="text"
                            className="w-full bg-black text-white text-base placeholder:text-gray-600 px-5 py-4 rounded-lg border-2 border-gray-700 hover:border-gray-600 focus:border-blue-600 focus:outline-none transition-colors"
                            required
                        />
                        <ErrorMessage message={errors.lastName} />
                    </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className='text-base font-semibold text-gray-300 block mb-3'>Email Address *</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            type="email"
                            className="w-full bg-black text-white text-base placeholder:text-gray-600 px-5 py-4 rounded-lg border-2 border-gray-700 hover:border-gray-600 focus:border-blue-600 focus:outline-none transition-colors"
                            required
                        />
                        <ErrorMessage message={errors.email} />
                    </div>
                    <div>
                        <label className='text-base font-semibold text-gray-300 block mb-3'>Phone Number *</label>
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="10-digit number"
                            type="tel"
                            className="w-full bg-black text-white text-base placeholder:text-gray-600 px-5 py-4 rounded-lg border-2 border-gray-700 hover:border-gray-600 focus:border-blue-600 focus:outline-none transition-colors"
                            required
                        />
                        <ErrorMessage message={errors.phone} />
                    </div>
                </div>

                {/* Role */}
                <div>
                    <label className='text-base font-semibold text-gray-300 block mb-3'>What&apos;s Your Role? *</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full bg-black text-white text-base placeholder:text-gray-600 px-5 py-4 rounded-lg border-2 border-gray-700 hover:border-gray-600 focus:border-blue-600 focus:outline-none transition-colors cursor-pointer"
                        required
                    >
                        <option value="" disabled>
                            Select your role
                        </option>
                        <option value="hiring_manager">Hiring Manager</option>
                        <option value="recruiter">Recruiter</option>
                        <option value="founder">Founder / CTO</option>
                        <option value="engineering_lead">Engineering Lead</option>
                        <option value="other">Other</option>
                    </select>
                    <ErrorMessage message={errors.role} />
                </div>

                {/* Message */}
                <div>
                    <label className='text-base font-semibold text-gray-300 block mb-3'>Message *</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about the opportunity, company, or what's on your mind..."
                        rows={6}
                        required
                        minLength={10}
                        className="w-full bg-black text-white text-base placeholder:text-gray-600 px-5 py-4 rounded-lg border-2 border-gray-700 hover:border-gray-600 focus:border-blue-600 focus:outline-none transition-colors resize-none font-sans"
                    />
                    <ErrorMessage message={errors.message} />
                    <p className='text-sm text-gray-500 mt-2'>Minimum 10 characters</p>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold text-lg rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 mt-4"
                >
                    {loading ? (
                        <span className='flex items-center justify-center gap-3'>
                            <span className='w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin'></span>
                            <span>Sending...</span>
                        </span>
                    ) : (
                        'Send Message'
                    )}
                </button>

                {/* Info Text */}
                <p className='text-sm text-gray-500 text-center mt-6'>
                    ✓ I typically respond within 24 hours  |  📍 IST Timezone (UTC +5:30)
                </p>
            </form>
        </div>
    );
};

export default ContactForm;
