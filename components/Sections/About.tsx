"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutUs() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Asymmetric Image Gallery */}
                <div className="relative h-[600px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="absolute top-0 left-0 w-[60%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl"
                    >
                        <img src="1.jpg" className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
                    >
                        <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Floating Badge */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-[45%] bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-10"
                    >
                        <div className="text-blue-600 font-bold text-3xl">20+</div>
                        <div className="text-slate-600 text-sm font-medium">Years of Excellence</div>
                    </motion.div>
                </div>

                {/* Right Side: Content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Identity</h3>
                        <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight">Strategic Partners for Your Future.</h2>
                        <p className="text-lg text-slate-500 leading-relaxed">
                            Embark on a transformative educational journey. We combine global insights with local expertise to turn your academic aspirations into tangible career milestones.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            "Hassle-free Admissions",
                            "Luxury Accommodations",
                            "Visa Success Experts",
                            "Exclusive Partner Benefits"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4">
                        <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
                            Explore Services <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="px-8 py-4 rounded-xl border border-slate-200 font-semibold text-slate-900 hover:bg-slate-50 transition-all">
                            Talk to Expert
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}