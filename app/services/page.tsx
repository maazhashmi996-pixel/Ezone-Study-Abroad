import AdvancedConsultantStats from '@/components/Service Components/AdvanceConsultant'
import AnimatedStats from '@/components/Service Components/AnimatedStat'
import FAQSection from '@/components/Service Components/FAQ'
import InnovationSection from '@/components/Service Components/InnovationSection'
import LanguageHubSection from '@/components/Service Components/LanguageHubSection'
import ServicesSection from '@/components/Service Components/ourservices'
import React from 'react'

function page() {
    return (
        <div>
            <ServicesSection />
            <InnovationSection />
            <LanguageHubSection />
            <AnimatedStats />
            <AdvancedConsultantStats />
            <FAQSection />
        </div>
    )
}

export default page
