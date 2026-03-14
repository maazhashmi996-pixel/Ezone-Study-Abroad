"use client";

import { motion } from "framer-motion";
import { Briefcase, UserPlus, Globe2 } from "lucide-react";

const benefits = [
    {
        title: "Career Opportunities",
        desc: "Enhance your employability with international experience, making you a competitive candidate for global companies.",
        icon: Briefcase,
    },
    {
        title: "Personal Growth",
        desc: "Develop greater independence, resilience, and confidence as you navigate new challenges in a foreign country.",
        icon: UserPlus,
    },
    {
        title: "Cultural Enrichment",
        desc: "Immerse yourself in local culture, traditions, and lifestyle, enriching your experience and awareness.",
        icon: Globe2,
    },
];

export default function EnhancedBenefitsSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Image with Subtle Floating Animation */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="relative"
                >
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                        <img
                            src="/5.jpg"
                            alt="Students Studying"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>
                    {/* Decorative Accent */}
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#7A2828] rounded-full opacity-20 blur-2xl" />
                </motion.div>

                {/* Right: Interactive Cards */}
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-extrabold text-slate-900">Why Study Abroad?</h2>
                        <div className="w-20 h-1 bg-[#7A2828] rounded-full" />
                    </div>

                    <div className="space-y-4">
                        {benefits.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="group flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#7A2828]/20 transition-all shadow-sm hover:shadow-md"
                            >
                                <div className="p-4 bg-white rounded-2xl h-fit border border-slate-100 group-hover:bg-[#7A2828] transition-colors">
                                    <item.icon className="w-7 h-7 text-[#7A2828] group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-[#7A2828] text-white font-bold rounded-full shadow-lg hover:shadow-red-200 transition-all"
                    >
                        BOOK A CALL
                    </motion.button>
                </div>
            </div>
        </section>
    );
}