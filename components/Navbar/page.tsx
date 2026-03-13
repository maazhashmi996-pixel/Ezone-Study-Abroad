"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-white py-4 px-6 border-b border-slate-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-3xl font-extrabold text-blue-600 tracking-tighter">
                        EZONE
                    </Link>
                </div>

                {/* Navigation Links - No Dropdown */}
                <div className="hidden md:flex items-center gap-8 font-semibold text-slate-700">
                    <Link href="/" className="hover:text-blue-600 transition">Home</Link>
                    <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
                    <Link href="/destinations" className="hover:text-blue-600 transition">Destinations</Link>
                    <Link href="/blogs" className="hover:text-blue-600 transition">Blogs</Link>
                    <Link href="/contact" className="hover:text-blue-600 transition">Our Offices</Link>
                </div>

                {/* Action Section */}
                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center gap-2 text-slate-800 font-bold">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        <span>+92 345 2066 100</span>
                    </div>
                    <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition shadow-lg shadow-blue-600/20">
                        GET FREE CONSULTATION
                    </Link>
                </div>

            </div>
        </nav>
    );
}