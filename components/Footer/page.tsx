"use client";

import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-slate-950 text-white pt-24 pb-12 overflow-hidden">
            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                {/* Brand Column */}
                <div className="space-y-6">
                    {/* PNG Logo added here */}
                    <img
                        src="/logo.png"
                        alt="EZONE Logo"
                        className="h-12 w-auto object-contain"
                    />
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Your premium partner in global education. Shaping successful academic journeys since 2004 with expert strategy and unwavering trust.
                    </p>
                    <div className="flex gap-3">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold text-lg mb-6 text-blue-400">Quick Links</h4>
                    <ul className="space-y-4 text-slate-400">
                        {["About Us", "Our Services", "Top Destinations", "Study Blogs", "Visa FAQs"].map((link) => (
                            <li key={link}><a href="#" className="flex items-center gap-2 hover:text-white transition group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> {link}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-bold text-lg mb-6 text-blue-400">Contact HQ</h4>
                    <ul className="space-y-4 text-slate-400 text-sm">
                        <li className="flex gap-3"><Mail className="text-blue-500" size={18} /> study@ezone.com</li>
                        <li className="flex gap-3"><Phone className="text-blue-500" size={18} /> +92 326 0804 049</li>
                        <li className="flex gap-3"><MapPin className="text-blue-500" size={18} /> Midland Plaza, Jinnah Ave, <br /> Lahore, Pakistan.</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 p-6 rounded-3xl border border-white/10">
                    <h4 className="font-bold mb-2">Join Our Newsletter</h4>
                    <p className="text-xs text-slate-400 mb-4">Get the latest scholarship updates and university guides.</p>
                    <div className="relative">
                        <input type="email" placeholder="Email address" className="w-full p-3 bg-black/40 border border-white/10 rounded-xl mb-3 outline-none focus:border-blue-500 transition" />
                        <button className="w-full py-3 bg-blue-600 rounded-xl font-bold text-sm hover:bg-blue-500 transition-all flex items-center justify-center gap-2">
                            Subscribe <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Accreditation & Footer Bottom */}
            <div className="border-t border-slate-900 pt-12">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="h-10 w-24 bg-white rounded-lg" />
                        <div className="h-10 w-24 bg-white rounded-lg" />
                        <div className="h-10 w-24 bg-white rounded-lg" />
                    </div>
                    <p className="text-slate-600 text-sm">
                        © {new Date().getFullYear()} Ezone. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}