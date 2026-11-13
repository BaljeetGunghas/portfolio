"use client";

import ErrorMessage from '@/Components/ErrorMessage/ErrorMessage';
import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import { FaCheckCircle, FaChevronDown } from 'react-icons/fa';

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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const roleOptions = [
        { value: 'hiring_manager', label: 'Hiring Manager' },
        { value: 'recruiter', label: 'Recruiter' },
        { value: 'founder', label: 'Founder / CTO' },
        { value: 'engineering_lead', label: 'Engineering Lead' },
        { value: 'other', label: 'Other' },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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
                <div className='w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <FaCheckCircle className='text-emerald-400 w-10 h-10' />
                </div>
                <h3 className='text-3xl font-bold text-white mb-3'>Message Sent!</h3>
                <p className='text-slate-300 mb-6 text-lg font-light'>Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <div className='text-base text-slate-400 space-y-2'>
                    <p>📧 {formData.email}</p>
                    <p>📱 {formData.phone}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={isModal ? '' : ''}>
            {!isModal && (
                <>
                    <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Let&apos;s Work Together!</h2>
                    <p className='text-slate-300 mb-10 text-sm md:text-base leading-relaxed font-light'>
                        I&apos;m always excited to collaborate on meaningful and impactful projects. Let&apos;s build something great together — drop me a message and I&apos;ll get back to you soon!
                    </p>
                </>
            )}

            <form className="w-full space-y-6 md:space-y-8" onSubmit={sendEmail}>
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className='text-sm md:text-base font-semibold text-slate-300 block mb-3'>First Name *</label>
                        <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            type="text"
                            className={`w-full bg-slate-950 text-white text-sm md:text-base placeholder:text-slate-600 px-4 md:px-5 py-3 md:py-4 rounded-lg border transition-colors ${
                                errors.firstName
                                  ? 'border-red-500 focus:border-red-500 focus:outline-none'
                                  : 'border-slate-800 hover:border-slate-700 focus:border-slate-600 focus:outline-none'
                            }`}
                            required
                        />
                        <ErrorMessage message={errors.firstName} />
                    </div>
                    <div>
                        <label className='text-sm md:text-base font-semibold text-slate-300 block mb-3'>Last Name *</label>
                        <input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            type="text"
                            className={`w-full bg-slate-950 text-white text-sm md:text-base placeholder:text-slate-600 px-4 md:px-5 py-3 md:py-4 rounded-lg border transition-colors ${
                                errors.lastName
                                  ? 'border-red-500 focus:border-red-500 focus:outline-none'
                                  : 'border-slate-800 hover:border-slate-700 focus:border-slate-600 focus:outline-none'
                            }`}
                            required
                        />
                        <ErrorMessage message={errors.lastName} />
                    </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className='text-sm md:text-base font-semibold text-slate-300 block mb-3'>Email Address *</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            type="email"
                            className={`w-full bg-slate-950 text-white text-sm md:text-base placeholder:text-slate-600 px-4 md:px-5 py-3 md:py-4 rounded-lg border transition-colors ${
                                errors.email
                                  ? 'border-red-500 focus:border-red-500 focus:outline-none'
                                  : 'border-slate-800 hover:border-slate-700 focus:border-slate-600 focus:outline-none'
                            }`}
                            required
                        />
                        <ErrorMessage message={errors.email} />
                    </div>
                    <div>
                        <label className='text-sm md:text-base font-semibold text-slate-300 block mb-3'>Phone Number *</label>
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="10-digit number"
                            type="tel"
                            maxLength={10}
                            className={`w-full bg-slate-950 text-white text-sm md:text-base placeholder:text-slate-600 px-4 md:px-5 py-3 md:py-4 rounded-lg border transition-colors ${
                                errors.phone
                                  ? 'border-red-500 focus:border-red-500 focus:outline-none'
                                  : 'border-slate-800 hover:border-slate-700 focus:border-slate-600 focus:outline-none'
                            }`}
                            required
                        />
                        <div className='flex justify-between items-start'>
                            <ErrorMessage message={errors.phone} />
                            <p className='text-xs md:text-sm text-slate-500'>
                                {formData.phone.length}/10
                            </p>
                        </div>
                    </div>
                </div>

                {/* Custom Role Dropdown */}
                <div ref={dropdownRef} className='relative'>
                    <label className='text-sm md:text-base font-semibold text-slate-300 block mb-3'>What&apos;s Your Role? *</label>

                    {/* Dropdown Button */}
                    <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full bg-slate-950 text-white text-sm md:text-base px-4 md:px-5 py-3 md:py-4 rounded-lg border transition-all flex items-center justify-between ${
                            errors.role
                              ? 'border-red-500'
                              : isDropdownOpen
                              ? 'border-slate-600'
                              : 'border-slate-800 hover:border-slate-700'
                        }`}
                    >
                        <span className={formData.role ? 'text-white' : 'text-slate-600'}>
                            {formData.role
                                ? roleOptions.find(opt => opt.value === formData.role)?.label
                                : 'Select your role'
                            }
                        </span>
                        <FaChevronDown
                            className={`w-4 h-4 text-slate-500 transition-transform ${
                                isDropdownOpen ? 'rotate-180' : ''
                            }`}
                        />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className='absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-lg shadow-lg z-50 overflow-hidden'>
                            {roleOptions.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => {
                                        setFormData(prev => ({ ...prev, role: option.value }));
                                        setIsDropdownOpen(false);
                                        setErrors(prev => ({ ...prev, role: undefined }));
                                    }}
                                    className={`w-full text-left px-4 md:px-5 py-3 md:py-4 text-sm md:text-base transition-colors flex items-center gap-3 ${
                                        formData.role === option.value
                                            ? 'bg-slate-800 text-white border-l-2 border-emerald-500'
                                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                    }`}
                                >
                                    {formData.role === option.value && (
                                        <div className='w-2 h-2 bg-emerald-500 rounded-full'></div>
                                    )}
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}

                    <ErrorMessage message={errors.role} />
                </div>

                {/* Message */}
                <div>
                    <label className='text-sm md:text-base font-semibold text-slate-300 block mb-3'>Message *</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about the opportunity, company, or what's on your mind..."
                        rows={6}
                        required
                        minLength={10}
                        className={`w-full bg-slate-950 text-white text-sm md:text-base placeholder:text-slate-600 px-4 md:px-5 py-3 md:py-4 rounded-lg border transition-colors resize-none font-sans ${
                            errors.message
                              ? 'border-red-500 focus:border-red-500 focus:outline-none'
                              : 'border-slate-800 hover:border-slate-700 focus:border-slate-600 focus:outline-none'
                        }`}
                    />
                    <div className='flex justify-between items-start'>
                        <ErrorMessage message={errors.message} />
                        <p className='text-xs md:text-sm text-slate-500'>
                            {formData.message.length}/10 min
                        </p>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 md:px-8 py-3 md:py-4 bg-white hover:bg-slate-100 disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-950 font-bold text-sm md:text-base rounded-lg transition-all duration-200 mt-4"
                >
                    {loading ? (
                        <span className='flex items-center justify-center gap-3'>
                            <span className='w-5 h-5 border-3 border-slate-950 border-t-transparent rounded-full animate-spin'></span>
                            <span>Sending...</span>
                        </span>
                    ) : (
                        'Send Message'
                    )}
                </button>

                {/* Info Text */}
                <p className='text-xs md:text-sm text-slate-500 text-center mt-6'>
                    ✓ I typically respond within 24 hours  |  📍 IST Timezone (UTC +5:30)
                </p>
            </form>
        </div>
    );
};

export default ContactForm;
