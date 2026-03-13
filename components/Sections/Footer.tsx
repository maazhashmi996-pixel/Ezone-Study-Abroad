"use client";

import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">

                {/* Brand Column */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-extrabold text-blue-500">EZONE</h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Ezone is your premium partner in global education, shaping careers since 2004 with expert guidance and trust.
                    </p>
                    <div className="flex gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Columns */}
                <div>
                    <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-slate-400">
                        {["About Us", "Locations", "Blogs", "FAQs", "Student Guide"].map((link) => (
                            <li key={link}><a href="#" className="hover:text-blue-400 transition">{link}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Contact Column */}
                <div>
                    <h4 className="font-bold text-lg mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li className="flex items-center gap-3"><Mail size={18} /> study@ezone.com</li>
                        <li className="flex items-center gap-3"><Phone size={18} /> +92 345 2066 100</li>
                        <li className="flex items-center gap-3"><MapPin size={18} /> Global Offices</li>
                    </ul>
                </div>

                {/* Newsletter / CTA */}
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h4 className="font-bold mb-4">Stay Updated</h4>
                    <input type="email" placeholder="Enter your email" className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg mb-3" />
                    <button className="w-full py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700">Subscribe</button>
                </div>
            </div>

            {/* Accreditation Badges Section */}
            <div className="border-t border-slate-800 pt-12">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 opacity-70">
                    {/* Replace these with your actual badge images */}
                    <div className="h-16 w-16 bg-slate-800 rounded-xl" />
                    <div className="h-16 w-16 bg-slate-800 rounded-xl" />
                    <div className="h-16 w-16 bg-slate-800 rounded-xl" />
                </div>
                <p className="text-center text-slate-600 mt-12 text-sm">
                    © {new Date().getFullYear()} Ezone. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}