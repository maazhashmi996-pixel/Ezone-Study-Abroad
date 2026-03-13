"use client";

import { motion } from "framer-motion";
import { Compass, BookOpenText, FileCheck, ArrowRight } from "lucide-react";

const supportSteps = [
    {
        icon: Compass,
        title: "Country & University Selection",
        desc: "Curating the perfect academic pathway aligned with your career aspirations and financial goals.",
        features: ["Strategic Academic Planning", "Global Ranking Insights", "850+ Partner Universities"],
    },
    {
        icon: BookOpenText,
        title: "Test Preparation",
        desc: "Achieve elite scores with our certified tutors, structured study materials, and rigorous mock exams.",
        features: ["Personalized Demo Sessions", "Goal-Oriented Tutorials", "Predictive Analytics"],
    },
    {
        icon: FileCheck,
        title: "Application & Admission",
        desc: "End-to-end management of your applications, ensuring flawless documentation and timely success.",
        features: ["Impactful SOPs & LORs", "Real-Time Portal Tracking", "Admission Guarantee Focus"],
    },
];

export default function SupportSection() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Soft decorative background element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-blue-600 font-bold tracking-widest uppercase text-sm"
                    >
                        Our Process
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-extrabold text-slate-900 mt-4 mb-6 tracking-tight"
                    >
                        How We Elevate Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            International Journey
                        </span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {supportSteps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative bg-white p-10 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
                        >
                            {/* Decorative gradient border on hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-[2rem] transition-all duration-500 pointer-events-none" />

                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-8 shadow-inner">
                                <step.icon className="w-8 h-8 text-blue-600" />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed font-light">{step.desc}</p>

                            <ul className="space-y-4 mb-10">
                                {step.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}