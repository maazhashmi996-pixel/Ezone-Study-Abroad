"use client";

import React, { useState } from "react";
import GedHero from "@/components/ged/GedHero";
import GedOverview from "@/components/ged/GedOverview";
import TargetAudience from "@/components/ged/TargetAudience";
import GedTestStructure from "@/components/ged/GedTestStructure";
import TeachingMethodAndWhyUs from "@/components/ged/TeachingMethodAndWhyUs";
import GedCtaSection from "@/components/ged/GedCtaSection";

export default function GedPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            {/* Sections */}
            <GedHero onOpenModal={() => setIsModalOpen(true)} />
            <GedOverview />
            <TargetAudience />
            <GedTestStructure />
            <TeachingMethodAndWhyUs />
            <GedCtaSection onOpenModal={() => setIsModalOpen(true)} />

            {/* Modal for Request Consultation */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">

                </div>
            )}
        </main>
    );
}