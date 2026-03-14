import DestinationIntro from '@/components/Sections/Designation Components/DesignationIntro'
import DestinationsSection from '@/components/Sections/Designation Components/DesinationSection'
import EnhancedBenefitsSection from '@/components/Sections/Designation Components/EnhancedBenefitsSection'
import FAQSection from '@/components/Sections/Designation Components/FAQSection'
import KeyFactorsSection from '@/components/Sections/Designation Components/KeyFactorsSection'
import VIPServicesSection from '@/components/Sections/Designation Components/VIPServicesSection'
import React from 'react'

function page() {
    return (
        <div>
            <DestinationsSection />
            <DestinationIntro />
            <EnhancedBenefitsSection />
            <VIPServicesSection />
            <KeyFactorsSection />
            <FAQSection />
        </div>
    )
}

export default page
