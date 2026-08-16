"use client";

import React from "react";
import { CheckCircle2, Award, Users, Calendar, Shield, HelpCircle } from "lucide-react";

const methodology = [
    "Experienced GED-certified instructors",
    "Interactive classroom & online learning support",
    "Comprehensive study materials & practice packs",
    "Weekly quizzes & monthly mock examinations",
    "One-to-one academic counseling",
    "Individual performance progress reports",
    "Proven exam preparation strategies",
    "Complete university admission guidance"
];

const whyUsHighlights = [
    { title: "Experienced Faculty", desc: "Top-tier educators with years of GED test preparation expertise." },
    { title: "Small Class Sizes", desc: "Ensures personal attention and focused instruction for each student." },
    { title: "Flexible Timings", desc: "Morning and evening batches suitable for both students and working adults." },
    { title: "High Satisfaction", desc: "Consistently high success rates for university placements globally." }
];

export default function TeachingMethodAndWhyUs() {
    return (
        <section className="w-full py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Box: Our Teaching Method */}
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200/80 shadow-sm flex flex-col justify-between">
                        <div>
                            <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest block mb-2">
                                Pedagogical Approach
                            </span>
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                                Our Teaching Method
                            </h2>
                            <p className="text-slate-500 text-sm mb-8">
                                At Education Zone, our preparation program is designed to build confidence and guarantee maximum score yield.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {methodology.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                                        <span className="text-xs font-bold text-slate-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Box: Why Choose Education Zone */}
                    <div className="bg-blue-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <span className="text-blue-400 font-extrabold text-xs uppercase tracking-widest block mb-2">
                                The Education Zone Advantage
                            </span>
                            <h2 className="text-3xl font-extrabold mb-4 tracking-tight">
                                Why Students Choose Us
                            </h2>
                            <p className="text-slate-300 text-sm mb-8">
                                We go beyond test preparation—providing end-to-end guidance for higher education and career success.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {whyUsHighlights.map((item, idx) => (
                                    <div key={idx} className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                                        <h4 className="text-sm font-extrabold text-white mb-1">{item.title}</h4>
                                        <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 relative z-10">
                            <span>Affordable Tuition Fees</span>
                            <span>Career & Overseas Counseling</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}