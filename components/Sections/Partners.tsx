"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    Zap,
    CircleDollarSign,
    FileCheck,
    Headphones,
    ShieldCheck
} from "lucide-react";

const partners = [
    { name: "University of Oxford", country: "UK", image: "/oxford.jpeg" },
    { name: "University of Cambridge", country: "UK", image: "/Cambridge.png" },
    { name: "Imperial College London", country: "UK", image: "/Imperial.png" },
    { name: "LSE", country: "UK", image: "/Lsc.png" },
    { name: "UCL", country: "UK", image: "/Ucl.jpeg" },
    { name: "The University of Edinburgh", country: "UK", image: "/edin.png" },
    { name: "Manchester", country: "UK", image: "/manchister.png" },
    { name: "King's College London", country: "UK", image: "/king college.png" },
    { name: "University of Birmingham", country: "UK", image: "/birmigham.png" },
    { name: "University of Bristol", country: "UK", image: "/bristol.jpeg" },
    { name: "Warwick", country: "UK", image: "warwick.png" },
    { name: "University of Southampton", country: "UK", image: "/southhampton.png" },
    { name: "University of Glasgow", country: "UK", image: "/glass glow.png" },
    { name: "Durham University", country: "UK", image: "/durhum.png" },
    { name: "University of Leeds", country: "UK", image: "/leeds.png" },
    { name: "University of Nottingham", country: "UK", image: "nottingham.png" },
    { name: "Queen Mary University", country: "UK", image: "queen.png" },
    { name: "Lancaster University", country: "UK", image: "Leiscster.png" },
    { name: "University of Sheffield", country: "UK", image: "sheffelied.jpeg" },
    { name: "University of Exeter", country: "UK", image: "exeter.png" },
    { name: "University of York", country: "UK", image: "york.png" },
    { name: "City University of London", country: "UK", image: "city.png" },
    { name: "Royal Holloway", country: "UK", image: "royal holloway.jpeg" },
    { name: "SOAS", country: "UK", image: "soas.png" },
    { name: "The University of Sydney", country: "AUSTRALIA", image: "university of sydney.png" },
    { name: "The University of Melbourne", country: "AUSTRALIA", image: "The University of Melbourne.png" },
    { name: "Australian National University", country: "AUSTRALIA", image: "Australian National university.png" },
    { name: "The University of Queensland", country: "AUSTRALIA", image: "The University of Queensland.png" },
    { name: "UNSW Sydney", country: "AUSTRALIA", image: "UNSW Sydney.jpeg" },
    { name: "Monash University", country: "AUSTRALIA", image: "Monash University.png" },
    { name: "University of Western Australia", country: "AUSTRALIA", image: "University of Western Australia.png" },
    { name: "The University of Adelaide", country: "AUSTRALIA", image: "The University of Adelaide.png" },
    { name: "RMIT University", country: "AUSTRALIA", image: "RMIT University.png" },
    { name: "Macquarie University", country: "AUSTRALIA", image: "Macquarie University.jpeg" },
    { name: "UTS", country: "AUSTRALIA", image: "UTS.png" },
    { name: "Griffith University", country: "AUSTRALIA", image: "Griffith University.png" },
    { name: "University of Toronto", country: "CANADA", image: "University of Toronto.png" },
    { name: "McGill University", country: "CANADA", image: "McGill University.png" },
    { name: "The University of British Columbia", country: "CANADA", image: "The University of British.png" },
    { name: "NUS", country: "SINGAPORE", image: "NUS.png" },
    { name: "The University of Auckland", country: "NEW ZEALAND", image: "The University of Auckland.png" },
    { name: "Vancouver Island University", country: "CANADA", image: "Vancouver Island.jpeg" },
    { name: "TU Dublin", country: "IRELAND", image: "Tu Dublin.jpeg" },
    { name: "Deakin University", country: "AUSTRALIA", image: "Deakin University.png" },
    { name: "Auckland University of Technology", country: "NEW ZEALAND", image: "The University of Auckland.png" },
    { name: "University of Amsterdam", country: "NETHERLANDS", image: "University of Amsterdam.png" },
    { name: "Tilburg University", country: "NETHERLANDS", image: "Tilburg University.jpeg" },
    { name: "Universität München", country: "GERMANY", image: "universitat munchen.png" },
    { name: "PSL Université Paris", country: "FRANCE", image: "PSL Paris.png" },
    { name: "EDHEC Business School", country: "FRANCE", image: "EDHEC.png" },
    { name: "Koc Üniversitesi", country: "TURKEY", image: "koc1.png" },
    { name: "Bocconi Università", country: "ITALY", image: "bocconi.png" },
    { name: "Bocconi Università", country: "ITALY", image: "bocconi.png" },
    { name: "The Hong Kong University", country: "HONG KONG", image: "hongkong.png" },
    { name: "Kyoto University", country: "JAPAN", image: "kyoto.png" }
];
const benefits = [
    { icon: GraduationCap, label: "Direct Admission Pathways" },
    { icon: Zap, label: "Faster Application Processing" },
    { icon: CircleDollarSign, label: "Scholarship Opportunities" },
    { icon: FileCheck, label: "High Visa Success Rate" },
    { icon: Headphones, label: "End-to-End Support" },
    { icon: ShieldCheck, label: "Trusted & Reliable Guidance" }
];

export default function UniversityPartnerships() {
    return (
        <section className="w-full py-20 bg-slate-50 text-slate-900">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-blue-900">
                        UNIVERSITY PARTNERSHIPS
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
                        We are proud to be associated with top-ranked universities and institutions worldwide.
                        <span className="block font-semibold text-slate-800 mt-2">Here are some of our valued university partners:</span>
                    </p>
                </div>

                {/* Grid Structure for Logos */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0 overflow-hidden">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="border border-slate-100 p-4 flex flex-col items-center justify-between text-center min-h-[140px] bg-white hover:bg-slate-50/80 hover:shadow-md transition-all duration-200 group"
                        >
                            {/* University Logo Container */}
                            <div className="h-12 w-full flex items-center justify-center mb-2">
                                <img
                                    src={partner.image}
                                    alt={`${partner.name} logo`}
                                    className="max-h-10 max-w-[80%] object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                                    loading="lazy"
                                />
                            </div>

                            {/* University Name */}
                            <div className="font-extrabold text-xs text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-tight line-clamp-2 px-1 mb-1">
                                {partner.name}
                            </div>

                            {/* Country Subtitle */}
                            <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">
                                {partner.country}
                            </span>
                        </div>
                    ))}
                </div>
                {/* Small Disclaimer Text */}
                <p className="text-center text-xs text-slate-400 italic mt-4">
                    *List includes a selection of our global university partners.
                </p>

                {/* Bottom Benefits Banner Section */}
                <div className="mt-16 bg-blue-950 text-white rounded-3xl p-8 md:p-10 shadow-xl">
                    <h3 className="text-center text-lg md:text-xl font-bold tracking-wider mb-8 text-amber-400 uppercase">
                        OUR PARTNERSHIPS BENEFIT YOU!
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {benefits.map((benefit, idx) => {
                            const BenefitIcon = benefit.icon;
                            return (
                                <div key={idx} className="flex flex-col items-center text-center group">
                                    <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-3 group-hover:bg-amber-400 group-hover:border-amber-400 transition-all duration-300">
                                        <BenefitIcon className="w-6 h-6 text-white group-hover:text-blue-950 transition-colors" />
                                    </div>
                                    <span className="text-xs font-semibold leading-snug tracking-wide text-slate-200 group-hover:text-white transition-colors max-w-[130px]">
                                        {benefit.label}
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