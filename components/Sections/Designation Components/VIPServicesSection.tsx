"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, ShieldCheck, Headphones } from "lucide-react";

const services = [
    { title: "Program Counseling", desc: "Expert guidance in selecting the ideal program and university tailored to your academic background and career goals.", icon: BookOpen },
    { title: "Application Process", desc: "End-to-end support for your application journey, including meticulous document preparation and submission.", icon: FileText },
    { title: "Visa Guidance", desc: "Comprehensive, step-by-step assistance in obtaining your student visa with a high success rate.", icon: ShieldCheck },
    { title: "24/7 Consultation", desc: "Continuous, round-the-clock support to address all your queries and resolve any issues promptly.", icon: Headphones },
];

export default function VIPServicesSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Content Side with Grid */}
                <div className="space-y-10">
                    <div className="space-y-4">
                        <h3 className="text-[#7A2828] font-bold uppercase tracking-widest">Our Services</h3>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            What We Provide for <br /> <span className="text-[#7A2828]">Study Abroad</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#7A2828]/20 transition-all"
                            >
                                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-4">
                                    <service.icon className="w-6 h-6 text-[#7A2828]" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative"
                >
                    <img
                        src="/6.jpg"
                        alt="Consultation"
                        className="w-full h-[600px] object-cover rounded-[3rem] shadow-2xl"
                    />
                    <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-[#7A2828]">
                        <p className="text-[#7A2828] font-black text-4xl">21+</p>
                        <p className="text-slate-900 font-bold">Years of Trust & Excellence</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}