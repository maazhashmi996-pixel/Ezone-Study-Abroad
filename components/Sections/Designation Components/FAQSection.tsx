
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
    {
        question: "What are the top study abroad destinations for international students?",
        answer: "Top destinations often include the USA, UK, Canada, Australia, and Germany, known for their world-class education systems and diverse cultural environments."
    },
    {
        question: "How do I choose the best country for studying abroad?",
        answer: "Choosing depends on your career goals, budget, language preference, and the specific academic programs offered in your field of interest."
    },
    {
        question: "What are the benefits of studying abroad?",
        answer: "Studying abroad offers a global perspective, high-quality education, and significant improvement in language skills, all of which enhance career prospects."
    },
    {
        question: "How can I find scholarships for studying abroad?",
        answer: "Scholarships can be found through university websites, government-funded programs, and international organizations that support global talent."
    },
    {
        question: "What are the requirements for studying abroad?",
        answer: "Typically, requirements include academic transcripts, language proficiency test scores (like IELTS/TOEFL), letters of recommendation, and a statement of purpose."
    }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full p-6 flex justify-between items-center text-left hover:bg-slate-50 transition"
                            >
                                <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                                <motion.div animate={{ rotate: activeIndex === index ? 45 : 0 }}>
                                    <Plus className="text-red-700 w-6 h-6" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-6 pb-6 text-slate-600 leading-relaxed"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}