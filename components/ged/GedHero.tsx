"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, ArrowRight, BookOpen, Clock, Globe2 } from "lucide-react";

interface GedHeroProps {
    onOpenModal?: () => void;
}

export default function GedHero({ onOpenModal }: GedHeroProps) {
    return (
        <section className="relative w-full py-20 lg:py-28 bg-slate-50 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column - Headline & Information */}
                    <div className="lg:col-span-7 flex flex-col items-start">
                        {/* IBCC Approval Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-semibold text-xs md:text-sm mb-6 shadow-sm"
                        >
                            <ShieldCheck className="w-4 h-4 text-blue-600" />
                            <span>IBCC Approved Qualification</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6"
                        >
                            Earn an Internationally Recognized High School Qualification with <span className="text-blue-600">Education Zone</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
                        >
                            Looking for a faster, smarter alternative to Intermediate or A-Levels? The General Educational Development (GED) program helps students fast-track their education and unlock global university admissions.
                        </motion.p>

                        {/* Feature Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full mb-8"
                        >
                            <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                                <span className="text-xs font-bold text-slate-800">Save 2 Years</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                                <Globe2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <span className="text-xs font-bold text-slate-800">Global Acceptance</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                                <BookOpen className="w-5 h-5 text-blue-600 shrink-0" />
                                <span className="text-xs font-bold text-slate-800">Skill-Based Test</span>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-2xl shadow-xl shadow-blue-600/25 transition-all transform active:scale-95 cursor-pointer"
                            >
                                Enroll Now & Get Started
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <a
                                href="#test-structure"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-base rounded-2xl shadow-sm transition-all"
                            >
                                View 4 GED Subjects
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column - Visual Showcase */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-200 shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                                alt="GED Student Success"
                                className="w-full h-[480px] object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                            {/* Overlay Card */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900">Education Zone Prep</h4>
                                        <p className="text-xs text-slate-500">Fast-Track High School Diploma</p>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                    "Our structured study plans and certified teachers ensure 100% preparation confidence."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}