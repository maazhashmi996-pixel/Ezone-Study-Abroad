"use client";

import { motion } from "framer-motion";
import {
    Globe,
    GraduationCap,
    Users,
    Building2,
    BookOpen,
    Star,
    BookOpenCheck,
    Award,
    CircleDollarSign,
    Headphones,
    ClipboardCheck,
    Trophy
} from "lucide-react";

const stats = [
    { icon: Award, number: "8", title: "Years Experience", desc: "Of dedicated industry experience guiding students toward global success." },
    { icon: Users, number: "2500+", title: "Successful Cases", desc: "Study abroad applications processed successfully with expert guidance." },
    { icon: BookOpenCheck, number: "400+", title: "GED Graduates", desc: "Fast-track academic credentials with our premium test preparation." },
    { icon: Star, number: "Expert", title: "Leadership Team", desc: "Seasoned industry professionals and mentors dedicated to your path." },
    { icon: Building2, number: "Direct", title: "University Partners", desc: "Strong official ties with global universities to smooth your transition." },
    { icon: CircleDollarSign, number: "Assistance", title: "Scholarship & Loan", desc: "Complete financial guidance to explore funding and aid options." },
    { icon: GraduationCap, number: "High", title: "Visa Success Rate", desc: "Consistently delivering high approval rates for international visas." },
    { icon: Headphones, number: "Personalized", title: "Student Support", desc: "Tailored, reliable counseling and dedicated support at every step." },
    { icon: ClipboardCheck, number: "End-to-End", title: "Admission Services", desc: "Comprehensive management of your entire application and enrollment cycle." },
    { icon: Globe, number: "Strong", title: "Global Network", desc: "A robust international presence providing seamless overseas support." },
    { icon: BookOpen, number: "Professional", title: "Counseling & Guidance", desc: "Accurate, personalized, and strategic academic and career guidance." },
    { icon: Trophy, number: "Proven", title: "Success Record", desc: "A stellar history of turning ambitious student goals into reality." },
];

export default function WhyChooseEzone() {
    return (
        /* 1. Section background changed to bg-slate-50 */
        <section className="w-full py-24 bg-slate-50 text-slate-900 relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        Why Choose <span className="text-blue-600">Education Zone</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-lg">
                        Turning your international education and certification dreams into reality with trusted expertise.
                    </p>
                </div>

                {/* Cards Grid */}
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
                                /* 2. Cards background changed to bg-white */
                                className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-sm border border-slate-100">
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