"use client";

import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-50 text-slate-600 pt-16 pb-8 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                {/* Brand Column */}
                <div className="space-y-6">
                    <img
                        src="/logo.png"
                        alt="EZONE Logo"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                    <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
                        Your premium partner in global education. Shaping successful academic journeys since 2004 with expert strategy and unwavering trust.
                    </p>
                    <div className="flex gap-3">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        {["About Us", "Our Services", "Top Destinations", "Study Blogs", "Visa FAQs"].map((link) => (
                            <li key={link}>
                                <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition group">
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /> {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-6">Contact HQ</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex gap-3 items-start"><Mail className="text-blue-600 shrink-0" size={18} /> study@ezone.com</li>
                        <li className="flex gap-3 items-start"><Phone className="text-blue-600 shrink-0" size={18} /> +92 326 0804 049</li>
                        <li className="flex gap-3 items-start"><MapPin className="text-blue-600 shrink-0" size={18} /> Midland Plaza, Jinnah Ave, Lahore, Pakistan.</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-2">Newsletter</h4>
                    <p className="text-xs text-slate-500 mb-4">Stay updated with latest scholarships.</p>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl mb-3 outline-none focus:border-blue-500 transition"
                        />
                        <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-200 pt-8 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-center md:text-left">
                <p>© {new Date().getFullYear()} Ezone. All Rights Reserved.</p>
                <div className="flex gap-6 text-slate-500">
                    <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}