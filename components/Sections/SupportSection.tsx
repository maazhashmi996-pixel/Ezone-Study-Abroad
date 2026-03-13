"use client";

import { motion } from "framer-motion";
import { Compass, BookOpenText, FileCheck } from "lucide-react";

const supportSteps = [
    {
        icon: Compass,
        title: "Country & University Selection",
        desc: "We curate the perfect academic pathway aligned with your career aspirations and financial goals.",
        features: ["Expert Academic Strategy", "Global Ranking Insights", "850+ Partner Universities"],
    },
    {
        icon: BookOpenText,
        title: "Test Preparation",
        desc: "Achieve elite scores with our certified tutors, structured study materials, and rigorous mock exams.",
        features: ["Free Demo Sessions", "Goal-Oriented Tutorials", "Performance Analytics"],
    },
    {
        icon: FileCheck,
        title: "Application & Admission",
        desc: "End-to-end management of your applications, ensuring flawless documentation and timely follow-ups.",
        features: ["High-Impact SOPs & LORs", "Real-Time Tracking", "Guaranteed Success Focus"],
    },
];

export default function SupportSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        How We Support You
                    </h2>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto">
                        Your journey to global excellence, simplified. Expert guidance from day one to your final landing.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {supportSteps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                                <step.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">{step.desc}</p>

                            <ul className="space-y-4">
                                {step.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}