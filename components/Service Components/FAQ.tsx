"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
    { question: "What visa services does Ezone offer?", answer: "Ezone provides end-to-end visa assistance, including profile evaluation, document preparation, mock interviews, and submission tracking." },
    { question: "How can Ezone help me avoid common visa application mistakes?", answer: "Our experts meticulously review every document to ensure accuracy, helping you avoid errors that typically lead to visa rejection." },
    { question: "What is involved in the initial profile evaluation?", answer: "We assess your academic background, career goals, and financial standing to recommend the best programs and universities for your profile." },
    { question: "How does Ezone assist with university and program selection?", answer: "We provide data-driven insights on university rankings, course curriculum, and industry demand to help you make an informed decision." },
    { question: "What support does Ezone offer for the visa process?", answer: "From SOP drafting to financial document verification, our team supports you at every stage until you receive your visa." },
];

export default function FAQSection() {
    // FIX: Type definition added to remove red line
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Our FAQs</h3>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-12">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full p-6 flex justify-between items-center text-left hover:bg-slate-50 transition"
                            >
                                <span className="font-bold text-slate-900 text-lg">{index + 1}. {faq.question}</span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                    className="p-1 bg-blue-50 rounded-full"
                                >
                                    <Plus className="text-blue-600 w-5 h-5" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-6 pb-6 text-slate-600 leading-relaxed pt-0"
                                    >
                                        <div className="pt-2 border-t border-slate-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}