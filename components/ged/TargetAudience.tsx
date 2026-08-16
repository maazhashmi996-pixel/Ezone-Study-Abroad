"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

const targetAudienceList = [
    "Students who have completed Matriculation.",
    "Students who discontinued Intermediate studies.",
    "Students who left A-Level studies before completion.",
    "Students planning to study abroad for Bachelors.",
    "Working professionals seeking a recognized high school diploma.",
    "Adults returning to education after an academic study gap.",
    "Students looking for a fast-track alternative academic pathway."
];

export default function TargetAudience() {
    return (
        <section className="w-full py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Visual Card */}
                    <div className="lg:col-span-5">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                                alt="Who Should Choose GED"
                                className="w-full h-[450px] object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <span className="bg-blue-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block">
                                    Target Applicants
                                </span>
                                <h3 className="text-2xl font-bold">Is GED Right for You?</h3>
                            </div>
                        </div>
                    </div>

                    {/* Content List */}
                    <div className="lg:col-span-7">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                            Who Should Choose <span className="text-blue-600">GED?</span>
                        </h2>
                        <p className="text-slate-600 mb-8 text-base">
                            The General Educational Development program offers a flexible and smart route for candidates from diverse educational backgrounds:
                        </p>

                        <div className="space-y-4">
                            {targetAudienceList.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-blue-300 transition-all"
                                >
                                    <div className="mt-0.5 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <span className="text-slate-800 text-sm md:text-base font-semibold">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}