"use client";

import { MapPin, Clock } from "lucide-react";

export default function OfficeLocation() {
    return (
        <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Visit Our Office</h3>

            {/* Address Details */}
            <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="p-3 bg-red-50 rounded-xl h-fit">
                        <MapPin className="text-[#7A2828] w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Our Location</h4>
                        <p className="text-slate-500 text-sm">
                            A1/18, Block P,  <br />
                            Model Town,Lahore,
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="p-3 bg-red-50 rounded-xl h-fit">
                        <Clock className="text-[#7A2828] w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Working Hours</h4>
                        <p className="text-slate-500 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8 w-full h-64 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3402.8929882095285!2d74.3085525756096!3d31.472129774236112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI4JzE5LjciTiA3NMKwMTgnNDAuMSJF!5e0!3m2!1sen!2s!4v1773511924577!5m2!1sen!2s" // Yahan apna actual embed link dalein
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
    );
}