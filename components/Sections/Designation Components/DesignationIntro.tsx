"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe2, GraduationCap, Languages } from "lucide-react";

const features = [
    { title: "Global Perspective", icon: Globe2, desc: "Gain a broader understanding of the world by experiencing different cultures, traditions, and viewpoints." },
    { title: "High-Quality Education", icon: GraduationCap, desc: "Access world-class educational institutions known for their innovative teaching methods and research." },
    { title: "Language Skills", icon: Languages, desc: "Improve your language proficiency by immersing yourself in a new linguistic environment." }
];

export default function DestinationIntro() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Content Side */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            Helping You Choose A <br /> <span className="text-blue-600">Top Study Destination</span>
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Studying abroad provides numerous advantages that significantly benefit your personal and professional growth.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="flex gap-4 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all"
                            >
                                <div className="p-3 bg-blue-50 rounded-2xl h-fit">
                                    <feature.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-1">{feature.title}</h4>
                                    <p className="text-slate-500 text-sm">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Visual Side with Modern Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative rounded-[3rem] overflow-hidden shadow-2xl"
                >
                    <img
                        src="/3.jpg"
                        alt="Student"
                        className="w-full h-[600px] object-cover"
                    />
                    {/* Floating Overlay Card */}
                    <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-white/50">
                        <p className="text-slate-900 font-bold text-xl">"Choosing the right destination is the first step towards a successful global career."</p>
                        <div className="flex items-center gap-2 mt-4 text-blue-600 font-bold">
                            <CheckCircle2 className="w-5 h-5" /> <span>Expert Verified Advice</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}