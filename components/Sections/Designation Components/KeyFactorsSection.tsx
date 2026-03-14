"use client";

import { motion } from "framer-motion";
import { GraduationCap, Wallet, Briefcase } from "lucide-react";

const factors = [
    {
        title: "University Reputation",
        desc: "Research universities known for academic excellence, faculty expertise, and research opportunities. Always check global rankings and student reviews.",
        icon: GraduationCap,
    },
    {
        title: "Tuition Fees & Living Expenses",
        desc: "Evaluate the total cost including tuition, accommodation, and daily expenses. Costs can vary significantly between cities.",
        icon: Wallet,
    },
    {
        title: "Career & Post-Study Work",
        desc: "Investigate job market strength, internship availability, and post-study work visa policies in your chosen country.",
        icon: Briefcase,
    },
];

export default function KeyFactorsSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50 rounded-full blur-[150px] -z-0" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left: Image with Modern Border Effect */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="relative"
                >
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                        <img
                            src="/7.jpg"
                            alt="Student"
                            className="w-full h-[550px] object-cover"
                        />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-10 -right-10 bg-[#7A2828] text-white p-8 rounded-3xl shadow-xl">
                        <p className="text-4xl font-black">Expert</p>
                        <p className="text-sm font-medium">Verified Guidance</p>
                    </div>
                </motion.div>

                {/* Right: Content & Factors */}
                <div className="space-y-10">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            Key Factors to Consider <br />
                            <span className="text-[#7A2828]">Choosing to Study Abroad</span>
                        </h2>
                        <div className="w-20 h-1 bg-[#7A2828] rounded-full" />
                    </div>

                    <div className="space-y-6">
                        {factors.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ x: 10 }}
                                className="group flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="p-4 bg-white rounded-2xl h-fit group-hover:bg-[#7A2828] transition-colors shadow-inner">
                                    <item.icon className="w-7 h-7 text-[#7A2828] group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-10 py-4 bg-[#7A2828] text-white font-bold rounded-full shadow-lg hover:shadow-red-200 transition-all"
                    >
                        TALK TO AN EXPERT
                    </motion.button>
                </div>
            </div>
        </section>
    );
}