"use client";

import { motion } from "framer-motion";
import {
    Globe,
    BookOpenCheck,
    GraduationCap,
    HandCoins,
    BriefcaseBusiness,
    ArrowRight
} from "lucide-react";

const services = [
    {
        title: "GED Prep Center",
        desc: "As pioneers in GED education in Pakistan, we provide:",
        features: [
            "GED Registration",
            "GED Preparation Classes",
            "Academic Counseling",
            "Examination Guidance",
            "Study Planning & Support"
        ],
        icon: BookOpenCheck
    },
    {
        title: "Study Abroad Services",
        desc: "Comprehensive international admission solutions:",
        features: [
            "University Admissions",
            "Course Selection",
            "Application Processing",
            "Offer Letter Assistance",
            "CAS & Enrollment Support",
            "Accommodation Guidance"
        ],
        icon: Globe
    },
    {
        title: "Scholarship & Financial Support",
        desc: "Helping students make education affordable:",
        features: [
            "Scholarship Guidance",
            "Merit-Based Funding Opportunities",
            "Education Loan Assistance",
            "Financial Planning Support",
            "Tuition Fee Consultation"
        ],
        icon: HandCoins
    },
    {
        title: "Visa Services",
        desc: "Professional visa support and documentation:",
        features: [
            "Student Visa Processing",
            "Visit Visa Consultation",
            "Documentation Support",
            "Interview Preparation",
            "Visa Compliance Guidance"
        ],
        icon: GraduationCap
    },
    {
        title: "Career Development",
        desc: "Supporting students beyond admissions:",
        features: [
            "Career Counseling",
            "Academic Planning",
            "Profile Evaluation",
            "Personal Statement Guidance",
            "Pre-Departure Orientation"
        ],
        icon: BriefcaseBusiness
    }
];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Services</h2>
                    <p className="text-lg text-slate-500">Tailored solutions for your academic and professional success.</p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="group p-8 bg-white rounded-3xl shadow-lg border border-slate-100 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Icon Container */}
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                        <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>

                                    {/* Title & Desc */}
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                                    <p className="text-slate-600 text-sm mb-4 font-medium">{service.desc}</p>

                                    {/* Features Bullet List */}
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom Action Link */}
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition mt-auto pt-4 border-t border-slate-50"
                                >
                                    Explore <ArrowRight className="w-4 h-4" />
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}