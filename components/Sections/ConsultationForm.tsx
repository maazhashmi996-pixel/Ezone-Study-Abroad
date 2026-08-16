"use client";

import React, { useState } from "react";
import { Send, X } from "lucide-react";

interface ConsultationFormProps {
    isModal?: boolean;
    closeModal?: () => void;
}

interface FormDataState {
    name: string;
    email: string;
    phone: string;
    interest: string;
    studyLevel: string;
    country: string;
    city: string;
}

export default function ConsultationForm({
    isModal = false,
    closeModal,
}: ConsultationFormProps) {
    const [formData, setFormData] = useState<FormDataState>({
        name: "",
        email: "",
        phone: "",
        interest: "",
        studyLevel: "",
        country: "",
        city: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // WhatsApp API Logic
        const message = `Hello, I am ${formData.name}. 
Email: ${formData.email}
Interest: ${formData.interest}
Study Level: ${formData.studyLevel}
Preferred Country: ${formData.country}
City: ${formData.city}
Please contact me at ${formData.phone}.`;

        const whatsappUrl = `https://wa.me/923260804049?text=${encodeURIComponent(
            message
        )}`;
        window.open(whatsappUrl, "_blank");

        if (closeModal) {
            closeModal();
        }
    };

    return (
        <div
            className={`bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col lg:flex-row border border-slate-100 ${isModal ? "max-h-[85vh] overflow-y-auto relative" : ""
                }`}
        >
            {/* Close button for Modal View */}
            {isModal && closeModal && (
                <button
                    onClick={closeModal}
                    type="button"
                    aria-label="Close form"
                    className="absolute top-5 right-5 z-50 rounded-full bg-slate-100/80 backdrop-blur-md p-2.5 text-slate-600 hover:bg-slate-200 hover:text-black transition-all shadow-sm"
                >
                    <X className="h-5 w-5" />
                </button>
            )}

            {/* Image Side - Visual Storytelling */}
            <div className="lg:w-1/2 relative bg-slate-900 hidden lg:flex items-end p-12 min-h-[500px]">
                <img
                    src="2.jpg"
                    className="absolute inset-0 h-full w-full object-cover opacity-60"
                    alt="Consultation"
                />
                <div className="relative z-10">
                    <h3 className="text-white text-4xl font-bold leading-tight">
                        Your Success <br />
                        Starts Here
                    </h3>
                    <p className="text-slate-200 mt-4 max-w-sm leading-relaxed text-sm">
                        Connect with our top consultants and start your journey towards global
                        excellence today.
                    </p>
                </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        Request Consultation
                    </h2>
                    <p className="text-slate-500 mt-1 text-sm">
                        Fill in your details, our experts will contact you shortly.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Full Name - Single Row */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Full Name*"
                            required
                            className="w-full px-4 py-3 bg-slate-50/80 rounded-xl border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all text-sm text-slate-800 placeholder:text-slate-400 font-medium"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Row 1: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            placeholder="Phone Number*"
                            required
                            className="w-full px-4 py-3 bg-slate-50/80 rounded-xl border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all text-sm text-slate-800 placeholder:text-slate-400 font-medium"
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="studyLevel"
                            value={formData.studyLevel}
                            placeholder="Preferred Study Level*"
                            required
                            className="w-full px-4 py-3 bg-slate-50/80 rounded-xl border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all text-sm text-slate-800 placeholder:text-slate-400 font-medium"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Row 2: Area of Interest & Preferred Study Level */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                    </div>

                    {/* Row 3: Preferred Country & Select City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            placeholder="Preferred Country*"
                            required
                            className="w-full px-4 py-3 bg-slate-50/80 rounded-xl border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all text-sm text-slate-800 placeholder:text-slate-400 font-medium"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            placeholder="Select City*"
                            required
                            className="w-full px-4 py-3 bg-slate-50/80 rounded-xl border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all text-sm text-slate-800 placeholder:text-slate-400 font-medium"
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 flex items-center justify-center gap-2.5 bg-blue-600 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-all transform active:scale-[0.99] shadow-md shadow-blue-600/25 cursor-pointer"
                    >
                        <Send className="w-4 h-4" />
                        Get Free Consultation
                    </button>
                </form>
            </div>
        </div>
    );
}