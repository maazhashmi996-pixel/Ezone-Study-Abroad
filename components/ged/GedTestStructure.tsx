"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, BookOpenCheck, Atom, Compass, Check } from "lucide-react";

const testSubjects = [
    {
        id: "math",
        icon: Calculator,
        title: "1. Mathematical Reasoning",
        description: "Evaluates ability to solve practical math problems in everyday life and academia.",
        topics: [
            "Basic Math: Fractions, Decimals, Percentages, Ratios, Proportions",
            "Algebra: Linear Equations, Expressions, Functions, Exponents, Quadratic concepts",
            "Geometry: Angles, Triangles, Circles, Area, Volume, Coordinate Geometry",
            "Graphs & Data: Tables, Line Graphs, Scatter Plots, Bar Charts",
            "Statistics & Probability: Mean, Median, Mode, Data Interpretation"
        ],
        skills: ["Logical Thinking", "Analytical Reasoning", "Calculator-based Calculations", "Problem-Solving"]
    },
    {
        id: "rla",
        icon: BookOpenCheck,
        title: "2. Reasoning Through Language Arts",
        description: "Measures reading comprehension, writing proficiency, grammar, and formal communication.",
        topics: [
            "Reading Skills: Main ideas, supporting evidence, drawing conclusions, comparing arguments",
            "Writing Skills: Essay writing, paragraph development, editing & revising",
            "Grammar: Sentence structure, punctuation, verb agreement, pronouns",
            "Extended Response: Evidence-based argument essay analyzing two passages"
        ],
        skills: ["Critical Reading", "Academic Essay Writing", "Grammar Accuracy", "Communication"]
    },
    {
        id: "science",
        icon: Atom,
        title: "3. Science",
        description: "Emphasizes scientific reasoning, experiment interpretation, and problem analysis.",
        topics: [
            "Life Science: Human body systems, genetics, evolution, cells, ecosystems",
            "Physical Science: Matter, energy, motion, forces, chemical reactions, electricity",
            "Earth & Space Science: Weather, climate, Earth's structure, natural resources",
            "Scientific Investigation: Interpreting graphs, understanding variables, testing hypotheses"
        ],
        skills: ["Scientific Reasoning", "Data Analysis", "Experiment Interpretation", "Critical Thinking"]
    },
    {
        id: "social-studies",
        icon: Compass,
        title: "4. Social Studies",
        description: "Develops understanding of history, democracy, economics, geography, and global issues.",
        topics: [
            "United States History: Major historical events, government evolution, economic growth",
            "Civics & Government: Democracy, Constitution, rights, public policy, elections",
            "Economics: Supply & demand, trade, economic systems, personal finance",
            "Geography: Maps, population dynamics, natural resources, human geography"
        ],
        skills: ["Historical Analysis", "Economic Understanding", "Chart Interpretation", "Decision-Making"]
    }
];

export default function GedTestStructure() {
    const [activeTab, setActiveTab] = useState(testSubjects[0].id);

    const currentSubject = testSubjects.find((s) => s.id === activeTab) || testSubjects[0];

    return (
        <section id="test-structure" className="w-full py-24 bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest block mb-2">
                        Exam Breakdown
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        GED Test <span className="text-blue-600">Structure</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
                        The GED examination comprises 4 core subject modules designed to assess critical academic skills.
                    </p>
                </div>

                {/* Subject Selector Tabs */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
                    {testSubjects.map((subject) => {
                        const Icon = subject.icon;
                        const isActive = activeTab === subject.id;
                        return (
                            <button
                                key={subject.id}
                                onClick={() => setActiveTab(subject.id)}
                                className={`flex items-center gap-3 p-4 rounded-2xl font-bold text-left transition-all cursor-pointer ${isActive
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                                    }`}
                            >
                                <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-white" : "text-blue-600"}`} />
                                <span className="text-sm truncate">{subject.title.split(". ")[1]}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Active Subject Content Box */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSubject.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25 }}
                        className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 lg:p-12 shadow-sm"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-slate-200 pb-8">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                                    {currentSubject.title}
                                </h3>
                                <p className="text-slate-600 text-base max-w-3xl">
                                    {currentSubject.description}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                            {/* Topics Covered */}
                            <div className="lg:col-span-8">
                                <h4 className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-4">
                                    Topics Covered
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {currentSubject.topics.map((topic, i) => (
                                        <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200/80 text-slate-800 text-xs md:text-sm font-medium leading-relaxed flex items-start gap-2.5">
                                            <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                                            <span>{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Skills Developed */}
                            <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200/80">
                                <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 mb-4">
                                    Skills Developed
                                </h4>
                                <div className="space-y-2.5">
                                    {currentSubject.skills.map((skill, i) => (
                                        <div key={i} className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                            <Check className="w-4 h-4 text-blue-600" />
                                            <span>{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}