"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote, Globe, GraduationCap, Users } from "lucide-react";

// Top Highlight Feature Testimonials
const highlighs = [
    {
        quote: "D. Education Zone made my study abroad journey smooth and stress-free. Their team guided me throughout the admission and visa process.",
        author: "International Student",
        color: "border-blue-200 bg-blue-50/40 text-blue-600",
        icon: Globe
    },
    {
        quote: "The GED preparation support was exceptional. I successfully completed my GED and progressed toward my academic goals.",
        author: "GED Graduate",
        color: "border-green-200 bg-green-50/40 text-green-600",
        icon: GraduationCap
    },
    {
        quote: "Professional, responsive, and highly experienced consultants. I highly recommend D. Education Zone.",
        author: "University Applicant",
        color: "border-amber-200 bg-amber-50/40 text-amber-600",
        icon: Users
    }
];

// 15 Students Data from Screenshot with matching avatars
const studentTestimonials = [
    { id: 1, name: "Muhammad Ahmed Khan", city: "Lahore", review: "Excellent guidance and continuous support at every step.", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&fit=crop&crop=face" },
    { id: 2, name: "Ayesha Malik", city: "Islamabad", review: "They helped me achieve my dream of studying abroad.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&fit=crop&crop=face" },
    { id: 3, name: "Ali Raza", city: "Karachi", review: "The team is very cooperative and professional.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop&crop=face" },
    { id: 4, name: "Fatima Noor", city: "Faisalabad", review: "Thanks to D. Education Zone for my successful GED journey.", img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=200&h=200&fit=crop&crop=face" },
    { id: 5, name: "Hassan Ali", city: "Rawalpindi", review: "Their visa guidance was accurate and very helpful.", img: "Hassan.jpeg" },
    { id: 6, name: "Zainab Tariq", city: "Multan", review: "Great experience! Highly recommended to all students.", img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=200&h=200&fit=crop&crop=face" },
    { id: 7, name: "Usman Shahid", city: "Sialkot", review: "Professional team with excellent communication.", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&h=200&fit=crop&crop=face" },
    { id: 8, name: "Hira Javed", city: "Gujranwala", review: "They helped me choose the right university.", img: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?q=80&w=200&h=200&fit=crop&crop=face" },
    { id: 9, name: "Bilal Aslam", city: "Peshawar", review: "Very supportive throughout my admission process.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop&crop=face" },
    { id: 10, name: "Maham Khalid", city: "Bahawalpur", review: "The GED classes were excellent and very effective.", img: "/Maham.jpeg" },
    { id: 11, name: "Hamza Siddiqui", city: "Hyderabad", review: "I cleared my GED with great marks. Thank you!", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&h=200&fit=crop&crop=face" },
    { id: 12, name: "Sana Iqbal", city: "Sargodha", review: "The counselors are very knowledgeable and kind.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop&crop=face" },
    { id: 13, name: "Abdullah Saeed", city: "Abbottabad", review: "From application to visa, everything was smooth.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&fit=crop&crop=face" },
    { id: 14, name: "Maryam Ashraf", city: "Lahore", review: "My experience with D. Education Zone was amazing!", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&h=200&fit=crop&crop=face" },
    { id: 15, name: "Muhammad Talha", city: "Karachi", review: "Best consultancy for study abroad aspirants.", img: "/Talha.jpeg" }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-6">

                {/* Main Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-1 mb-4 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-current" />
                        ))}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                        SUCCESSFUL STUDENT <span className="text-blue-600">TESTIMONIALS</span>
                    </h2>
                    <p className="text-slate-500 mt-3 text-lg">What our successful alumni and students say about us.</p>
                </div>

                {/* Top 3 Featured Boxes */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {highlighs.map((item, i) => {
                        const TopIcon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-8 rounded-3xl border ${item.color.split(' ')[0]} ${item.color.split(' ')[1]} relative group transition-all`}
                            >
                                <Quote className="w-8 h-8 opacity-20 mb-4 text-slate-900" />
                                <p className="text-slate-700 text-sm md:text-base leading-relaxed italic mb-6">
                                    "{item.quote}"
                                </p>
                                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                                    <span className="font-bold text-sm tracking-wide text-slate-800">— {item.author}</span>
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                                        <TopIcon className={`w-5 h-5 ${item.color.split(' ')[2]}`} />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* 15 Students Dynamic Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {studentTestimonials.map((student, index) => (
                        <motion.div
                            key={student.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (index % 5) * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all duration-300 relative group"
                        >
                            {/* Number Badge */}
                            <div className="absolute top-3 left-3 w-6 h-6 bg-slate-900 text-white font-bold text-xs rounded-full flex items-center justify-center z-10">
                                {student.id}
                            </div>

                            <div>
                                {/* Avatar Image Frame */}
                                <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 relative bg-slate-200 border border-slate-200">
                                    <Image
                                        src={student.img}
                                        alt={student.name}
                                        fill
                                        sizes="(max-w-7xl) 20vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        priority={student.id <= 5}
                                    />
                                </div>

                                {/* Student Details */}
                                <div className="mb-2">
                                    <h4 className="font-bold text-slate-900 text-base leading-tight truncate">{student.name}</h4>
                                    <span className="text-xs text-blue-600 font-semibold">{student.city}</span>
                                </div>

                                {/* Review Text */}
                                <p className="text-slate-600 text-xs leading-relaxed italic mb-4">
                                    "{student.review}"
                                </p>
                            </div>

                            {/* 5 Star Rating Bottom Row */}
                            <div className="flex items-center gap-0.5 text-amber-500 pt-2 border-t border-slate-200/60 mt-auto">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}