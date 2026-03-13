"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, Globe, Building2, GraduationCap, Briefcase, Award } from "lucide-react";

const stats = [
    { icon: Users, title: "Experienced Mentors", number: 20, suffix: "+" },
    { icon: Globe, title: "Study Destinations", number: 60, suffix: "+" },
    { icon: Building2, title: "University Partners", number: 30, suffix: "+" },
    { icon: GraduationCap, title: "Intake Success", number: 22, suffix: "+" },
    { icon: Award, title: "Global Awards", number: 76, suffix: "10" },
    { icon: Briefcase, title: "Expert Consultations", number: 710, suffix: "" },
];

export default function AdvancedConsultantStats() {
    return (
        <section className="py-24 bg-[#7A2828] text-white">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="space-y-8">
                    <h2 className="text-5xl font-extrabold leading-tight">
                        Looking for a <br /> First-Class <br /> <span className="text-red-300">Education Consultant?</span>
                    </h2>
                    <p className="text-red-100 text-lg">
                        Expert guidance to shape your future. Join thousands of successful students globally.
                    </p>
                    <button className="px-8 py-4 bg-white text-[#7A2828] font-bold rounded-full hover:bg-red-50 transition shadow-xl">
                        BOOK YOUR EDUCATION CONSULTATION
                    </button>
                </div>

                {/* Right Bento Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10"
                        >
                            <stat.icon className="w-8 h-8 text-red-300 mb-4" />
                            <h3 className="text-4xl font-bold">
                                <CountUp end={stat.number} enableScrollSpy scrollSpyOnce />
                                {stat.suffix}
                            </h3>
                            <p className="text-red-100 text-sm font-medium mt-1">{stat.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
