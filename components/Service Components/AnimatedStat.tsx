"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, Globe, Building2, Star } from "lucide-react";

const stats = [
    { number: 50000, suffix: "k+", title: "Strong Alumni Network", icon: Users },
    { number: 60, suffix: "+", title: "Study Destinations Covered", icon: Globe },
    { number: 32, suffix: "+", title: "Offices Across the Globe", icon: Building2 },
    { number: 950, suffix: "+", title: "Times Team Members", icon: Star },
];

export default function AnimatedStats() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-all hover:shadow-lg"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-red-50 rounded-2xl">
                                    <Icon className="w-8 h-8 text-red-600" />
                                </div>
                            </div>
                            <h3 className="text-4xl font-extrabold text-slate-900 mb-2">
                                <CountUp end={stat.number} enableScrollSpy scrollSpyOnce />
                                {stat.suffix}
                            </h3>
                            <p className="text-slate-500 font-medium">{stat.title}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}