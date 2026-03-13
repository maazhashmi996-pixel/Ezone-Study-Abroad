"use client";

import { motion } from "framer-motion";
import {
    Globe,
    Languages,
    Home,
    BookOpenCheck,
    ArrowRight
} from "lucide-react";

const services = [
    {
        title: "Study Abroad",
        desc: "Complete end-to-end study abroad solutions, assisting students in achieving their global academic dreams.",
        icon: Globe
    },
    {
        title: "GED™ Certification",
        desc: "Fast-track your educational credentials with our expert GED test preparation and personalized guidance.",
        icon: BookOpenCheck
    },
    {
        title: "Language Courses",
        desc: "Master new languages with our comprehensive courses, designed to help you excel in international environments.",
        icon: Languages
    },
    {
        title: "Accommodation",
        desc: "We help you discover safe and comfortable housing options tailored to your specific lifestyle demands.",
        icon: Home
    }
];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Services</h2>
                    <p className="text-lg text-slate-500">Tailored solutions for your academic and professional success.</p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="group p-8 bg-white rounded-3xl shadow-lg border border-slate-100 hover:border-blue-200 transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition"
                                >
                                    Explore <ArrowRight className="w-4 h-4" />
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}