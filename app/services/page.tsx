import AdvancedConsultantStats from '@/components/Service Components/AdvanceConsultant'
import AnimatedStats from '@/components/Service Components/AnimatedStat'
import FAQSection from '@/components/Service Components/FAQ'
import InnovationSection from '@/components/Service Components/InnovationSection'
import ServicesSection from '@/components/Service Components/ourservices'
import React from 'react'

function page() {
    return (
        <div>
            <ServicesSection />
            <InnovationSection />
            <AnimatedStats />
            <AdvancedConsultantStats />
            <FAQSection />
        </div>
    )
}

export default page
