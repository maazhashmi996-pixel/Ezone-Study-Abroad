"use client";

import React from "react";
import { ArrowRight, Send } from "lucide-react";

interface GedCtaSectionProps {
    onOpenModal?: () => void;
}

export default function GedCtaSection({ onOpenModal }: GedCtaSectionProps) {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-[2.5rem] p-8 md:p-16 text-white text-center relative overflow-hidden shadow-2xl shadow-blue-600/20">
                    <div className="max-w-3xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                            Ready to Fast-Track Your High School Qualification?
                        </h2>
                        <p className="text-blue-100 text-base md:text-lg mb-8 leading-relaxed">
                            Take the first step towards university admissions and global education opportunities. Book your free GED consultation today.
                        </p>
                        <button
                            onClick={onOpenModal}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-slate-100 text-blue-900 font-extrabold text-base rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                        >
                            <Send className="w-5 h-5 text-blue-600" />
                            Get Free GED Counseling
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}