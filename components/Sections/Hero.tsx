"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, GraduationCap, MapPin, Sparkles } from "lucide-react";

const images = [
    "https://images.unsplash.com/photo-1523050353050-0b0d5be00d3d?q=80&w=2000",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000",
    "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2000",
];

const HeroSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 6000); // Thoda slow krdia taake premium feel aye
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Image Slider with Parallax effect */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                >
                    <img src={images[index]} alt="Study Abroad" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
                </motion.div>
            </AnimatePresence>

            {/* Content Layer */}
            <div className="relative z-10 flex h-full items-center px-6 lg:px-24">
                <div className="max-w-3xl space-y-8">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 backdrop-blur-md"
                    >
                        <Sparkles className="h-4 w-4" />
                        <span>Elite Admissions Consultancy</span>
                    </motion.div>

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl font-bold tracking-tighter text-white md:text-8xl"
                        >
                            Global Future, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                                Curated for You.
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-gray-400 max-w-lg"
                        >
                            Premium guidance for elite universities in the UK, USA, Canada, and Australia. Your dream, our strategy.
                        </motion.p>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-4"
                    >
                        <button className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-black transition-transform hover:scale-105 active:scale-95">
                            Apply Now
                            <ArrowRight className="h-5 w-5" />
                        </button>
                        <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md hover:bg-white/10">
                            Book Consultation
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Floating Stats Card (The VIP Touch) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute bottom-12 right-12 z-20 hidden lg:block"
            >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                    <h3 className="text-4xl font-black text-white">99.9%</h3>
                    <p className="text-sm text-gray-400 uppercase tracking-widest mt-1">Visa Success Rate</p>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;