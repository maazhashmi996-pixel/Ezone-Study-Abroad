"use client";

import { motion } from "framer-motion";
import { Zap, Headset } from "lucide-react";

export default function InnovationSection() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Soft Background Accent */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Content Side */}
                <div className="space-y-10">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            Be at the Forefront of the <span className="text-blue-600">New Innovation</span>
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 rounded-full" />
                    </div>

                    <div className="space-y-8">
                        {/* Feature 1 */}
                        <div className="flex gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                                <Zap className="text-blue-600 w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Best Education Consulting</h4>
                                <p className="text-slate-500 leading-relaxed">
                                    We leverage data-driven strategies to ensure your academic journey aligns with global market demands.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                                <Headset className="text-blue-600 w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">24/7 Customer Support</h4>
                                <p className="text-slate-500 leading-relaxed">
                                    Our dedicated global team is always available to resolve your queries around the clock.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="relative"
                >
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000"
                            alt="Innovation"
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-600/10" />
                    </div>

                    {/* Floating Badge (White Theme style) */}
                    <div className="absolute -bottom-10 -left-10 p-8 bg-slate-900 rounded-3xl shadow-xl text-white hidden md:block">
                        <p className="text-4xl font-black">20+</p>
                        <p className="text-sm font-semibold opacity-90">Years of Trusted Excellence</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}