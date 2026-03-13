"use client"; // <--- Yeh line bohat zaroori hai!

import { motion } from "framer-motion";
import { Cpu, Briefcase, Stethoscope, Scale, Palette, Wrench } from "lucide-react";

// Icons map kiye hain taake har card VIP lage
const fields = [
    { name: "Engineering", icon: Wrench },
    { name: "Business", icon: Briefcase },
    { name: "Computer Science", icon: Cpu },
    { name: "Law", icon: Scale },
    { name: "Health Science", icon: Stethoscope },
    { name: "Arts", icon: Palette },
];

export default function FieldsSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900">Discover Top Fields of Study</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {fields.map((field, index) => {
                        const Icon = field.icon;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="p-10 bg-white rounded-3xl shadow-lg border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                    <Icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{field.name}</h3>
                                <p className="text-slate-500 mb-6 leading-relaxed">
                                    Master the future with our industry-leading curriculum and expert guidance.
                                </p>
                                <a href="#" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition">
                                    Explore More →
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}