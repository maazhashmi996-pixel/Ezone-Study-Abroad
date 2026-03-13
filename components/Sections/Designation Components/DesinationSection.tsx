"use client";

import { motion } from "framer-motion";

const destinations = [
    { name: "Australia", desc: "Top-tier universities with a vibrant lifestyle and excellent post-study work opportunities.", img: "https://images.unsplash.com/photo-1523482580672-f1092fbd9804?q=80&w=600" },
    { name: "France", desc: "Experience world-class education in business, arts, and fashion in the heart of Europe.", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600" },
    { name: "Germany", desc: "Renowned for engineering and technology with high-quality education and low tuition fees.", img: "https://images.unsplash.com/photo-1467269204533-96853240a260?q=80&w=600" },
    { name: "Sweden", desc: "Innovative research hubs and a sustainable environment perfect for progressive learning.", img: "https://images.unsplash.com/photo-1506501139174-099081742614?q=80&w=600" },
    { name: "UAE", desc: "A rapidly growing hub for international education with state-of-the-art campus facilities.", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600" },
    { name: "UK", desc: "Historic academic excellence with globally recognized degrees across all disciplines.", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600" },
    { name: "USA", desc: "A diverse academic landscape offering endless opportunities for research and career growth.", img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=600" },
    { name: "Canada", desc: "Welcoming culture, beautiful landscapes, and a world-class education system for all.", img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=600" },
];

export default function DestinationsSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900">Explore Top Study Destinations</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={index}
                            className="group relative h-[350px] rounded-3xl overflow-hidden cursor-pointer shadow-xl"
                        >
                            {/* Image */}
                            <img src={dest.img} alt={dest.name} className="w-full h-full object-cover" />

                            {/* Static Name (Always Visible) */}
                            <div className="absolute top-6 left-6 z-10">
                                <h3 className="text-white text-2xl font-bold bg-black/30 backdrop-blur-sm px-4 py-1 rounded-full">
                                    {dest.name}
                                </h3>
                            </div>

                            {/* Hover Information (Slides up) */}
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-white text-sm leading-relaxed mb-4">{dest.desc}</p>
                                <button className="text-blue-400 font-bold text-sm hover:underline">Explore More →</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}