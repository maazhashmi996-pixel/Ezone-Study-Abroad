"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Globe, GraduationCap, Laptop, CircleDollarSign, Brain } from "lucide-react";

const benefits = [
    {
        icon: Clock,
        title: "Save Valuable Time",
        desc: "Complete your high school equivalency much faster than traditional 2-year educational pathways."
    },
    {
        icon: Globe,
        title: "International Recognition",
        desc: "Accepted by colleges, universities, and top employers across North America, Europe, and worldwide."
    },
    {
        icon: GraduationCap,
        title: "Direct University Pathway",
        desc: "Unlocks eligibility for higher education admission according to university policies globally."
    },
    {
        icon: Laptop,
        title: "Flexible Learning Options",
        desc: "Prepare on your own schedule through classroom, online live classes, or blended learning."
    },
    {
        icon: CircleDollarSign,
        title: "Affordable & Cost-Effective",
        desc: "A highly economical solution compared to lengthy 2-year A-Levels or Intermediate programs."
    },
    {
        icon: Brain,
        title: "Skill-Based Assessment",
        desc: "Focuses on real-world practical knowledge, analytical thinking, and reasoning rather than rote memory."
    }
];

export default function GedOverview() {
    return (
        <section className="w-full py-20 bg-white border-y border-slate-200/60">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header: What is GED */}
                <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white mb-20 shadow-xl relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="max-w-3xl relative z-10">
                        <span className="text-blue-400 font-extrabold text-xs tracking-widest uppercase mb-3 block">
                            Understanding The Program
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
                            What is the GED?
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
                            The General Educational Development (GED) test measures knowledge and skills typically acquired during high school. Instead of spending two years in Intermediate or A-Levels, eligible students can prove equivalent academic abilities by passing the 4 GED subject modules.
                        </p>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                            The GED prioritizes <strong className="text-blue-400 font-semibold">critical thinking, problem-solving, reading comprehension, and scientific analysis</strong> over memorization. Passers receive an official credential accepted globally.
                        </p>
                    </div>
                </div>

                {/* Grid: Why Choose GED */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Why Choose <span className="text-blue-600">GED?</span>
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-base">
                        Discover why thousands of students globally opt for GED as their preferred high school equivalency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}