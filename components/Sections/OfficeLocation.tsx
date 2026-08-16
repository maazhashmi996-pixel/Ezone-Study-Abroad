"use client";

import { MapPin, Clock } from "lucide-react";

export default function OfficeLocation() {
    const locations = [
        {
            title: "Main Office (Model Town)",
            address: "A1/18, Block P,\nModel Town, Lahore",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3402.8929882095285!2d74.3085525756096!3d31.472129774236112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI4JzE5LjciTiA3NMKwMTgnNDAuMSJF!5e0!3m2!1sen!2s!4v1773511924577!5m2!1sen!2s",
        },
        {
            title: "Branch Office (Defence Mor)",
            address: "Office No 1-3, Midland Plaza,\nDefence Mor, Lahore",
            // Yahan Defence Mor location ka Google Maps iframe embed URL update kar dein
            mapSrc: "https://maps.google.com/maps?q=Midland%20Plaza%20Defence%20Mor%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed",
        },
    ];

    return (
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-lg max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Visit Our Offices</h3>

            {/* Grid for Two Locations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {locations.map((loc, index) => (
                    <div key={index} className="flex flex-col justify-between space-y-6">
                        {/* Address & Hours Details */}
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="p-3 bg-red-50 rounded-xl h-fit shrink-0">
                                    <MapPin className="text-[#7A2828] w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{loc.title}</h4>
                                    <p className="text-slate-500 text-sm whitespace-pre-line mt-1">
                                        {loc.address}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-3 bg-red-50 rounded-xl h-fit shrink-0">
                                    <Clock className="text-[#7A2828] w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Working Hours</h4>
                                    <p className="text-slate-500 text-sm mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed (Equal aspect ratio & exact same size) */}
                        <div className="w-full h-64 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shrink-0">
                            <iframe
                                src={loc.mapSrc}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}