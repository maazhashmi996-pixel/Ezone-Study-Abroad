"use client";

import { motion } from "framer-motion";
import { Search, Send, FileCheck, CheckCircle, CreditCard, MailOpen, Plane, BookOpen, UserCheck } from "lucide-react";

const steps = [
    { id: "01", icon: Search, title: "Program Selection", desc: "Choose the perfect course matching your career goals." },
    { id: "02", icon: Send, title: "Submit Application", desc: "We ensure your application is flawless and professional." },
    { id: "03", icon: MailOpen, title: "Offer Letter", desc: "Receive your official acceptance from top universities." },
    { id: "04", icon: FileCheck, title: "Condition Fulfillment", desc: "Meeting all academic and financial requirements." },
    { id: "05", icon: CreditCard, title: "Tuition Deposit", desc: "Secure your seat with simple payment processes." },
    { id: "06", icon: CheckCircle, title: "Unconditional Offer", desc: "The final step to your confirmed admission." },
    { id: "07", icon: UserCheck, title: "Visa Application", desc: "Expert guidance for high-success visa processing." },
    { id: "08", icon: Plane, title: "Flight & Stay", desc: "Book your travel and accommodation comfortably." },
    { id: "09", icon: BookOpen, title: "Start Journey", desc: "Begin your new chapter at your dream campus." },
];

export default function JourneyMap() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-extrabold text-slate-900">Your Journey, Simplified</h2>
                    <p className="text-slate-500 mt-4 text-lg">Follow our 9-step roadmap to study abroad with zero stress.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-blue-50 transition-colors duration-500 group"
                            >
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                                    {step.id}
                                </div>
                                <Icon className="w-10 h-10 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}