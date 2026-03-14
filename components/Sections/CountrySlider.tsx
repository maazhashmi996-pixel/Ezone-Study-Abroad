"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";

const countries = [
    { name: "UAE", desc: "Global hub for business and innovation.", topUni: "Khalifa University", image: "/uae.jpg" },
    { name: "UK", desc: "Home to world-class academic legacy.", topUni: "Oxford, Cambridge", image: "/uk.jpg" },
    { name: "USA", desc: "Infinite opportunities for research.", topUni: "MIT, Harvard", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800" },
    { name: "Canada", desc: "Best quality of life for students.", topUni: "UofT, McGill", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=800" },
    { name: "Australia", desc: "Exceptional lifestyle and education.", topUni: "UniMelb, ANU", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800" },
    { name: "Germany", desc: "Hub of engineering and technology.", topUni: "TU Munich, RWTH", image: "/germany.jpg" },
];

export default function CountrySlider() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight">Study Abroad</h2>
                <p className="text-slate-500 mt-4 text-lg">Your global academic gateway awaits.</p>
            </div>

            {/* Slider Container - No Masking, No Blur */}
            <div className="flex w-full overflow-hidden">
                <motion.div
                    className="flex gap-8 px-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                >
                    {[...countries, ...countries].map((c, idx) => (
                        <div key={idx} className="relative w-[320px] h-[450px] shrink-0 rounded-3xl overflow-hidden group cursor-pointer shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]">
                            {/* Sharp Base Image */}
                            <img src={c.image} alt={c.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                            {/* Overlay Info - Clean & High Contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end transition-all duration-500">
                                <h3 className="text-white text-3xl font-bold">{c.name}</h3>

                                {/* Info appearing on hover */}
                                <div className="mt-4 space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-gray-200 text-sm">{c.desc}</p>
                                    <div className="flex items-center gap-2 text-white text-xs font-bold">
                                        <GraduationCap className="w-4 h-4 text-blue-400" /> {c.topUni}
                                    </div>
                                    <div className="flex items-center gap-2 text-blue-400 font-bold pt-2">
                                        Apply Now <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* See All Button */}
            <div className="mt-20 text-center">
                <Link href="/destinations">
                    <button className="inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg">
                        See All Countries <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>
            </div>
        </section>
    );
}