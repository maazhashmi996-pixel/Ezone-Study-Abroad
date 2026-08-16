"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "",
        level: "",
        country: "",
        mode: "",
        city: "",
        office: ""
    });

    const handleInputChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Apna WhatsApp number yahan dalein (format: 923xxxxxxxxx)
        const whatsappNumber = "923260804049";
        const message = `Hello, I need a consultation.
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Interest: ${formData.interest}
        Level: ${formData.level}
        Country: ${formData.country}
        Mode: ${formData.mode}
        City: ${formData.city}
        Office: ${formData.office}`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <section id="contact-form" className="py-16 px-6 bg-slate-50">
            <div className="max-w-4xl mx-auto">
                <div className="mb-10 text-center md:text-left">
                    <p className="text-[#7A2828] font-bold uppercase tracking-widest text-sm mb-2">Get Free Consultation</p>
                    <h2 className="text-4xl font-extrabold text-slate-900">Fill in for a call-back within 24 hours</h2>
                </div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input name="name" onChange={handleInputChange} required type="text" placeholder="Name*" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#7A2828] outline-none" />
                        <input name="phone" onChange={handleInputChange} required type="tel" placeholder="Phone Number*" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#7A2828] outline-none" />


                        <select name="level" onChange={handleInputChange} className="w-full p-4 rounded-xl border border-slate-200 text-slate-500 outline-none">
                            <option value="">Preferred Study Level*</option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="Masters">Postgraduate (Masters)</option>
                        </select>
                        <input name="country" onChange={handleInputChange} required type="tel" placeholder="Preferred Country*" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#7A2828] outline-none" />


                        <input name="city" onChange={handleInputChange} required type="tel" placeholder="City*" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#7A2828] outline-none" />


                    </div>

                    <button type="submit" className="w-full mt-8 p-5 bg-[#2563EB] text-white font-bold rounded-xl shadow-lg hover:bg-[#5a1e1e] transition-all">
                        SEND TO WHATSAPP
                    </button>
                </motion.form>
            </div>
        </section>
    );
}