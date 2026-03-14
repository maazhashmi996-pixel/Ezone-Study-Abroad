"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white py-4 px-6 border-b border-slate-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo Section - Image replaced with Text */}
                <div className="flex items-center">
                    <Link href="/">
                        <img
                            src="/logo.png"
                            alt="EZONE Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 font-semibold text-slate-700">
                    <Link href="/" className="hover:text-blue-600 transition">Home</Link>
                    <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
                    <Link href="/destinations" className="hover:text-blue-600 transition">Destinations</Link>
                    <Link href="/contact" className="hover:text-blue-600 transition">Our Offices</Link>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-800 font-bold">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <span>+92 326 0804 049</span>
                    </div>
                    <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition shadow-lg shadow-blue-600/20">
                        GET FREE CONSULTATION
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden text-slate-700 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl p-6 flex flex-col gap-4 font-semibold text-slate-700">
                    <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-2 border-b">Home</Link>
                    <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-2 border-b">Services</Link>
                    <Link href="/destinations" onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-2 border-b">Destinations</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-2 border-b">Our Offices</Link>
                    <div className="mt-4 flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-slate-800 font-bold">
                            <Phone className="w-5 h-5 text-blue-600" />
                            <span>+92 326 0804 049</span>
                        </div>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-blue-600 text-center text-white px-6 py-3 rounded-full font-bold">
                            GET FREE CONSULTATION
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}