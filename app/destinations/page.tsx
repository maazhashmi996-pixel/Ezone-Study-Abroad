import DestinationIntro from '@/components/Sections/Designation Components/DesignationIntro'
import DestinationsSection from '@/components/Sections/Designation Components/DesinationSection'
import EnhancedBenefitsSection from '@/components/Sections/Designation Components/EnhancedBenefitsSection'
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
        </div>
    )
}

export default page
