"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, BookOpen, MapPin, Globe } from "lucide-react";

export default function ConsultationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "",
        studyLevel: "",
        country: "",
        city: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // WhatsApp API Logic
        const message = `Hello, I am ${formData.name}. 
        I am interested in ${formData.interest} at ${formData.studyLevel} level. 
        Preferred Country: ${formData.country}, City: ${formData.city}. 
        Please contact me at ${formData.phone}.`;

        const whatsappUrl = `https://wa.me/923000000000?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row border border-slate-100">

                    {/* Image Side - Visual Storytelling */}
                    <div className="lg:w-1/2 relative bg-slate-900 hidden lg:flex items-end p-12">
                        <img
                            src="2.jpg"
                            className="absolute inset-0 h-full w-full object-cover opacity-60"
                            alt="Consultation"
                        />
                        <div className="relative z-10">
                            <h3 className="text-white text-4xl font-bold leading-tight">Your Success <br />Starts Here</h3>
                            <p className="text-slate-200 mt-4 max-w-sm">Connect with our top consultants and start your journey towards global excellence today.</p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-1/2 p-10 lg:p-16">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-slate-900">Request Consultation</h2>
                            <p className="text-slate-500 mt-2">Fill in your details, our experts will contact you shortly.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 gap-4">
                                <input type="text" placeholder="Full Name*" required className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

                                <div className="grid md:grid-cols-2 gap-4">
                                    <input type="email" placeholder="Email Address*" required className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                    <input type="tel" placeholder="Phone Number*" required className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Field of Interest*" required className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition" onChange={(e) => setFormData({ ...formData, interest: e.target.value })} />
                                    <input type="text" placeholder="Preferred Study Level*" required className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition" onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value })} />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Preferred Country*" required className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition" onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
                                    <input type="text" placeholder="Select City*" required className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition" onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                                </div>
                            </div>

                            <button type="submit" className="w-full mt-4 flex items-center justify-center gap-3 bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-blue-600/20">
                                <Send className="w-5 h-5" />
                                Get Free Consultation
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}