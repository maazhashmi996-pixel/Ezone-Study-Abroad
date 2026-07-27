"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    TrendingUp,
    UserCheck,
    Target,
    CheckCircle2,
    UserRound,
    ClipboardList,
    LineChart,
    CalendarClock,
    Headphones,
    Monitor,
    Component
} from "lucide-react";

const keyHighlights = [
    { icon: GraduationCap, title: "EXPERT TRAINERS", desc: "Certified & Experienced" },
    { icon: TrendingUp, title: "PROVEN RESULTS", desc: "High Success Rate" },
    { icon: UserCheck, title: "PERSONALIZED COACHING", desc: "Individual Attention & Support" },
    { icon: Target, title: "YOUR GOAL OUR COMMITMENT", desc: "We Help You Achieve More" }
];

const programs = [
    {
        title: "IELTS",
        subtitle: "OPEN DOORS TO THE WORLD",
        footer: "Study | Work | Migrate",
        themeColor: "red",
        accentBg: "bg-red-600",
        bgLight: "bg-red-50/50",
        borderColor: "border-red-200",
        textTheme: "text-red-600",
        icon: Headphones,
        points: ["Listening", "Reading", "Writing", "Speaking"]
    },
    {
        title: "PTE",
        subtitle: "FAST • SMART • RELIABLE",
        footer: "Your Fast Track to Global Opportunities",
        themeColor: "blue",
        accentBg: "bg-blue-600",
        bgLight: "bg-blue-50/50",
        borderColor: "border-blue-200",
        textTheme: "text-blue-600",
        icon: Monitor,
        points: ["Pearson Approved", "Quick Results", "AI Scored", "100% Computer Based"]
    },
    {
        title: "JAPANESE",
        subtitle: "LANGUAGE OF OPPORTUNITIES",
        footer: "Learn Today, Lead Tomorrow",
        themeColor: "green",
        accentBg: "bg-emerald-700",
        bgLight: "bg-emerald-50/50",
        borderColor: "border-emerald-200",
        textTheme: "text-emerald-700",
        icon: Component,
        points: ["JLPT (N5–N1)", "Speaking Skills", "Grammar", "Culture & Etiquette"]
    }
];

const bottomRibbon = [
    { icon: UserRound, label: "Personalized Attention" },
    { icon: ClipboardList, label: "Regular Mock Tests" },
    { icon: LineChart, label: "Performance Tracking" },
    { icon: CalendarClock, label: "Flexible Batches & Timings" }
];

export default function LanguageHubSection() {
    return (
        <section className="w-full py-20 bg-gradient-to-br from-slate-50 to-white text-slate-900 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Upper Hero Grid */}
                <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">

                    {/* Left Brand Content */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="h-px w-8 bg-red-500"></span>
                            <span className="text-xs uppercase tracking-widest font-bold text-red-500">Learn Today, Lead Tomorrow</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-none">
                            <span className="text-red-600">IELTS, <span className="text-blue-600">PTE</span></span> <span className="text-blacl-600">&</span> <br />
                            <span className="text-emerald-700">JAPANESE LANGUAGE</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-bold italic text-slate-500 border-l-4 border-amber-400 pl-4">
                            All Under One Roof
                        </p>
                    </div>

                    {/* Right "VIP" Center Badge Concept */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative bg-gradient-to-b from-blue-900 to-blue-950 text-white rounded-3xl p-8 shadow-2xl border-4 border-amber-400 max-w-sm text-center flex flex-col items-center justify-center overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-full blur-xl"></div>
                            <span className="text-amber-400 text-xs font-black tracking-widest uppercase mb-1">Official Authorized</span>
                            <h3 className="text-3xl font-black tracking-tight mb-2 text-white">CENTER</h3>
                            <div className="w-full h-px bg-white/20 my-3"></div>
                            <p className="text-sm font-semibold tracking-wide text-blue-200">FOR</p>
                            <p className="text-xl font-black text-amber-300 mt-1 tracking-wider">IELTS | PTE</p>
                            <p className="text-sm tracking-widest text-slate-300 font-bold mt-2">&</p>
                            <p className="text-lg font-bold text-emerald-400 tracking-wide">JAPANESE LANGUAGE</p>
                        </motion.div>
                    </div>

                </div>

                {/* 4 Feature Highlights Circles */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {keyHighlights.map((hl, idx) => {
                        const IconComponent = hl.icon;
                        return (
                            <div key={idx} className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                                    <IconComponent className="w-6 h-6" />
                                </div>
                                <h4 className="text-xs font-black tracking-wider text-slate-900 uppercase mb-1">{hl.title}</h4>
                                <p className="text-xs text-slate-400 font-medium">{hl.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Main 3 Programs Structural Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {programs.map((prog, index) => {
                        const ProgramIcon = prog.icon;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -6 }}
                                className={`bg-white rounded-3xl border ${prog.borderColor} shadow-md overflow-hidden flex flex-col justify-between`}
                            >
                                <div>
                                    {/* Header Banner */}
                                    <div className="p-6 text-center border-b border-slate-100">
                                        <h3 className={`text-4xl font-black ${prog.textTheme} tracking-tight mb-1`}>
                                            {prog.title}
                                        </h3>
                                        <span className={`text-[10px] font-extrabold tracking-wider ${prog.accentBg} text-white px-3 py-1 rounded-full uppercase`}>
                                            {prog.subtitle}
                                        </span>
                                    </div>

                                    {/* Bullet List Container */}
                                    <div className="p-8 space-y-4">
                                        {prog.points.map((point, pIdx) => (
                                            <div key={pIdx} className="flex items-center gap-3">
                                                <CheckCircle2 className={`w-5 h-5 ${prog.textTheme} shrink-0`} />
                                                <span className="text-sm font-semibold text-slate-700">{point}</span>
                                            </div>
                                        ))}

                                        {/* Center Graphic Frame */}
                                        <div className={`mt-8 w-full h-24 rounded-2xl ${prog.bgLight} flex items-center justify-center text-slate-400`}>
                                            <ProgramIcon className={`w-10 h-10 ${prog.textTheme}`} />
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Ribbon */}
                                <div className={`${prog.accentBg} text-white text-center py-4 px-4 text-xs font-bold tracking-wide`}>
                                    {prog.footer}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Core Features Banner Ribbon */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                        {bottomRibbon.map((ribbon, rIdx) => {
                            const RibbonIcon = ribbon.icon;
                            return (
                                <div key={rIdx} className="flex items-center gap-4 justify-center md:justify-start px-2">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-amber-400">
                                        <RibbonIcon className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs md:text-sm font-bold tracking-wide text-slate-200">
                                        {ribbon.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}