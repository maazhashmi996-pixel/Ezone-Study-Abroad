"use client";

import { motion } from "framer-motion";
import {
    Globe,
    GraduationCap,
    Users,
    Building2,
    BookOpen,
    Star,
    Network
} from "lucide-react";

const stats = [
    { icon: GraduationCap, number: "20+", title: "Years Experience", desc: "Our mentors have guided thousands of students toward successful journeys." },
    { icon: Globe, number: "60+", title: "Study Destinations", desc: "Explore world-class education with our expert visa and admission guidance." },
    { icon: Building2, number: "32+", title: "Global Offices", desc: "A robust international presence providing seamless local support." },
    { icon: Network, number: "2,500+", title: "University Partners", desc: "Direct ties with top-tier universities to fast-track your application." },
    { icon: Users, number: "50K+", title: "Strong Alumni", desc: "Our community of successful professionals spans across the globe." },
    { icon: BookOpen, number: "2.2M+", title: "Students Counseled", desc: "Trusted by millions for personalized, accurate academic advice." },
    { icon: Star, number: "950+", title: "Expert Team", desc: "Industry-leading consultants dedicated to your academic success." },
];

export default function WhyChooseEzone() {
    return (
        <section className="w-full py-24 bg-white text-slate-900 relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        Why Choose <span className="text-blue-600">Ezone</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-lg">
                        Turning your international education dreams into reality with
                        trusted expertise and a proven track record of success.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                                    <Icon className="text-blue-600 w-7 h-7" />
                                </div>
                                <h3 className="text-3xl font-bold mb-2 text-slate-900">{item.number}</h3>
                                <h4 className="text-lg font-semibold mb-3 text-slate-800">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}